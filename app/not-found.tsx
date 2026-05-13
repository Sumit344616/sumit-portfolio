"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container px-6 relative z-10 text-center flex flex-col items-center">
        <FadeIn>
          <h1 className="text-[150px] md:text-[250px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 mt-8">
            Page Not <span className="text-gradient">Found</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-lg mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <MagneticButton>
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 w-5 h-5" /> Back to Home
            </Link>
          </MagneticButton>
        </FadeIn>
      </div>
    </div>
  );
}
