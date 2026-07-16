"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useCountUp } from "./useCountUp";

function StatCard({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors"
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-2xl" />
      <p className="relative text-4xl font-bold gradient-text">
        {count}{suffix}
      </p>
      <p className="relative mt-1 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}

export default function About() {
  const stats = [
    { value: 4, suffix: "+", label: "Years of Experience" },
    { value: 31, suffix: "+", label: "Projects Shipped" },
    { value: 9, suffix: "", label: "GitHub Stars" },
    { value: 6, suffix: "+", label: "Domains Explored" },
  ];

  const paragraphs = [
    "I'm an AI/ML engineer and IoT developer with a deep passion for building intelligent systems that solve real-world problems. From deploying SVM classifiers on FPGAs for DRDO to designing solar-powered smart dustbin networks — I work at the intersection of hardware, software, and intelligence.",
    "My journey spans AI/ML (deep learning, NLP, computer vision), IoT (ESP32, LoRaWAN, sensor networks), full-stack development (FastAPI, Next.js, Docker), and hardware acceleration (FPGA, Verilog). I believe great technology should be purposeful and impactful.",
    "Currently exploring advanced NLP models, real-time IoT applications, and optimization techniques in ML/DL. When I'm not coding, I'm reading research papers or contributing to open-source projects that push the boundaries of what's possible.",
  ];

  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            About
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            A bit about <span className="gradient-text">me</span>
          </motion.h2>
        </AnimatedSection>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-0">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-6 text-muted-foreground leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <StatCard value={stat.value} label={stat.label} suffix={stat.suffix} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
