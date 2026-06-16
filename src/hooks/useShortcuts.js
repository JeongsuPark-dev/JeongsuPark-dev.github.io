import { useEffect, useRef } from "react";
import { scrollBehavior } from "../lib/motion";

const NAV_HEIGHT = 64;

function scrollToId(id) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
    return;
  }
  const target = document.getElementById(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top, behavior: scrollBehavior() });
}

function isTypingTarget(event) {
  const tag = event.target?.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    event.target?.isContentEditable
  );
}

export default function useShortcuts({ onToggleTheme, onToggleLang, onShowHelp }) {
  const leaderRef = useRef(null);
  const leaderTimerRef = useRef(null);

  useEffect(() => {
    const clearLeader = () => {
      leaderRef.current = null;
      if (leaderTimerRef.current) {
        clearTimeout(leaderTimerRef.current);
        leaderTimerRef.current = null;
      }
    };

    const onKeyDown = (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (isTypingTarget(event)) return;

      const key = event.key;

      if (key === "?") {
        event.preventDefault();
        onShowHelp?.();
        clearLeader();
        return;
      }

      if (key === "t") {
        event.preventDefault();
        onToggleTheme?.();
        clearLeader();
        return;
      }

      if (key === "l") {
        event.preventDefault();
        onToggleLang?.();
        clearLeader();
        return;
      }

      if (key === "g") {
        leaderRef.current = "g";
        if (leaderTimerRef.current) clearTimeout(leaderTimerRef.current);
        leaderTimerRef.current = setTimeout(clearLeader, 1200);
        return;
      }

      if (leaderRef.current === "g") {
        const map = {
          h: "top",
          a: "about",
          e: "experience",
          s: "skills",
          p: "projects",
          c: "contact",
        };
        const target = map[key];
        if (target) {
          event.preventDefault();
          scrollToId(target);
        }
        clearLeader();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      clearLeader();
    };
  }, [onToggleTheme, onToggleLang, onShowHelp]);
}
