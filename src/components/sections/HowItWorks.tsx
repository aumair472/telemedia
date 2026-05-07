"use client";

import { BarChart3, MapPin, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

const iconMap = {
  "map-pin": MapPin,
  "bar-chart": BarChart3,
  zap: Zap
};

const illustrationMap = [
  "/illustrations/step1_realistic.png",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[var(--bg-base)] py-20" aria-labelledby="how-it-works-title">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex rounded-full border border-[var(--accent-border)] bg-[var(--accent-dim)] px-4 py-2 text-sm font-semibold text-[var(--accent)]">
            Simple Process
          </span>
          <h2 id="how-it-works-title" className="mt-4 text-4xl font-black text-white">
            Get Connected in 3 Easy Steps
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <div className="pointer-events-none absolute left-[17%] right-[17%] top-20 hidden border-t border-dashed border-[var(--border)] md:block" />
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <motion.article
                key={step.title}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="relative group rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 transition duration-300 hover:border-[var(--accent)] hover:shadow-2xl overflow-hidden"
              >
                <div className="relative w-full h-40 mb-6 rounded-xl overflow-hidden bg-[var(--bg-card)]">
                  <Image
                    src={illustrationMap[index]}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-60" />
                </div>

                <div className="inline-flex rounded-xl bg-[var(--accent-dim)] p-3 mb-4">
                  <Icon className="size-6 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-[var(--text-muted)] leading-relaxed">{step.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
