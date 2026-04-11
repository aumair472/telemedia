"use client";

import { Globe, Lightbulb, Phone, Settings } from "lucide-react";
import { motion } from "framer-motion";

import { SERVICE_CARDS } from "@/lib/constants";

const iconMap = {
  globe: Globe,
  lightbulb: Lightbulb,
  settings: Settings,
  phone: Phone
};

export default function ServicesSection() {
  return (
    <section className="bg-[var(--bg-surface)] py-20" aria-labelledby="services-title">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="services-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center text-4xl font-black text-white"
        >
          Everything We Do For You
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {SERVICE_CARDS.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <motion.article
                key={card.title}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition duration-200 hover:border-[var(--accent)] hover:shadow-[var(--accent-glow)]"
              >
                <div className="inline-flex rounded-lg bg-[var(--accent-dim)] p-3">
                  <Icon className="size-5 text-[var(--accent)]" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-[var(--text-muted)]">{card.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
