"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Wifi,
  Zap,
  Globe,
  Home,
  Shield,
  Phone,
  Star,
  Clock,
  CheckCircle
} from "lucide-react";
import { useAvailabilityModal } from "@/context/AvailabilityModalContext";
import ProtectedPhone from "@/components/ui/ProtectedPhone";

const SERVICE_CARDS = [
  {
    icon: Wifi,
    title: "High-Speed Fiber Internet",
    description: "Up to 5 Gbps — perfect for streaming & gaming",
    badge: "Most Popular",
    badgeStyle: "bg-[#00e676]/10 text-[#00e676] border border-[#00e676]/30",
  },
  {
    icon: Zap,
    title: "Standard Cable Internet",
    description: "Up to 1 Gbps — great for families & remote work",
    badge: "Best Value",
    badgeStyle: "bg-blue-500/10 text-blue-400 border border-blue-500/30",
  },
  {
    icon: Globe,
    title: "DSL & Fixed Wireless",
    description: "Available in rural & suburban areas",
    badge: "Wide Coverage",
    badgeStyle: "bg-purple-500/10 text-purple-400 border border-purple-500/30",
  },
  {
    icon: Home,
    title: "Bundle: Internet + TV",
    description: "Save more with a combined package",
    badge: "Save 20%",
    badgeStyle: "bg-orange-500/10 text-orange-400 border border-orange-500/30",
  },
  {
    icon: Shield,
    title: "Business Internet",
    description: "Dedicated lines with guaranteed uptime SLAs",
    badge: "Pro",
    badgeStyle: "bg-[#1e2d3d] text-[#8b9ab0] border border-[#2a3f58]",
  },
  {
    icon: Phone,
    title: "Satellite Internet",
    description: "Available anywhere — including remote locations",
    badge: "No Coverage? We help",
    badgeStyle: "bg-teal-500/10 text-teal-400 border border-teal-500/30",
  },
];

const TRUST_ITEMS = [
  { icon: Shield, label: "No Hidden Fees" },
  { icon: Star, label: "4.9★ Rated Service" },
  { icon: Clock, label: "< 15 Min Response" },
];

export default function AvailabilityModal() {
  const { isOpen, closeModal } = useAvailabilityModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [isOpen, closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[500] flex items-center justify-center p-4"
          data-no-click-to-call
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#1e2d3d] bg-[#0d1117] shadow-[0_0_60px_rgba(0,230,118,0.08)]"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#8b9ab0] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="p-6 sm:p-8">
              {/* Top Section */}
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00e676]/30 bg-[#00e676]/10 px-4 py-1.5 text-sm font-semibold text-[#00e676]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00e676] opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00e676]"></span>
                  </span>
                  Internet Services Available in Your Area
                </div>
                <h2 className="mt-3 text-center text-2xl font-bold text-white sm:text-3xl">
                  Internet Plans Available Near You
                </h2>
                <p className="mx-auto mt-2 max-w-md text-center text-sm text-[#8b9ab0]">
                  Compare and connect with top providers in your area. <br className="hidden sm:block" />
                  Call now for free expert help — no hidden fees.
                </p>
              </div>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#1e2d3d] to-transparent" />

              {/* Services List */}
              <div>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#4a6080]">
                  Available Services
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {SERVICE_CARDS.map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <ProtectedPhone
                        key={index}
                        showIcon={false}
                        className="group flex items-start gap-3 rounded-xl border border-[#1e2d3d] bg-[#111827] p-4 transition-all duration-200 hover:border-[#00e676]/40 hover:bg-[#00e676]/[0.03]"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00e676]/10 text-[#00e676]">
                          <Icon size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-bold text-white transition-colors group-hover:text-[#00e676]">
                              {card.title}
                            </span>
                            <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold whitespace-nowrap ${card.badgeStyle}`}>
                              {card.badge}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs text-[#8b9ab0] leading-relaxed">
                            {card.description}
                          </p>
                          <div className="mt-1 flex justify-end">
                            <span className="text-[10px] font-medium text-[#00e676]">
                              Call to connect →
                            </span>
                          </div>
                        </div>
                      </ProtectedPhone>
                    );
                  })}
                </div>
              </div>

              {/* Trust Bar */}
              <div className="my-5 h-px bg-gradient-to-r from-transparent via-[#1e2d3d] to-transparent" />

              <div className="flex flex-wrap justify-center gap-6">
                {TRUST_ITEMS.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-1.5 text-xs text-[#8b9ab0]">
                      <Icon size={14} className="text-[#00e676]" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="sticky bottom-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/95 to-transparent px-6 pt-6 pb-5">
              <ProtectedPhone
                showIcon={false}
                className="relative flex w-full animate-[ctaGlow_3s_infinite] items-center justify-center gap-2 rounded-xl bg-[#00e676] py-4 text-base font-bold text-black transition-all duration-200 hover:scale-[1.01] hover:bg-[#00ff99] hover:shadow-[0_0_30px_rgba(0,230,118,0.3)]"
              >
                {(phoneStr) => (
                  <>
                    <Phone size={18} fill="currentColor" />
                    <span>Get Free consultation</span>
                    <span className="text-sm font-normal text-black/70">{phoneStr}</span>
                  </>
                )}
              </ProtectedPhone>
              <p className="mt-3 text-center text-[10px] text-[#4a6080]">
                Free service · No obligation · Experts available Mon–Fri 8AM–10PM EST
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
