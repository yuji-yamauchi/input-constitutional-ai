<#
.SYNOPSIS
    厚労省 社会保障審議会（障害者部会）PDF一括ダウンロードスクリプト
.DESCRIPTION
    pdf_urls.txt を読み込み、各PDFを対応するフォルダにダウンロードします。
    既存ファイルはスキップ（中断後の再開が安全）。
.USAGE
    1. pdf_urls.txt をこのスクリプトと同じフォルダに配置
    2. PowerShellで実行:
       cd "C:\Users\USER\Desktop\cowork\00_sauce\01_mhlw_records\01_Social Security Council"
       .\download_all_pdfs.ps1

    オプション:
       .\download_all_pdfs.ps1 -StartFrom 100   # 101行目から再開
       .\download_all_pdfs.ps1 -DryRun           # ダウンロードせず確認のみ
#>

param(
    [int]$StartFrom = 0,
    [switch]$DryRun
)

# === 設定 ===
$ErrorActionPreference = "Continue"
$BaseDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$UrlFile = Join-Path $BaseDir "pdf_urls.txt"
$LogFile = Join-Path $BaseDir "download_log.txt"
$DelaySeconds = 0.8

# === ログ関数 ===
function Write-Log {
    param([string]$Message, [string]$Level = "INFO")
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logLine = "$timestamp [$Level] $Message"
    Write-Host $logLine
    Add-Content -Path $LogFile -Value $logLine -Encoding UTF8
}

# === メイン処理 ===
Write-Log "============================================================"
Write-Log "厚労省 障害者部会 PDF一括ダウンロード開始"
Write-Log "============================================================"

if (-not (Test-Path $UrlFile)) {
    Write-Log "エラー: pdf_urls.txt が見つかりません: $UrlFile" "ERROR"
    Write-Log "Chromeのダウンロードフォルダからこのフォルダにコピーしてください。" "ERROR"
    exit 1
}

$lines = Get-Content $UrlFile -Encoding UTF8 | Where-Object { $_.Trim() -ne "" }
$totalLines = $lines.Count
Write-Log "URL一覧: $totalLines 件読み込み"

if ($DryRun) {
    Write-Log "*** DRY RUN モード（ダウンロードは行いません）***"
}

# 統計
$downloaded = 0
$skipped = 0
$failed = 0

for ($i = $StartFrom; $i -lt $totalLines; $i++) {
    $line = $lines[$i].Trim()
    if ($line -eq "" -or $line.StartsWith("#")) { continue }

    # フォーマット: folder_name\turl
    $parts = $line -split "`t"
    if ($parts.Count -lt 2) {
        Write-Log "スキップ（不正な行）: $line" "WARN"
        continue
    }

    $folderName = $parts[0]
    $pdfUrl = $parts[1]
    $fileName = $pdfUrl.Split('/')[-1]
    $folderPath = Join-Path $BaseDir $folderName
    $savePath = Join-Path $folderPath $fileName

    # フォルダ作成（念のため）
    if (-not (Test-Path $folderPath)) {
        New-Item -ItemType Directory -Path $folderPath -Force | Out-Null
    }

    # 既存ファイルスキップ
    if (Test-Path $savePath) {
        $fileSize = (Get-Item $savePath).Length
        if ($fileSize -gt 0) {
            $skipped++
            if ($i % 50 -eq 0) {
                Write-Log "  [$($i+1)/$totalLines] スキップ（既存）: $folderName/$fileName"
            }
            continue
        }
    }

    if ($DryRun) {
        Write-Log "  [DRY] [$($i+1)/$totalLines] $folderName/$fileName <- $pdfUrl"
        continue
    }

    # ダウンロード実行
    try {
        Write-Log "  [$($i+1)/$totalLines] DL中: $folderName/$fileName"

        $webClient = New-Object System.Net.WebClient
        $webClient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
        $webClient.DownloadFile($pdfUrl, $savePath)

        $sizeKB = [math]::Round((Get-Item $savePath).Length / 1024)
        Write-Log "    完了 (${sizeKB} KB)"
        $downloaded++
    }
    catch {
        Write-Log "    DL失敗: $_ " "ERROR"
        $failed++
        # 空ファイルが残っていたら削除
        if ((Test-Path $savePath) -and (Get-Item $savePath).Length -eq 0) {
            Remove-Item $savePath -Force
        }
    }

    # レート制限
    Start-Sleep -Milliseconds ($DelaySeconds * 1000)

    # 進捗レポート（50件ごと）
    if (($i + 1) % 50 -eq 0) {
        Write-Log "=== 進捗: $($i+1)/$totalLines | DL:$downloaded スキップ:$skipped 失敗:$failed ==="
    }
}

# === 最終レポート ===
Write-Log ""
Write-Log "============================================================"
Write-Log "完了！"
Write-Log "  総URL数: $totalLines"
Write-Log "  ダウンロード: $downloaded"
Write-Log "  スキップ（既存）: $skipped"
Write-Log "  失敗: $failed"
Write-Log "  ログ: $LogFile"
Write-Log "============================================================"
