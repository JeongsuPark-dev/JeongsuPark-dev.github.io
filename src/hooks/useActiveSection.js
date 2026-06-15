import { useEffect, useState } from "react";

export default function useActiveSection(ids, offset = 80) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return undefined;

    const onScroll = () => {
      const scrollY = window.scrollY + offset + 1;
      let current = ids[0];
      for (const el of elements) {
        if (el.offsetTop <= scrollY) current = el.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, offset]);

  return active;
}
