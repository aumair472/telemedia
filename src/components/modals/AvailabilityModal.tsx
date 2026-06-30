"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Zap,
  Shield,
  Phone,
  Star,
  Clock
} from "lucide-react";
import { useAvailabilityModal } from "@/context/AvailabilityModalContext";
import ProtectedPhone from "@/components/ui/ProtectedPhone";

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
            className="relative z-10 w-full max-w-xl overflow-y-auto rounded-2xl border border-[#1e2d3d] bg-[#0d1117] shadow-[0_0_60px_rgba(0,230,118,0.08)]"
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
                <h2 className="mt-6 text-center text-3xl font-black leading-tight text-white sm:text-4xl tracking-tight max-w-lg">
                  Compare and connect with <span className="text-[#00e676] drop-shadow-[0_0_15px_rgba(0,230,118,0.2)]">best providers</span> in your area.
                </h2>
                <p className="mt-4 text-center text-xs sm:text-sm font-medium text-[#8b9ab0] opacity-90">
                  Blazing Fast · Economical · <span className="text-[#00e676]">Zero-Lag</span>
                </p>
              </div>

              {/* Trust Bar */}
              <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#1e2d3d] to-transparent" />

              <div className="flex flex-wrap justify-center gap-6">
                {TRUST_ITEMS.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 text-sm text-[#8b9ab0] font-semibold">
                      <Icon size={16} className="text-[#00e676]" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="bg-gradient-to-t from-[#0d1117] via-[#0d1117]/95 to-transparent px-6 pb-8 pt-2">
              <ProtectedPhone
                showIcon={false}
                className="relative flex w-full animate-[ctaGlow_3s_infinite] items-center justify-center gap-3 rounded-xl bg-[#00e676] py-4.5 text-lg font-extrabold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-[#00ff99] hover:shadow-[0_0_35px_rgba(0,230,118,0.4)] focus:outline-none focus:ring-2 focus:ring-[#00e676] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
              >
                {(phoneStr) => (
                  <>
                    <Phone size={20} fill="currentColor" />
                    <span>Detailed Call Consultation</span>
                    <span className="text-base font-semibold text-black/80">{phoneStr}</span>
                  </>
                )}
              </ProtectedPhone>
              <p className="mt-4 text-center text-xs sm:text-sm font-medium text-[#8b9ab0] opacity-90">
                Free service · No obligation · Experts available Mon–Fri 8AM–10PM EST
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

