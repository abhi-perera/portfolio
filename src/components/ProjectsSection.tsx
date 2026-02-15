"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Eye,
  FlaskConical,
  GraduationCap,
  Loader,
  CheckCircle2,
  Clock,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const statusConfig = {
  "In Development": { icon: Loader, color: "text-amber-400", bg: "bg-amber-400/10 border-amber-400/30" },
  "In Development / Completed": { icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/30" },
  Ongoing: { icon: Clock, color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/30" },
};

const projects = [
  {
    icon: HeartPulse,
    title: "Chronic Kidney Disease Prediction Model",
    description:
      "A healthcare-focused machine learning project designed to predict chronic kidney disease from structured clinical data. Building a complete workflow including data cleaning, feature engineering, model training, evaluation, and iterative refinement. Explores both classification and regression approaches while prioritizing biomedical relevance and reliable performance measurement.",
    tech: ["Python", "TensorFlow", "ML Classification & Regression"],
    focus: "Preprocessing pipeline, feature engineering, evaluation metrics, model comparison",
    status: "In Development" as const,
  },
  {
    icon: Eye,
    title: "Cat Detection Model",
    description:
      "A computer vision project to detect cats in images using a clean training and inference pipeline. The objective is to build a reliable dataset-to-training workflow and a stable inference stage that could be integrated into an application.",
    tech: ["Python", "TensorFlow", "Computer Vision"],
    focus: "Dataset preparation, training iteration, inference workflow",
    status: "In Development / Completed" as const,
  },
  {
    icon: FlaskConical,
    title: "Preterm Research",
    description:
      "Research-oriented involvement related to preterm studies. Contributing by supporting computational tasks, structured analysis, and implementation work when technical development is needed. Applying engineering thinking to biomedical research challenges.",
    tech: [],
    focus: "Biomedical research support + engineering contribution",
    status: "Ongoing" as const,
  },
  {
    icon: GraduationCap,
    title: "GEN EX",
    description:
      "An academic and research contribution where I work as part of a team, applying engineering fundamentals and problem-solving approaches to research-oriented work and technical implementation tasks.",
    tech: [],
    focus: "Research + engineering implementation",
    status: "Ongoing" as const,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Projects"
          subtitle="Building real-world solutions at the intersection of software engineering, machine learning, and biomedical applications."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const statusInfo = statusConfig[project.status];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-surface p-6 card-hover flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-heading font-semibold text-lg leading-tight mb-1">
                      {project.title}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusInfo.bg} ${statusInfo.color}`}
                    >
                      <statusInfo.icon className="h-3 w-3" />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Focus */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Focus:
                  </span>
                  <p className="text-sm text-muted mt-0.5">{project.focus}</p>
                </div>

                {/* Tech tags */}
                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border/50">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-primary/5 border border-primary/20 px-3 py-1 text-xs text-primary font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
