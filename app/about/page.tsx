"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { Code2, Database, Layout, Server, Sparkles } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mb-20 leading-relaxed">
            I'm a Full Stack Engineer with ~3 years of experience building scalable SaaS platforms, real-time systems, and AI-powered applications. Specialized in backend architecture, WebSockets, and payment systems, with a strong focus on performance, scalability, and production-grade systems.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <FadeIn direction="right">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden glassmorphism">
              {/* Dummy Image placeholder since no specific one was provided */}
              <Image 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1974&auto=format&fit=crop" 
                alt="Sumit Baroliya" 
                fill 
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>
          </FadeIn>

          <StaggerContainer className="flex flex-col justify-center gap-8">
            <StaggerItem>
              <h2 className="text-3xl font-bold mb-4">My Journey</h2>
              <p className="text-white/60 leading-relaxed">
                I have a strong foundation in MERN stack development and have transitioned into advanced Full Stack roles. Over my career, I've led development on multi-tool SaaS platforms, high-frequency Bitcoin mining processing systems, and real-time trading platforms.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-white/60 leading-relaxed">
                Whether it's integrating AI-based image generation workflows, handling thousands of concurrent real-time events via Socket.IO, or optimizing REST API response times, my focus is always on delivering robust and highly optimized digital solutions.
              </p>
            </StaggerItem>

            <StaggerItem className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-2xl glassmorphism hover-glow">
                <Server className="text-primary w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">Backend Architecture</h3>
                <p className="text-sm text-white/60">Designing scalable APIs and microservices.</p>
              </div>
              <div className="p-6 rounded-2xl glassmorphism hover-glow">
                <Code2 className="text-purple-400 w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">Frontend Engineering</h3>
                <p className="text-sm text-white/60">Crafting pixel-perfect, animated user interfaces.</p>
              </div>
              <div className="p-6 rounded-2xl glassmorphism hover-glow">
                <Database className="text-cyan-400 w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">Database Design</h3>
                <p className="text-sm text-white/60">Optimizing SQL and NoSQL databases for performance.</p>
              </div>
              <div className="p-6 rounded-2xl glassmorphism hover-glow">
                <Sparkles className="text-amber-400 w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">AI Integrations</h3>
                <p className="text-sm text-white/60">Implementing LLMs and custom AI models.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}
