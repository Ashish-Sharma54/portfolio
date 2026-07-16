"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { experience } from "@/data/portfolio";

function TimelineItem({ exp, index }: { exp: typeof experience[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -60 : 60, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.15 + 0.2, type: "spring" }}
        className="absolute left-0 top-1 h-3 w-3 -translate-x-[5px] rounded-full border-2 border-background bg-gradient-to-r from-purple-500 to-blue-500"
      />

      <div className="pl-8">
        <motion.div
          whileHover={{ x: 6, scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-border/60 hover:shadow-lg hover:shadow-purple-500/5"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.3 }}
            className="mb-1 text-sm font-medium text-purple-500 dark:text-purple-400"
          >
            {exp.period}
          </motion.p>
          <h3 className="text-xl font-semibold">{exp.role}</h3>
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            {exp.company}
          </p>
          <p className="mb-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {exp.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 + i * 0.04 }}
                whileHover={{ scale: 1.1 }}
                className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Where I&apos;ve <span className="gradient-text">worked</span>
          </motion.h2>
        </AnimatedSection>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-0 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"
          />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <TimelineItem key={exp.role} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
