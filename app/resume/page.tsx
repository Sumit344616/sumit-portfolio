"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Download, FileText, GraduationCap } from "lucide-react";

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
                <span>sadhusumit30@gmail.com</span>
                <span className="hidden md:inline">•</span>
                <span>+91 6353899544</span>
                <span className="hidden md:inline">•</span>
                <span>Ahmedabad, India</span>
                <span className="hidden md:inline">•</span>
                <a href="https://github.com/Sumit344616" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">github.com/Sumit344616</a>
                <span className="hidden md:inline">•</span>
                <a href="https://linkedin.com/in/sumit-baroliya-983041216" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">linkedin.com/in/sumit-baroliya</a>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-12">
              <section>
                <h3 className="text-xl font-bold border-l-4 border-primary pl-4 mb-6 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-white/50" /> Profile
                </h3>
                <p className="text-white/70 leading-relaxed pl-4">
                  Full Stack Engineer with ~3 years of experience building scalable SaaS platforms, real-time systems, and AI-powered applications. Specialized in backend architecture, WebSockets, and payment systems, with a strong focus on performance, scalability, and production-grade systems.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold border-l-4 border-purple-500 pl-4 mb-6 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-white/50" /> Experience
                </h3>
                <div className="space-y-8 pl-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">Unikwork</h4>
                      <span className="text-sm text-primary whitespace-nowrap ml-4">Oct 2025 - Mar 2026</span>
                    </div>
                    <p className="text-white/70 mb-2 text-sm italic">Full Stack Engineer</p>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-white/60">
                      <li>Developed real-time backend systems using Socket.IO handling thousands of concurrent real-time events.</li>
                      <li>Built backend solutions for property and diamond trading platforms.</li>
                      <li>Engineered high-frequency processing systems for Bitcoin mining.</li>
                      <li>Integrated AI-based image generation via external APIs.</li>
                      <li>Improved API response time by ~30% through query optimization.</li>
                      <li>Implemented IAP webhook systems for Android & iOS.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">Vasundhara Infotech</h4>
                      <span className="text-sm text-primary whitespace-nowrap ml-4">Feb 2024 - Sep 2025</span>
                    </div>
                    <p className="text-white/70 mb-2 text-sm italic">Full Stack Developer</p>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-white/60">
                      <li>Built and scaled MERN-based SaaS and e-commerce platforms used in production environments.</li>
                      <li>Designed and developed high-performance REST APIs for scalable applications.</li>
                      <li>Implemented authentication systems, social logins, and push notifications (Firebase).</li>
                      <li>Built webhook-based payment systems supporting mobile platforms (iOS & Android).</li>
                      <li>Developed real-time chat systems using WebSockets, improving user interaction.</li>
                      <li>Led a team of 3–4 developers, delivering multiple production-ready applications end-to-end.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">Sourceved Technologies</h4>
                      <span className="text-sm text-primary whitespace-nowrap ml-4">May 2023 - Feb 2024</span>
                    </div>
                    <p className="text-white/70 mb-2 text-sm italic">MERN Stack Developer</p>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-white/60">
                      <li>Worked on backend APIs and full-stack features in production applications.</li>
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
                    <strong className="text-white block mb-1">Languages & Frameworks:</strong>
                    <span className="text-white/60">Node.js, Express.js, React.js, Next.js, JavaScript</span>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Real-time & Systems:</strong>
                    <span className="text-white/60">Socket.IO, Webhooks, REST APIs, Authentication</span>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Databases:</strong>
                    <span className="text-white/60">MongoDB, MySQL, PostgreSQL</span>
                  </div>
                  <div>
                    <strong className="text-white block mb-1">Tools & Platforms:</strong>
                    <span className="text-white/60">Firebase, Git, GitHub, VS Code, Cursor</span>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold border-l-4 border-green-400 pl-4 mb-6 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-white/50" /> Education
                </h3>
                <div className="space-y-4 pl-4">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-lg">C.U. Shah University</h4>
                      <span className="text-sm text-primary whitespace-nowrap ml-4">2020 - 2023</span>
                    </div>
                    <p className="text-white/70 text-sm">B.IT — Information Technology</p>
                    <p className="text-white/60 text-sm mt-1">CGPA: 8.45</p>
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
