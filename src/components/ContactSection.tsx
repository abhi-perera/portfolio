"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Globe,
  ArrowRight,
  Dna,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const links = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/abhi-perera",
    handle: "abhi-perera",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/uduli-abhimani-b31329355/",
    handle: "Uduli Abhimani",
  },
  {
    icon: Globe,
    label: "CNE Portfolio",
    href: "https://www.thecn.com/HP640",
    handle: "HP640",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="If you're working on a project involving scalable web systems, AI/ML integration, or biomedical software, I'd love to connect. I'm open to remote opportunities, startup collaborations, and freelance projects."
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Dna className="h-6 w-6 text-primary" />
            <span className="text-2xl md:text-3xl font-bold gradient-text">
              Let&apos;s Build Something
            </span>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-4 sm:grid-cols-3"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-6 card-hover text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <link.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-heading font-semibold text-sm">
                  {link.label}
                </p>
                <p className="text-xs text-muted mt-0.5">{link.handle}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
