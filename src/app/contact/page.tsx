import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

export default function ContactUs() {
  return (
    <>
      <Header />
      <main className="bg-[var(--bg-base)] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-dim)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)] mb-6">
              <ShieldCheck className="w-4 h-4" />
              Independent Authorized Partner
            </div>
            <h1 className="text-4xl font-black text-white sm:text-5xl">Contact Our Experts</h1>
            <p className="mt-4 text-lg text-[var(--text-muted)]">
              Have questions about internet providers in your area? Our specialists are here to help you compare and save.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <div className="bg-[var(--bg-surface)] p-8 rounded-3xl border border-[var(--border)] flex flex-col items-center text-center">
              <div className="bg-[var(--accent-dim)] p-4 rounded-2xl mb-6">
                <Phone className="w-8 h-8 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-[var(--text-muted)] mb-4">Speak directly with an internet specialist.</p>
              <a href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9]/g, '')}`} className="text-2xl font-black text-white hover:text-[var(--accent)] transition-colors">
                {SITE_CONFIG.contact.phone}
              </a>
            </div>

            <div className="bg-[var(--bg-surface)] p-8 rounded-3xl border border-[var(--border)] flex flex-col items-center text-center">
              <div className="bg-[var(--accent-dim)] p-4 rounded-2xl mb-6">
                <Mail className="w-8 h-8 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
              <p className="text-[var(--text-muted)] mb-4">Send us your queries anytime.</p>
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-xl font-bold text-white hover:text-[var(--accent)] transition-colors">
                {SITE_CONFIG.contact.email}
              </a>
            </div>

            <div className="bg-[var(--bg-surface)] p-8 rounded-3xl border border-[var(--border)] flex flex-col items-center text-center">
              <div className="bg-[var(--accent-dim)] p-4 rounded-2xl mb-6">
                <Clock className="w-8 h-8 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Availability</h3>
              <p className="text-[var(--text-muted)] mb-4">Our specialists are ready to assist you.</p>
              <p className="text-xl font-bold text-white">
                {SITE_CONFIG.contact.availability}
              </p>
            </div>
          </div>

          <div className="mt-16 bg-[var(--bg-card)] rounded-3xl border border-[var(--border)] p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Business Information</h2>
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-[var(--accent)] shrink-0" />
                        <div>
                            <p className="font-bold text-white">Registered Address</p>
                            <p className="text-[var(--text-muted)] text-sm">
                               {SITE_CONFIG.address.street}<br />
                               {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                            </p>

                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <ShieldCheck className="w-6 h-6 text-[var(--accent)] shrink-0" />
                        <div>
                           <p className="font-bold text-white">Entity Name</p>
                           <p className="text-[var(--text-muted)]">{SITE_CONFIG.businessName}</p>
                        </div>
                     </div>
                  </div>
                  <p className="mt-10 text-sm text-[var(--text-muted)] italic">
                    {SITE_CONFIG.disclaimers.independentRetailer}
                  </p>
               </div>
               <div className="bg-[var(--bg-surface)] p-8 rounded-2xl border border-[var(--border)]">
                  <h4 className="text-xl font-bold text-white mb-4 text-center">Why Contact Us?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-[var(--text-muted)]">
                       <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                       Expert guidance on local ISP options
                    </li>
                    <li className="flex items-center gap-3 text-[var(--text-muted)]">
                       <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                       Unbiased plan comparisons
                    </li>
                    <li className="flex items-center gap-3 text-[var(--text-muted)]">
                       <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                       Fast setup and installation support
                    </li>
                    <li className="flex items-center gap-3 text-[var(--text-muted)]">
                       <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                       100% Free Consultation
                    </li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
