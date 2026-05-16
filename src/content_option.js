import profileImage from "./assets/images/profile.jpg";

const logotext = "Sulman";

const meta = {
  title: "Sulman Azhar Qureshi",
  description:
    "Senior Software Engineer based in Berlin. Building scalable, event-driven systems at GotPhoto/fotograf.de. Specializing in TypeScript, Next.js, GraphQL, and AI-augmented engineering.",
};

const introdata = {
  title: "Sulman Azhar Qureshi",
  tagline: "Senior Software Engineer",
  animated: {
    first: "Senior Software Engineer",
    second: "Building systems at scale",
    third: "AI-augmented engineering",
  },
  description:
    "Senior Software Engineer based in Berlin, building event-driven systems and AI-augmented developer tooling at GotPhoto/fotograf.de. I focus on shipping reliable, well-architected software across the frontend, backend, and cloud.",
  your_img: profileImage,
};

const dataabout = {
  title: "About me",
  aboutme: `I'm a Senior Software Engineer based in Berlin, currently building event-driven systems and developer tooling at GotPhoto/fotograf.de. My work spans the full stack — from Next.js + GraphQL frontends to AWS-based microservices handling millions of image assets.\n\nI started my career in Lahore, Pakistan, where I joined Infaque as its first engineer. Over three years I grew with the company, eventually leading the engineering team and architecting the platform that became its flagship product — a multi-vendor payment system powering charitable organizations across North America.\n\nIn 2023 I relocated to Berlin to join GotPhoto, contributing to the migration of a legacy CakePHP platform to a modern Next.js + GraphQL architecture, the decomposition of a monolithic core into microservices, and the buildout of internal AI tooling that has measurably improved our team's velocity.\n\nI care deeply about pragmatic engineering, clear writing, and making the right tradeoffs. I'm increasingly interested in how LLM-based tooling can change the way we build software — and I get to explore that question full-time.`,
};

const worktimeline = [
  {
    jobtitle: "Senior Software Engineer",
    where: "GotPhoto / fotograf.de",
    location: "Berlin, Germany",
    date: "Oct 2023 — Present",
    link: "https://www.fotograf.de/",
    highlights: [
      "Migrating a legacy CakePHP interface to a Next.js + GraphQL architecture — improving type safety, performance, and developer velocity.",
      "Contributing to the decomposition of a monolithic core into microservices: API design, service extraction, cross-service integration.",
      "Engineering features within an event-driven AWS ecosystem (SNS/SQS/Lambda) handling millions of image assets.",
      "Building and maintaining Electron applications and Lightroom plugins for professional photography workflows.",
      "Spearheading internal AI tooling: LLM agents, Claude, and MCP-integrated coding assistants — reducing vendor reliance and accelerating delivery.",
    ],
  },
  {
    jobtitle: "Lead Developer",
    where: "Infaque",
    location: "Lahore, Pakistan",
    date: "Aug 2021 — Sep 2023",
    link: "https://infaque.com/",
    highlights: [
      "Promoted from Full Stack Developer; led engineering for a 20+ person startup as its first technical hire.",
      "Architected a multi-vendor payment gateway integrating Stripe, PayPal, and regional North American providers.",
      "Designed the platform's high-availability backbone on GCP, QLDB, and Firebase Pub/Sub.",
      "Implemented enterprise authentication (IdP + SAML) via Auth0 and Firebase.",
      "Owned hiring, mentoring, and technical roadmap; established CI/CD pipelines via GitHub Actions.",
    ],
  },
  {
    jobtitle: "Full Stack Developer",
    where: "Infaque",
    location: "Lahore, Pakistan",
    date: "Nov 2020 — Aug 2021",
    link: "https://infaque.com/",
  },
  {
    jobtitle: "Freelance Web Developer",
    where: "Upwork",
    location: "Lahore, Pakistan",
    date: "Sep 2019 — Oct 2020",
    highlights: [
      "Delivered full-stack JavaScript solutions for international clients, maintaining a 100% Job Success Score.",
      "Specialized in React + Node.js integrations across e-commerce, dashboards, and API work.",
    ],
  },
];

const skills = {
  Languages: ["TypeScript", "JavaScript (ES6+)", "PHP"],
  Frontend: ["React", "Next.js", "GraphQL", "Redux", "HTML5 / CSS3"],
  "Backend & Cloud": [
    "Node.js",
    "AWS (SNS, SQS, Lambda)",
    "Google Cloud Platform",
    "Microservices",
    "Firebase",
    "QLDB",
  ],
  "Tools & Practices": [
    "Docker",
    "Git",
    "CI/CD (GitHub Actions)",
    "Jira",
    "TDD",
  ],
  "AI-Augmented Engineering": [
    "LLM-based agents",
    "Claude",
    "MCP-integrated tooling",
    "Internal AI tooling",
  ],
};

const courses = [
  {
    title: "Front-End JavaScript Frameworks: AngularJS",
    link: "https://coursera.org/verify/S9TVBBTN3WTB",
    description: "Coursera (Nov 2018)",
  },
  {
    title: "Multiplatform Mobile App Development with Web Technologies",
    link: "https://coursera.org/verify/XD4YJU6MWF8Z",
    description: "Coursera (Nov 2018)",
  },
  {
    title: "Front-End Web UI Frameworks and Tools",
    link: "https://coursera.org/verify/8A9TJFP4DPF3",
    description: "Coursera (Nov 2018)",
  },
  {
    title: "HTML, CSS & Javascript",
    link: "https://coursera.org/verify/BUXPWJUY5NUE",
    description: "Coursera (Nov 2018)",
  },
];

// Selected work highlights (text-based, not screenshot grid)
const highlights = [
  {
    title: "Legacy CakePHP → Next.js + GraphQL migration",
    company: "GotPhoto / fotograf.de",
    period: "2023 — Present",
    summary:
      "Helping migrate a long-lived CakePHP interface to a modern Next.js + GraphQL stack while keeping production stable. Strong focus on type safety, performance, and incremental rollout.",
    stack: ["Next.js", "TypeScript", "GraphQL", "React"],
  },
  {
    title: "Event-driven image processing at scale",
    company: "GotPhoto / fotograf.de",
    period: "2023 — Present",
    summary:
      "Engineering features in an asynchronous AWS pipeline (SNS/SQS/Lambda) that processes millions of image assets — optimizing storage, retrieval, and orchestration.",
    stack: ["AWS", "SNS/SQS", "Lambda", "Node.js"],
  },
  {
    title: "Internal AI tooling initiative",
    company: "GotPhoto / fotograf.de",
    period: "2024 — Present",
    summary:
      "Spearheading internal LLM-based tooling — including MCP-integrated coding assistants — to reduce external vendor reliance and accelerate full-stack development across the engineering org.",
    stack: ["LLM agents", "Claude", "MCP", "Internal tools"],
  },
  {
    title: "Multi-vendor payment infrastructure",
    company: "Infaque",
    period: "2021 — 2023",
    summary:
      "Architected a payment gateway system integrating Stripe, PayPal, and regional North American providers — supporting diverse charitable organizations across multiple jurisdictions.",
    stack: ["Stripe", "PayPal", "Node.js", "GCP"],
  },
  {
    title: "Flagship SaaS platform launch",
    company: "Infaque",
    period: "2021 — 2023",
    summary:
      "Designed and engineered the company's flagship product end-to-end. Built on GCP with QLDB for immutable financial records and Firebase Pub/Sub for async event flows. Led the engineering team from first hire to 20+ people.",
    stack: ["GCP", "QLDB", "Firebase", "React", "Serverless"],
  },
];

const recommendations = [
  {
    quote:
      "Sulman has proven himself as an exceptional talent from the onset. Starting as a new grad developer, he swiftly mastered various platforms including React, Firebase, and Serverless programming, showcasing not just technical prowess but a profound understanding of technical architecture. Beyond his technical expertise, Sulman's leadership qualities shone when he successfully managed a team and oversaw the entire office operations.",
    name: "Fahad Qureshi",
    title: "CTO | AI Governance and ROI | Non-Profits Tech",
    relationship: "Was Sulman's mentor",
  },
  {
    quote:
      "Sulman and I collaborated for three years, during which his mastery of software engineering and leadership as a team lead shone brightly. What truly sets Sulman apart is his humility despite his vast knowledge, he remains approachable and eager for open communication. His inclusive approach fosters a harmonious team environment.",
    name: "Rida Noor",
    title: "Project Management | Customer Success",
    relationship: "Worked with Sulman on the same team",
  },
];

const contactConfig = {
  YOUR_EMAIL: "sulmanazhar10@gmail.com",
  location: "Berlin, Germany",
  description:
    "Open to interesting conversations — engineering roles, side projects, AI/tooling topics, or just hello. The fastest way to reach me is email or LinkedIn.",
};

const socialprofils = {
  github: "https://github.com/sulmanazhar2",
  linkedin: "https://www.linkedin.com/in/sulman-azhar",
  stackoverflow: "https://stackoverflow.com/users/13556091/sulman-azhar",
};

const resumeFile = "/Sulman_Qureshi_Resume.pdf";

export {
  meta,
  dataabout,
  highlights,
  worktimeline,
  skills,
  courses,
  introdata,
  contactConfig,
  socialprofils,
  recommendations,
  resumeFile,
  logotext,
};
