"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Parses strings like "1,200+", "24 hr", "500+" into a numeric part + prefix/suffix
function parseValue(raw) {
  const match = raw.match(/([^\d]*)([\d,]+)(.*)/);
  if (!match) return { prefix: "", number: null, suffix: raw };
  const [, prefix, numStr, suffix] = match;
  return { prefix, number: parseInt(numStr.replace(/,/g, ""), 10), suffix };
}

export function CountUpStat({ value, className }) {
  const ref = useRef(null);
  const { prefix, number, suffix } = parseValue(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || number === null) return;

    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.textContent = `${prefix}${number.toLocaleString()}${suffix}`;
      return;
    }

    const counter = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: number,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(counter.val).toLocaleString()}${suffix}`;
        },
      });
    });

    return () => ctx.revert();
  }, [number, prefix, suffix]);

  if (number === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
