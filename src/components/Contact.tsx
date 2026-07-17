"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { siteConfig } from "@/data/portfolio";

function FormInput({
  type,
  placeholder,
  value,
  onChange,
  delay = 0,
}: {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  delay?: number;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <motion.div
        animate={focused ? { scale: 1.02, boxShadow: "0 0 0 2px rgba(99,102,241,0.3)" } : { scale: 1, boxShadow: "0 0 0 0px rgba(99,102,241,0)" }}
        transition={{ duration: 0.2 }}
        className="rounded-xl"
      >
        <input
          type={type}
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-transparent"
        />
      </motion.div>
    </motion.div>
  );
}

function FormTextarea({
  placeholder,
  value,
  onChange,
  delay = 0,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  delay?: number;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <motion.div
        animate={focused ? { scale: 1.01, boxShadow: "0 0 0 2px rgba(99,102,241,0.3)" } : { scale: 1, boxShadow: "0 0 0 0px rgba(99,102,241,0)" }}
        transition={{ duration: 0.2 }}
        className="rounded-xl"
      >
        <textarea
          placeholder={placeholder}
          required
          rows={5}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-transparent"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "4469079c-8772-4443-931f-36ae22a3c2d6",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New message from ${formState.name} — Portfolio`,
        }),
      });
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { icon: MapPin, label: "Location", value: siteConfig.location, href: "" },
  ];

  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Let&apos;s work <span className="gradient-text">together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 max-w-lg text-muted-foreground"
          >
            Have a project in mind or just want to chat? I&apos;d love to hear from
            you.
          </motion.p>
        </AnimatedSection>

        <div className="grid gap-12 md:grid-cols-5">
          <div className="space-y-8 md:col-span-2">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="rounded-xl bg-muted p-3"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 md:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <FormInput
                type="text"
                placeholder="Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                delay={0}
              />
              <FormInput
                type="email"
                placeholder="Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                delay={0.05}
              />
            </div>
            <FormTextarea
              placeholder="Tell me about your project..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              delay={0.1}
            />
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(99,102,241,0.3)" }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3.5 font-medium text-white transition-all sm:w-auto disabled:opacity-50"
            >
              {submitted ? (
                <motion.span
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  Message Sent!
                </motion.span>
              ) : loading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
