import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";
import Script from "next/script";

import "./globals.css";
import { AvailabilityModalProvider } from "@/context/AvailabilityModalContext";
import AvailabilityModal from "@/components/modals/AvailabilityModal";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";

export const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://internetconsultation.us"),
  title: "Best Home Internet Providers Near You | InternetConsultation",
  manifest: "/manifest.json",
  description:
    "Compare top internet providers in your area. Expert help choosing the best plan - fast, free, no hidden fees. Check availability by ZIP code.",
  keywords: [
    "home internet",
    "internet providers near me",
    "best internet service",
    "compare internet plans",
    "new home internet connection",
    "home internet providers"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Best Home Internet Providers Near You | InternetConsultation",
    description:
      "Compare top internet providers in your area. Expert help choosing the best plan - fast, free, no hidden fees.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InternetConsultation - Best Home Internet Providers"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Home Internet Providers Near You | InternetConsultation",
    description:
      "Compare top internet providers in your area. Expert help choosing the best plan - fast, free, no hidden fees.",
    images: ["/og-image.png"]
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#0d1117"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KTPNML8H');`,
          }}
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SYMZI TECH-SOLUTIONS LLC",
              "alternateName": "InternetConsultation",
              "url": "https://www.internetconsultation.us",
              "logo": "https://www.internetconsultation.us/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "en"
              }
            })
          }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SYMZI TECH-SOLUTIONS LLC",
              "image": "https://www.internetconsultation.us/og-image.png",
              "@id": "https://www.internetconsultation.us",
              "url": "https://www.internetconsultation.us",
              "priceRange": "$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2600 E Renner Rd, Apt 276",
                "addressLocality": "Richardson",
                "addressRegion": "Texas",
                "postalCode": "75082",
                "addressCountry": "US"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "22:00"
              }
            })
          }}
        />
        {/* Placeholder for ClickCease or Lunio click fraud protection script */}
        {/* <Script id="clickcease-script" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `// paste script here` }} /> */}
        
        {/* Placeholder for Call Tracking (CallRail / WhatConverts / Invoca) script */}
        {/* <Script id="call-tracking-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `// paste script here` }} /> */}
      </head>
      <body className={`${geist.className} antialiased`} suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KTPNML8H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <AvailabilityModalProvider>
          {children}
          <AvailabilityModal />
          <StickyMobileCTA />
        </AvailabilityModalProvider>
        <Toaster richColors closeButton position="top-right" />
      </body>
    </html>
  );
}
