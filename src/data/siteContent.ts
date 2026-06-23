/** Central copy & links for Kamran Qayyum's portfolio */

export const siteLinks = {
  email: "kamranqayyum94@gmail.com",
  phoneDisplay: "+92 313 4780737",
  phoneTel: "+923134780737",
  github: "https://github.com/kamran011",
  linkedin: "https://www.linkedin.com/in/kamranqayyum94",
  mailto: "mailto:kamranqayyum94@gmail.com",
  awsVerification: "https://aws.amazon.com/verification",
} as const;

export const siteMeta = {
  name: "Kamran Qayyum",
  location: "Lahore, Pakistan",
  title: "Senior Software Engineer",
  tagline: "Angular · TypeScript · Enterprise Web · AWS",
} as const;

export const aboutSummary = `Full-stack engineer with 7+ years building enterprise-scale SaaS and AI-native applications. I work across the stack — Angular, TypeScript, RxJS, and NgRx on the frontend, Node.js and NestJS on the backend with cloud-native delivery on AWS using serverless and Lambda patterns. I integrate LLMs into production (Claude, OpenAI, Gemini) with prompt engineering, tool calling, RAG, and real-time streaming via SSE and WebSockets. I design modular architectures, mentor engineers, and ship systems with strong engineering standards. I’m also founder of Archivolt, a live AI SaaS for validated software architecture.`;

export const educationLine =
  "BS Computer Science — Virtual University of Pakistan";

export const awsCertification = {
  name: "AWS Certified Cloud Practitioner",
  issuedResume: "Jan 2024",
  validFrom: "Sept 26, 2024",
  validTo: "Sept 26, 2027",
  verificationId: "a7a9e0d5358d4028b4727d07c6d16834",
};

export type JobEntry = {
  role: string;
  company: string;
  range: string;
  yearLabel: string;
  summary: string;
};

/** Oldest → newest (timeline reads top to bottom; last entry uses NOW). */
export const jobs: JobEntry[] = [
  {
    role: "Software Engineer",
    company: "TechnoCares",
    range: "Jan 2019 – Jun 2021",
    yearLabel: "2019",
    summary:
      "Enterprise Angular platforms for automotive, insurance, and real estate—workflow UIs, dynamic forms, service-center automation; cross-functional delivery and performance focus.",
  },
  {
    role: "Software Engineer",
    company: "3S Solutions Pvt Ltd",
    range: "Jun 2021 – Mar 2022",
    yearLabel: "2021",
    summary:
      "Reusable Angular components with accessibility and performance in mind; REST APIs; lazy loading and SPA optimizations; maintainable workflows from business requirements.",
  },
  {
    role: "Software Engineer",
    company: "TenX",
    range: "Apr 2022 – Aug 2023",
    yearLabel: "2022",
    summary:
      "Built complex Angular dashboards with RxJS; migrated legacy AngularJS to modern Angular. PrimeNG and ngx-translate; REST integrations; modular architecture and code reviews.",
  },
  {
    role: "Senior Software Engineer",
    company: "ICOMMUNIX",
    range: "Aug 2023 – Mar 2026",
    yearLabel: "NOW",
    summary:
      "Architected scalable Angular 15+ apps with modular patterns and reusable UI libraries. Integrated REST and serverless Node on AWS Lambda; Cognito auth; AI assistant features; S3, CloudFront, CI/CD; CloudWatch monitoring. Mentored engineers and shaped architecture and standards.",
  },
];

export type WhatPillar = {
  title: string;
  subtitle: string;
  body: string;
  tags: string[];
};

export const whatIDoPillars: [WhatPillar, WhatPillar] = [
  {
    title: "ENTERPRISE FRONTEND",
    subtitle: "Architecture & delivery",
    body:
      "I design modular Angular applications, shared component libraries, and scalable state with RxJS and NgRx — typed APIs, performance tuning, and patterns that hold up in large codebases.",
    tags: [
      "Angular",
      "TypeScript",
      "RxJS",
      "NgRx",
      "PrimeNG",
      "Angular Material",
      "REST APIs",
      "SPA performance",
    ],
  },
  {
    title: "CLOUD & QUALITY",
    subtitle: "AWS · DevOps · standards",
    body:
      "I ship serverless Node on AWS — Lambda, Cognito, S3, CloudFront — and care about CI/CD, observability with CloudWatch, and secure, reviewable code.",
    tags: [
      "AWS Lambda",
      "Amazon Cognito",
      "S3 & CloudFront",
      "Node.js",
      "CI/CD",
      "CloudWatch",
      "Code review",
      "Agile",
    ],
  },
];

export type ProjectEntry = {
  name: string;
  industry: string;
  type: string;
  stack: string;
  description: string;
  url: string;
  image: string;
};

export const projects: ProjectEntry[] = [
  {
    name: "AI & Hospitality (AIVA)",
    industry: "Hospitality / AI Automation",
    type: "AI-Powered Smart Concierge SaaS",
    stack: "Next.js, NestJS, OpenAI GPT-4o, TanStack Query, shadcn/ui",
    description:
      "Dashboard for hospitality managers: AI concierge, guest sentiment, RAG knowledge grounding, and real-time lead capture.",
    url: "https://silchesterfarm.aivarevolution.com",
    image: "/images/projects/aiva.png",
  },
  {
    name: "Real Estate Operations (Eiight)",
    industry: "Real Estate / PropTech",
    type: "Multi-tenant operational SaaS",
    stack: "React, Node.js, PostgreSQL, Tailwind CSS, TanStack Query",
    description:
      "B2B platform replacing fragmented tools—property lifecycle workflows, revenue views, and tiered permissions.",
    url: "https://eiight.app/dashboard",
    image: "/images/projects/eiight.png",
  },
  {
    name: "Enterprise EdTech (Sibme)",
    industry: "Education",
    type: "Enterprise LMS",
    stack: "Angular, Node.js, Ruby on Rails, PostgreSQL",
    description:
      "High-concurrency coaching and collaboration—core features, secure training workflows, and audit-ready reporting.",
    url: "https://sibme.com",
    image: "/images/projects/sibme.png",
  },
  {
    name: "Customer Experience (Resolvecx)",
    industry: "Customer Service / Analytics",
    type: "Real-time CX monitoring",
    stack: "Angular, Node.js, MongoDB, WebSockets",
    description:
      "Real-time monitoring of interactions and sentiment across support channels.",
    url: "https://prod.resolvecx.cloud",
    image: "/images/projects/resolvecx.png",
  },
  {
    name: "Agri-Logistics (Ancera)",
    industry: "Agriculture / Logistics",
    type: "Analytics & reporting",
    stack: "Angular, Node.js, PostgreSQL",
    description:
      "Large-scale agri-logistics reporting—supply chain efficiency and biological monitoring.",
    url: "https://ie-uat.ancera.com",
    image: "/images/projects/ancera.png",
  },
  {
    name: "Jawad Bakeries CMMS",
    industry: "Manufacturing / F&B",
    type: "Computerized maintenance (CMMS)",
    stack: "Angular, Node.js, SQL Server",
    description:
      "Industrial maintenance and assets—scheduling, tracking, and multi-location inventory (equipment downtime reduction).",
    url: "https://cmms.jawadbakeries.com",
    image: "/images/projects/jbms.png",
  },
  {
    name: "Omni-Channel (Omningage)",
    industry: "Telecommunications / Contact center",
    type: "Cloud contact center desktop",
    stack: "React, Node.js, AWS Lambda & Connect, Twilio",
    description:
      "Agent desktop for omni-channel interactions with Amazon Connect and Twilio.",
    url: "https://omni-dev.omningage.click",
    image: "/images/projects/omningage.png",
  },
  {
    name: "Archivolt",
    industry: "Developer Tools / AI",
    type: "AI-Powered System Design SaaS",
    stack:
      "Next.js 15, NestJS, Anthropic Claude API, PostgreSQL (Supabase), Polar.sh, Vercel",
    description:
      "A live AI SaaS that generates validated software architecture blueprints from plain-English descriptions. Includes Mermaid.js diagrams, tech-stack analysis, failure-mode detection, and subscription billing.",
    url: "https://archivolt.dev",
    image: "/images/projects/archivolt.png",
  },
];
