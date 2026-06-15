import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function readInitialTheme() {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") || "dark";
}

export default function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // localStorage 비활성(Safari private mode 등) — 테마는 메모리 상태로만 유지
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle };
}
