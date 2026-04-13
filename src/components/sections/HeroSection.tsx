"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Headphones, Search, Shield, Zap, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useForm } from "react-hook-form";

import { HERO_STATS } from "@/lib/constants";
import { zipCodeSchema, ZipCodeFormValues } from "@/lib/validations";
import { useAvailabilityModal } from "@/context/AvailabilityModalContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const trustItems = [
  { icon: Shield, label: "No Hidden Fees" },
  { icon: Zap, label: "Fast Setup" },
  { icon: Headphones, label: "Expert Support" }
];

export default function HeroSection() {
  const { openModal } = useAvailabilityModal();
  const form = useForm<ZipCodeFormValues>({
    resolver: zodResolver(zipCodeSchema),
    defaultValues: { zip: "" }
  });

  const onSubmit = (values: ZipCodeFormValues) => {
    openModal();
    form.reset(values);
  };

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg-base)] pt-24"
      id="top"
    >
      <Image
        src="/hero-bg.png"
        alt="Modern living room interior with comfortable seating and ambient lighting"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/85" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-dim)] px-4 py-2 text-sm text-[var(--accent)]"
          >
            <span className="dot-pulse h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            Last connection secured 4 minutes ago
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-[clamp(40px,7vw,80px)] font-black leading-[0.95] tracking-tight text-white"
          >
            FIND THE BEST
            <br />
            INTERNET <span className="text-[var(--accent)]">IN YOUR AREA</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-[var(--text-muted)]"
          >
            Compare top providers like AT&T, Spectrum, Optimum & more - and get connected today.
          </motion.p>

          <motion.form
            id="hero-zip-form"
            onSubmit={form.handleSubmit(onSubmit)}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
            aria-label="Check internet availability by ZIP code"
          >
            <div className="flex flex-col gap-3 rounded-xl border border-white/12 bg-white/7 p-2 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-2 rounded-lg px-3 py-2">
                <Search className="size-5 text-[var(--text-muted)]" />
                <input
                  {...form.register("zip")}
                  type="text"
                  inputMode="numeric"
                  maxLength={5}
                  placeholder="Enter your zip code"
                  aria-label="Enter ZIP code"
                  className="w-full bg-transparent text-base text-white outline-none placeholder:text-[var(--text-muted)]"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                aria-label="Check availability"
                className="rounded-lg bg-[var(--accent)] px-6 py-2.5 text-sm font-bold text-[var(--bg-base)] transition hover:bg-[#00ff99] hover:shadow-[var(--accent-glow)] cursor-pointer"
              >
                Check Availability &gt;
              </motion.button>
            </div>
            {form.formState.errors.zip ? (
              <p className="mt-2 text-sm text-red-400">{form.formState.errors.zip.message}</p>
            ) : null}

            <a
              href="tel:18885240037"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-[#00e676]/50 hover:text-[#00e676] transition-all"
              aria-label="Call now 1-888-524-0037"
            >
              <Phone className="w-4 h-4" />
              Call Now: 1-888-524-0037
            </a>
          </motion.form>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]"
          >
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-2">
                  <Icon className="size-4 text-[var(--accent)]" />
                  <span>{item.label}</span>
                  {index < trustItems.length - 1 ? (
                    <span className="text-[var(--border-bright)]">.</span>
                  ) : null}
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[var(--border)] bg-[rgba(17,24,39,0.65)] p-4"
            >
              <p className="text-2xl font-extrabold text-white">{stat.value}</p>
              <p className="text-sm text-[var(--text-muted)]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
