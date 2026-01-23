# Forensic Analysis of Research Integrity: Cognitive Biases, Statistical Verification, and Methodologies for Detecting Fabricated or Redundant Literature

> **生成元**: NotebookLM
> **日付**: 2026-01-19
> **目的**: 研究公正性の検証手法の体系的整理

---

## ソースガイド

本書は、研究の公正性を脅かす不正行為のメカニズムとその検知手法を体系化した専門的指針です。論文出版への重圧が招く**「ハロー効果」などの認知バイアスが、名声や権威を利用して虚偽の研究を正当化してしまう心理的構造**を鋭く指摘しています。こうした歪みに対抗するため、データの不自然な一致を見抜く**統計的検証（GRIMテストやベンフォードの法則）**や、**AIを用いた画像複製の検出**、さらに「サラミ法」と呼ばれる細分化出版を特定する手法を提示しています。最終的には、日本のMEXT（文部科学省）などのガイドラインに基づき、主観を排した多層的な監査プロトコルを確立することで、科学的真実の誠実性を保護することを目的としています。

---

## Forensic Analysis of Research Integrity

The modern academic landscape is increasingly defined by an intense pressure to publish, a phenomenon that has inadvertently fostered an environment where the boundaries between valid scientific inquiry and fabricated "fiction" are sometimes blurred. Central to this issue is the cognitive distortion known as the halo effect, or "halation," which serves as a psychological shield for flawed or fraudulent research by leveraging the prestige of authors, institutions, or previous high-impact publications to suppress critical scrutiny.[1, 2, 3] As the scientific community grapples with a rising tide of retractions and the proliferation of organized "paper mills," the need for a rigorous, multi-layered framework for verifying research integrity has never been more acute.[4, 5, 6]

This report provides a comprehensive examination of the mechanisms by which cognitive biases facilitate research misconduct, the statistical and visual forensic tools used to expose fabrication, and the systematic bibliometric strategies required to identify redundant or duplicate studies. By integrating insights from cognitive psychology, mathematical statistics, and automated information retrieval, this analysis establishes a professional standard for auditing the authenticity of the scholarly record.

---

## The Cognitive Architecture of Academic Distortion

The halo effect is a pervasive cognitive bias wherein an observer's overall impression of a person or entity influences their feelings and thoughts about that entity's character or properties in unrelated areas.[2, 7, 8] In the context of academic research, this distortion manifests as a predisposition to accept the findings of a study based on superficial "halos" such as the lead author's reputation, their institutional affiliation, or the journal's impact factor.[1, 3, 9]

### Mechanisms of the Halo Effect in Scholarly Evaluation

The psychological root of the halo effect lies in the constructive nature of social perception. Humans do not process information purely objectively; instead, they actively construct an image of others that fits within existing knowledge frameworks to avoid cognitive dissonance.[2, 10] When a peer reviewer or editor encounters a manuscript from a prestigious institution—such as the University of Tokyo or a member of the Ivy League—a positive halo is formed.[1, 11] This halo leads the evaluator to assume that the underlying methodology is rigorous and the data is honest, even in the absence of explicit evidence.[2, 8]

This constructive process is often reinforced by confirmation bias, the tendency to interpret new evidence as confirmation of one's existing beliefs.[2, 7, 12] If a researcher is already viewed as a "star" in their field, reviewers are subconsciously motivated to overlook statistical anomalies or "too perfect" results, attributing them to the researcher's superior skill rather than potential fabrication.[12, 13] Conversely, the "horn effect" represents the negative inverse of this bias, where work from unknown researchers or institutions with lower perceived status is subjected to hyper-criticism or dismissed without a fair hearing.[3, 7, 8]

| Cognitive Bias Category | Operative Mechanism in Research | Impact on Scientific Integrity |
|-------------------------|--------------------------------|-------------------------------|
| Positive Halo Effect | Over-reliance on prestige (e.g., author's degree, title, or affiliation) to gauge validity. | Permits flawed or fabricated data to bypass critical peer review through "unearned trust".[1, 2, 3, 14] |
| Horn Effect | Unjustified generalization of a negative trait (e.g., poor formatting or unknown school). | Leads to the rejection of valid but non-prestigious research, skewing the literature toward elite groups.[3, 7, 8] |
| Confirmation Bias | Interpreting data specifically to support a pre-existing positive/negative reputation. | Maintains the longevity of the halo effect even after evidence of error or fraud emerges.[2, 7, 12] |
| Social Identification | Favoring research that aligns with the interests or demands of the reviewer's group. | Encourages bias in peer review when the reviewer group is homogeneous or shares professional goals.[3, 9] |
| Primacy Effect | The initial impression formed during the "editor review" phase dictates subsequent steps. | Decisions on whether to send a paper for full review are often made in seconds based on "halos".[2, 3, 15] |

The intersection of these biases creates a "prestige trap" that can sustain fictional research for years. The literature suggests that the Interests of professional groups often prevail over scientific interests, highlighting a critical need for managed heterogeneity in the reviewer pool to counteract these ingrained cognitive shortcuts.[3, 9]

### The Role of Halation in Fictionalizing Research

When halation occurs, the research effectively becomes "fictional" because the reported results are no longer tethered to objective verification but are instead products of an evaluator's mental projection.[2, 12] Cases of high-profile misconduct, such as those involving fabricated brain tissue analysis or falsified clinical outcomes, often demonstrate that the authors utilized their established "halos" to publish batches of fraudulent articles across multiple journals.[6, 16]

These "paper mills" and individual fraudulent actors rely on the fact that editors are unlikely to challenge the authenticity of data provided by a seemingly "credible" source.[4, 6] In such instances, the halo effect does not just color the perception of the research; it serves as the essential camouflage that allows fabricated science to be integrated into the foundation of the scientific record.[12, 17, 18]

---

## Statistical Forensics: The Detection of Data Fabrication

Data fabrication—the intentional creation of false data—is often more difficult to detect than plagiarism because the results may appear plausible upon initial inspection.[13, 19] However, humans are notoriously poor at mimicking the mathematical properties of natural randomness. Forensic statisticians have developed several tools that can determine if a dataset is "too perfect" or mathematically impossible.[13, 20]

### Benford's Law and Leading Digit Frequency

Benford's Law (NBL) is a logarithmic distribution that governs the frequency of the first digit in many naturally occurring datasets.[13, 20] According to NBL, the leading digit d (where d∈{1,2,…,9}) occurs with a probability P(d) calculated as:

```
P(d) = log₁₀(1 + 1/d)
```

This means the digit 1 should appear as the leading digit approximately 30.1% of the time, while the digit 9 should appear only 4.6% of the time.[13, 20] When researchers fabricate data, they tend to distribute digits more uniformly, leading to a "human signature" that deviates significantly from this natural law.[13, 20] NBL has been successfully applied to detect fraud in clinical trials, economics, and biological datasets, though it requires continuous, non-normally distributed data with a large sample size (N≥250).[13]

### The GRIM, GRIMMER, and SPRITE Frameworks

For research involving small samples and Likert-type scales (common in psychology and education), the Granularity-Related Inconsistency of Means (GRIM) test is the primary tool for identifying fictional data.[21, 22, 23]

The GRIM test relies on the mathematical principle that if a dataset consists of N integers, the mean must be a multiple of 1/N.[22, 23] For example, if a study reports a mean of 3.48 for a sample of 20 participants, a simple check reveals that 3.48×20=69.6. Because the original scores were integers, their sum must be an integer; therefore, a mean resulting in a non-integer sum (like 69.6) is mathematically impossible.[22] Such "GRIM inconsistencies" often indicate that the data was improperly excluded or the mean was "fudged" to achieve statistical significance.[22]

| Tool | Mathematical Requirement | Targeted Anomaly | Detection Capability |
|------|-------------------------|------------------|---------------------|
| GRIM | Reported Mean and Sample Size (N) | Mean is incompatible with integer-sum granularity. | Identifies impossible averages in small-scale survey data.[21, 22, 23] |
| GRIMMER | Mean, SD, and N | Variance is incompatible with integer-score distributions. | Detects "too consistent" or "impossible" variability.[13, 21] |
| SPRITE | Mean, SD, Range, and N | No possible distribution of scores can produce the reported summary stats. | Identifies fictional combinations of means and standard deviations.[13, 21, 23] |
| statcheck | APA-formatted strings (t, F, r, p) | Inconsistency between the test statistic and the reported p-value. | Automates the screening of internal consistency in text.[21] |

The SPRITE technique (Sample Parameter Reconstruction via Iterative Techniques) further extends this by attempting to reconstruct the underlying scores.[21, 23] If the algorithm cannot find any set of scores that fits the reported mean and standard deviation within the specified range, the research is flagged as potentially fabricated.[21]

### Simonsohn's Simulations and Excessive Evenness

Fabricated research often suffers from "excessive similarity" across experimental conditions. Psychologist Uri Simonsohn noted that fraudulent data often lack the expected "noise" found in real biological or social systems.[13] He developed a simulation approach—analogous to card-dealing—where the reported parameters are used to generate thousands of hypothetical experiments.[13]

If the reported data aligns with the theoretical hypothesis more closely than 99.9% of the simulations, it is considered "too perfect to be true".[13] Simonsohn also utilized the F metric to test for "excessive evenness," identifying cases where the frequency of specific scores (modes) across different groups was too identical to have occurred via random sampling.[13] These metrics were instrumental in uncovering the Smeesters and Sanna fraud cases, where the standard deviations were found to be abnormally small and excessively similar across unrelated conditions.[13]

---

## Visual Forensic Audits: Image Duplication and Manipulation

In the biomedical and life sciences, images often serve as the primary evidence. Unfortunately, image duplication and manipulation have become hallmark traits of "paper mills" and research misconduct.[6, 16, 24]

### Categories of Visual Misconduct

Detection protocols categorize image manipulation into three distinct levels of severity, each requiring different forensic approaches for identification [16]:

1. **Simple Duplication**: The exact same image (e.g., a Western blot or cell culture photo) is reused to represent two different experimental conditions. This creates a false sense of consistency.[16]

2. **Repositioned Duplication**: The image is cropped, rotated (often 90, 180, or 270 degrees), or mirrored to disguise its reuse.[16, 25] These are difficult to catch with the naked eye but easily detected by pattern-recognition algorithms.[25]

3. **Altered Duplication**: Specific regions of an image are "cloned" or digitally erased. For instance, background textures might be used to cover up unwanted bands in a gel, or specific cells might be duplicated to inflate a count.[16, 25]

### AI-Driven Image Verification

The scale of modern publishing has outpaced the ability of human "sleuths" to manually verify images. Artificial Intelligence (AI) tools like Imagetwin have become essential for research integrity audits.[24, 25] These tools operate by generating a "digital fingerprint" for every image in a manuscript and comparing it against a massive database of over 100 million previously published figures.[25]

Recent studies have shown that AI outperforms humans in both speed and comprehensiveness. In one instance, a biologist spent months manually checking papers for duplication; the AI tool not only identified all the suspicious images the human found but also uncovered 41 additional instances of duplication that the human had missed.[24] These AI systems assign a "confidence score" to flagged images, allowing editors to prioritize their investigation.[25]

| Image Manipulation Type | Manual Detection Signal | AI Detection Strategy |
|------------------------|------------------------|----------------------|
| Simple Duplication | Overlapping visual elements in figures. | Exact pixel matching/fingerprinting.[16, 25] |
| Rotation/Mirroring | Suspiciously similar textures in different orientations. | Invariant feature matching across orientations.[16, 25] |
| Contrast/Brightness Alteration | Discrepancies in background noise levels. | Tonal normalization and pattern comparison.[25] |
| Cloned Regions | Recurring "noise" patterns within a single figure. | Auto-correlation analysis for cloned pixel blocks.[16, 25] |

Despite the power of AI, human oversight remains critical. Experts warn against blindly relying on AI verdicts, as some biological contexts (e.g., standard controls that should look similar) may trigger false positives, while highly sophisticated forgeries may still evade detection.[24, 25]

---

## Identifying Bibliometric Redundancy: The Salami Slicing Dilemma

Beyond the fabrication of data lies the ethical "grey area" of redundant publication. "Salami slicing" (or segmented publication) refers to the practice of dividing a single research project into the "minimal publishable units" to artificially inflate an author's publication count.[26, 27, 28, 29]

### Consequences for Systematic Evidence

Salami slicing is considered misconduct because it leads unsuspecting readers and meta-analysts to believe that the data from each "slice" is derived from a different sample.[26, 28, 30] This leads to a distortion of the literature, as the same patient cohort might be counted multiple times in a meta-analysis, thereby skewing the perceived effectiveness or safety of a medical intervention.[26, 31]

Furthermore, this practice wastes the time of editors and reviewers and unfairly inflates the author's citation record.[28, 30] The Committee on Publication Ethics (COPE) advises that major overlaps should result in rejection, while minor overlaps require a corrigendum or explicit cross-referencing.[26]

### Criteria for Detecting Salami Slicing

Identifying segmented publication is complex because authors often change the wording of each paper, allowing them to evade standard text-based plagiarism software.[26, 27] Verification requires an audit of the underlying research characteristics:

- **Identical Sample Sizes (N)**: If multiple papers from the same research group report on identical or nearly identical group sizes with similar demographic statistics, they are likely segments of the same study.[26]
- **Hypothesis and Methodology Overlap**: The use of identical procedures, experimental designs, and core scientific questions without disclosure.[26, 27]
- **Sequential Publication**: Papers that follow a pilot study or a longitudinal trend without referencing the original protocol or initial findings.[26, 27]

| Feature | Salami Slicing (Misconduct) | Legitimate Fragmentation |
|---------|----------------------------|-------------------------|
| Hypothesis | Same hypothesis tested in multiple "slices".[26, 28] | Different, distinct endpoints or unrelated outcomes.[27, 28] |
| Disclosure | Intentional concealment of overlapping data.[26, 28] | Transparent disclosure of the relationship to the larger trial.[27, 30] |
| Citations | Mere listing in bibliography (or none).[26, 32] | Detailed cross-referencing and explanation of new knowledge.[26, 27] |
| Control Group | Reusing the same control group across "different" studies.[27] | Each control group is representative and unique to the tested group.[27] |

Legitimate reasons for multiple publications include massive epidemiological studies where the data volume is too large for one paper (e.g., longitudinal cohorts with thousands of participants) or cases where different linguistic groups need to be reached.[26, 27, 31] In all such cases, transparency is the defining factor of integrity.[27, 28]

---

## Systematized Verification and Search Methodologies

To confirm if a research paper is fictional or if similar work already exists, a systematic search strategy is required. This involves leveraging academic databases, reference management software, and AI-powered claim verification tools.

### Advanced Search Strategies in CiNii Research

CiNii Research is a critical database for auditing Japanese academic contributions. Its search interface supports complex logic that can be used to identify redundant or overlapping research.[33, 34, 35]

Effective auditing requires the use of boolean operators to refine results. For instance, to check if a specific experimental result already exists, one should combine thematic keywords with the names of suspected authors or institutions.[33, 35, 36]

- **AND Search**: (e.g., Methodology AND Outcome) finds records containing all keywords.[33, 34, 35]
- **OR Search**: (e.g., Term1 OR Term2) expands the search to synonyms, ensuring that "fictional" papers with slightly different terminology are captured.[33, 35, 36]
- **Phrase Search**: (e.g., "Specific Experimental Procedure") limits results to that exact phrase, which is a powerful tool for finding text recycling or "copy-paste" segments.[33, 34, 35]
- **Wildcard Search**: (e.g., Psycholog*) finds variations like Psychology, Psychological, or Psychologist.[33, 35]

### Deduplication Protocols in Systematic Reviews

The process of de-duplication is fundamental to maintaining the credibility of systematic reviews.[37, 38] When searching across multiple databases (such as Ovid MEDLINE, Embase, and CINAHL), researchers often retrieve the same paper indexed in different locations.[37, 38]

Software tools like EndNote, Mendeley, and specialized automation tools like "The Deduplicator" assist in this process by comparing bibliographic elements: titles, authors, publication dates, and journal names.[37, 38, 39]

| Metric | Formula | Significance in De-duplication |
|--------|---------|-------------------------------|
| Accuracy | (TP+TN)/Total | Total performance in identifying both duplicates and unique studies.[39] |
| Precision | TP/(TP+FP) | Measures how often unique studies are incorrectly removed.[39] |
| Recall | TP/(TP+FN) | Measures how many actual duplicates were missed by the system.[39] |
| F1 Score | 2×(Precision×Recall)/(Precision+Recall) | The harmonic mean, providing an overall performance score.[39] |

Studies show that automated tools are significantly faster and often more accurate than manual human checks, which are prone to fatigue and overlook minor variations in title formatting.[37, 39]

### AI-Enhanced Claim and Consensus Verification

A new generation of tools powered by "Smart Citations" allows researchers to verify the reception of a paper's claims. scite.ai classifies over 1.5 billion citations into categories: "supporting," "mentioning," or "contrasting".[40, 41, 42] This is a powerful mechanism for detecting "halation" vs. "fictional" results. If a paper has thousands of citations but almost all of them are "mentioning" (citing it as a general reference) without any "supporting" citations (independent replication of the data), it may indicate that the paper is benefiting from a halo effect rather than scientific robustness.[40, 41, 43]

Furthermore, AI search engines like Consensus and Elicit specialize in answering research questions by synthesizing findings across multiple papers.[40, 44, 45] These tools can generate a "Consensus Meter" that indicates whether there is general agreement in the literature or if a specific claim is highly disputed.[40] This is particularly useful for identifying if a "novel" finding is actually contradicted by a dozen smaller, less-known studies that lack the "prestige halo" of the original work.[40, 45]

---

## Institutional Governance and Regulatory Frameworks in Japan

To maintain research integrity, Japanese institutions and funding agencies have established clear guidelines and audit checklists.[46, 47, 48]

### MEXT and AMED Standards

The Ministry of Education, Culture, Sports, Science and Technology (MEXT) and the Japan Agency for Medical Research and Development (AMED) mandate that research must be conducted with "objective and sufficient evidence".[48, 49] A critical component of their integrity framework is the requirement for research data preservation.[47, 48] Institutions must be able to present "objective and verifiable data" whenever an allegation of misconduct is made.[47]

Failure to produce original raw data (e.g., lab notebooks, original gel images) without a "legitimate reason" is often grounds for a finding of misconduct.[46, 50] This policy is designed to counteract the "fictionalization" of research, where results are reported but the underlying evidence is conveniently "lost".[46, 47]

### The APRIN Misconduct Investigation Checklist

The Association for the Promotion of Research Integrity (APRIN) has developed a comprehensive checklist for investigating allegations of misconduct, including fabrication and falsification.[51] The checklist serves as a self-checking tool for institutions to ensure their investigations conform to national regulations.[51]

| Audit Category | Verification Question | Rationale |
|---------------|----------------------|-----------|
| Research Governance | Is the study registered and consistent with the registration document? | Prevents "outcome switching" and fictional result creation.[52] |
| Ethics | Is there evidence of approval by a recognized committee? | Ensures the study actually took place as described.[52, 53] |
| Productivity | Is the volume of work reported plausible for the group's staffing? | Detects "paper mill" activity or excessive fabrication.[52] |
| Research Conduct | Is recruitment plausible considering disease epidemiology? | Identifies "fictional" participant cohorts.[52] |
| Data Consistency | Are there discrepancies between data in figures, tables, and text? | Exposes errors or "fudged" numbers across different sections.[52] |

This checklist emphasizes that investigations should not be conducted by "friends of friends" or individuals within the same collaborating institution, as the halo effect and professional loyalty can significantly compromise the objectivity of the audit.[51]

---

## Conclusion: A Multi-Dimensional Protocol for Integrity Verification

To confirm whether research is fictional or redundant, one must move beyond the superficial impressions created by institutional halos and author prestige. The verification of research integrity requires the integration of three distinct forensic layers:

**First**, a cognitive audit must be performed to identify potential "prestige bias".[2, 3] Evaluators should consciously employ "debiasing" techniques, such as blinding themselves to the author's identity and institutional affiliation, to assess the methodology on its own merits.[2, 7, 8] This prevents the halo effect from shielding flawed science.[2, 3]

**Second**, a statistical and visual forensic audit is necessary.[13, 16] Using tools like the GRIM test for averages and pattern-recognition software for images allows for the detection of fabrication that is invisible to the human eye.[21, 22, 25] If data appears "too perfect" or images show signs of repositioned duplication, the research must be treated as suspect.[13, 16]

**Third**, a bibliometric and claim-verification audit ensures the work is not redundant or contradicted by existing literature.[26, 40] Systematic searches in databases like CiNii Research, combined with AI tools like scite.ai and Consensus, can reveal whether a study is a "salami slice" of an earlier project or a "fictional" claim that has no supporting evidence from independent replications.[26, 33, 35, 40, 41]

By adhering to these rigorous standards and institutional guidelines provided by bodies like MEXT and COPE, the scientific community can defend the integrity of the scholarly record and ensure that research serves as a foundation for truth rather than an elaborate work of academic fiction.[18, 46, 47, 53]

---

## References

1. 【心理学】人材採用で本当に気をつけたい「ハロー効果」について解説します - WARC AGENT, https://agent.warc.jp/articles/qk89v7wsj2
2. Halo Effect - The Decision Lab, https://thedecisionlab.com/biases/halo-effect
3. Halo Effect in Peer Review: Exploring the Possibility of Bias Associated with the Feeling of Belonging to a Group - SciELO, https://www.scielo.br/j/pci/a/VcjVkxqZPSwth3mHsJzMxpG/
4. New digital identity framework aims to strengthen research integrity in scholarly publishing, https://stm-assoc.org/new-digital-identity-framework-aims-to-strengthen-research-integrity-in-scholarly-publishing/
5. Morressier's Guide to Research Integrity, https://www.morressier.com/company/morressiers-guide-to-research-integrity
6. The entities enabling scientific fraud at scale are large, resilient, and growing rapidly | PNAS, https://www.pnas.org/doi/10.1073/pnas.2420092122
7. Understanding the Halo Effect: Definition and Examples - Dovetail, https://dovetail.com/ux/halo-effect/
8. What Is the Halo Effect? | Definition & Examples - Scribbr, https://www.scribbr.com/research-bias/halo-effect/
9. Halo Effect in Peer Review: Exploring the Possibility of Bias Associated with the Feeling of Belonging to a Group - ResearchGate, https://www.researchgate.net/publication/339206162_Halo_Effect_in_Peer_Review_Exploring_the_Possibility_of_Bias_Associated_with_the_Feeling_of_Belonging_to_a_Group
10. Bias, Halo Effect and Horn Effect: A Systematic Literature Review - Knowledge Words Publications, https://kwpublications.com/papers_submitted/10056/bias-halo-effect-and-horn-effect-a-systematic-literature-review.pdf
11. ハロー効果とは？例やピグマリオン効果との違いと人事評価エラーについてわかりやすく解説, https://www.hrbrain.jp/media/evaluation/halo-effect
12. Halo Effect - Ethics Unwrapped, https://ethicsunwrapped.utexas.edu/glossary/halo-effect
13. Tools of the data detective: A review of statistical methods to detect ..., https://pmc.ncbi.nlm.nih.gov/articles/PMC12121900/
14. ハロー効果とは？人事・採用における意味や事例・対策をわかりやすく解説 - ミイダス, https://corp.miidas.jp/assessment/10518/
15. Full article: Halo effect and psychological contracts in student evaluations of teaching: a case study from a leading Chinese Liberal Arts University - Taylor & Francis Online, https://www.tandfonline.com/doi/full/10.1080/2331186X.2025.2504216?scroll=top&needAccess=true
16. Falsification of Images | Best Practices in Science, https://bps.stanford.edu/home/instances-scientific-misconduct/falsification-images
17. ハロー効果とは？類似した現象との違いや例を含めてわかりやすく解説 - HRMOS, https://hrmos.co/trend/talent-management/10896/
18. Full article: Assessing database accuracy for article retractions: A preliminary study comparing Retraction Watch Database, PubMed, and Web of Science - Taylor & Francis, https://www.tandfonline.com/doi/full/10.1080/08989621.2025.2465621
19. What is Research Misconduct? Part 3: Fabrication - Science Integrity Digest, https://scienceintegritydigest.com/2019/05/29/what-is-research-misconduct-part-3-fabrication/
20. What should raise red flags to detect fabricated data - Academia Stack Exchange, https://academia.stackexchange.com/questions/7602/what-should-raise-red-flags-to-detect-fabricated-data
21. Consistency in reported numbers - Open Science Impact Indicator Handbook, https://handbook.pathos-project.eu/sections/5_reproducibility/consistency_in_reported_numbers.html
22. GRIM test - Wikipedia, https://en.wikipedia.org/wiki/GRIM_test
23. The GRIM Test: An Easy Way to Check Your Data Is Not Faulty | Institute for Public Relations, https://instituteforpr.org/grim-test-easy-way-check-data-not-faulty/
24. Image duplication in scientific papers: how AI outperforms humans at detecting research misconduct - The Publication Plan, https://thepublicationplan.com/2024/01/26/image-duplication-in-scientific-papers-how-ai-outperforms-humans-at-detecting-research-misconduct/
25. Scientific Image Duplication Detection - Imagetwin, https://imagetwin.ai/image-duplication-detection
26. Salami Publication - Brieflands, https://brieflands.com/knowledgebase/salami
27. Salami publication: definitions and examples - Biochemia Medica, https://www.biochemia-medica.com/en/journal/23/3/10.11613/BM.2013.030/fullArticle
28. Salami Slicing - Elsevier Researcher Academy, https://researcheracademy.elsevier.com/uploads/2018-02/2017_ETHICS_SS02.pdf
29. Handling duplicated or redundant content (salami slicing) | COPE, https://publicationethics.org/guidance/cope-position/handling-duplicated-or-redundant-content-salami-slicing
30. Salami slicing - European Menopause and Andropause Society | EMAS, https://emas-online.org/wp-content/uploads/2024/11/emas-research-resources-salami-slicing.pdf
31. Salami Publication in Qualitative Research: An Ethical Challenge - PMC - NIH, https://pmc.ncbi.nlm.nih.gov/articles/PMC7145924/
32. Salami Slicing of Data Sets: What the Young Researcher Needs to Know - PMC - NIH, https://pmc.ncbi.nlm.nih.gov/articles/PMC5178044/
33. CiNii Articles - マニュアル - キーワードによる論文検索方法 | 学術コンテンツサービス サポート, https://support.nii.ac.jp/ja/cia/manual_keyword
34. キーワードによる論文検索方法 | 学術コンテンツサービス サポート - CiNiiについて, https://support.nii.ac.jp/ja/cir/manual_keyword
35. CiNiiで論文検索 - 大阪教育大学附属図書館, https://www.lib.osaka-kyoiku.ac.jp/?action=common_download_main&upload_id=1244
36. CiNii Research（サイニィ リサーチ）の使い方案内テキスト版 - 筑波大学附属図書館, https://www.tulips.tsukuba.ac.jp/otsuka/r/CiNii-accessibilityguide.html
37. Identifying and removing duplicate records from systematic review searches - PMC - NIH, https://pmc.ncbi.nlm.nih.gov/articles/PMC4613377/
38. Evidence-based literature review: De-duplication a cornerstone for quality - PMC - NIH, https://pmc.ncbi.nlm.nih.gov/articles/PMC10789108/
39. Automation of duplicate record detection for systematic reviews: Deduplicator - PMC - NIH, https://pmc.ncbi.nlm.nih.gov/articles/PMC11295717/
40. Scite AI 2026 Review: Features, Pricing, and Top Alternatives - Elephas, https://elephas.app/blog/scite-ai-review
41. AI for Research | Scite, https://scite.ai/
42. Scite: AI for Research, https://scite.ai/home
43. Comparison of Elicit AI and Traditional Literature Searching in Systematic Reviews using Four Case Studies, https://scite.ai/reports/comparison-of-elicit-ai-and-zReXRGlY
44. Elicit: AI for scientific research, https://elicit.com/
45. Trust in AI: Evaluating Scite, Elicit, Consensus, and Scopus AI for Generating Literature Reviews - HKUST Library, https://library.hkust.edu.hk/sc/trust-ai-lit-rev/
46. 資料3－1 研究活動の不正行為への対応についての論点別考え方（案） - 文部科学省, https://www.mext.go.jp/b_menu/shingi/gijyutu/gijyutu12/siryo/attach/1334757.htm
47. 「研究活動における不正行為への対応等に関するガイドライン」に係る質問と回答（FAQ）, https://www.mext.go.jp/a_menu/jinzai/fusei/1352820.htm
48. Ⅰ 研究不正と認定された事例 - AMED, https://www.amed.go.jp/content/000141621.pdf
49. 研究活動上の不正行為防止ハンドブック, https://www.nise.go.jp/cms/resources/content/333/20150424-101705.pdf
50. 科学研究費助成事業（科研費） の適正な管理等について - 日本学術振興会, https://www.jsps.go.jp/file/storage/kaken_g_737/siryou3.pdf
51. How to investigate allegations of research misconduct: A checklist - Retraction Watch, https://retractionwatch.com/2019/01/08/how-to-investigate-allegations-of-research-misconduct-a-checklist/
52. THE 'REAPPRAISED' CHECKLIST FOR EVALUATION OF PUBLICATION INTEGRITY, https://ws.engr.illinois.edu/sitemanager/getfile.asp?id=4168
53. Develop processes to help identify ethical concerns | COPE, https://publicationethics.org/guidance/guideline/ethics-toolkit-successful-editorial-office/develop-processes-help-identify-ethical-concerns

---

## SoE研究への示唆（追記）

このレポートはSoE研究に以下の示唆を与える：

1. **ハロー効果とヒュブリス因子**
   - 「権威ある支援者」の判断が無批判に受け入れられる構造は、ヒュブリス因子の認知メカニズムそのもの
   - Input Constitutional AIは「権威バイアス」を排除した記録を目指す

2. **統計的検証ツールの応用**
   - GRIM/GRIMMERテストは小規模サンプルの福祉研究にも適用可能
   - 「数字が合わない」支援記録の検出に活用できる

3. **サラミ出版問題と記録の一貫性**
   - 同一データの細分化は「記録の断片化」問題と類似
   - Input Constitutional AIが記録の一貫性を担保する理由の一つ

4. **日本の制度的枠組み**
   - MEXT/AMEDガイドラインは研究公正性の基準
   - 福祉記録にも同様の「検証可能性」基準を適用すべき
