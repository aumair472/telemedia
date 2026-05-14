import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import ProtectedPhone from "@/components/ui/ProtectedPhone";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-[var(--bg-base)] py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none text-[var(--text-muted)] leading-relaxed space-y-6">
            <p className="text-sm italic">Last Updated: May 4, 2026</p>
            
            <p>
              At {SITE_CONFIG.businessName}, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10">1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal Data: Name, email address, phone number, and physical address.</li>
              <li>Usage Data: IP address, browser type, pages visited, and time spent on our site.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website and services.</li>
              <li>Improve, personalize, and expand our website.</li>
              <li>Understand and analyze how you use our website.</li>
              <li>Communicate with you, either directly or through one of our partners, for customer service or marketing purposes.</li>
              <li>Process your requests for internet service comparisons and connections.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10">3. GDPR and CCPA Compliance</h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access, update, or delete the information we have on you.</li>
              <li>The right of rectification.</li>
              <li>The right to object.</li>
              <li>The right of restriction.</li>
              <li>The right to data portability.</li>
              <li>The right to withdraw consent.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10">4. Sharing Your Information</h2>
            <p>
              As an authorized retailer, we may share your information with major internet providers to facilitate the connection process and provide you with accurate service availability and pricing. We do not sell your personal data to third-party advertisers.
            </p>

            <h2 className="text-2xl font-bold text-white mt-10">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-[var(--bg-surface)] p-6 rounded-xl border border-[var(--border)] mt-4">
              <p className="font-bold text-white">{SITE_CONFIG.businessName}</p>
              <p className="text-sm">
                {SITE_CONFIG.address.street}<br />
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
              </p>
              <p>Email: {SITE_CONFIG.contact.email}</p>
              <ProtectedPhone textPrefix="Phone: " showIcon={false} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
