import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#0a0e14] pb-24 md:pb-0">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="InternetConsultation"
                width={150}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white">InternetConsultation</span>
            </div>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Connecting America, one home at a time.
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)]" aria-label="Footer links">
            <Link href="#how-it-works" className="hover:text-white">
              How It Works
            </Link>
            <Link href="#providers" className="hover:text-white">
              Providers
            </Link>
            <Link href="#faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
          </nav>

          <a
            href="tel:18006383278"
            aria-label="Call InternetConsultation"
            className="text-lg font-bold text-[var(--accent)]"
          >
            1-800-NET-FAST
          </a>
        </div>

        <p className="text-xs text-[var(--text-hint)]">
          Copyright 2025 InternetConsultation. All rights reserved. Not affiliated with any provider.
        </p>
      </div>
    </footer>
  );
}
