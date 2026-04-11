import { PROVIDER_LOGOS } from "@/lib/constants";

export default function ProviderLogos() {
  return (
    <section id="providers" className="border-y border-[var(--border)] bg-[var(--bg-surface)] py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-[var(--text-muted)]">
          Compare plans from the most trusted internet providers
        </p>

        <div className="relative mt-6 overflow-hidden md:overflow-visible">
          <div className="marquee-track flex min-w-max gap-4 md:min-w-0 md:flex-wrap md:justify-center">
            {PROVIDER_LOGOS.concat(PROVIDER_LOGOS).map((provider, index) => (
              <div
                key={`${provider}-${index}`}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-6 py-4 text-white shadow-sm"
              >
                <span className="border-l-2 border-[var(--accent)] pl-3 text-lg font-semibold tracking-wide">
                  {provider}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm font-semibold text-[var(--accent)]">
          ...and 500+ more providers in your area
        </p>
      </div>
    </section>
  );
}
