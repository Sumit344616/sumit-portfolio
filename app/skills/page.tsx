"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { skills } from "@/data";
import { Cpu, Globe, Server, Database, Cloud, Zap } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Globe className="w-6 h-6 text-primary" />,
  backend: <Server className="w-6 h-6 text-purple-400" />,
  databases: <Database className="w-6 h-6 text-cyan-400" />,
  realtime: <Zap className="w-6 h-6 text-yellow-400" />,
  cloud: <Cloud className="w-6 h-6 text-emerald-400" />,
};

export default function SkillsPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-center">
            Technical <span className="text-gradient">Arsenal</span>
          </h1>
          <p className="text-xl text-white/60 mb-20 text-center max-w-2xl mx-auto">
            A comprehensive list of technologies, frameworks, and tools I use to build robust digital solutions.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <FadeIn key={category} delay={index * 0.1}>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 glassmorphism hover-glow h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    {categoryIcons[category] || <Cpu className="w-6 h-6" />}
                  </div>
                  <h2 className="text-2xl font-bold capitalize">{category}</h2>
                </div>

                <StaggerContainer delayChildren={0.2} staggerChildren={0.05} className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <StaggerItem key={skill}>
                      <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default block">
                        {skill}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
