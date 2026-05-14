"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface ProtectedPhoneProps {
  className?: string;
  iconClassName?: string;
  showIcon?: boolean;
  textPrefix?: string;
  children?: React.ReactNode | ((phone: string) => React.ReactNode);
  revealNumberText?: boolean;
}

export default function ProtectedPhone({ 
  className = "", 
  iconClassName = "w-4 h-4",
  showIcon = true, 
  textPrefix = "",
  children,
  revealNumberText = true
}: ProtectedPhoneProps) {
  const [revealed, setRevealed] = useState(false);
  const [phone, setPhone] = useState("Tap to Reveal");
  const [href, setHref] = useState("#");

  useEffect(() => {
    const handleInteraction = () => {
      if (!revealed) {
        // Decode obfuscated phone number
        try {
          const decoded = atob(SITE_CONFIG.contact.encodedPhone);
          setPhone(decoded);
          setHref(`tel:${decoded.replace(/[^0-9]/g, "")}`);
          setRevealed(true);
        } catch (e) {
          console.error("Failed to decode phone number");
        }
      }
    };

    window.addEventListener("mousemove", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });
    window.addEventListener("scroll", handleInteraction, { once: true });
    window.addEventListener("keydown", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, [revealed]);

  return (
    <a
      href={href}
      className={className}
      aria-label={revealed ? `Call ${phone}` : "Reveal phone number"}
    >
      {showIcon && <Phone className={iconClassName} />}
      {textPrefix && <span>{textPrefix}</span>}
      {typeof children === 'function' ? children(phone) : (children ? children : (revealNumberText && phone))}
    </a>
  );
}
