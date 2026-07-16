"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border px-6 py-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <a href="#" className="text-lg font-bold">
          <span className="gradient-text">{siteConfig.name}</span>
          <span className="text-muted-foreground">.</span>
        </a>

        <div className="flex items-center gap-5">
          <motion.a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedinIcon className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </motion.a>
        </div>

        <p className="flex items-center gap-1 text-sm text-muted-foreground">
          Built with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}><Heart className="h-3 w-3 text-red-500" /></motion.span> by {siteConfig.name}
        </p>
      </div>
    </motion.footer>
  );
}
