"use client";

import { motion } from "framer-motion";
import { Heart, Cpu, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const aboutCards = [
  {
    icon: Heart,
    title: "Healthcare Impact",
    text: "Passionate about building technology that creates real-world impact—especially in healthcare and biomedical engineering.",
  },
  {
    icon: Cpu,
    title: "Engineering Mindset",
    text: "Structure first, clean implementation, and continuous improvement based on feedback and measurable results.",
  },
  {
    icon: Users,
    title: "Community Contributor",
    text: "Contributing to IEEE student communities through editorial roles and supporting student learning as a Casual Instructor.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-5 text-muted text-base leading-relaxed mb-12 text-center"
        >
          <p>
            I&apos;m passionate about building technology that creates real-world
            impact—especially in healthcare and biomedical engineering. My focus
            is on combining strong engineering fundamentals with practical
            software delivery: designing user-friendly interfaces, building
            reliable APIs, and creating machine-learning pipelines that can move
            beyond experimentation.
          </p>
          <p>
            I enjoy solving problems related to scalable systems, system
            architecture, and real-world AI workflows. I approach development
            with an engineering mindset—structure first, clean implementation,
            and continuous improvement based on feedback and measurable results.
          </p>
          <p>
            Alongside my technical work, I contribute to IEEE student communities
            through editorial roles, and I support student learning as a Casual
            Instructor for CO1010 in Computer Engineering.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {aboutCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-surface p-6 card-hover text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <card.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-heading font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
