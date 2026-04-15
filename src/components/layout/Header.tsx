"use client";

import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[rgba(13,17,23,0.95)] backdrop-blur-lg">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2" aria-label="InternetConsultation home">
          <Image
            src="/logo.png"
            alt="InternetConsultation"
            width={180}
            height={40}
            className="h-9 w-auto"
            priority
          />
          <span className="text-xl font-bold text-white">InternetConsultation</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--text-muted)] transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <a
            href="tel:18883595742"
            aria-label="Call now 1-888-359-5742"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-bold text-[var(--bg-base)] transition hover:bg-[#00ff99]"
          >
            <Phone className="w-4 h-4" />
            Call Now: 1-888-359-5742
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
        className={`overflow-hidden border-t border-[var(--border)] bg-[var(--bg-surface)] transition-all duration-300 md:hidden ${open ? "max-h-[300px]" : "max-h-0"
          }`}
      >
        <div className="space-y-2 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:18883595742"
            aria-label="Call now from mobile menu"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-3 py-3 text-center text-sm font-bold text-[var(--bg-base)]"
          >
            <Phone className="w-4 h-4" />
            Call Now: 1-888-359-5742
          </a>
        </div>
      </div>
    </header>
  );
}
