"use client";

import { motion } from "framer-motion";
import { Linkedin, MessageCircle } from "lucide-react";

export default function TalkWithMe() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 p-8 md:p-10 text-center"
        >
          <MessageCircle className="mx-auto h-8 w-8 text-primary mb-4" />
          <p className="text-foreground leading-relaxed max-w-2xl mx-auto text-base md:text-lg mb-6">
            I&apos;m open to remote roles, startup collaborations, and freelance
            projects—especially work involving full-stack development, AI
            integration, and biomedical software. If you need someone who can
            build clean systems, implement ML workflows, and communicate clearly
            in a team environment, connect with me on LinkedIn.
          </p>
          <a
            href="https://www.linkedin.com/in/uduli-abhimani-b31329355/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
