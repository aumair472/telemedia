"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Clock, ShieldCheck, Building2, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function TrustSection() {
  return (
    <section className="bg-[var(--bg-surface)] py-20 border-y border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-dim)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)] mb-6">
              <ShieldCheck className="w-4 h-4" />
              Independent Partner
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Your Trusted Connection to Major Providers
            </h2>
            
            <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8">
              {SITE_CONFIG.businessName} is your dedicated gateway to the best internet services in the US. {SITE_CONFIG.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-[var(--bg-card)] p-3 rounded-xl border border-[var(--border)]">
                  <Building2 className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Business Name</h4>
                  <p className="text-sm text-[var(--text-muted)]">{SITE_CONFIG.businessName}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[var(--bg-card)] p-3 rounded-xl border border-[var(--border)]">
                  <Lock className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Secure Browsing</h4>
                  <p className="text-sm text-[var(--text-muted)]">Verified SSL Security</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border)] p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Phone className="w-32 h-32 text-[var(--accent)]" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8">Contact Our Support Team</h3>
            
            <div className="space-y-6 relative z-10">
              <a 
                href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-4 group"
              >
                <div className="bg-[var(--accent-dim)] p-3 rounded-xl border border-[var(--accent-border)] group-hover:bg-[var(--accent)] transition-colors duration-300">
                  <Phone className="w-6 h-6 text-[var(--accent)] group-hover:text-black" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)]">Call Specialist</p>
                  <p className="text-xl font-bold text-white">{SITE_CONFIG.contact.phone}</p>
                </div>
              </a>

              <a 
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="bg-[var(--bg-base)] p-3 rounded-xl border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors duration-300">
                  <Mail className="w-6 h-6 text-[var(--text-muted)] group-hover:text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)]">Email Support</p>
                  <p className="text-lg font-bold text-white">{SITE_CONFIG.contact.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="bg-[var(--bg-base)] p-3 rounded-xl border border-[var(--border)]">
                  <Clock className="w-6 h-6 text-[var(--text-muted)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)]">Availability</p>
                  <p className="text-lg font-bold text-white">{SITE_CONFIG.contact.availability}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--border)] flex items-center gap-3">
               <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-sm font-medium text-green-500">Secure SSL Connection Active</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
