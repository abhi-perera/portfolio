"use client";

import { motion } from "framer-motion";
import { PenTool, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    icon: PenTool,
    org: "IEEE Student Branch",
    location: "University of Peradeniya",
    role: "Editorial Team Member",
    description:
      "I contribute to technical and community content creation and refinement, ensuring clarity, consistency, and professional publication quality.",
  },
  {
    icon: Users,
    org: "IEEE Women in Engineering (WIE)",
    location: "University of Peradeniya",
    role: "Editorial Team Member",
    description:
      "I support editorial work and content development for initiatives focused on community engagement, growth, and professional development within engineering.",
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="section-padding">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Leadership & Community" />

        <div className="grid gap-6 sm:grid-cols-2">
          {roles.map((role, i) => (
            <motion.div
              key={role.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-surface p-6 card-hover"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <role.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-heading font-semibold mb-0.5">{role.org}</h3>
              <p className="text-xs text-muted mb-1">{role.location}</p>
              <span className="inline-block rounded-full bg-accent/10 border border-accent/20 px-3 py-0.5 text-xs font-medium text-accent mb-3">
                {role.role}
              </span>
              <p className="text-sm text-muted leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
