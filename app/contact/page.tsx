"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Copy, Mail, MapPin, Send, Check } from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const email = "sadhusumit30@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-center">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-white/60 mb-20 text-center max-w-2xl mx-auto">
            Have a project in mind, looking for a developer, or just want to say hi? I'd love to hear from you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <FadeIn direction="right">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-white/60 mb-8 leading-relaxed">
                  I'm currently available for freelance projects and open to full-time opportunities. Feel free to reach out through the form or contact me directly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 glassmorphism">
                  <div className="p-4 rounded-xl bg-primary/20 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white/50 mb-1">Email</p>
                    <p className="font-medium">{email}</p>
                  </div>
                  <button 
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 glassmorphism">
                  <div className="p-4 rounded-xl bg-purple-500/20 text-purple-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Location</p>
                    <p className="font-medium">Ahmedabad, India</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white/5 border border-white/10 glassmorphism space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/20"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/20"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <MagneticButton 
                type="submit" 
                className="w-full py-4 flex justify-center mt-4" 
                disabled={formStatus !== "idle"}
              >
                {formStatus === "idle" && <span className="flex items-center">Send Message <Send className="ml-2 w-4 h-4" /></span>}
                {formStatus === "submitting" && <span className="flex items-center"><div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" /> Sending...</span>}
                {formStatus === "success" && <span className="flex items-center text-green-400">Message Sent! <Check className="ml-2 w-4 h-4" /></span>}
              </MagneticButton>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
