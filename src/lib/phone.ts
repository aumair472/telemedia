import { SITE_CONFIG } from "@/lib/constants";

export function decodeContactPhone(): string {
  try {
    return atob(SITE_CONFIG.contact.encodedPhone);
  } catch {
    return "";
  }
}

export function getPhoneTelHref(): string {
  const decoded = decodeContactPhone();
  if (!decoded) return "tel:";
  const digits = decoded.replace(/[^0-9]/g, "");
  return digits.startsWith("1") ? `tel:+${digits}` : `tel:+1${digits}`;
}
