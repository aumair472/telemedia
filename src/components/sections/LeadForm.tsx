"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Lock, MailX, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { LEAD_TRUST_CARDS } from "@/lib/constants";
import { leadFormSchema, LeadFormValues } from "@/lib/validations";

export default function LeadForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      zip: "",
      serviceType: "home",
      message: ""
    }
  });

  const onSubmit = async (values: LeadFormValues) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsLoading(false);
    form.reset();
    toast.success("We'll call you shortly!", {
      description: `Thanks ${values.name}, a specialist will contact you soon.`,
      style: {
        background: "var(--accent)",
        color: "#0d1117",
        border: "1px solid rgba(0,230,118,0.4)"
      }
    });
  };

  return (
    <section id="lead-form" className="bg-[var(--bg-base)] py-20" aria-labelledby="lead-form-title">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 id="lead-form-title" className="text-4xl font-black text-white">
            Get Connected Today - It&apos;s Free
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">A specialist will call you within 15 minutes.</p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-8"
            aria-label="Lead capture form"
          >
            <div className="grid gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-white">Full Name*</label>
                <input
                  {...form.register("name")}
                  className="w-full rounded-lg border border-[var(--border)] bg-white/5 px-4 py-3 text-white outline-none placeholder:text-[var(--text-hint)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                  placeholder="John Doe"
                  aria-label="Full name"
                />
                {form.formState.errors.name ? (
                  <p className="mt-1 text-sm text-red-400">{form.formState.errors.name.message}</p>
                ) : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">Phone Number*</label>
                <input
                  {...form.register("phone")}
                  className="w-full rounded-lg border border-[var(--border)] bg-white/5 px-4 py-3 text-white outline-none placeholder:text-[var(--text-hint)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                  placeholder="+12345678901"
                  aria-label="Phone number"
                />
                {form.formState.errors.phone ? (
                  <p className="mt-1 text-sm text-red-400">{form.formState.errors.phone.message}</p>
                ) : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">ZIP Code*</label>
                <input
                  {...form.register("zip")}
                  className="w-full rounded-lg border border-[var(--border)] bg-white/5 px-4 py-3 text-white outline-none placeholder:text-[var(--text-hint)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                  placeholder="10001"
                  maxLength={5}
                  aria-label="ZIP code"
                />
                {form.formState.errors.zip ? (
                  <p className="mt-1 text-sm text-red-400">{form.formState.errors.zip.message}</p>
                ) : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">Service Type</label>
                <select
                  {...form.register("serviceType")}
                  className="w-full rounded-lg border border-[var(--border)] bg-white/5 px-4 py-3 text-white outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                  aria-label="Service type"
                >
                  <option className="bg-[var(--bg-base)]" value="home">
                    Home Internet
                  </option>
                  <option className="bg-[var(--bg-base)]" value="business">
                    Business Internet
                  </option>
                  <option className="bg-[var(--bg-base)]" value="bundle">
                    Bundle (TV+Internet)
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">Message</label>
                <textarea
                  {...form.register("message")}
                  maxLength={300}
                  rows={4}
                  className="w-full rounded-lg border border-[var(--border)] bg-white/5 px-4 py-3 text-white outline-none placeholder:text-[var(--text-hint)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                  placeholder="Tell us about your speed needs..."
                  aria-label="Message"
                />
                {form.formState.errors.message ? (
                  <p className="mt-1 text-sm text-red-400">{form.formState.errors.message.message}</p>
                ) : null}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isLoading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] py-3 font-bold text-[var(--bg-base)] disabled:cursor-not-allowed disabled:opacity-80"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Connecting you...
                  </>
                ) : (
                  "Get Connected Today ->"
                )}
              </motion.button>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
              <span className="inline-flex items-center gap-1">
                <Lock className="size-4 text-[var(--accent)]" />
                Secure & Private
              </span>
              <span className="inline-flex items-center gap-1">
                <MailX className="size-4 text-[var(--accent)]" />
                No Spam
              </span>
              <span className="inline-flex items-center gap-1">
                <Star className="size-4 text-[var(--accent)]" />
                Free Service
              </span>
            </div>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
            aria-label="Trust indicators"
          >
            {LEAD_TRUST_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6"
              >
                <p className="text-lg font-bold text-white">{card.title}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{card.detail}</p>
              </div>
            ))}
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
