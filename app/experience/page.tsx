"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { experience } from "@/data";
import { Briefcase } from "lucide-react";

export default function ExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="pt-32 pb-32 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-center">
            Work <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-xl text-white/60 mb-20 text-center">
            My professional journey in software engineering.
          </p>
        </FadeIn>

        <div className="relative" ref={containerRef}>
          {/* Animated Timeline Line */}
          <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10">
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-primary via-purple-500 to-cyan-400 origin-top"
              style={{ scaleY: pathLength, height: "100%" }}
            />
          </div>

          <div className="space-y-24">
            {experience.map((exp, index) => (
              <FadeIn 
                key={exp.id} 
                delay={0.2}
                direction={index % 2 === 0 ? "right" : "left"}
                className="relative z-10"
              >
                <div className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-background border-[3px] border-primary shadow-[0_0_15px_rgba(59,130,246,0.6)] z-20">
                    <Briefcase className="w-3 h-3 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full pl-12 md:pl-0 md:w-[45%] ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors duration-300 glassmorphism hover-glow">
                      <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider text-primary mb-4">
                        {exp.duration}
                      </span>
                      <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-white/70 mb-4 font-medium">{exp.company}</h4>
                      <p className="text-white/60 text-sm leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      <ul className={`space-y-2 text-sm text-white/60 ${index % 2 === 0 ? "" : "md:flex md:flex-col md:items-end"}`}>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start max-w-sm">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span className="text-left">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
