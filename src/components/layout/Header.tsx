"use client";

import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { SITE_CONFIG } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(13,17,23,0.95)] backdrop-blur-lg">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label={`Internet Consultation home`}>
          <Image
            src="/logo.png"
            alt="Internet Consultation"
            width={180}
            height={40}
            className="h-9 w-auto"
            priority
          />
          <span className="text-xl font-bold text-white tracking-tight">Internet Consultation</span>
        </Link>


        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9]/g, '')}`}
            aria-label={`Call now ${SITE_CONFIG.contact.phone}`}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-bold text-[var(--bg-base)] transition hover:bg-[#00ff99] hover:shadow-[var(--accent-glow)]"
          >
            <Phone className="w-4 h-4" />
            {SITE_CONFIG.contact.phone}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--bg-surface)] p-2 text-white md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[var(--border)] bg-[var(--bg-surface)] transition-all duration-300 md:hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-4 py-6">
          <div className="pt-4 border-t border-[var(--border)]">
            <a
              href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9]/g, '')}`}
              aria-label="Call now from mobile menu"
              className="flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-3 py-3 text-center text-sm font-bold text-[var(--bg-base)]"
            >
              <Phone className="w-4 h-4" />
              Call Now: {SITE_CONFIG.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
