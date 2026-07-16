"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/data/portfolio";

const categories = ["All", "Featured"];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-border/60 hover:shadow-xl hover:shadow-purple-500/5"
      >
        <a
          href={project.githubUrl || undefined}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative aspect-video overflow-hidden bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 transition-opacity group-hover:opacity-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-medium text-muted-foreground">
                {project.title}
              </span>
            </div>
          </div>
        </a>

        <div className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <div className="flex gap-2">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Live demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Source code"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>

          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "Featured"
      ? projects.filter((p) => p.featured)
      : projects;

  return (
    <section id="portfolio" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Work
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Selected <span className="gradient-text">projects</span>
          </h2>
          <p className="mb-12 max-w-lg text-muted-foreground">
            31 open-source projects spanning AI/ML, IoT, defense systems, and full-stack apps.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mb-10 flex gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
