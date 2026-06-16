import { useCallback } from "react";

export default function useMouseTilt() {
  const onMouseMove = useCallback((event) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  }, []);

  const onMouseLeave = useCallback((event) => {
    event.currentTarget.style.removeProperty("--mx");
    event.currentTarget.style.removeProperty("--my");
  }, []);

  return { onMouseMove, onMouseLeave };
}
