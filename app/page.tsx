const news = [
  {
    date: "aug 2025",
    text: "tiktok launched ",
    link: { label: "ai avatar stickers", url: "https://www.socialmediatoday.com/news/tiktok-adds-ai-avatar-stickers-coming-ai-features-douyin/757646/" },
    textAfter: " - part of the social avatar work i contributed to at tiktok.",
  },
  {
    date: "jul 2025",
    text: "whatsapp launched the ",
    link: { label: "business calling api", url: "https://whatsappbusiness.com/blog/whatsapp-business-calling-api/" },
    textAfter: " - a product i worked on at meta.",
  },
  {
    date: "jul 2025",
    text: "meta announced new business messaging features at ",
    link: { label: "conversations 2025", url: "https://www.socialmediatoday.com/news/meta-announces-business-messaging-updates-conversations-2025-whatsapp/752250/" },
    textAfter: ", including whatsapp calling and messenger api updates.",
  },
  {
    date: "oct 2024",
    text: "won 1st place (starkware award) at ",
    link: { label: "cube summit 2024", url: "https://x.com/CUBE_Summit/status/1842326005077495889?s=20" },
    textAfter: " for our project 'where's the alpha? scraping telegram with llms'.",
  },
];

const experience = [
  {
    company: "Meta",
    url: "https://about.meta.com",
    logo: "/logo_meta.png",
    role: "data scientist, business AI",
    period: "mar 2025 – present",
    summary: "causal inference, experimentation, and ml modelling across whatsapp api calling, whatsapp api voice messaging, and messenger calling.",
  },
  {
    company: "TikTok",
    url: "https://www.tiktok.com",
    logo: "/logo_tiktok.png",
    role: "data scientist, social",
    period: "oct 2024 – mar 2025",
    summary: "machine learning and experimentation on the social team, driving the launch and growth of social avatar, and defining social connection scenarios to improve organic relationship formation between users.",
  },
  {
    company: "Quantium",
    url: "https://www.quantium.com",
    logo: "/logo_quantium.png",
    role: "data scientist, product analytics",
    period: "feb 2021 – jun 2023",
    summary: "end-to-end analytics pipelines, forecasting models, and dashboards for B2B SaaS and government clients in australia.",
  },
];

const projects = [
  {
    category: "computer vision",
    title: "get real: real vs fake image detection",
    description:
      "built a fake product image detector using transfer learning (VGG-19, ResNet50, EfficientNet) on a custom 6,000-image dataset. shipped as a Chrome Extension.",
    link: "/reports/getreal.pdf",
    img: "/getreal.gif",
  },
  {
    category: "nlp & llms",
    title: "fine-tuning gpt to write like shakespeare",
    description:
      "fine-tuned GPT-2 and GPT DaVinci on the Shakescleare dataset to reproduce Shakespearean prose. benchmarked against a Style Transformer using BLEU, ROUGE, and cosine similarity.",
    link: "/reports/shakespeare.pdf",
    img: "/opt.gif",
  },
  {
    category: "nlp & llms",
    title: "where's the alpha? scraping telegram with llms",
    description:
      "built an end-to-end analytics tool that scrapes Telegram data, applies NER and TF-IDF to extract features, clusters messages via embeddings, and generates market insights using GPT-4.",
    link: null,
    img: "/tool.png",
  },
  {
    category: "optimisation",
    title: "optimising a global microchip supply chain",
    description:
      "formulated a mixed-integer optimization model for a global microchip producer to minimize warehouse and transportation costs across 1,000 orders.",
    link: "/reports/supply-chain.pdf",
    img: "/tsp.gif",
  },
  {
    category: "machine learning",
    title: "swipe for travel planning",
    description:
      "a fun side project with a friend - a travel planning app where you swipe through activities tinder-style to build a trip. i worked on data scraping, activity recommendations, and ranking. shipped to 100 real users.",
    link: "https://github.com/hoang-phan98/tripswipe",
    img: "/tripswipe.png",
  },
  {
    category: "machine learning",
    title: "predicting fetal health from heartbeat signals",
    description:
      "built a multi-class classifier on cardiotocogram (CTG) data - fetal heart rate and uterine contraction signals - to classify fetal health states and support early clinical intervention.",
    link: "/reports/fetal-health.pdf",
    img: "/ctg.jpg",
  },
  {
    category: "machine learning",
    title: "targeting the right buyers for automotive market entry",
    description:
      "predicted customer segments (A/B/C/D) for 2,627 new-market prospects using imputation techniques to handle missing data, enabling targeted sales outreach.",
    link: "/reports/customer-segmentation.pdf",
    img: "/kmeans.gif",
  },
];

const education = [
  {
    school: "MIT",
    logo: "/logo_mit.png",
    degree: "master of business analytics",
    year: "2024",
  },
  {
    school: "university of melbourne",
    logo: "/logo_unimelb.png",
    degree: "bsc mathematics & statistics",
    year: "2020",
  },
  {
    school: "university college london",
    logo: "/logo_ucl.png",
    degree: "exchange program - statistics",
    year: "2019",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900" style={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}>
      <main className="max-w-2xl mx-auto px-6 py-16">

        {/* header */}
        <div className="flex items-start gap-6 mb-10">
          <img src="/headshot.jpg" alt="vincent tian" className="w-32 h-32 rounded-full object-cover shrink-0" />
          <div>
            <h1 className="text-2xl font-semibold mb-1">vincent tian</h1>
            <p className="text-zinc-500 text-sm mb-3">data scientist · san francisco bay area</p>
            <div className="flex gap-4 text-sm text-zinc-500">
              <a href="mailto:vincent.tian72@gmail.com" className="hover:text-zinc-900">email</a>
              <a href="https://github.com/vtian72" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">github</a>
              <a href="https://www.linkedin.com/in/vincentian/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">linkedin</a>
            </div>
          </div>
        </div>

        {/* bio */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-700 mb-4">about me</h2>
          <ul className="text-sm leading-relaxed text-zinc-600 space-y-1.5 list-disc list-outside ml-4">
            <li>data scientist @ meta - business ai &amp; api products</li>
            <li>prev @ tiktok (social) and @ quantium (government &amp; product analytics)</li>
            <li>ml, deep learning &amp; optimisation @ mit, maths + stats @ unimelb</li>
            <li>grew up in perth, australia 🇦🇺</li>
          </ul>
        </section>

        {/* news */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-700 mb-4">recent</h2>
          <div className="relative border-l border-zinc-200 pl-5 space-y-4">
            {news.map((item, i) => (
              <div key={i} className="relative text-sm">
                <span className="absolute -left-[1.4rem] top-[0.4rem] w-2 h-2 rounded-full bg-zinc-300" />
                <span className="text-zinc-600 text-xs font-medium block mb-0.5">{item.date}</span>
                <span className="text-zinc-500">
                  {item.text}
                  {item.link && (
                    <a href={item.link.url} target="_blank" rel="noopener noreferrer" className="text-zinc-900 underline underline-offset-2 hover:text-zinc-500 transition-colors">{item.link.label}</a>
                  )}
                  {item.textAfter}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* experience */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-700 mb-6">work experience</h2>
          <div className="relative border-l border-zinc-200 pl-5 space-y-6">
            {experience.map((job) => (
              <div key={job.company} className="relative">
                <span className="absolute -left-[1.4rem] top-[0.4rem] w-2 h-2 rounded-full bg-zinc-300" />
                <span className="text-zinc-600 text-xs font-medium block mb-0.5">{job.period}</span>
                <div className="flex items-center gap-2 mb-1">
                  <img src={job.logo} alt={job.company} className="w-4 h-4 rounded object-contain" />
                  <a href={job.url} target="_blank" rel="noopener noreferrer" className="font-medium text-sm hover:underline">{job.company}</a>
                  <span className="text-zinc-500 text-sm">· {job.role}</span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">{job.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* projects */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-700 mb-6">projects</h2>
          {["computer vision", "nlp & llms", "optimisation", "machine learning"].map((cat) => (
            <div key={cat} className="mb-8">
              <p className="text-sm font-medium text-zinc-600 mb-4">{cat}</p>
              <div className="space-y-6">
                {projects.filter((p) => p.category === cat).map((p) => (
                  <div key={p.title} className="flex gap-5">
                    {p.img && (
                      <div className="shrink-0 w-36 h-24 overflow-hidden rounded bg-zinc-100">
                        <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div>
                      <div className="mb-1">
                        {p.link ? (
                          <a href={p.link} target="_blank" rel="noopener noreferrer" className="font-medium text-sm underline underline-offset-2 hover:text-zinc-500 transition-colors">{p.title}</a>
                        ) : (
                          <span className="font-medium text-sm">{p.title}</span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-600 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* education */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-700 mb-4">education</h2>
          <div className="space-y-3">
            {education.map((e) => (
              <div key={e.school} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <img src={e.logo} alt={e.school} className="w-5 h-5 rounded object-contain" />
                  <span className="font-medium">{e.school}</span>
                  <span className="text-zinc-500">· {e.degree}</span>
                </div>
                <span className="text-zinc-600 text-xs font-medium ml-4">{e.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* footer */}
        <p className="text-xs text-zinc-400">
          vincent.tian72@gmail.com · san francisco bay area
        </p>
      </main>
    </div>
  );
}
