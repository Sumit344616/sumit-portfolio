"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { projects, skills } from "@/data";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Grid & Orbs */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
          <StaggerContainer className="flex flex-col items-center max-w-4xl">
            <StaggerItem>
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Available for new opportunities
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
                Hi, I'm <span className="text-gradient">Sumit</span><br />
                Full Stack Engineer
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed">
                Building scalable SaaS platforms, real-time systems, and AI-powered applications with modern technologies and clean architecture.
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <Link href="/projects" className="flex items-center">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </MagneticButton>
              <MagneticButton variant="secondary">
                <a href="/resume" className="flex items-center">
                  <Download className="mr-2 w-4 h-4" /> Download Resume
                </a>
              </MagneticButton>
            </StaggerItem>

            <StaggerItem className="flex items-center gap-6 mt-12">
              <a href="#" className="text-white/50 hover:text-white transition-colors hover-glow p-2"><Github /></a>
              <a href="#" className="text-white/50 hover:text-primary transition-colors hover-glow p-2"><Linkedin /></a>
              <a href="#" className="text-white/50 hover:text-purple-400 transition-colors hover-glow p-2"><Mail /></a>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-12 px-6 items-center"
        >
          {[...skills.frontend, ...skills.backend, ...skills.frontend, ...skills.backend].map((tech, i) => (
            <span key={i} className="text-2xl font-bold text-white/20 tracking-wider">
              {tech.toUpperCase()}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 container mx-auto px-6">
        <FadeIn>
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Work</h2>
              <p className="text-white/60">A selection of my recent projects.</p>
            </div>
            <Link href="/projects" className="hidden md:flex items-center text-primary hover:text-primary/80 transition-colors">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1} direction="up">
              <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/30 transition-colors duration-500">
                <div className="aspect-video w-full overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-80" />
                </div>
                <div className="p-8 absolute bottom-0 w-full">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-white/60 line-clamp-2">{project.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Let's build something <span className="text-gradient">amazing</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
              Currently available for freelance opportunities and full-time roles. If you're looking for a developer to bring your ideas to life, I'm just an email away.
            </p>
            <MagneticButton size="lg">
              <Link href="/contact" className="flex items-center">
                Get In Touch <Mail className="ml-2 w-5 h-5" />
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
