"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Download, FileText } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                My <span className="text-gradient">Resume</span>
              </h1>
              <p className="text-xl text-white/60">
                A detailed overview of my experience, skills, and education.
              </p>
            </div>
            <MagneticButton>
              <a href="/resume.pdf" download className="flex items-center">
                <Download className="mr-2 w-4 h-4" /> Download PDF
              </a>
            </MagneticButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 glassmorphism">
            {/* Header */}
            <div className="border-b border-white/10 pb-8 mb-8 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Sumit Baroliya</h2>
              <p className="text-primary text-lg mb-4">Full Stack Engineer</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-white/60">
                <span>hello@sumitbaroliya.dev</span>
                <span className="hidden md:inline">•</span>
                <span>India</span>
                <span className="hidden md:inline">•</span>
                <a href="#" className="hover:text-primary transition-colors">github.com/sumit</a>
                <span className="hidden md:inline">•</span>
                <a href="#" className="hover:text-primary transition-colors">linkedin.com/in/sumit</a>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-12">
              <section>
                <h3 className="text-xl font-bold border-l-4 border-primary pl-4 mb-6 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-white/50" /> Profile
                </h3>
                <p className="text-white/70 leading-relaxed pl-4">
                  Results-driven Full Stack Engineer with extensive experience in building scalable SaaS platforms, real-time communication systems, and integrating AI models. Proven track record of optimizing backend architectures and delivering premium frontend experiences.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold border-l-4 border-purple-500 pl-4 mb-6 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-white/50" /> Experience
                </h3>
                <div className="space-y-8 pl-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">Sourceved Technologies</h4>
                      <span className="text-sm text-primary">2023 - Present</span>
                    </div>
                    <p className="text-white/70 mb-2 text-sm italic">Full Stack Engineer</p>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-white/60">
                      <li>Engineered real-time systems using WebSockets for a high-traffic trading platform.</li>
                      <li>Optimized API response times by 40% utilizing Redis caching and database indexing.</li>
                      <li>Mentored junior developers and established automated CI/CD pipelines.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">Vasundhara Infotech</h4>
                      <span className="text-sm text-primary">2021 - 2023</span>
                    </div>
                    <p className="text-white/70 mb-2 text-sm italic">Backend Developer</p>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-white/60">
                      <li>Designed and deployed microservices architecture using Node.js and Docker.</li>
                      <li>Integrated OpenAI API for automated content generation workflows.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold border-l-4 border-cyan-400 pl-4 mb-6 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-white/50" /> Skills
                </h3>
                <div className="pl-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-white block mb-1">Languages & Frontend:</strong>
                    <span className="text-white/60">JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Framer Motion</span>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Backend & Database:</strong>
                    <span className="text-white/60">Node.js, Express.js, MongoDB, PostgreSQL, Redis, Socket.IO</span>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Tools & Cloud:</strong>
                    <span className="text-white/60">Git, Docker, AWS, Firebase, CI/CD</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
