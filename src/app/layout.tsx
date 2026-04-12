import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import { AvailabilityModalProvider } from "@/context/AvailabilityModalContext";
import AvailabilityModal from "@/components/modals/AvailabilityModal";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://internetconsultation.us"),
  title: "Best Home Internet Providers Near You | InternetConsultation",
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
      <body className={`${geist.className} antialiased`} suppressHydrationWarning>
        <AvailabilityModalProvider>
          {children}
          <AvailabilityModal />
        </AvailabilityModalProvider>
        <Toaster richColors closeButton position="top-right" />
      </body>
    </html>
  );
}
