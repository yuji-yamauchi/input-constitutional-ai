# Adapting psychological measurement to LLM-based conversational assessment

Traditional psychometric scales like the Rosenberg Self-Esteem Scale and Big Five inventories provide robust, validated frameworks for measuring psychological traits through carefully constructed Likert-scale items—but emerging research suggests these constructs can be assessed through natural dialogue. **Convergent validity for NLP-based personality prediction averages r = .34 across traits**, and chatbot-delivered mental health assessments achieve ICCs of **0.96-1.00** with paper-based equivalents. This opens pathways for adapting established psychometrics to 30-minute × 5-session LLM conversation formats, though careful attention to reliability, validity, and cultural adaptation remains essential.

---

## Established psychological scales: Item construction and validation principles

### Rosenberg Self-Esteem Scale (RSES)

The RSES remains the most widely used self-esteem measure globally, consisting of **10 items on a 4-point Likert scale** (Strongly Agree to Strongly Disagree). Five items are positively worded (e.g., "On the whole, I am satisfied with myself") and five are negatively worded requiring reverse scoring (e.g., "At times I think I am no good at all"). Total scores range from 10-40, with higher scores indicating greater self-esteem.

The scale demonstrates strong psychometric properties: Cronbach's α of **.77-.88** across samples, test-retest reliability of r = .82-.88 over 1-2 week intervals. A significant factor structure debate exists—while Rosenberg conceptualized self-esteem as unidimensional, factor analyses consistently reveal two factors corresponding to positive and negative item wording. Current best evidence supports a **bifactor model** where a general self-esteem factor explains 46-61% of common variance, with remaining variance attributable to method effects from item direction rather than substantively distinct constructs.

**Japanese validation**: Mimura & Griffiths (2007) developed the primary Japanese translation, subsequently validated by Uchida & Ueno (2010) in 東北大学大学院教育学研究科研究年報. The Japanese version uses a standard 4-point format (強くそう思う=4 to 強くそう思わない=1) with reverse scoring for items 2, 5, 6, 8, 9. Multiple Japanese translations exist, creating variability across studies; Item 8 ("I wish I could have more respect for myself") is sometimes omitted due to translation difficulties.

### Big Five personality measures

The Big Five model provides the dominant framework for personality assessment, with instruments ranging from the comprehensive **NEO-PI-R (240 items, 30 facets)** to brief measures like the **BFI-2 (60 items, 15 facets)** and ultra-short **TIPI (10 items)**.

The NEO-PI-R organizes personality into five domains each containing six facets: Neuroticism (Anxiety, Depression, Self-Consciousness, Vulnerability, Angry Hostility, Impulsiveness), Extraversion (Warmth, Gregariousness, Assertiveness, Activity, Excitement-Seeking, Positive Emotions), Openness (Fantasy, Aesthetics, Feelings, Actions, Ideas, Values), Agreeableness (Trust, Straightforwardness, Altruism, Compliance, Modesty, Tender-Mindedness), and Conscientiousness (Competence, Order, Dutifulness, Achievement Striving, Self-Discipline, Deliberation). Items use a 5-point Likert format with domain reliabilities of α = .86-.92.

The **BFI-2** (Soto & John, 2017; DOI: 10.1037/pspp0000096) represents the current state-of-the-art, balancing bandwidth and efficiency. Using the stem "I am someone who...", it measures 15 facets (3 per domain) with 4 items each—half positively keyed, half negatively keyed to control acquiescence bias. Example items include "Is outgoing, sociable" (Extraversion-Sociability) and "Tends to be quiet" (reverse-scored). Domain reliabilities average α = .86; facet reliabilities average α = .75.

**Japanese adaptations**: Wada (1996) developed the foundational Japanese Big Five Scale using 60 personality trait adjectives (心理学研究, 67(1), 61-67). The scale was subsequently shortened by Namikawa et al. (2012) to 29 items using Item Response Theory. The TIPI-J (Oshio et al., 2012) provides a 10-item ultra-brief measure with test-retest reliabilities of r = .64-.86 across traits. A Japanese BFI-2 (BFI-2-J) was validated by Yoshino et al. (2022), including short-form versions.

### GRIT Scale (Grit-O and Grit-S)

Angela Duckworth's Grit Scale measures perseverance and passion for long-term goals across two factors: **Perseverance of Effort (PE)** and **Consistency of Interest (CI)**. The original Grit-O contains 12 items; the Short Grit Scale (Grit-S) contains 8 items (Duckworth & Quinn, 2009; DOI: 10.1080/00223890802634290).

PE items assess sustained effort despite setbacks: "Setbacks don't discourage me," "I am a hard worker," "I finish whatever I begin," "I am diligent." CI items (all reverse-scored) assess stable long-term interests: "New ideas and projects sometimes distract me from previous ones," "My interests change from year to year," "I often set a goal but later choose to pursue a different one."

Scoring uses a 5-point Likert scale (1 = Not like me at all to 5 = Very much like me). After reverse-scoring CI items, the total score is computed by averaging all items (range 1-5). The Grit-S demonstrates internal consistency of α = .73-.83 and one-year test-retest reliability of r = .68.

**Discriminant validity controversy**: A meta-analysis by Credé et al. (2017; DOI: 10.1037/pspp0000102; k=22, N=18,826) found grit correlates at **ρ = .84 with conscientiousness**, suggesting substantial construct overlap. The PE facet shows stronger criterion validity than CI for predicting outcomes like academic achievement.

**Japanese validation**: Takehashi et al. (2019; DOI: 10.4992/jjpsy.89.17220) validated the Japanese Grit-O across three samples. Study 1 (N=145 university students) found CFI = .90, RMSEA = .07, α = .82 total; Study 3 (N=584 education students) demonstrated that grit predicted teacher certification exam pass rates beyond conscientiousness, self-control, and intellectual ability.

### Self-Compassion Scale (SCS)

Kristin Neff's 26-item SCS (DOI: 10.1080/15298860309027) measures self-compassion through six subscales representing three balanced pairs: **Self-Kindness vs. Self-Judgment**, **Common Humanity vs. Isolation**, and **Mindfulness vs. Over-Identification**.

Positive subscales (compassionate self-responding):
- **Self-Kindness** (5 items): "I try to be loving towards myself when I'm feeling emotional pain"
- **Common Humanity** (4 items): "When things are going badly for me, I see the difficulties as part of life that everyone goes through"
- **Mindfulness** (4 items): "When something upsets me I try to keep my emotions in balance"

Negative subscales (uncompassionate self-responding, reverse-scored):
- **Self-Judgment** (5 items): "I'm disapproving and judgmental about my own flaws and inadequacies"
- **Isolation** (4 items): "When I think about my inadequacies, it tends to make me feel more separate and cut off from the rest of the world"
- **Over-Identification** (4 items): "When I'm feeling down I tend to obsess and fixate on everything that's wrong"

Total scores are computed by reverse-scoring negative subscales, calculating mean scores for each subscale, then computing the grand mean. Internal consistency is α = .92 for total scores; test-retest reliability is r = .93 over three weeks.

**Japanese validation**: Arimitsu (2014) validated the Japanese SCS (心理学研究, 85(1), 50-59). The six-factor model showed acceptable fit (CFI = .86, RMSEA = .066) with α = .84 total. Notably, positive-negative factor correlations were lower than the original (e.g., SK-SJ: r = -.25 vs. r = -.81), possibly reflecting Japanese cultural tendencies to view self-criticism positively for self-improvement. Mean Japanese scores (M = 2.89) were lower than US samples (M = 3.14).

### Emotional Intelligence measures

The **Wong and Law Emotional Intelligence Scale (WLEIS)** operationalizes EI through 16 self-report items across four subscales (Wong & Law, 2002): Self-Emotion Appraisal (understanding own emotions), Others' Emotion Appraisal (perceiving others' emotions), Use of Emotion (harnessing emotions for performance), and Regulation of Emotion (managing emotions). Items use 7-point Likert scales with subscale reliabilities of α = .76-.89.

The **MSCEIT** (Mayer, Salovey & Caruso; DOI: 10.1037/0003-066X.63.6.503) takes an ability-based approach, measuring EI as cognitive skill through performance tasks across four branches: Perceiving Emotions (rating emotional content in faces and pictures), Using Emotions (matching emotions to sensations), Understanding Emotions (predicting emotional progressions and blends), and Managing Emotions (rating strategy effectiveness). Scoring uses consensus or expert comparison, yielding scores on an IQ-like scale (M=100, SD=15). Full-scale split-half reliability is r = .91-.93.

**Japanese validation**: Fukuda et al. (2011; DOI: 10.1080/15305058.2010.516379) validated the Japanese WLEIS with N=310 university students, confirming the four-factor structure and demonstrating positive relationships with life satisfaction.

---

## Conversation-based and NLP approaches to psychological assessment

### Natural language personality prediction

Research on inferring Big Five traits from text provides the empirical foundation for conversational assessment. A meta-analysis of machine learning approaches found **average convergent validity of r = .34** across all traits, with Openness showing strongest prediction (r = .40) and Agreeableness weakest (r = .29). Deep learning methods achieve **58-72% classification accuracy**, with ensemble transformer approaches reaching up to 88%.

**LIWC (Linguistic Inquiry and Word Count)** provides a dictionary-based approach, mapping words to ~100 psychological categories including affective processes, cognitive processes, and personal concerns. However, open-vocabulary approaches using contextual embeddings consistently outperform dictionary methods by capturing semantic context, metaphors, and culturally-specific expressions.

Recent evaluation of GPT-4 on zero-shot personality prediction found results close to random guessing (Pearson correlations mostly below 0.1), indicating that **instruction fine-tuning on domain-specific data is essential** for accurate trait inference from conversation.

### Chatbot-delivered mental health screening

Commercial platforms demonstrate the viability of conversational mental health assessment. **Woebot** (Fitzpatrick et al., 2017; DOI: 10.2196/mental.7785), based on CBT/DBT principles, uses daily check-ins and semi-guided conversation to track mood and symptoms. An RCT showed significant depression symptom reduction over two weeks. **Wysa** (DOI: 10.2196/12106) employs empathy-driven NLP with open-ended responses, achieving 34-42% PHQ-9 symptom reduction.

Validation research comparing chatbot, paper, and web-based assessment modes found **ICCs of 0.96-1.00** (excellent agreement), Cronbach's α of .74-.92, and convergent validity correlations of .83-.96 between modes. This suggests structured psychological measurement can maintain validity when delivered conversationally.

### LLM-based mental health detection

**Mental-LLM** (Xu et al., 2024; DOI: 10.1145/3643540) systematically evaluated multiple LLMs on mental health prediction tasks. Instruction-fine-tuned models (Mental-Alpaca, Mental-FLAN-T5) outperformed GPT-3.5's best prompt design by **10.9% on balanced accuracy** for depression classification and suicidality detection. GPT-4 achieved F1 = 0.73 for depression detection from clinical interviews, improving to F1 = 0.82 with fine-tuning. For social anxiety, GPT-4 predictions correlated r = .79 with SPIN self-report scores.

**Critical limitation**: LLMs tend to err when positive surface language masks underlying distress, producing false negatives in cases requiring deeper contextual understanding.

---

## Cognitive ability assessment methodologies

### Japanese reading comprehension

Otsuka & Murai (2021; DOI: 10.1038/s41598-021-81909-x) established a three-dimensional model of Japanese kanji abilities: **Reading Accuracy** (kanji-to-kana conversion in sentence context), **Writing Accuracy** (antonyms, synonyms, error correction), and **Semantic Comprehension** (radical extraction, compound meaning). The Japan Kanji Aptitude Test (Kanken) operationalizes this with scored subtests across dimensions.

Cognitive underpinnings assessment uses the **Comprehensive Assessment of Reading Domains (CARD)**, measuring phonological awareness, sound-letter decoding, and syntactic processing. Key predictors vary by dimension: Reading Accuracy relates primarily to decoding and rapid automatized naming; Semantic Comprehension relates to phonological short-term memory and syntactic processing.

The **Deep Cloze Test** methodology (Jensen & Elbro, 2022; DOI: 10.1007/s11145-021-10230-w) strategically places gaps requiring global cohesion inferences, uniquely predicting integrated text understanding after controlling for working memory (r ≈ .60 with standardized comprehension tests).

### Time concept and numerical processing assessment

The **Time Knowledge Questionnaire (TKQ)** (Labrell et al., 2020; DOI: 10.1016/j.heliyon.2020.e03331) assesses children's temporal understanding through 25 items across 7 subtests: Orientation (day/time/season identification), Sequences (month/season ordering), Time Units (relative duration comparisons), Telling Time (analog clock reading including "quarter past," "10 to"), Life Span (developmental duration estimation), Birthdays, and Interview Duration estimation. Internal consistency is α = .70-.76 with strong age correlation (r = .75).

**KaTid** (Janeslätt et al., 2008; DOI: 10.1111/j.1365-2214.2008.00865.x) provides 61 items assessing Time Perception, Time Orientation, and Time Management, validated using Rasch analysis on children ages 5-10, particularly useful for ADHD/ASD populations.

For dyscalculia screening, **Butterworth's Dyscalculia Screener** tests number comparison, dot counting (subitizing), and timed arithmetic, targeting innate numerosity skills. The **ZAREKI-R** provides comprehensive neuropsychological assessment across 11 subtests. Diagnosis follows the German S3 Guideline algorithm requiring mathematical performance ≤16th percentile (strict: ≤7th percentile) plus clinical evidence. Meta-analysis shows effect sizes of g = .97 (word problems), .74 (basic arithmetic), .45 (number processing), and .84 (visuospatial working memory) between dyscalculic and typical populations.

**Japanese research** (日本LD学会) addresses 算数障害 through 数処理 (number processing: word-numeral-quantity correspondence), 数概念 (number concepts: ordinality/cardinality), and working memory assessment, with estimated prevalence of 5-7%.

### Adaptive testing principles

**Computer Adaptive Testing (CAT)** leverages Item Response Theory to select items providing maximum information at the examinee's estimated ability level. Key components include calibrated item banks (requiring 100-500 responses per item), maximum information item selection algorithms, Bayesian ability estimation, and precision-based stopping rules (e.g., SE ≤ .30).

**CAT-MH** demonstrates dramatic efficiency gains: median 4 items administered versus 9 for PHQ-9, while maintaining comparable diagnostic accuracy (AUC = .85 vs. .84). This 50%+ item reduction with maintained precision directly informs conversational assessment design—**adaptive topic selection based on Bayesian updating** can minimize assessment burden while maximizing measurement precision.

---

## Methodological frameworks for conversational measurement

### Ecological Momentary Assessment as a model

EMA methodology—repeated real-time sampling in natural environments—provides a framework for distributed conversational assessment. Key principles include:

- **Multiple brief assessments** rather than single long sessions (typically 4-8 daily over 1-4 weeks)
- **Within-person and between-person variance decomposition** to disentangle states from traits
- **Reliability through aggregation**: acceptable reliability (≥.70) typically achieved with 4-7 EMA prompts per construct
- **Real-world context**: assessment during daily activities enhances ecological validity

These principles translate to the proposed 30-minute × 5-session format: **aggregating trait estimates across sessions will substantially improve reliability** over single-session assessment, while capturing meaningful state variation.

### Therapeutic conversation techniques embedding measurement

**Motivational Interviewing** provides specific assessment-in-dialogue techniques:
- **Readiness rulers**: "On a scale of 0-10, how ready are you to make this change?" followed by "What makes it a [X] and not a zero?"
- **Importance/confidence scaling**: Separately assesses desire for change and self-efficacy
- **Change talk tracking**: Counting positive change statements as process measure

The **ReadMI** system (Hershberger et al., 2024; DOI: 10.1186/s12909-024-05217-4) achieves **95% accuracy** in automated MI skill coding from transcripts, demonstrating feasibility of extracting structured measurement from natural therapeutic dialogue.

**CBT thought records** provide a template for structured emotional assessment: Situation → Automatic thoughts → Emotions (rated 0-100%) → Evidence for/against → Alternative thought → Outcome. Research shows inter-rater reliability of κ = .79 for automated schema extraction from thought records using RNNs (correlations .64-.76 with manual coding).

### Validity considerations for conversational assessment

Moving from structured questionnaires to open-ended dialogue introduces specific validity challenges:

**Reliability concerns**: Traditional α/ω coefficients don't apply; reliability must be established through test-retest across sessions, split-half analysis of conversation segments, and aggregation across multiple responses. Research on chatbot personality assessment shows acceptable test-retest reliability improves with longer conversations and more text.

**Standardization challenges**: Response variability in length, vocabulary, and topic coverage requires semi-structured conversation protocols with minimum topic coverage requirements, response length monitoring, and standardized NLP processing pipelines.

**Convergent validity benchmarks**: Current NLP personality prediction achieves r = .30-.40 convergent validity—moderate but not equivalent to self-report. Chatbot-inferred personality scores show **incremental validity over self-report** for predicting outcomes like GPA and peer-rated adjustment, suggesting conversational assessment captures unique valid variance.

---

## Conversation prompts for trait elicitation

Based on established scale item content, the following conversational probes can elicit equivalent trait information:

**Self-esteem** (mapping to RSES content):
- "When you think about yourself overall, what comes to mind first?"
- "How do you typically feel about your abilities compared to people around you?"
- "When you make mistakes, how do you usually react internally?"

**Neuroticism/Emotional Stability** (mapping to NEO-PI-R N facets):
- "How do you typically handle stressful situations? Walk me through a recent example."
- "Would you describe yourself as someone who worries a lot?"
- "When things go wrong, do you tend to bounce back quickly or dwell on problems?"

**Grit—Perseverance of Effort**:
- "Tell me about a significant challenge or setback you've overcome. What kept you going?"
- "When you start something important, how do you feel about seeing it through to completion?"

**Grit—Consistency of Interest**:
- "Over the past few years, have your main goals and interests stayed consistent, or do they tend to shift?"
- "How do you respond when a new exciting opportunity comes along but you're already committed to something else?"

**Self-Compassion**:
- "When you fail at something important, how do you typically talk to yourself about it?"
- "If a close friend made the same mistake you just made, how would you respond to them? Is that different from how you treat yourself?"
- "When you're struggling, do you tend to feel alone in your difficulties, or do you remember that struggles are part of being human?"

**Emotional Intelligence**:
- "How aware are you generally of what you're feeling and why?"
- "When you're talking with someone, how well do you pick up on what they're feeling, even if they don't say it directly?"
- "What do you do when you notice you're feeling upset or overwhelmed?"

**Time concepts** (mapping to TKQ):
- "If I said we met 'a quarter past 2,' what time would that be?"
- "How long do you think we've been talking so far?"
- "Can you walk me through your typical schedule yesterday, including specific times?"

**Numerical processing**:
- "If you bought 3 items at ¥280 each, about how much would that cost?"
- "Which is larger: 87 or 78? How about 0.09 or 0.1?"

---

## Implementation recommendations for LLM-based assessment

**Adaptive architecture**: Implement CAT-inspired Bayesian updating where the LLM tracks uncertainty about each target construct and prioritizes conversational probes for high-uncertainty domains. Establish precision-based topic transitions rather than fixed conversation scripts.

**Distributed measurement**: Leverage the 5-session format for EMA-style aggregation. Assess each construct across multiple sessions to separate state from trait variance. Session-level estimates can be aggregated using hierarchical models to improve person-level reliability.

**Hybrid extraction**: Combine open vocabulary NLP (contextual embeddings from conversation content) with closed dictionary features (LIWC categories) to maximize both semantic sensitivity and interpretability.

**Domain-specific fine-tuning**: General LLMs show near-random performance on personality prediction; instruction fine-tuning on mental health dialogue data improves accuracy by 10%+ and is essential for valid assessment.

**Cultural adaptation**: Japanese validation studies reveal cultural effects (e.g., lower self-compassion positive-negative correlations reflecting acceptance of self-criticism for self-improvement). LLM prompts and inference models require Japanese-specific training data and cultural consultation.

**Validation requirements**: Establish convergent validity against established Japanese-validated scales (日本語版RSES, TIPI-J, 日本語版GRIT尺度, 日本語版SCS), test-retest reliability across assessment occasions, and criterion validity against relevant outcomes. Target convergent validity r ≥ .50 while acknowledging current NLP benchmarks of r = .34 represent moderate but improvable validity.

---

## Conclusion

Established psychological scales provide robust item templates and validation frameworks that can inform LLM-based conversational assessment. The Rosenberg Self-Esteem Scale's 10-item structure, the Big Five's hierarchical facet model, Duckworth's two-factor Grit conceptualization, Neff's balanced Self-Compassion subscales, and WLEIS's four EI dimensions each offer theoretically-grounded content that can be adapted to conversational probes. Japanese validation studies provide culturally-adapted benchmarks essential for the target population.

NLP personality prediction research establishes that text-based trait inference achieves moderate but meaningful validity (r = .34), substantially improvable through domain-specific fine-tuning. Chatbot-delivered assessment maintains excellent concordance with paper-based methods (ICC = .96-1.00), demonstrating that conversational formats need not sacrifice psychometric rigor.

The proposed 30-minute × 5-session format aligns well with EMA principles for distributed measurement, enabling both state-trait decomposition and reliability improvement through aggregation. CAT principles can guide adaptive conversation flow, maximizing information while minimizing respondent burden. Therapeutic dialogue techniques from MI and CBT provide templates for embedding structured measurement in natural conversation.

Critical next steps include developing and validating Japanese-specific conversational assessment protocols, establishing convergent validity against standard measures, and implementing adaptive algorithms that efficiently traverse the multidimensional assessment space while maintaining engagement across sessions.