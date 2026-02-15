"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function EducationSection() {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border bg-surface p-8 card-hover"
        >
          <div className="flex flex-col sm:flex-row items-start gap-5">
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
              <GraduationCap className="h-7 w-7 text-primary" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-heading mb-1">
                BSc (Hons) in Computer Engineering
              </h3>
              <p className="text-muted text-sm mb-3">(Undergraduate)</p>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  University of Peradeniya
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  <Award className="h-3.5 w-3.5" />
                  GPA: 3.5
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed">
                Relevant areas include data structures and algorithms, linear
                algebra, machine learning, and system design—supporting both
                software engineering and AI-focused development.
              </p>

              {/* Subject tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Data Structures & Algorithms",
                  "Linear Algebra",
                  "Machine Learning",
                  "System Design",
                ].map((subj) => (
                  <span
                    key={subj}
                    className="rounded-full bg-primary/5 border border-primary/20 px-3 py-1 text-xs text-primary font-medium"
                  >
                    {subj}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
