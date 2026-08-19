import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

// Lenis owns scroll position once mounted, so native scrollIntoView()
// calls get fought by its render loop and silently do nothing. Route
// every anchor click through Lenis's own scrollTo instead, with a
// fallback for the brief window before it mounts.
export function smoothScrollTo(target: string) {
  const el = document.querySelector(target);
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el as HTMLElement, { offset: -88, duration: 1.1 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
