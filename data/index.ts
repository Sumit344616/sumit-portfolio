export const projects = [
  {
    id: 1,
    title: "MyDevToolHub",
    description: "A comprehensive hub for developer tools, offering quick access to formatting, linting, and encoding utilities in one place.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "AI Image Generation Platform",
    description: "An advanced platform for generating high-quality images using custom AI models with real-time progress tracking.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB", "Socket.IO"],
    liveUrl: "#",
    githubUrl: "#",
    category: "AI",
  },
  {
    id: 3,
    title: "Real-time Chat System",
    description: "A highly scalable, real-time communication platform with support for group chats, media sharing, and read receipts.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    tags: ["Next.js", "Express", "Socket.IO", "PostgreSQL", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Real-time",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    description: "A premium analytics dashboard for SaaS founders to track MRR, user churn, and engagement metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind", "Recharts", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    category: "SaaS",
  },
  {
    id: 5,
    title: "Payment System",
    description: "A robust and secure payment processing system integrated with Stripe for seamless transactions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop",
    tags: ["Node.js", "Stripe API", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Backend",
  },
  {
    id: 6,
    title: "Property Trading Platform",
    description: "A decentralized platform for trading digital properties and real estate assets securely.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    tags: ["Next.js", "Web3.js", "Solidity", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web3",
  },
];

export const experience = [
  {
    id: 1,
    company: "Sourceved Technologies",
    role: "Full Stack Engineer",
    duration: "2023 - Present",
    description: "Leading the development of highly scalable SaaS applications. Engineered real-time systems using WebSockets, integrated complex payment gateways, and architected backend microservices to support high traffic.",
    achievements: [
      "Optimized API response times by 40% using Redis caching.",
      "Implemented a real-time notification system handling 10k+ concurrent users.",
      "Mentored junior developers and established CI/CD pipelines."
    ],
  },
  {
    id: 2,
    company: "Vasundhara Infotech",
    role: "Backend Developer",
    duration: "2021 - 2023",
    description: "Focused on building robust server-side applications, designing database schemas, and integrating third-party AI APIs.",
    achievements: [
      "Designed and deployed a microservice architecture using Node.js and Docker.",
      "Integrated OpenAI API for automated content generation features.",
      "Migrated legacy databases to PostgreSQL with zero downtime."
    ],
  },
  {
    id: 3,
    company: "Unikwork",
    role: "Frontend Developer",
    duration: "2020 - 2021",
    description: "Developed interactive, responsive, and performance-optimized web applications.",
    achievements: [
      "Built dynamic UI components using React and Framer Motion.",
      "Improved Lighthouse performance scores from 65 to 98.",
      "Collaborated closely with designers to implement pixel-perfect layouts."
    ],
  },
];

export const skills = {
  frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  realtime: ["Socket.IO", "WebSockets"],
  cloud: ["Firebase", "AWS", "Docker", "CI/CD"],
};
