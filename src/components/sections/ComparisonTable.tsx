"use client";

import { motion } from "framer-motion";

import { PROVIDERS, SITE_CONFIG } from "@/lib/constants";

export default function ComparisonTable() {
  return (
    <section className="bg-[var(--bg-surface)] py-20" aria-labelledby="comparison-title">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="comparison-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center text-4xl font-black text-white"
        >
          Compare Top Internet Providers
        </motion.h2>

        <div className="mt-10 hidden overflow-x-auto md:block">
          <table className="w-full min-w-[900px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
            <thead>
              <tr className="bg-[var(--bg-base)] text-left text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
                <th className="px-5 py-4">Provider</th>
                <th className="px-5 py-4">Speed</th>
                <th className="px-5 py-4">Price</th>
                <th className="px-5 py-4">Contract</th>
                <th className="px-5 py-4">Best For</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {PROVIDERS.map((provider) => (
                <tr
                  key={provider.name}
                  className={`border-t border-[var(--border)] ${
                    provider.highlighted ? "bg-[rgba(0,230,118,0.05)]" : ""
                  }`}
                >
                  <td
                    className={`px-5 py-4 text-sm font-semibold text-white ${
                      provider.highlighted ? "border-l-2 border-[var(--accent)]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {provider.name}
                      {provider.badge ? (
                        <span className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-dim)] px-2 py-0.5 text-xs text-[var(--accent)]">
                          {provider.badge}
                        </span>
                      ) : null}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-[var(--text-muted)]">{provider.speed}</td>
                  <td className="px-5 py-4 text-sm text-[var(--text-muted)]">{provider.price}</td>
                  <td className="px-5 py-4 text-sm text-[var(--text-muted)]">{provider.contract}</td>
                  <td className="px-5 py-4 text-sm text-[var(--text-muted)]">{provider.bestFor}</td>
                  <td className="px-5 py-4">
                    <a
                      href="tel:18883595742"
                      aria-label={`Check ${provider.name}`}
                      className="inline-block rounded-lg border border-[var(--accent-border)] bg-[var(--accent-dim)] px-3 py-2 text-xs font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--bg-base)]"
                    >
                      Check {provider.name.split(" ")[0]}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-4 md:hidden">
          {PROVIDERS.map((provider) => (
            <article
              key={`${provider.name}-mobile`}
              className={`rounded-xl border p-4 ${
                provider.highlighted
                  ? "border-[var(--accent)] bg-[rgba(0,230,118,0.05)]"
                  : "border-[var(--border)] bg-[var(--bg-card)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white">{provider.name}</h3>
                {provider.badge ? (
                  <span className="rounded-full bg-[var(--accent-dim)] px-2 py-0.5 text-xs text-[var(--accent)]">
                    {provider.badge}
                  </span>
                ) : null}
              </div>
              <div className="mt-3 space-y-1 text-sm text-[var(--text-muted)]">
                <p>Speed: {provider.speed}</p>
                <p>Price: {provider.price}</p>
                <p>Contract: {provider.contract}</p>
                <p>Best for: {provider.bestFor}</p>
              </div>
              <a
                href="tel:18883595742"
                aria-label={`Check ${provider.name} mobile`}
                className="mt-4 flex w-full items-center justify-center rounded-lg border border-[var(--accent-border)] bg-[var(--accent-dim)] px-3 py-2 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--bg-base)]"
              >
                Check {provider.name.split(" ")[0]}
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-xs leading-relaxed text-[var(--text-muted)] opacity-80 max-w-3xl mx-auto">
          {SITE_CONFIG.disclaimers.independentRetailer}
        </p>
      </div>
    </section>
  );
}
