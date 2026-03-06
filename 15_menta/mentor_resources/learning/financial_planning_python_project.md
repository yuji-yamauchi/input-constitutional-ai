# Python学習プロジェクト：財務計画シミュレーター

## 概要

5カ年経営計画書（Excel）をPythonで再現し、プログラミングスキルを習得する。

---

## 学習ロードマップ

### Phase 1: 基礎（1-2週間）
**目標**: Pythonの基本とデータ操作

| トピック | 内容 | 実装 |
|---------|------|------|
| 変数・データ型 | 数値、文字列、リスト、辞書 | 売上データの定義 |
| 関数 | def, return, 引数 | 計算ロジックの分離 |
| pandas基礎 | DataFrame, Series | Excelデータの読み込み |

**成果物**: Excelの売上計画を読み込んでprint表示

```python
# Phase 1 サンプル
import pandas as pd

# 売上データ（辞書で定義）
sales_data = {
    "year": ["R2", "R3", "R4"],
    "training_revenue": [43054612, 114485450, 139618300],
    "welfare_revenue": [9210000, 22380025, 26820027]
}

df = pd.DataFrame(sales_data)
df["total"] = df["training_revenue"] + df["welfare_revenue"]
print(df)
```

---

### Phase 2: 財務計算（2-3週間）
**目標**: 損益計算書のロジック実装

| トピック | 内容 | 実装 |
|---------|------|------|
| 条件分岐 | if/else | 赤字判定 |
| ループ | for, while | 年度ごとの計算 |
| クラス | class定義 | PLクラス、CFクラス |

**成果物**: PL（損益計算書）の自動計算

```python
# Phase 2 サンプル
class ProfitLoss:
    def __init__(self, year):
        self.year = year
        self.revenue = 0
        self.cost = 0
        self.expense = 0

    def gross_profit(self):
        """売上総利益"""
        return self.revenue - self.cost

    def operating_profit(self):
        """営業利益"""
        return self.gross_profit() - self.expense

    def is_profitable(self):
        """黒字判定"""
        return self.operating_profit() > 0
```

---

### Phase 3: キャッシュフロー（2週間）
**目標**: CF計算と資金繰り予測

| トピック | 内容 | 実装 |
|---------|------|------|
| 累積計算 | cumsum | 期末残高の推移 |
| 条件付き計算 | np.where | 資金ショート警告 |
| 日付処理 | datetime | 月次CF予測 |

**成果物**: 月次キャッシュフロー予測

```python
# Phase 3 サンプル
class CashFlow:
    def __init__(self, opening_balance=0):
        self.opening = opening_balance
        self.operating_income = 0
        self.operating_expense = 0
        self.financing_income = 0
        self.financing_expense = 0

    def operating_cf(self):
        """営業CF"""
        return self.operating_income - self.operating_expense

    def closing_balance(self):
        """期末残高"""
        return self.opening + self.operating_cf() + self.financing_income - self.financing_expense

    def alert_shortage(self, threshold=1000000):
        """資金ショート警告"""
        if self.closing_balance() < threshold:
            return f"⚠️ 残高警告: {self.closing_balance():,}円"
        return None
```

---

### Phase 4: 貸借対照表（2週間）
**目標**: BS計算と財務三表の連動

| トピック | 内容 | 実装 |
|---------|------|------|
| データ検証 | assert | 貸借一致チェック |
| 例外処理 | try/except | エラーハンドリング |
| モジュール分割 | import | ファイル分割 |

**成果物**: BS自動生成 + 貸借一致検証

```python
# Phase 4 サンプル
class BalanceSheet:
    def __init__(self, year):
        self.year = year
        # 資産
        self.cash = 0
        self.receivables = 0
        # 負債
        self.payables = 0
        self.loans = 0
        # 純資産
        self.capital = 0
        self.retained_earnings = 0

    def total_assets(self):
        return self.cash + self.receivables

    def total_liabilities(self):
        return self.payables + self.loans

    def total_equity(self):
        return self.capital + self.retained_earnings

    def validate(self):
        """貸借一致チェック"""
        assets = self.total_assets()
        liabilities_equity = self.total_liabilities() + self.total_equity()
        if abs(assets - liabilities_equity) > 1:  # 1円の誤差許容
            raise ValueError(f"貸借不一致: 資産{assets:,} ≠ 負債+純資産{liabilities_equity:,}")
        return True
```

---

### Phase 5: 可視化（1-2週間）
**目標**: グラフ表示とレポート生成

| トピック | 内容 | 実装 |
|---------|------|------|
| matplotlib | 折れ線グラフ、棒グラフ | 売上推移、利益推移 |
| plotly | インタラクティブ | ダッシュボード |
| PDF出力 | reportlab | レポート自動生成 |

---

### Phase 6: Webアプリ化（2-3週間）
**目標**: Streamlitでインタラクティブツール

| トピック | 内容 | 実装 |
|---------|------|------|
| Streamlit | UI構築 | 入力フォーム |
| セッション管理 | st.session_state | 計算結果の保持 |
| デプロイ | Streamlit Cloud | 公開 |

**成果物**: ブラウザで操作できる財務シミュレーター

---

## 最終成果物イメージ

```
financial_planner/
├── models/
│   ├── __init__.py
│   ├── profit_loss.py      # PLクラス
│   ├── cash_flow.py        # CFクラス
│   └── balance_sheet.py    # BSクラス
├── utils/
│   ├── calculator.py       # 計算ヘルパー
│   └── validator.py        # バリデーション
├── data/
│   └── sample_plan.xlsx    # サンプルデータ
├── app.py                  # Streamlitアプリ
├── requirements.txt
└── README.md
```

---

## メンタリングでの活用

### 対象者
- プログラミング初学者（Excelは使える）
- 財務の基礎知識はある
- 自分のビジネス計画に活用したい

### メンターの役割
1. **概念説明**: クラス設計、モジュール分割の考え方
2. **コードレビュー**: 改善点のフィードバック
3. **LLM活用指導**: Copilot/Claudeの使い方

### 差別化ポイント
- **実務直結**: 抽象的な例題ではなく、実際の経営計画
- **財務三表の連動**: 単体計算ではなく、PL→CF→BSの流れ
- **Excel→Pythonの橋渡し**: 既存スキルの活用

---

## 参考: 元Excelの主要計算式

### 売上総利益
```
売上総利益 = 総売上 - 事業原価
```

### 営業利益
```
営業利益 = 売上総利益 - 経費 - 総人件費
```

### 経常利益
```
経常利益 = 営業利益 + 営業外収益 - 営業外損失
```

### キャッシュフロー期末残高
```
期末残高 = 前期繰越 + 経常収入 - 経常支出 + 財務収入 - 財務支出
```

---

*作成: 2026-01-26*
*元資料: 【参考資料１】5カ年経営計画書.xlsx*
