export type Figure = { src: string; caption?: string };
export type Table = { caption?: string; headers: string[]; rows: string[][] };
export type ProjectSection = {
  heading: string;
  body: string[];
  figure?: Figure;
  table?: Table;
};

export type Project = {
  slug: string;
  category: string;
  title: string;
  date: string;
  summary: string;
  description: string;
  img: string | null;
  report?: string;
  github?: string;
  award?: string;
  detail: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "get-real",
    category: "computer vision",
    title: "get real: real vs fake image detection",
    date: "spring 2024",
    summary:
      "trained cnns to tell real product photos from ai-generated fakes, hitting 99% accuracy and shipping it as a chrome extension.",
    description:
      "built a fake product image detector using transfer learning (VGG-19, ResNet50, EfficientNet) on a custom 6,000-image dataset. shipped as a Chrome Extension.",
    img: "/getreal.gif",
    report: "/reports/getreal.pdf",
    detail: [
      {
        heading: "the problem",
        body: [
          "generative ai can produce realistic product images in seconds, which lowers the cost of building scam websites and running social engineering attacks. the goal was to build a model that classifies e-commerce product images as real or ai-generated, so it could plug into a broader scam-detection pipeline alongside signals like domain registration and ip activity.",
        ],
      },
      {
        heading: "building the dataset",
        body: [
          "i built a balanced 6,000-image dataset from scratch. 3,000 real product images were sampled from the amazon berkeley objects dataset, then run through google gemini pro to generate a one-line caption of each object.",
          "those captions were fed to dall-e 2 to generate 3,000 'like-for-like' fake images - the same products, but synthetic. this gave clean, balanced classes and a variety of product types against varying backgrounds, so the model would generalise across the range of images a genai model can produce.",
        ],
        figure: {
          src: "/figures/ai_real_process.png",
          caption: "the data generation pipeline: real images captioned by gemini, then regenerated as fakes by dall-e 2.",
        },
      },
      {
        heading: "what the fakes look like",
        body: [
          "the synthetic images are convincing enough to pass as real product photos on a storefront, which is the core of the detection problem.",
        ],
        figure: {
          src: "/figures/ai_real_images.png",
          caption: "every image here is ai-generated.",
        },
      },
      {
        heading: "approach",
        body: [
          "i used transfer learning on three families of pretrained models - vgg-19, resnet50, and efficientnet (b0, b3, b7) - freezing the backbones and training only the output layer. everything was trained on an a100 gpu on google colab over 20 epochs.",
        ],
      },
      {
        heading: "results",
        body: [
          "efficientnetb7 reached 99.44% accuracy, with resnet50 and the efficientnet variants close behind. vgg-19 lagged, with a noticeably higher false-negative rate.",
        ],
        table: {
          caption: "performance across fine-tuned models.",
          headers: ["model", "accuracy", "false negative rate", "training time"],
          rows: [
            ["vgg-19", "95.11%", "6.62%", "245s"],
            ["resnet50", "99.00%", "0.45%", "270s"],
            ["efficientnetb0", "99.22%", "0.45%", "293s"],
            ["efficientnetb3", "99.00%", "0.89%", "515s"],
            ["efficientnetb7", "99.44%", "0.88%", "1431s"],
          ],
        },
      },
      {
        heading: "generalising to newer models",
        body: [
          "to mimic real-world conditions, i tested the models on unseen dall-e 3 images. accuracy dropped sharply: vgg-19 fell to 24%, resnet50 to 48%, and efficientnetb0 was best at just 50%. efficientnet's squeeze-and-excitation blocks helped it adapt, but the drop is a clear sign of how hard it is to keep detectors current as genai improves.",
          "finally, i embedded the models into a chrome extension so you could check whether images online are real or fake in the browser.",
        ],
      },
    ],
  },
  {
    slug: "shakespeare",
    category: "nlp & llms",
    title: "fine-tuning gpt to write like shakespeare",
    date: "spring 2024",
    summary:
      "fine-tuned gpt-2 and davinci to rewrite modern english in shakespeare's style, retaining poetic depth a style-transfer baseline lost.",
    description:
      "fine-tuned GPT-2 and GPT DaVinci on the Shakescleare dataset to reproduce Shakespearean prose. benchmarked against a Style Transformer using BLEU, ROUGE, and cosine similarity.",
    img: "/figures/shakespeare_portrait.jpg",
    report: "/reports/shakespeare.pdf",
    detail: [
      {
        heading: "the question",
        body: [
          "can generative ai accurately emulate william shakespeare's writing style? the project set out to measure exactly that, comparing several models on stylistic accuracy using bleu, rouge-n, cosine similarity, jaccard similarity, and pinc score.",
        ],
      },
      {
        heading: "fine-tuning",
        body: [
          "i fine-tuned gpt-2 and gpt davinci on the shakescleare dataset, which pairs modern english passages with their shakespearean translations. a style transformer model was used as an additional baseline.",
          "gpt-2 needed a specialised format: each row became a start token, the english translation, an end token, a separator, then the shakespearean translation wrapped in its own start/end tokens. davinci, with its native prompt-completion setup, was given an instruction-style prompt and the shakespearean line as the completion.",
        ],
      },
      {
        heading: "results",
        body: [
          "across test examples, gpt-2 and davinci consistently retained the poetic depth of the original text, while the style transformer baselines tended to flatten and simplify the phrasing. the example below shows each model's attempt at a single line.",
        ],
        table: {
          caption: "one test example across models.",
          headers: ["source", "output"],
          rows: [
            ["english", "my generosity to you is limitless as the sea, and my love is as deep"],
            ["shakespeare (target)", "my bounty is boundless as the sea, my love as deep"],
            ["gpt-2", "my goodness to thee is as infinite as the sea, and my love as deep"],
            ["gpt davinci", "my love to you is sound, sans crack or flaw"],
            ["style transformer", "i'm boundless, love is deep"],
          ],
        },
      },
    ],
  },
  {
    slug: "telegram-alpha",
    category: "nlp & llms",
    title: "where's the alpha? scraping telegram with llms",
    date: "2024",
    summary:
      "an llm pipeline that turns scraped telegram chatter into personalised crypto market signals. won 1st place at cube summit 2024.",
    description:
      "built an end-to-end analytics tool that scrapes Telegram data, applies NER and TF-IDF to extract features, clusters messages via embeddings, and generates market insights using GPT-4.",
    img: "/tool.png",
    award: "1st place (starkware award) at cube summit 2024",
    detail: [
      {
        heading: "the idea",
        body: [
          "i led a team building an end-to-end, ai-powered analytics tool that scrapes text data from social platforms (starting with telegram) to generate personalised crypto market and sentiment insights using llms.",
          "the project won 1st place and the starkware award at cube summit 2024.",
        ],
      },
      {
        heading: "how it works",
        body: [
          "when a user links their accounts, the tool gathers their message data. it then applies conventional nlp techniques - named entity recognition (ner) and tf-idf - to extract meaningful features.",
          "those features are turned into embeddings and used to cluster related messages. the clustered data is fed into a language model (gpt-3, gpt-4, or gemini) to generate the final market and sentiment summaries.",
        ],
        figure: {
          src: "/tool.png",
          caption: "the analytics dashboard surfacing clustered insights from scraped chat data.",
        },
      },
      {
        heading: "infrastructure & next steps",
        body: [
          "data was stored on aws (s3 and dynamodb). the longer-term plan was to refine the language model with reinforcement learning from human feedback (rlhf) by showing it examples of effective summaries, and to expand scraping to discord and twitter.",
        ],
      },
    ],
  },
  {
    slug: "supply-chain",
    category: "optimisation",
    title: "optimising a global microchip supply chain",
    date: "fall 2023",
    summary:
      "a mixed-integer optimisation model that cut a microchip distribution network's cost by 39.5% versus a greedy baseline.",
    description:
      "formulated a mixed-integer optimization model for a global microchip producer to minimize warehouse and transportation costs across 1,000 orders.",
    img: "/figures/sankey.png",
    report: "/reports/supply-chain.pdf",
    detail: [
      {
        heading: "the problem",
        body: [
          "the goal was to help a global microchip producer design an optimal distribution network - warehouses, shipping routes, and courier services - that delivers every order at the lowest possible total cost, combining warehouse operations and transportation while respecting demand, supply, and shipping constraints.",
        ],
      },
      {
        heading: "baseline",
        body: [
          "i first built a greedy baseline (the 'yan-tian greedy algorithm'): iterate through every incoming order, search available warehouses and freight options, and assign the order to the first valid warehouse-freight pair. this produced a working but expensive solution.",
        ],
      },
      {
        heading: "the optimisation model",
        body: [
          "i formulated the problem as a mixed-integer optimisation minimising warehouse cost plus transportation cost, subject to constraints including: every order assigned to a warehouse and freight, daily warehouse capacity, product-storage restrictions, customer-service restrictions, valid warehouse ports, shipping-time windows, and carrier weight limits.",
          "exploratory analysis showed most warehouses connect to a single port (port 4 in particular) and that warehouses with lower cost-per-unit should carry the most orders - both patterns the optimal solution went on to exploit.",
        ],
        figure: {
          src: "/figures/cost_perUnit_daily_order_capacity.png",
          caption: "eda: warehouses with lower cost-per-unit tend to have higher daily order capacity.",
        },
      },
      {
        heading: "results",
        body: [
          "the optimised network cost $5.37M - a saving of $3.5M, or 39.5%, versus the greedy baseline. the sankey diagram shows how the 1,000 orders flow through warehouses and ports in the optimal allocation. built in python and julia/jump with gurobi.",
        ],
        table: {
          caption: "total cost: baseline vs optimised.",
          headers: ["solution", "total cost"],
          rows: [
            ["greedy baseline", "$8,878,241"],
            ["optimisation model", "$5,365,566"],
            ["saving", "$3,512,675 (39.5%)"],
          ],
        },
      },
      {
        heading: "optimal allocation",
        body: [
          "many orders route through port 4, and warehouses 3 and 11 absorb the most volume thanks to their low daily cost - while the expensive warehouses 15, 16, and 18 are barely used.",
        ],
        figure: {
          src: "/figures/sankey.png",
          caption: "optimal warehouse and freight allocation across 1,000 orders.",
        },
      },
    ],
  },
  {
    slug: "swipe-travel",
    category: "machine learning",
    title: "swipe for travel planning",
    date: "2025",
    summary:
      "a tinder-style travel planning app built with a friend; i owned the scraping, recommendations and ranking. shipped to 100 users.",
    description:
      "a fun side project with a friend - a travel planning app where you swipe through activities tinder-style to build a trip. i worked on data scraping, activity recommendations, and ranking. shipped to 100 real users.",
    img: "/tripswipe.png",
    github: "https://github.com/hoang-phan98/tripswipe",
    detail: [
      {
        heading: "the project",
        body: [
          "a fun side project i built with a friend: a travel planning app that brings the tinder-style swipe mechanic to trip planning. you swipe through suggested activities to build an itinerary, and groups can plan together and reach consensus on where to go.",
        ],
        figure: {
          src: "/tripswipe.png",
          caption: "the app concept: swipe through activities to build a trip.",
        },
      },
      {
        heading: "my role",
        body: [
          "my friend built the frontend and backend. i focused on the data and ml side: scraping activity data, building the recommendation logic, and ranking activities for each user so the swipe feed surfaced the most relevant options first.",
        ],
      },
      {
        heading: "outcome",
        body: [
          "we shipped it to 100 real users who signed up and tried the product. it was a great way to take a recommendation system from idea all the way to something people actually used end to end.",
        ],
      },
    ],
  },
  {
    slug: "fetal-health",
    category: "machine learning",
    title: "predicting fetal health from heartbeat signals",
    date: "fall 2023",
    summary:
      "classified fetal health from ctg signals using a custom false-negative metric; an ensemble nearly eliminated the most dangerous errors.",
    description:
      "built a multi-class classifier on cardiotocogram (CTG) data - fetal heart rate and uterine contraction signals - to classify fetal health states and support early clinical intervention.",
    img: "/ctg.jpg",
    report: "/reports/fetal-health.pdf",
    detail: [
      {
        heading: "the problem",
        body: [
          "child and maternal mortality remain urgent global concerns. cardiotocograms (ctgs) capture fetal heart rate and uterine contraction signals cheaply using ultrasound, making them especially valuable in resource-constrained settings. the goal was to classify fetal health from ctg data to support timely clinical intervention.",
        ],
      },
      {
        heading: "the data",
        body: [
          "the dataset (kaggle) held 2,126 ctg measurements with 22 features - fetal heart rate, movements, uterine contractions, and histogram summary statistics. three expert obstetricians labelled each record as normal (78%), suspect (14%), or pathological (8%), a heavily imbalanced set.",
          "i removed collinear histogram features, used stratified sampling for the train/test split, and applied smote to oversample the minority classes.",
        ],
        figure: {
          src: "/figures/fetal_distribution.png",
          caption: "class imbalance: normal cases vastly outnumber suspect and pathological.",
        },
      },
      {
        heading: "metric & models",
        body: [
          "because misclassifying a sick baby as healthy is the costly error, i designed a custom false-negative metric weighting suspect and pathological cases, rather than optimising raw accuracy.",
          "i trained logistic regression, k-nn, cart, evtree, random forest, xgboost, and neural networks, plus an ensemble that hard-votes across weak learners and breaks ties conservatively (always choosing the less healthy prediction).",
        ],
        table: {
          caption: "selected models on the smote test set (lower custom FN is better).",
          headers: ["model", "accuracy", "custom FN"],
          rows: [
            ["logistic regression", "0.884", "0.071"],
            ["k-nn", "0.877", "0.060"],
            ["xgboost", "0.943", "0.080"],
            ["ensemble", "0.863", "0.046"],
          ],
        },
      },
      {
        heading: "results",
        body: [
          "on the smote dataset the ensemble model achieved the best custom false-negative score (0.046), beating xgboost. its confusion matrix shows it almost entirely eliminated the worst error - pathological babies predicted as normal (zero cases), with only a couple of suspect cases slipping through.",
        ],
        figure: {
          src: "/figures/fetal_confusion.png",
          caption: "ensemble model confusion matrix on the test set.",
        },
      },
      {
        heading: "interpretation",
        body: [
          "shap analysis showed accelerations and short-term variability were the strongest drivers in separating normal from suspect cases, while abnormal short-term variability was especially influential for pathological cases. built in python with scikit-learn.",
        ],
        figure: {
          src: "/figures/fetal_shap.png",
          caption: "shap summary plot from the xgboost model.",
        },
      },
    ],
  },
  {
    slug: "customer-segmentation",
    category: "machine learning",
    title: "targeting the right buyers for automotive market entry",
    date: "fall 2023",
    summary:
      "predicted customer segments for a new market, with careful imputation of heavily missing data lifting accuracy 127% over baseline.",
    description:
      "predicted customer segments (A/B/C/D) for 2,627 new-market prospects using imputation techniques to handle missing data, enabling targeted sales outreach.",
    img: "/figures/auto_importance.png",
    report: "/reports/customer-segmentation.pdf",
    detail: [
      {
        heading: "the problem",
        body: [
          "an automotive company wanted to expand into new markets with its existing product lineup. in its current market it had grouped customers into four segments (a, b, c, d) and run tailored outreach for each with great success. the task was to predict the right segment for 2,627 prospects in the new market so the same strategy could be applied.",
        ],
      },
      {
        heading: "the challenge: missing data",
        body: [
          "the dataset (kaggle, ~8,000 customers, 11 features) had missing values in 60% of its features and 17.4% of its rows - too much to simply drop. handling this cleanly became the core of the project.",
          "i compared four imputation methods: mean, knn, and two optimisation-based approaches (opt-knn and opt-svm) from bertsimas et al. each imputed dataset was evaluated by training a model and measuring validation accuracy.",
        ],
      },
      {
        heading: "modelling",
        body: [
          "after min-max scaling and encoding the categorical features, i trained logistic regression, random forest, xgboost, cart, and an optimal classification tree (oct), benchmarked against a baseline that predicts the most common segment. i handled the data pre-processing and the majority of the modelling.",
        ],
        table: {
          caption: "test accuracy with opt-knn imputation.",
          headers: ["model", "accuracy"],
          rows: [
            ["baseline (most common)", "0.278"],
            ["logistic regression", "0.527"],
            ["random forest", "0.632"],
            ["xgboost", "0.569"],
            ["optimal classification tree", "0.545"],
          ],
        },
      },
      {
        heading: "what drives a segment",
        body: [
          "random forest paired with opt-knn imputation performed best, improving on the baseline by 127%. feature importance and shap pointed to age, spending score, and profession as the strongest segment drivers.",
        ],
        figure: {
          src: "/figures/auto_importance.png",
          caption: "feature importance from the random forest model.",
        },
      },
      {
        heading: "interpretable segments",
        body: [
          "the optimal classification tree gave an interpretable view the company could act on directly: spending score splits customers at the top level, with profession and age as the next discriminators. for example, segment a skews to older high-spenders and executives, while segment d captures younger low-spenders and high-spending healthcare or executive roles.",
        ],
        figure: {
          src: "/figures/auto_oct.png",
          caption: "optimal classification tree used to interpret each segment.",
        },
      },
    ],
  },
];

export const projectCategories = [
  "computer vision",
  "nlp & llms",
  "optimisation",
  "machine learning",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
