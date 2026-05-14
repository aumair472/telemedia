"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Search, Phone } from "lucide-react";
import { useForm } from "react-hook-form";

import { zipCodeSchema, ZipCodeFormValues } from "@/lib/validations";
import { useAvailabilityModal } from "@/context/AvailabilityModalContext";

import { SITE_CONFIG } from "@/lib/constants";
import ProtectedPhone from "@/components/ui/ProtectedPhone";

export default function SmartCTA() {
  const { openModal } = useAvailabilityModal();
  const form = useForm<ZipCodeFormValues>({
    resolver: zodResolver(zipCodeSchema),
    defaultValues: { zip: "" }
  });

  const onSubmit = () => {
    openModal();
  };

  return (
    <section
      className="bg-[linear-gradient(135deg,#0a1628_0%,#0d1117_100%)] py-24"
      aria-labelledby="smart-cta-title"
    >
      <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="smart-cta-title" className="text-3xl font-black text-white md:text-4xl">
            Not Sure Which Internet Plan is Best for You?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
            Our certified specialists compare providers so you do not have to. 100% free.
          </p>

          <ProtectedPhone
            textPrefix="Call Now: "
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-10 py-4 text-lg font-bold text-[var(--bg-base)] transition-all hover:scale-105 active:scale-95 hover:bg-[#00ff99] hover:shadow-[0_0_32px_rgba(0,230,118,0.3)]"
          />

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-xl border border-white/12 bg-white/7 p-2 sm:flex-row"
            aria-label="Secondary ZIP code form"
          >
            <div className="flex flex-1 items-center gap-2 px-3">
              <Search className="size-4 text-[var(--text-muted)]" />
              <input
                {...form.register("zip")}
                type="text"
                maxLength={5}
                inputMode="numeric"
                placeholder="Enter your zip code"
                className="w-full bg-transparent py-2 text-white outline-none placeholder:text-[var(--text-muted)]"
                aria-label="ZIP code"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-[var(--bg-base)] cursor-pointer"
            >
              Check Availability
            </button>
          </form>
          {form.formState.errors.zip ? (
            <p className="mt-2 text-sm text-red-400">{form.formState.errors.zip.message}</p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
