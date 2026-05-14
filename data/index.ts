export const projects = [
  {
    id: 1,
    title: "MyDevToolHub",
    description: "A multi-tool SaaS platform solving real-world developer workflows. Features include a scalable backend architecture, AI image generation using KIE API, real-time processing pipelines, and subscription billing workflows.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "Node.js", "AI API", "Stripe"],
    liveUrl: "https://www.mydevtoolhub.com",
    githubUrl: "https://github.com/Sumit344616",
    category: "SaaS",
  },
  // Placeholders for other projects can remain or be replaced with generic ones
  {
    id: 2,
    title: "Property & Diamond Trading Platform",
    description: "Backend solutions for property and diamond trading platforms featuring high-frequency processing and secure transactions.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    tags: ["Node.js", "Express", "PostgreSQL", "Socket.IO"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sumit344616",
    category: "Backend",
  },
  {
    id: 3,
    title: "Bitcoin Mining Processing System",
    description: "Engineered high-frequency processing systems for Bitcoin mining operations.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop",
    tags: ["Node.js", "REST APIs", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sumit344616",
    category: "Backend",
  },
  {
    id: 4,
    title: "E-commerce & SaaS Platforms",
    description: "Scaled MERN-based SaaS and e-commerce platforms used in production environments, featuring robust authentication and webhook-based payments.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Firebase"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sumit344616",
    category: "Full Stack",
  }
];

export const experience = [
  {
    id: 1,
    company: "Unikwork",
    role: "Full Stack Engineer",
    duration: "Oct 2025 - Mar 2026",
    description: "Developed real-time backend systems using Socket.IO handling thousands of concurrent real-time events. Built backend solutions for property and diamond trading platforms.",
    achievements: [
      "Engineered high-frequency processing systems for Bitcoin mining.",
      "Integrated AI-based image generation via external APIs.",
      "Improved API response time by ~30% through query optimization.",
      "Implemented IAP webhook systems for Android & iOS."
    ],
  },
  {
    id: 2,
    company: "Vasundhara Infotech",
    role: "Full Stack Developer",
    duration: "Feb 2024 - Sep 2025",
    description: "Built and scaled MERN-based SaaS and e-commerce platforms used in production environments. Led a team of 3–4 developers, delivering multiple production-ready applications end-to-end.",
    achievements: [
      "Designed and developed high-performance REST APIs for scalable applications.",
      "Implemented authentication systems, social logins, and push notifications using Firebase.",
      "Built webhook-based payment systems supporting iOS & Android platforms.",
      "Developed real-time chat systems using WebSockets, improving user interaction."
    ],
  },
  {
    id: 3,
    company: "Sourceved Technologies",
    role: "MERN Stack Developer",
    duration: "May 2023 - Feb 2024",
    description: "Worked on backend APIs and full-stack features in production applications.",
    achievements: [
      "Developed and optimized RESTful APIs for improved performance.",
      "Integrated frontend features seamlessly with the backend architecture."
    ],
  },
];

export const skills = {
  frontend: ["Next.js", "React.js", "JavaScript"],
  backend: ["Node.js", "Express.js", "REST APIs"],
  databases: ["MongoDB", "PostgreSQL", "MySQL"],
  realtime: ["Socket.IO", "Webhooks"],
  tools: ["Firebase", "Git", "GitHub", "VS Code", "Cursor"],
};
