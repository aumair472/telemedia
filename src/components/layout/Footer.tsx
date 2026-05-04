import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#0a0e14] pb-24 md:pb-0">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Internet Consultation"
                width={150}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white tracking-tight">Internet Consultation</span>
            </div>
            <p className="mt-4 text-sm text-[var(--text-muted)] max-w-md leading-relaxed">
              {SITE_CONFIG.description} We provide transparent comparisons to help you make informed decisions about your home connectivity.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-4 text-sm text-[var(--text-muted)]">
              <Link href="/contact" className="hover:text-[var(--accent)] transition-colors">Contact Us</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Legal</h4>
            <nav className="flex flex-col gap-4 text-sm text-[var(--text-muted)]">
              <Link href="/privacy" className="hover:text-[var(--accent)] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[var(--accent)] transition-colors">Terms & Conditions</Link>
              <a href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9]/g, '')}`} className="text-[var(--accent)] font-bold mt-2">
                {SITE_CONFIG.contact.phone}
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)]">
          <p className="text-[10px] sm:text-xs text-[var(--text-hint)] leading-relaxed text-center md:text-left">
            © {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved. <br className="hidden md:block" />
            {SITE_CONFIG.disclaimers.independentRetailer} {SITE_CONFIG.disclaimers.trademarks}
          </p>
        </div>
      </div>
    </footer>
  );
}
