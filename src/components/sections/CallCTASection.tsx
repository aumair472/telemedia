"use client";

import { motion } from "framer-motion";
import { Phone, Shield, Star, CheckCircle, Zap } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const TRUST_BAR = [
  { icon: Shield, label: "No Hidden Fees" },
  { icon: Star, label: "4.9★ Rated" },
  { icon: CheckCircle, label: "Free Service" },
  { icon: Zap, label: "Instant Results" },
];

export default function CallCTASection() {
  return (
    <section className="bg-[#070b12] py-20 text-center relative overflow-hidden">
      <div className="mx-auto max-w-2xl px-4 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00e676]/30 bg-[#00e676]/10 px-4 py-1.5 text-sm font-semibold text-[#00e676]">
            <span className="h-2 w-2 rounded-full bg-[#00e676] animate-pulse" />
            Speak to a Specialist Now
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl" style={{ textWrap: 'balance' }}>
           Ready to get connected?
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-[#8b9ab0]">
            Our certified specialists work with leading providers to help you compare plans, check real-time availability, and secure the best offer for your address — all in one quick, free call.
          </p>

          {/* Big Phone Number Display */}
          <div className="mt-8">
            <a
              href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-3 text-4xl font-black text-[#00e676] transition-colors hover:text-[#00ff99] sm:text-5xl"
            >
              <Phone className="h-10 w-10 shrink-0" fill="currentColor" />
              {SITE_CONFIG.contact.phone}
            </a>
            <p className="mt-2 text-sm text-[#4a6080]">
              {SITE_CONFIG.contact.availability} · Free Service
            </p>
          </div>

          {/* Primary CTA Button */}
          <a
            href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9]/g, '')}`}
            className="mx-auto mt-8 flex w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-[#00e676] py-4 text-lg font-bold text-black shadow-[0_0_30px_rgba(0,230,118,0.15)] transition-all duration-200 hover:bg-[#00ff99] hover:shadow-[0_0_40px_rgba(0,230,118,0.3)]"
          >
            <Phone size={20} fill="currentColor" />
            Free Call Booking
          </a>

          {/* Trust Row */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {TRUST_BAR.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-1.5 text-xs text-[#4a6080]">
                  <Icon size={14} className="text-[#00e676]/60" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
