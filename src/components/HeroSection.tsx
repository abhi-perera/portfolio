"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FolderOpen, Activity, Dna, Microscope, HeartPulse } from "lucide-react";

const highlights = [
  "Next.js",
  "React",
  "Django",
  "TensorFlow",
  "Machine Learning",
  "Biomedical Engineering",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large glowing orb */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />

        {/* Floating icons */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] text-primary/15"
        >
          <Dna className="h-20 w-20" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] left-[10%] text-accent/10"
        >
          <Microscope className="h-16 w-16" />
        </motion.div>
        <motion.div
          animate={{ y: [-8, 12, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[8%] text-primary/10"
        >
          <HeartPulse className="h-14 w-14" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        {/* Activity pulse badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-8"
        >
          <Activity className="h-3.5 w-3.5 text-primary animate-pulse" />
          <span className="text-xs font-medium text-primary tracking-wide uppercase">
            Open to Opportunities
          </span>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 120 }}
          className="mx-auto mb-8"
        >
          <div className="relative mx-auto h-36 w-36 sm:h-44 sm:w-44 rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-primary">
            <div className="h-full w-full rounded-full overflow-hidden border-4 border-background">
              <Image
                src="/pic.jpg"
                alt="H.M.U. Abhimani Perera"
                width={176}
                height={176}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping opacity-20" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="text-heading">H.M.U. </span>
          <span className="gradient-text">Abhimani</span>
          <span className="text-heading"> Perera</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-primary font-medium mb-6"
        >
          Computer Engineering Undergraduate | Full-Stack SaaS &amp; AI for
          Biomedical Applications
        </motion.p>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto max-w-2xl text-muted leading-relaxed mb-10 text-base md:text-lg"
        >
          I&apos;m a Computer Engineering undergraduate at the University of Peradeniya
          (GPA&nbsp;3.5), building scalable web systems and machine-learning
          solutions with a biomedical focus. I work across the stack—from modern
          Next.js/React interfaces and Django APIs to TensorFlow model
          development—turning research ideas into practical, deployable software.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:scale-[1.02]"
          >
            Let&apos;s Build Something
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-muted hover:text-primary hover:border-primary/40 transition-all"
          >
            <FolderOpen className="h-4 w-4" />
            View Projects
          </a>
        </motion.div>

        {/* Highlight badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {highlights.map((h) => (
            <span
              key={h}
              className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted tracking-wide"
            >
              {h}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
