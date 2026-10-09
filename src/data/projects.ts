import type { Project, ProjectSlug } from "@/types";

export const projects: Project[] = [
  {
    slug: "expenzo",
    number: "01",
    name: "EXPENZO",
    category: "AI-POWERED EXPENSE TRACKER",
    title: "AI-powered expense tracking, built as a full-stack product.",
    description:
      "A full-stack expense tracker combining OCR bill scanning, AI categorization, automation workflows, and containerized deployment.",
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "n8n",
    ],
    features: ["OCR bill scanning", "AI categorization", "n8n automation", "Docker Compose", "CI/CD"],
    githubUrl: "https://github.com/diptanil98",
    liveUrl: "",
    featured: true,
    caseStudy: {
      overview:
        "Expenzo is a full-stack expense tracker that turns bills into categorized transactions with OCR and AI, and wraps the whole thing in automation and containerized deployment.",
      problem:
        "Logging expenses by hand is tedious, so it gets skipped. Receipts pile up and spending stays uncategorized.",
      solution:
        "Scan a bill with OCR, let AI suggest a category, and push the rest through n8n automation workflows. The app ships with Docker Compose and a GitHub Actions pipeline.",
      architecture: [
        "React.js + TypeScript client",
        "Node.js + Express.js REST API",
        "MongoDB for persistence",
        "n8n for automation workflows",
        "Docker Compose for local and deployed environments",
        "GitHub Actions for CI/CD",
      ],
      challenges:
        "Connecting OCR, AI categorization and automation workflows into one reliable flow, and keeping the stack reproducible with containers.",
    },
  },
  {
    slug: "shophub",
    number: "02",
    name: "SHOPHUB",
    category: "FULL-STACK E-COMMERCE",
    title: "A full-stack ecommerce experience with real payments.",
    description:
      "A full-stack ecommerce application with authentication, products, cart management, Razorpay payments, PDF receipts, and REST APIs.",
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "JWT",
      "Tailwind CSS",
      "jsPDF",
    ],
    features: ["Authentication", "Product catalogue", "Cart management", "Razorpay payments", "PDF receipts"],
    githubUrl: "https://github.com/diptanil98",
    liveUrl: "",
    featured: true,
    caseStudy: {
      overview:
        "ShopHub is a full-stack ecommerce application covering the full purchase path: sign-in, browsing products, managing a cart, paying through Razorpay and downloading a PDF receipt.",
      problem:
        "A storefront only matters if the whole path works end to end, from account to payment to proof of purchase.",
      solution:
        "A React and TypeScript front end talks to an Express REST API. JWT handles authentication, Razorpay handles payments, and jsPDF generates receipts.",
      architecture: [
        "React.js + TypeScript + Tailwind CSS client",
        "Node.js + Express.js REST API",
        "MongoDB for users, products and orders",
        "JWT-based authentication",
        "Razorpay for payments",
        "jsPDF for receipts",
      ],
      challenges:
        "Wiring a real payment provider into the order flow and keeping cart, order and receipt state consistent.",
    },
  },
  {
    slug: "fitbuddy",
    number: "03",
    name: "FITBUDDY",
    category: "AI FITNESS & NUTRITION",
    title: "Fitness and nutrition powered by browser-based AI.",
    description:
      "An AI-powered fitness and nutrition web application using TensorFlow.js for real-time food recognition.",
    technologies: ["React.js", "Firebase", "Tailwind CSS", "TensorFlow.js", "API Ninjas"],
    features: ["Food recognition", "Nutrition data", "Calorie tracking", "Workout recommendations"],
    highlight: "~85% food recognition accuracy",
    githubUrl: "https://github.com/diptanil98",
    liveUrl: "",
    featured: true,
    caseStudy: {
      overview:
        "FitBuddy is an AI-powered fitness and nutrition web app. It recognizes food in the browser with TensorFlow.js and pairs it with nutrition data.",
      problem:
        "Tracking what you eat usually means searching and typing. Recognizing food from an image removes most of that friction.",
      solution:
        "TensorFlow.js runs food recognition directly in the browser, API Ninjas supplies nutrition data, and Firebase backs the app. Reported accuracy is around 85%.",
      architecture: [
        "React.js + Tailwind CSS client",
        "TensorFlow.js for in-browser food recognition",
        "API Ninjas for nutrition data",
        "Firebase for backend services",
      ],
      challenges:
        "Running recognition in the browser in real time while keeping the interface responsive.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: ProjectSlug) {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}
