"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Code2, Brain, Cloud, Cpu, CircuitBoard, BarChart3 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { services } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Brain,
  Cloud,
  Cpu,
  CircuitBoard,
  BarChart3,
};

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = iconMap[service.icon] || Code2;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(99,102,241,0.08), transparent 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      onMouseMove={handleMouseMove}
      className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-border/60"
      style={{ perspective: "600px" }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ background }}
      />
      <div className="relative p-8">
        <motion.div
          className="mb-5 inline-flex rounded-xl bg-muted p-3"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="h-6 w-6 text-foreground" />
        </motion.div>
        <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <motion.div
          className="mt-4 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full"
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            What I <span className="gradient-text">do</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 max-w-lg text-muted-foreground"
          >
            End-to-end solutions from concept to deployment. I help bring
            intelligent ideas to life across AI, IoT, and full-stack development.
          </motion.p>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
