"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Brain, Wrench, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Python", "C", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Layers,
    title: "Frameworks & Technologies",
    skills: [
      "Next.js",
      "React",
      "Django",
      "Flutter",
      "REST API Development",
    ],
  },
  {
    icon: Brain,
    title: "AI / Machine Learning",
    skills: [
      "TensorFlow",
      "ML Model Development",
      "Classification & Regression",
      "Preprocessing & Feature Engineering",
      "Evaluation Metrics",
    ],
  },
  {
    icon: Wrench,
    title: "Engineering Foundations",
    skills: [
      "Data Structures & Algorithms",
      "Algorithm Analysis",
      "Linear Algebra",
      "Structured Problem Solving",
    ],
  },
  {
    icon: Sparkles,
    title: "Tools",
    skills: ["Git", "GitHub"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Skills"
          subtitle="Full-stack integration + ML workflow implementation, with an engineering-first approach to scalable system design."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-surface p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <cat.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-heading font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-surface-light border border-border px-3 py-1.5 text-xs text-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
