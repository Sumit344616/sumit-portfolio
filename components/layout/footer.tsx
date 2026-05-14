import Link from "next/link";
import { Mail } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/icons";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-background/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white">
            Sumit<span className="text-primary">.dev</span>
          </Link>
          <p className="text-sm text-white/60">
            Building scalable SaaS platforms and real-time systems.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Sumit344616"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-primary/20 transition-all hover-glow"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/sumit-baroliya-983041216"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-primary/20 transition-all hover-glow"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:sadhusumit30@gmail.com"
            className="p-2 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-primary/20 transition-all hover-glow"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-sm text-white/40">
        <p>© {new Date().getFullYear()} Sumit Baroliya. All rights reserved.</p>
      </div>
    </footer>
  );
}
