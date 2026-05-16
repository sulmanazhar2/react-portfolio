import profileImage from "./assets/images/profile.jpg";

const logotext = "Sulman";

const meta = {
  title: "Sulman Azhar Qureshi",
  description:
    "Senior Software Engineer based in Berlin. Building scalable distributed systems and AI-augmented developer tooling. Specializing in TypeScript, React, Next.js, GraphQL, and AWS.",
};

const introdata = {
  title: "Sulman Azhar Qureshi",
  tagline: "Senior Software Engineer",
  description:
    "Senior Software Engineer based in Berlin, building distributed systems and AI-augmented developer tooling at GotPhoto/fotograf.de. I focus on shipping reliable, well-architected software across the frontend, backend, and cloud.",
  shortBio:
    "I've spent the past 6+ years building full-stack products — from founding engineer at a startup in Pakistan to senior engineer at a scale-up in Berlin. I'm currently focused on frontend modernization, microservices decomposition, and building AI-powered internal tooling that makes engineering teams faster.",
  your_img: profileImage,
};

const dataabout = {
  title: "About me",
  aboutme: `I'm a Senior Software Engineer based in Berlin, currently working on distributed systems, frontend modernization, and AI-augmented developer tooling at GotPhoto/fotograf.de.\n\nMy work spans the full stack — from React and Next.js frontends with GraphQL to event-driven microservices on AWS processing millions of records. I contribute to architecture decisions, participate in on-call rotations, and actively use test-driven development and code reviews to maintain quality across a fast-moving codebase.\n\nBefore Berlin, I spent three years at Infaque in Lahore, Pakistan — joining as the first engineer, eventually leading the engineering team, and architecting the multi-vendor payment platform that became the company's flagship product. I built the core infrastructure on GCP with serverless architectures, designed enterprise auth flows (IdP, SAML, Auth0), and managed the team from hiring through delivery.\n\nI care about pragmatic engineering, clear communication, and making the right tradeoffs. I'm increasingly interested in how LLM-based tooling and AI-augmented workflows can change the way we build and ship software.`,
};

const worktimeline = [
  {
    jobtitle: "Senior Software Engineer",
    where: "GotPhoto / fotograf.de",
    location: "Berlin, Germany",
    date: "Oct 2023 — Present",
    link: "https://www.fotograf.de/",
    highlights: [
      "Contributing to a large-scale frontend modernization from a legacy PHP monolith to a modern React/Next.js + GraphQL architecture, with strong focus on type safety, performance, and incremental rollout.",
      "Participating in the decomposition of a monolithic core into microservices — API design, service extraction strategies, and cross-service integration using event-driven patterns.",
      "Engineering features within an asynchronous, event-driven AWS ecosystem (SNS, SQS, Lambda) handling millions of records, with focus on reliability, idempotency, and observability.",
      "Employing test-driven development (TDD) and actively participating in code reviews to ensure software quality and maintain high standards across the team.",
      "Building and maintaining specialized client-side software including Electron applications and Lightroom plugins for professional photography workflows.",
      "Spearheading internal AI tooling initiatives — building LLM-based agents and MCP-integrated coding assistants that reduce external vendor reliance and accelerate full-stack development.",
      "Contributing to CI/CD pipeline improvements and participating in on-call rotations to ensure system reliability and rapid incident resolution.",
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
      "Architected a multi-vendor payment gateway system integrating Stripe, PayPal, and regional North American providers for charitable organizations.",
      "Designed the platform's high-availability backbone on GCP with QLDB for immutable financial records and Firebase Pub/Sub for async event flows.",
      "Implemented enterprise-grade authentication and identity solutions using IdP and SAML via Auth0 and Firebase.",
      "Directed the end-to-end recruitment process, assessment, and onboarding of the engineering team while mentoring junior developers.",
      "Established and managed CI/CD pipelines using GitHub Actions, ensuring consistent and automated deployment cycles.",
      "Managed technical roadmaps and task distribution via Jira, translating complex client requirements into scalable technical specifications.",
    ],
  },
  {
    jobtitle: "Full Stack Developer",
    where: "Infaque",
    location: "Lahore, Pakistan",
    date: "Nov 2020 — Aug 2021",
    link: "https://infaque.com/",
    highlights: [
      "Joined as the first employee, architecting the initial codebase and scaling technical infrastructure to support the company's growth.",
      "Managed and trained a small team while working on new applications with evolving requirements across multiple client projects.",
    ],
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
    "Rapid prototyping",
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

// Selected work highlights — pattern-focused, confidentiality-safe
const highlights = [
  {
    title: "Frontend modernization at scale",
    company: "GotPhoto / fotograf.de",
    period: "2023 — Present",
    summary:
      "Contributing to a large-scale frontend migration from a legacy PHP monolith to a modern React/Next.js + GraphQL architecture. Focus on type safety, incremental rollout, and maintaining production stability throughout a multi-year transition.",
    stack: ["Next.js", "TypeScript", "GraphQL", "React"],
  },
  {
    title: "Distributed systems & high-volume data pipelines",
    company: "GotPhoto / fotograf.de",
    period: "2023 — Present",
    summary:
      "Engineering features within an asynchronous, event-driven microservices architecture (AWS SNS/SQS/Lambda) processing millions of records. Focus on reliability, idempotency, observability, and efficient orchestration across service boundaries.",
    stack: ["AWS", "SNS/SQS", "Lambda", "Node.js", "Microservices"],
  },
  {
    title: "AI-augmented developer tooling",
    company: "GotPhoto / fotograf.de",
    period: "2024 — Present",
    summary:
      "Spearheading internal developer tooling built on LLM-based agents and MCP-integrated coding assistants. Reducing external vendor reliance and measurably accelerating full-stack development, debugging, and rapid prototyping across the engineering organization.",
    stack: ["LLM agents", "Claude", "MCP", "Internal tooling"],
  },
  {
    title: "Multi-vendor payment infrastructure",
    company: "Infaque",
    period: "2021 — 2023",
    summary:
      "Architected a payment gateway system integrating Stripe, PayPal, and regional North American providers — supporting diverse charitable organizations across multiple jurisdictions with complex compliance requirements.",
    stack: ["Stripe", "PayPal", "Node.js", "GCP"],
  },
  {
    title: "Flagship SaaS platform — founding engineer to team lead",
    company: "Infaque",
    period: "2020 — 2023",
    summary:
      "Designed and engineered the company's flagship product end-to-end as the first hire. Built on GCP with QLDB for immutable financial records and Firebase Pub/Sub for async event flows. Grew the team from 1 to 20+ engineers, owning hiring, mentoring, and technical roadmap.",
    stack: ["GCP", "QLDB", "Firebase", "React", "Serverless", "Auth0"],
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
