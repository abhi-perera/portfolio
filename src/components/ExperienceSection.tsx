"use client";

import { motion } from "framer-motion";
import { Briefcase, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Experience" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />

          {/* Experience card */}
          <div className="sm:pl-16 relative">
            {/* Timeline dot */}
            <div className="absolute left-[18px] top-8 h-4 w-4 rounded-full border-2 border-primary bg-background hidden sm:block" />

            <div className="rounded-xl border border-border bg-surface p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-heading mb-1">
                    Casual Instructor — CO1010
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    Computer Engineering
                  </p>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    I support student learning by providing guidance, structured
                    explanations, and technical clarification aligned with course
                    objectives. This role has strengthened my communication
                    skills and my ability to explain complex technical concepts
                    clearly.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Teaching", "Technical Communication", "Mentorship"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-surface-light border border-border px-3 py-1 text-xs text-muted font-medium"
                        >
                          <BookOpen className="h-3 w-3" />
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
