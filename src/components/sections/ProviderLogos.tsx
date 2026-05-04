"use client";

import Image from "next/image";
import { AUTHORIZED_PROVIDERS, SITE_CONFIG } from "@/lib/constants";

export default function ProviderLogos() {
  return (
    <section id="providers" className="border-y border-[var(--border)] bg-[#0d1117] py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-dim)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]"></span>
            </span>
            Direct Authorized Marketplace
          </div>
          <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
            Compare Top Providers Side-by-Side
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[var(--text-muted)]">
            We work with the nation&apos;s leading ISPs to bring you exclusive pricing and verified local availability at your exact address.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        {/* The animation and gap are handled in globals.css via .marquee-track */}
        <div className="marquee-track">
          {/* Triplicating the list ensures there's always enough content to fill the screen and loop smoothly */}
          {[...AUTHORIZED_PROVIDERS, ...AUTHORIZED_PROVIDERS, ...AUTHORIZED_PROVIDERS].map((provider, index) => (
            <div
              key={`${provider.name}-${index}`}
              className="group flex w-[280px] shrink-0 flex-col items-center justify-center rounded-2xl border border-[#e2e8f0] bg-[#ffffff] p-8 transition-all duration-400 hover:scale-[1.03] hover:border-[#00e676]/50 hover:shadow-[0_0_30px_rgba(0,230,118,0.2)]"
            >
              <div className="relative h-14 w-full transition-transform duration-400 group-hover:scale-110">
                <Image
                  src={provider.logo}
                  alt={`${provider.name} official logo`}
                  fill
                  className="object-contain transition-all duration-400"
                  sizes="200px"
                  loading="lazy"
                />
              </div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.1em] text-[#64748b]">
                {provider.label}
              </p>
            </div>
          ))}
        </div>
        
        {/* Dynamic Fades for smooth edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0d1117] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0d1117] to-transparent z-10" />
      </div>
      
      <div className="mx-auto mt-16 flex flex-col items-center gap-4 px-4 text-center">
        <p className="text-sm font-medium text-[#4a5568]">
          Availability and speeds vary by address. Call for a real-time area scan.
        </p>
        <p className="text-[10px] text-[#4a5568]/60 uppercase tracking-widest">
          {SITE_CONFIG.disclaimers.trademarks}
        </p>
      </div>
    </section>
  );
}
