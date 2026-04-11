"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { WHY_CHOOSE_ITEMS } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--bg-base)] py-20" aria-labelledby="why-choose-title">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="why-choose-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center text-4xl font-black text-white"
        >
          Why Thousands Choose Us
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {WHY_CHOOSE_ITEMS.map((item) => (
            <motion.div
              key={item}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] px-5 py-2.5 text-sm text-white transition hover:border-[var(--accent)]"
            >
              <CheckCircle2 className="size-4 text-[var(--accent)]" />
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
