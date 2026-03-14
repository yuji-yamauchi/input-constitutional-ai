# LLM最新バージョンアップ情報（2026年3月14日時点）

## Anthropic (Claude)

| モデル | リリース日 | 特徴 |
|---|---|---|
| **Opus 4.6** | 2026-02-05 | METR 50%時間地平14.5時間。エージェント最長タスク処理 |
| **Sonnet 4.6** | 2026-02-17 | SWE-benchでOpus 4.6と1.2pt差。コスト1/5。1Mトークン窓 |

- Sonnet 4.6がOpus 4.5を人間評価で59%上回る
- コーディング・コンピュータ操作・長文脈推論・エージェント計画の全面アップグレード
- Sonnet 4.6はOpus 4.6と同価格帯ではなくSonnet 4.5と同価格

## OpenAI (GPT)

| モデル | リリース日 | 特徴 |
|---|---|---|
| **GPT-5.4** | 2026-03-05 | GDPval 83.0%（5.2は70.9%）。推論+コーディング統合 |
| **GPT-5.4 Thinking** | 2026-03-05 | Plus/Team/Proユーザー向け。GPT-5.2 Thinkingを置換 |
| **GPT-5.3 Codex** | 2026-02-05 | コーディング特化 |
| **Codex Security** | 2026-03-06 | セキュリティ特化（Research Preview） |

- GPT-4o系は2026-03-11で引退。5世代に完全移行
- GPT-5.1系も引退済み → 5.3/5.4系に自動移行
- スプレッドシートモデリングタスク: 87.3%（5.2は68.4%）
- 数学・科学の動的インタラクティブ視覚説明機能追加（70以上の概念）

## Google (Gemini)

| モデル | リリース日 | 特徴 |
|---|---|---|
| **Gemini 3.1 Pro** | 2026-02-19 | ARC-AGI-2で77.1%。1Mトークン窓 |
| **Gemini 3.1 Flash-Lite** | 2026-03-03 | 2.5 Flashより45%高速。初回トークン2.5倍速。$0.25/M入力 |
| **Gemini 3 Flash** | デフォルト化済 | Geminiアプリの標準モデル |
| **Gemini 2.5 Pro TTS** | プレビュー | テキスト→音声。表現力・間合い・対話品質向上 |

- 3世代に移行完了。2.5 Proは旧世代扱い
- Flash-Lite: 64,000トークン出力。1Mトークン入力
- Flash-Lite価格: $0.25/M入力、$1.50/M出力（最安クラス）

## xAI (Grok)

| モデル | リリース日 | 特徴 |
|---|---|---|
| **Grok 4** | リリース済 | ネイティブツール利用+リアルタイム検索統合 |
| **Grok 4.1 Fast** | リリース済 | Enterprise API。ツール呼び出し50%値下げ |
| **Grok 4.20 Beta** | 2026-02中旬 | **4 Agents マルチエージェント協調システム** |
| **Grok Voice** | リリース済 | リアルタイム音声エージェント。多言語対応 |

- SuperGrok: 約$30/月
- Grok 5（6兆パラメータ、Colossus 2で訓練）が控えている
- Musk曰く「AGI達成確率10%」

## DeepSeek

| モデル | 状況 | 備考 |
|---|---|---|
| **V4 / R2** | **未リリース** | 複数回リリース延期 |
| V4 Lite? | 2026-03-09に何かの更新 | 公式未確認 |

- 兆パラメータMoE + 100万トークン + マルチモーダル（予定）
- Huawei Ascendチップでの訓練に安定性・速度・ソフトウェア問題
- CEO梁文鋒が結果に不満で延期とされる
- Engram（条件付きメモリ）を2026年1月論文で発表

---

## Puuの運用体制への含意

| AI | 現在の役割 | 月額 | 最新で変わること |
|---|---|---|---|
| Claude Opus 4.6 | 構造設計・技術管理・ファイル操作 | $100（Max） | 変更なし。最適 |
| Claude Sonnet 4.6 | サブタスク委譲候補 | （Max共有） | Opus並み性能で1/5コスト。Agent委譲に最適 |
| ChatGPT (GPT-5.4) | 壁打ち・理論探索・批判的検討 | $20（Plus） | 推論能力大幅向上。Thinking統合 |
| Gemini 3.1 Pro | 文献調査・画像生成 | ¥1,000（Google） | 旧2.5から世代交代。性能向上 |
| Grok 4.20 | 未使用 | — | マルチエージェント面白いが追加$30 |
| DeepSeek V4 | 未使用 | — | 出れば最大のオープンソースLLM |

### 注目ポイント
1. **Sonnet 4.6の台頭**: Opus級性能が1/5コスト。サブエージェント委譲で運用効率化の余地
2. **GPT-5.4のGDPval 83%**: 知的労働の代替可能性が急上昇。N氏のChatGPT活用の天井が上がった
3. **Gemini 3世代移行**: Puuの¥1,000プランで3.1 Proが使えるなら文献調査能力が大幅向上
4. **DeepSeekの不在**: オープンソース最前線が停滞中。出ればゲームチェンジャー
5. **Grok 4.20のマルチエージェント**: 4つの専門AIが同時に問題に取り組む。SoE研究の多角分析に使える可能性

---

## Sources
- [Claude Sonnet 4.6 - 9to5Mac](https://9to5mac.com/2026/02/17/claude-sonnet-4-6-model-brings-much-improved-coding-skills-and-upgraded-free-tier/)
- [Claude Sonnet 4.6 vs Opus 4.6 - NxCode](https://www.nxcode.io/resources/news/claude-sonnet-4-6-vs-opus-4-6-which-model-to-choose-2026)
- [Anthropic Sonnet 4.6 - VentureBeat](https://venturebeat.com/technology/anthropics-sonnet-4-6-matches-flagship-ai-performance-at-one-fifth-the-cost)
- [GPT-5.4 - OpenAI](https://openai.com/index/introducing-gpt-5-4/)
- [GPT-5.4 - CybersecurityNews](https://cybersecuritynews.com/gpt-5-4-launched/)
- [GPT-5.2-Codex - OpenAI](https://openai.com/index/introducing-gpt-5-2-codex/)
- [Gemini 3.1 Flash-Lite - SiliconANGLE](https://siliconangle.com/2026/03/03/google-launches-speedy-gemini-3-1-flash-lite-model-preview/)
- [Gemini 3 Flash - Google](https://blog.google/products-and-platforms/products/gemini/gemini-3-flash/)
- [Grok 4 - xAI](https://x.ai/news/grok-4)
- [Grok 4.20 Beta Guide](https://help.apiyi.com/en/grok-4-20-beta-4-agents-guide-en.html)
- [DeepSeek V4 delay - deepseekv4.app](https://deepseekv4.app/news/2026-03-05-deepseek-v4-delayed-release-analysis)
- [DeepSeek V4 - NxCode](https://www.nxcode.io/resources/news/deepseek-v4-release-specs-benchmarks-2026)
- [LLM Leaderboard 2026 - Onyx](https://onyx.app/llm-leaderboard)
- [LLM Stats - March 2026](https://llm-stats.com/llm-updates)

---

*作成: Claude Opus 4.6 / 2026-03-14T10:30:00+09:00*
