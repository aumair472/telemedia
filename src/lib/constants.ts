import { FAQItem, MarketProvider, Provider, Stat } from "@/types";

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Providers", href: "#providers" },
  { label: "FAQ", href: "#faq" }
] as const;

export const TRUST_ITEMS = [
  { icon: "shield", label: "No Hidden Fees" },
  { icon: "zap", label: "Fast Setup" },
  { icon: "headphones", label: "Expert Support" }
] as const;

export const HERO_STATS: Stat[] = [
  { value: "500+", label: "Providers" },
  { value: "50K+", label: "Customers" },
  { value: "4.9", label: "Rating" },
  { value: "Free", label: "Service" }
];

export const AUTHORIZED_PROVIDERS: MarketProvider[] = [
  {
    name: "Spectrum",
    logo: "/providers/spectrumlogo.webp",
    label: "Authorized Retailer"
  },
  {
    name: "AT&T",
    logo: "/providers/att2_logo_website-4-1.webp",
    label: "Authorized Retailer"
  },
  {
    name: "Xfinity",
    logo: "/providers/xfinity-logo-authorized-retailer-row.webp",
    label: "Authorized Retailer"
  },
  {
    name: "Cox",
    logo: "/providers/cox-logo-authorized-retailer-1.webp",
    label: "Authorized Retailer"
  },
  {
    name: "DIRECTV",
    logo: "/providers/directv_logo25.webp",
    label: "Authorized Dealer"
  },
  {
    name: "Optimum",
    logo: "/providers/optimum_logo_website-1.webp",
    label: "Authorized Reseller"
  },
  {
    name: "EarthLink",
    logo: "/providers/Earthlink-authorized-retailer-logo-row.webp",
    label: "Authorized Reseller"
  },
  {
    name: "Frontier",
    logo: "/providers/frontier_verizon-2048x765-1.webp",
    label: "Authorized Sales Agent"
  },
  {
    name: "Kinetic",
    logo: "/providers/kinetic-logo-1.webp",
    label: "Authorized Agent"
  },
  {
    name: "Brightspeed",
    logo: "/providers/brightspeed-scaled.webp",
    label: "Authorized Agent"
  },
  {
    name: "WOW!",
    logo: "/providers/wow_authorized_reseller_logo_website-1.webp",
    label: "Authorized Retailer"
  },
  {
    name: "Vivint",
    logo: "/providers/vivint_logo.webp",
    label: "Authorized Retailer"
  },
  {
    name: "ADT",
    logo: "/providers/ADT_logo.webp",
    label: "Authorized Dealer"
  },
  {
    name: "Viasat",
    logo: "/providers/Viasat-logo-authorized-retailer-row.webp",
    label: "Authorized Retailer"
  },
  {
    name: "Cinch",
    logo: "/providers/cinch_logo-provider-row.webp",
    label: "Authorized Partner"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    title: "Enter Your ZIP Code",
    description: "We scan every provider at your exact address instantly.",
    icon: "map-pin"
  },
  {
    title: "Compare Available Plans",
    description: "Side-by-side speed, price, and contract comparisons.",
    icon: "bar-chart"
  },
  {
    title: "Get Connected Instantly",
    description: "Pick your plan. Our specialist handles everything.",
    icon: "zap"
  }
] as const;

export const SERVICE_CARDS = [
  {
    title: "Full Area Scan",
    description: "We check every ISP available at your exact address.",
    icon: "globe"
  },
  {
    title: "Plan Recommendation",
    description: "Personalized pick based on your speed needs and budget.",
    icon: "lightbulb"
  },
  {
    title: "Setup & Activation",
    description: "We guide you through install or connect you with the tech.",
    icon: "settings"
  },
  {
    title: "Expert Consultation",
    description: "Certified specialists on call - phone, chat, or callback.",
    icon: "phone"
  }
] as const;

export const WHY_CHOOSE_ITEMS = [
  "Certified Internet Specialists",
  "Fast Installation",
  "No Hidden Fees",
  "100% Free Service",
  "Trusted by 50K+ Customers",
  "Customer-First Approach"
];

export const PROVIDERS: Provider[] = [
  {
    name: "AT&T Fiber",
    speed: "Up to 5 Gbps",
    price: "$55/mo",
    contract: "No contract",
    bestFor: "Heavy streamers & gamers"
  },
  {
    name: "Spectrum",
    speed: "Up to 1 Gbps",
    price: "$49/mo",
    contract: "No contract",
    bestFor: "Families & remote workers"
  },
  {
    name: "Optimum",
    speed: "Up to 1 Gbps",
    price: "$40/mo",
    contract: "No contract",
    bestFor: "Budget-conscious users"
  },
  {
    name: "Kinetic",
    speed: "Up to 1 Gbps",
    price: "$45/mo",
    contract: "1-year",
    bestFor: "Rural & suburban areas"
  },
  {
    name: "Cox",
    speed: "Up to 2 Gbps",
    price: "$59/mo",
    contract: "No contract",
    bestFor: "Smart home users"
  },
  {
    name: "Xfinity",
    speed: "Up to 6 Gbps",
    price: "$30/mo",
    contract: "No contract",
    bestFor: "Value seekers",
    highlighted: true,
    badge: "Best Value"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is your service really free?",
    answer:
      "Yes. InternetConsultation is 100% free to use. We compare plans, explain your options, and connect you without adding service fees."
  },
  {
    question: "How do I know which provider is best for me?",
    answer:
      "Our specialists compare speed, pricing, equipment, reliability, and contract terms based on your address and usage needs."
  },
  {
    question: "How fast can I get connected?",
    answer:
      "Most customers get connected in under 24-72 hours, depending on provider availability and installation requirements in the area."
  },
  {
    question: "Do I need to sign a contract?",
    answer:
      "Not always. Many plans are no-contract. We highlight contract terms clearly so you can choose what fits your preferences."
  },
  {
    question: "What if my area has limited options?",
    answer:
      "We check all providers, including regional ISPs and fixed wireless alternatives, and help you choose the strongest available option."
  },
  {
    question: "Can I bundle internet with TV or phone?",
    answer:
      "Yes. We can compare bundle packages and show when bundling lowers monthly costs versus standalone internet plans."
  },
  {
    question: "What speeds do I actually need?",
    answer:
      "Light browsing typically needs 100-300 Mbps, while larger households, streaming, gaming, and remote work often benefit from 500 Mbps to 1 Gbps+."
  },
  {
    question: "Is there a cancellation fee?",
    answer:
      "It depends on the provider and plan. We surface cancellation and early termination terms before you commit so there are no surprises."
  }
];

export const LEAD_TRUST_CARDS = [
  { title: "4.9/5 Average Rating", detail: "Verified customer satisfaction" },
  { title: "50,000+ Customers Connected", detail: "Trusted nationwide service" },
  { title: "< 15 min Response Time", detail: "Specialists ready to assist" }
];
