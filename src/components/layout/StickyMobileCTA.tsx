export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center gap-3 border-t border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] md:hidden">
      <a
        href="#hero-zip-form"
        aria-label="Check internet availability"
        className="flex-1 rounded-lg bg-[var(--accent)] px-4 py-3 text-center text-sm font-bold text-[var(--bg-base)]"
      >
        Check Availability
      </a>
      <a
        href="tel:18006383278"
        aria-label="Call now"
        className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-center text-sm font-semibold text-white"
      >
        Call Now
      </a>
    </div>
  );
}
