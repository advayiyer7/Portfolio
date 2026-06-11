// ============================================================================
//  SITE CONTENT — single source of truth.
//  Edit copy / links / data here. No need to touch components.
// ============================================================================

export const site = {
  name: "Advay Deepak Iyer",
  shortName: "Advay Iyer",
  role: "Software / AI Engineer",
  // SEO
  title: "Advay Deepak Iyer — Software / AI Engineer",
  description:
    "Advay Deepak Iyer — Computer Engineering & Computer Science senior at USC building LLM agents, RAG applications, and the systems behind them. Software / AI-ML engineer.",
  url: "https://advayiyer.com", // TODO: update to your deployed domain
  email: "advayiyer7@gmail.com",
  github: "https://github.com/advayiyer7",
  linkedin: "https://www.linkedin.com/in/advayiyer7",
  resume: "/resume.pdf", // TODO: replace with hosted resume PDF URL
} as const;

export const hero = {
  // monospace eyebrow label (currently unused in the hero)
  eyebrow: "CE & CS @ USC · SWE / AI-ML",
  headline: "I build AI that shows its work.",
  subline:
    "I'm a Computer Engineering & CS senior at USC, graduating in 2027. Lately that means an insight engine over 12,000 rows of supplier spend at Oraczen, entropy-based confidence scores for LLM answers, and GNN task schedulers in Prof. Krishnamachari's lab.",
} as const;

export const nav = {
  links: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Resume", href: site.resume },
} as const;

export const about = {
  heading: "About",
  body: [
    "Senior at USC studying Computer Engineering & Computer Science (graduating 2027), focused on AI/ML systems and full-stack engineering.",
    "I build LLM agents and RAG applications along with the systems plumbing underneath them — from an OS-level, local-first desktop AI agent to Milo, an investing bot that tracks your portfolio and pings you on iMessage or Telegram when a position nears its stop-loss — and I've shipped production work as a software engineering intern and AI engineer.",
  ],
  stats: [
    { value: "3.94", label: "GPA / 4.00" },
    { value: "2027", label: "B.S. CE + CS" },
    { value: "6×", label: "Dean's List" },
  ],
} as const;

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "C++", "C", "JavaScript", "TypeScript", "SQL", "MATLAB"],
  },
  {
    category: "Web",
    items: [
      "React",
      "Next.js",
      "Node.js / Express",
      "FastAPI",
      "REST / JSON",
      "HTML / CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Databases & Caching",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Qdrant",
      "LanceDB",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (EC2 · S3 · API Gateway · Amplify · IAM)",
      "GCP / Azure",
      "Docker",
      "Git / GitHub",
      "GitHub Actions (CI/CD)",
      "Linux / bash",
      "Postman",
    ],
  },
  {
    category: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "LLMs & RAG",
      "Hugging Face Transformers",
      "LangChain",
      "Prompt Engineering",
      "Neural Nets (CNN / RNN / GNN)",
      "NLP",
      "Reinforcement Learning",
      "CUDA / GPU Programming",
    ],
  },
  {
    category: "Core CS & Practices",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "System Design",
      "Concurrency & Parallelism",
      "Distributed Systems",
      "Unit Testing",
      "Agile / Scrum",
    ],
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  location?: string;
  period: string;
  current?: boolean;
  summary: string;
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "AI Engineer Intern",
    org: "Oraczen",
    period: "2025 — Present",
    current: true,
    summary:
      "Building agentic AI for procurement — a multi-tier insight engine over supplier/spend data and agent-to-agent transaction workflows.",
    tags: ["LLM Agents", "RAG", "Python"],
  },
  {
    role: "Undergraduate Researcher",
    org: "USC · Prof. Bhaskar Krishnamachari",
    period: "Sep 2025 — Present",
    current: true,
    summary:
      "Scheduling algorithms for distributed computing — HEFT-based theory plus Graph Neural Networks to predict and recommend optimal schedulers.",
    tags: ["GNNs", "Distributed Systems", "Research"],
  },
  {
    role: "Software Engineer Intern",
    org: "Publicis Sapient",
    location: "Chicago",
    period: "Jun — Aug 2025",
    summary:
      "Built an AI-powered web app with a RAG pipeline (GPT-4 + retrieval) for a client. Owned requirements, prompt engineering, testing, and the stakeholder demo. Agile.",
    tags: ["RAG", "GPT-4", "Full-Stack"],
  },
  {
    role: "Supplemental Instruction Leader, Calculus II",
    org: "USC Dornsife",
    period: "Feb 2024 — Present",
    current: true,
    summary:
      "Lead 15 hrs/week of supplemental instruction for a large Calculus II lecture.",
    tags: ["Teaching", "Leadership"],
  },
  {
    role: "Machine Learning Intern",
    org: "A3",
    period: "May — Aug 2024",
    summary:
      "Built the initial framework for a logistic multi-classification model — pitched to the Indian government — in Python, and shadowed ML engineers on a neural-network project.",
    tags: ["Python", "scikit-learn", "TensorFlow"],
  },
  {
    role: "Founder",
    org: "CarbonZero India",
    period: "Apr 2019 — Apr 2023",
    summary:
      "Founded a climate initiative to calculate and offset carbon footprints — built the website with a six-part curriculum and a footprint calculator, published weekly articles, and hosted podcasts with environmentalists.",
    tags: ["Founder", "Web", "Climate"],
  },
];

export type StackGroup = { label: string; items: string[] };

// Section order used by every project detail page:
// 1 Overview · 2 What it does · 3 How it works · 4 Stack · 5 Architecture · 6 My role
export type ProjectDetail = {
  type: string;
  oneLiner: string;
  overview: string[]; // 1 — Overview
  features: { title: string; body: string }[]; // 2 — What it does
  howItWorks: { title: string; body: string }[]; // 3 — How it works
  stackIntro: string; // 4 — Stack: a description, then the showcase
  stack: StackGroup[];
  architecture: string; // 5 — Architecture: ASCII flow in a terminal-style card
  architectureNotes: { label: string; body: string }[];
  roleDetail: string; // 6 — My role
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  status: "In progress" | "Details soon" | "Live";
  logo?: string; // shown on the detail-page hero
  cover?: string; // card thumbnail image (screenshot); falls back to logo
  links?: { label: string; href: string }[];
  detail?: ProjectDetail; // present → gets its own /projects/[slug] page
};

export const projects: Project[] = [
  {
    slug: "milo",
    title: "MILO",
    tagline: "Portfolio-watch investing bot that alerts you on iMessage / Telegram near stop-loss.",
    tags: ["AI", "Systems", "Bots"],
    status: "In progress",
  },
  {
    slug: "facet",
    title: "Facet",
    tagline: "An AI jewelry design studio — search, design, and 3D-render from a single chat.",
    tags: ["Next.js", "Bun", "Gemini", "pgvector", "Supabase"],
    status: "Live",
    logo: "/facet-logo.png",
    cover: "/facet-cover.png",
    links: [
      { label: "Live", href: "https://diamondagent.vercel.app/" },
      { label: "Code", href: "https://github.com/advayiyer7/diamondagent" },
    ],
    detail: {
      type: "Full-stack AI web app · Multimodal",
      roleDetail:
        "Sole developer — product design, full-stack implementation, AI integration, and the entire production deployment (Supabase, Railway, Vercel, Google OAuth).",
      oneLiner:
        "Upload reference photos and chat with an agent that searches your library by meaning, generates new designs with Gemini, and turns any design into a 3D model — with real accounts and per-user data isolation.",
      overview: [
        "Facet is a full-stack, multimodal AI application — a private studio where you upload jewelry reference images and then talk to an agent that finds pieces by description, generates brand-new designs, refines them conversationally, and converts any 2D render into a rotatable 3D model. Everything happens in one chat thread, with persistent per-user history.",
        "It's not a thin wrapper around one API call. A planner LLM routes each message to the right capability, semantic search runs over vector embeddings of your own library, and three different AI services are orchestrated behind a single authenticated backend.",
      ],
      features: [
        {
          title: "Semantic search",
          body: "Ask “which necklace has emeralds?” and get the matching photo back, ranked by meaning rather than keywords.",
        },
        {
          title: "Generative design",
          body: "Describe a piece — with optional structured refinements like metal, stone, and setting — and get an AI-generated image conditioned on your references.",
        },
        {
          title: "Conversational refinement",
          body: "“Make the stones bigger” edits the previous result, building variations iteratively within the thread.",
        },
        {
          title: "2D → 3D",
          body: "One click turns a generated design into a .glb model rendered in an interactive WebGL viewer.",
        },
        {
          title: "Accounts & privacy",
          body: "Email/password + Google sign-in; every user's library, chats, and designs are fully isolated.",
        },
      ],
      architecture: `Next.js (Vercel) ──auth'd fetch──▶ Bun API (Railway) ──▶ Postgres + pgvector (Supabase)
       │                                 ├──▶ Google Vertex AI  (embeddings · vision · image-gen)
  Supabase Auth                          └──▶ Meshy            (image → 3D)`,
      howItWorks: [
        {
          title: "Agentic routing",
          body: "A planner LLM classifies each turn — search / design / 3D / chat — and dispatches to the matching tool, rather than running one fixed prompt.",
        },
        {
          title: "Vector semantic search",
          body: "Reference images are embedded on upload and queried with pgvector cosine distance, scoped to each user's own library.",
        },
        {
          title: "Multimodal orchestration",
          body: "A single backend coordinates three providers — vision, text-to-image, and image-to-3D — including async polling for long-running 3D jobs.",
        },
        {
          title: "Auth & multi-tenancy",
          body: "Every route verifies a Supabase JWT and scopes data per user with ownership checks. The multi-tenant isolation was retrofitted onto a single-user prototype without leaking any cross-user access.",
        },
        {
          title: "Cross-device sign-in",
          body: "Email confirmation uses the verifyOtp token-hash flow — the default PKCE link breaks when opened on another device — alongside Google OAuth.",
        },
      ],
      stackIntro:
        "A modern, type-safe stack chosen for multimodal AI at production scale. A Bun backend orchestrates three AI providers and talks to Postgres + pgvector for semantic search; a Next.js front end renders the chat studio and an in-browser WebGL 3D viewer; and the whole system is containerized and split across Vercel and Railway with managed auth.",
      stack: [
        { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind", "react-three-fiber"] },
        { label: "Backend", items: ["Bun", "Drizzle ORM", "REST APIs"] },
        { label: "Data & Auth", items: ["Supabase", "PostgreSQL", "pgvector", "OAuth / JWT"] },
        { label: "AI", items: ["Vertex AI", "Gemini", "Generative AI", "Vector Search", "Meshy"] },
        { label: "Infra", items: ["Docker", "Railway", "Vercel"] },
      ],
      architectureNotes: [
        {
          label: "Frontend",
          body: "Next.js 15 (App Router), React 19, TypeScript, Tailwind, react-three-fiber for the 3D viewer.",
        },
        {
          label: "Backend",
          body: "Bun HTTP server, TypeScript, Drizzle ORM — verifies a Supabase JWT on every request and scopes all data by user.",
        },
        {
          label: "Data & Auth",
          body: "Supabase — managed Postgres + pgvector + authentication.",
        },
        {
          label: "AI providers",
          body: "Google Vertex AI — gemini-2.5-flash for planning/vision, gemini-embedding (3072-dim) for search, gemini-2.5-flash-image for generation; Meshy for image-to-3D.",
        },
        {
          label: "Deployment",
          body: "Dockerized backend on Railway with a persistent volume, frontend on Vercel, secrets via environment.",
        },
        {
          label: "CORS & credentials",
          body: "The API reflects any of the project's Vercel origins so preview deploys work without reconfiguration, and a Google service-account key is bridged into a file-less host via an env-var-to-file bootstrap.",
        },
      ],
    },
  },
  {
    slug: "tek",
    title: "Tek",
    tagline: "A local-first AI agent for your files — search, chat, and act on everything on your machine, fully offline.",
    tags: ["Electron", "React", "Python", "LanceDB", "ONNX"],
    status: "Live",
    logo: "/tek-logo.png",
    cover: "/tek-cover.png",
    links: [
      { label: "Download", href: "https://github.com/advayiyer7/Tek/releases/tag/v0.2.0" },
      { label: "Code", href: "https://github.com/advayiyer7/Tek" },
    ],
    detail: {
      type: "Cross-platform desktop app · Local-first AI",
      roleDetail:
        "Sole developer — I designed the trust-boundary architecture, built the local hybrid-retrieval pipeline, the Electron + Python desktop app, the eval-first test harness, and the cross-platform packaging and CI.",
      oneLiner:
        "A downloadable desktop app that indexes your folders on-device, lets you semantically search and chat with your files, and performs file actions behind a preview you approve — nothing ever leaves your machine.",
      overview: [
        "Tek is a downloadable, cross-platform desktop app — a local-first AI agent for your files. It indexes the folders you choose on-device, lets you semantically search and chat with everything you have, and performs file actions (organize, rename, dedupe, summarize) — always behind a preview you explicitly approve.",
        "Cloud assistants can't see your files, and the ones that can want to upload them. Tek's bet is that modern small models are good enough to run the whole stack locally: a 130MB embedding model, an 80MB reranker, and an optional 2GB chat LLM give you semantic search and grounded Q&A over your documents with zero network calls on your content. Privacy isn't a setting — it's the architecture.",
      ],
      features: [
        {
          title: "Index folders you pick",
          body: "Point Tek at any folders and it reads your text, code, PDFs, and docs on-device — skipping media, binaries, and junk automatically.",
        },
        {
          title: "Always up to date",
          body: "It only re-reads what changed and quietly keeps up as you add, edit, or delete files.",
        },
        {
          title: "Search by meaning or exact text",
          body: "“That note about my lease” or a literal “192.168.1.40” both surface the right file first.",
        },
        {
          title: "Chat with your files",
          body: "Ask a question and get an answer grounded in your own documents, with citations you can click to open the source.",
        },
        {
          title: "It won't make things up",
          body: "If the answer isn't in your files, Tek tells you — instead of inventing one.",
        },
        {
          title: "Take action, safely",
          body: "Dedupe, organize, rename, or summarize — always behind a preview you approve, and deletes go to the recycle bin, never gone for good.",
        },
      ],
      howItWorks: [
        {
          title: "Two searches, fused",
          body: "Tek searches by meaning (vector embeddings) and by exact text (BM25 over content and filenames) at once, then fuses the two — so a vague question and a literal string both find the right file.",
        },
        {
          title: "Reranked for precision",
          body: "A cross-encoder re-scores the top hits so the best passage wins, and its confidence floor is what lets Tek honestly say “nothing matches.”",
        },
        {
          title: "Live, incremental index",
          body: "Files are chunked and embedded once; a file watcher re-embeds only what changed, so it stays fast as your folders grow.",
        },
        {
          title: "Follow-ups that just work",
          body: "The local model rewrites follow-ups into standalone queries — “and where are the winter tires?” resolves against the conversation.",
        },
        {
          title: "Eval-first, and measured",
          body: "A committed test harness gates every change: 19/19 probes return the correct file top-1, 2/2 adversarial negatives return nothing, at ~190ms/query on CPU — identical on Windows, macOS, and Linux in CI.",
        },
      ],
      stackIntro:
        "A privacy-first desktop stack with no cloud in the loop. An Electron + React shell talks over IPC to a Python FastAPI sidecar bound to localhost; the entire AI pipeline — embeddings, reranking, and a hybrid vector + full-text store — runs on-device via ONNX (no PyTorch), and every build bundles its own Python runtime so users install nothing.",
      stack: [
        { label: "Desktop & UI", items: ["Electron 42", "React 19", "TypeScript", "Tailwind CSS"] },
        { label: "Engine", items: ["Python 3.12", "FastAPI"] },
        { label: "Retrieval & AI", items: ["bge-small (ONNX)", "MiniLM reranker", "LanceDB", "Ollama"] },
        { label: "Packaging & CI", items: ["electron-builder", "python-build-standalone", "Playwright", "GitHub Actions"] },
      ],
      architecture: `Renderer (React · sandboxed)
  Chat · Search · Library · Actions · Settings
  no network · no filesystem
        │  IPC
        ▼
Electron main  —  the only filesystem mutator
  spawns · health-checks · kills the sidecar
  executes actions only after you confirm  →  deletes go to the recycle bin
        │  local HTTP · 127.0.0.1
        ▼
Python sidecar (FastAPI · dynamic port)
  scan → extract → chunk → embed → LanceDB
  retrieval · RAG stream · file watcher · action planning
  proposes moves / renames — never executes them`,
      architectureNotes: [
        {
          label: "Electron main",
          body: "Owns the window lifecycle; spawns, health-polls, and kills the Python sidecar; routes all IPC. The only process allowed to mutate the filesystem — and only after explicit user confirmation (the action execution gate). Deletes go to the recycle bin.",
        },
        {
          label: "Renderer (React)",
          body: "Fully sandboxed — never touches the network or filesystem. Five pages (Chat, Search, Library, Actions, Settings); all traffic flows renderer → IPC → main → local HTTP.",
        },
        {
          label: "Python sidecar (FastAPI)",
          body: "Bound to 127.0.0.1 on a dynamic port, owned by main. Runs the scanner → extractor → chunker → embedder → LanceDB pipeline, retrieval, RAG streaming, the file watcher, and action planning — it proposes moves and renames but can never execute them.",
        },
        {
          label: "Safety contract",
          body: "A compromised renderer can't read files and the sidecar can't destroy anything — the entire safety boundary lives in exactly one place.",
        },
        {
          label: "Packaging",
          body: "Each installer bundles its own CPython 3.12 and bootstraps a venv on first run, so users install nothing — keeping the download ~135MB instead of ~400MB.",
        },
      ],
    },
  },
  {
    slug: "menubox-ai",
    title: "MenuBox AI",
    tagline: "Placeholder description — details soon.",
    tags: ["AI", "Product"],
    status: "Details soon",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const education = {
  heading: "Education & Coursework",
  school: "University of Southern California",
  location: "Los Angeles, CA",
  degree: "B.S. Computer Engineering and Computer Science",
  grad: "May 2027",
  gpa: "3.94 / 4.00",
  deansList:
    "Viterbi Dean's List · Fall 2023, Spring 2024, Fall 2024, Spring 2025, Fall 2025, Spring 2026",
  certifications: [
    "Machine Learning Specialization — Stanford",
    "Intro to Concurrent & Parallel Programming with GPUs — Johns Hopkins",
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Analysis of Algorithms",
    "Software Development",
    "Computer Networking",
    "Operating Systems",
    "Computer Architecture",
    "Full-Stack Web Development",
    "Embedded Systems",
    "Distributed Systems & IoT",
    "Digital Circuits / FPGA Design",
  ],
} as const;

export const contact = {
  heading: "Let's build something.",
  body: "Open to software / AI-ML internships and full-time roles (graduating 2027) — U.S. work authorized, no visa sponsorship required. The fastest way to reach me is email.",
  email: site.email,
  github: site.github,
  linkedin: site.linkedin,
} as const;
