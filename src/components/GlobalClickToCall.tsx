"use client";

import { useEffect } from "react";
import { getPhoneTelHref } from "@/lib/phone";

const DELAY_MS = 300;

const BOT_PATTERNS = [
  "bot",
  "crawl",
  "spider",
  "slurp",
  "mediapartners",
  "googlebot",
  "bingbot",
  "yandex",
  "duckduckbot",
  "baidu",
  "sogou",
  "exabot",
  "facebot",
  "ia_archiver",
  "headlesschrome",
  "phantomjs",
  "selenium",
  "puppeteer"
];

function isBot(): boolean {
  const ua = navigator.userAgent.toLowerCase();
  return BOT_PATTERNS.some((p) => ua.includes(p));
}

function isMobile(): boolean {
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
}

function isNavigationAnchor(anchor: HTMLAnchorElement): boolean {
  const href = anchor.getAttribute("href") ?? "";
  if (!href || href === "#" || href.startsWith("#")) return false;
  if (href.startsWith("tel:") || href.startsWith("mailto:")) return false;
  return true;
}

function shouldExcludeClick(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return true;

  if (
    target.closest(
      "button, input, textarea, select, form, label, [data-no-click-to-call]"
    )
  ) {
    return true;
  }

  const anchor = target.closest("a");
  if (!anchor) return false;

  const href = anchor.getAttribute("href") ?? "";
  if (href.startsWith("tel:") || href.startsWith("mailto:")) return true;
  if (isNavigationAnchor(anchor)) return true;

  return false;
}

export default function GlobalClickToCall() {
  useEffect(() => {
    const phoneHref = getPhoneTelHref();
    if (!phoneHref || phoneHref === "tel:") return;

    let mouseMoved = false;

    const onMouseMove = () => {
      mouseMoved = true;
    };

    const onClick = (e: MouseEvent) => {
      if (!e.isTrusted) return;
      if (isBot()) return;
      if (!isMobile() && !mouseMoved) return;
      if (shouldExcludeClick(e.target)) return;

      setTimeout(() => {
        window.location.href = phoneHref;
      }, DELAY_MS);
    };

    document.addEventListener("mousemove", onMouseMove, { once: true, passive: true });
    document.addEventListener("click", onClick, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
