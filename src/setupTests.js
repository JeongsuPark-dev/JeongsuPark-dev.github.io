// Vitest + jest-dom matchers
// expect(element).toHaveTextContent(/react/i) 등 사용 가능
import "@testing-library/jest-dom";

// jsdom은 IntersectionObserver를 제공하지 않음 → reveal 훅 등에서 참조 시 stub
if (typeof globalThis.IntersectionObserver === "undefined") {
  class IntersectionObserverStub {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  globalThis.IntersectionObserver = IntersectionObserverStub;
}
