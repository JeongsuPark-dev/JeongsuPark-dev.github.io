// JS 기반 smooth scroll/animation은 CSS `scroll-behavior: auto` 강제 규칙의
// 영향을 받지 않으므로, prefers-reduced-motion을 직접 확인해 분기한다.
export function prefersReducedMotion() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollBehavior() {
  return prefersReducedMotion() ? "auto" : "smooth";
}
