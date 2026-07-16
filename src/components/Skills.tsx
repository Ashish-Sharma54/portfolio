"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { skills } from "@/data/portfolio";

function SkillCategory({ category, items, index }: { category: string; items: string[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-border bg-card p-6 transition-colors"
    >
      <motion.h3
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.2 }}
        className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground"
      >
        {category}
      </motion.h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 + i * 0.03, duration: 0.3 }}
            whileHover={{
              scale: 1.15,
              backgroundColor: "hsl(var(--foreground))",
              color: "hsl(var(--background))",
              boxShadow: "0 0 20px rgba(99,102,241,0.3)",
            }}
            className="cursor-default rounded-lg bg-muted px-3 py-1.5 text-sm font-medium text-foreground transition-all"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            My <span className="gradient-text">tech stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 max-w-lg text-muted-foreground"
          >
            Technologies I use to build intelligent systems, from hardware to cloud.
          </motion.p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], i) => (
            <SkillCategory key={category} category={category} items={items} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
