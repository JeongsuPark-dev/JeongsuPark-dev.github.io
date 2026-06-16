import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const STORAGE_KEY = "lang";
const LangContext = createContext(null);

function readInitial() {
  if (typeof window === "undefined") return "ko";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ko" || stored === "en") return stored;
  } catch (e) {
    // localStorage 비활성 — 기본값 사용
  }
  if (typeof navigator !== "undefined" && navigator.language) {
    return navigator.language.toLowerCase().startsWith("en") ? "en" : "ko";
  }
  return "ko";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(readInitial);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // localStorage 비활성 — 메모리에만 유지
    }
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "ko" ? "en" : "ko"));
  }, []);

  const t = useCallback(
    (key) => {
      const dict = translations[lang] || translations.ko;
      const value = key.split(".").reduce((acc, k) => (acc ? acc[k] : undefined), dict);
      if (value === undefined) {
        const fallback = key.split(".").reduce((acc, k) => (acc ? acc[k] : undefined), translations.ko);
        return fallback ?? key;
      }
      return value;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, toggle, t }), [lang, toggle, t]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
