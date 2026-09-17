import gsap from "gsap";

let containerEl = null;

export function registerContainer(el) {
  containerEl = el;
}

function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function playExit() {
  return new Promise((resolve) => {
    if (!containerEl || prefersReducedMotion()) return resolve();
    gsap.to(containerEl, {
      xPercent: -5,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: resolve,
    });
  });
}

export function playEnter() {
  if (!containerEl || prefersReducedMotion()) return;
  gsap.fromTo(
    containerEl,
    { xPercent: 5, opacity: 0 },
    { xPercent: 0, opacity: 1, duration: 0.45, ease: "power2.out" }
  );
}