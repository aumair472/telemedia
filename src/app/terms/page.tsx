import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";

export default function TermsConditions() {
  return (
    <>
      <Header />
      <main className="bg-[var(--bg-base)] py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white mb-8">Terms & Conditions</h1>
          <div className="prose prose-invert max-w-none text-[var(--text-muted)] leading-relaxed space-y-6">
            <p className="text-sm italic">Last Updated: May 4, 2026</p>
            
            <p>
              Welcome to {SITE_CONFIG.businessName}. By accessing or using our website, you agree to be bound by these Terms and Conditions.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10">1. Independent Retailer Status</h2>
            <p>
              {SITE_CONFIG.businessName} is an independent authorized retailer and partner of various internet service providers. We are not the official provider of these services. All product names, logos, and brands are property of their respective owners.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10">2. Accuracy of Information</h2>
            <p>
              While we strive to provide accurate and up-to-date information regarding provider plans, speeds, and pricing, all information is subject to change without notice. Availability and actual speeds depend on your specific address and the provider's infrastructure.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10">3. Use of the Site</h2>
            <p>
              You may use our site for lawful purposes only. You are prohibited from using the site to transmit any harmful, threatening, or otherwise objectionable content.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10">4. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or controlled by {SITE_CONFIG.businessName}. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10">5. Limitation of Liability</h2>
            <p>
              In no event shall {SITE_CONFIG.businessName}, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the site or services.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10">6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10">7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-[var(--bg-surface)] p-6 rounded-xl border border-[var(--border)] mt-4">
              <p className="font-bold text-white">{SITE_CONFIG.businessName}</p>
              <p>Email: {SITE_CONFIG.contact.email}</p>
              <p>Phone: {SITE_CONFIG.contact.phone}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
