"use client";

import { useAvailabilityModal } from "@/context/AvailabilityModalContext";
import { Phone } from "lucide-react";

export default function StickyMobileCTA() {
  const { openModal } = useAvailabilityModal();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-3 border-t border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] md:hidden">
      <button
        onClick={openModal}
        aria-label="Check internet availability"
        className="flex-1 rounded-lg bg-[var(--accent)] px-4 py-3 text-center text-sm font-bold text-[var(--bg-base)] cursor-pointer"
      >
        Check Availability
      </button>
      <a
        href="tel:18885240037"
        aria-label="Call now"
        className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-center text-sm font-semibold text-white"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
    </div>
  );
}
