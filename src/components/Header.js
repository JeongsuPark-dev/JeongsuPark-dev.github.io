import { useEffect, useMemo, useRef, useState } from "react";
import useTheme from "../hooks/useTheme";
import useActiveSection from "../hooks/useActiveSection";
import useBodyScrollLock from "../hooks/useBodyScrollLock";
import { scrollBehavior } from "../lib/motion";
import { useLang } from "../i18n/context";

const NAV_HEIGHT = 64;

const SECTION_KEYS = ["about", "experience", "skills", "projects", "contact"];
const SECTION_IDS = ["top", ...SECTION_KEYS];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { lang, toggle: toggleLang, t } = useLang();
  const active = useActiveSection(SECTION_IDS, NAV_HEIGHT);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const sections = useMemo(
    () => SECTION_KEYS.map((id) => ({ id, label: t(`nav.${id}`) })),
    [t]
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useBodyScrollLock(menuOpen);

  useEffect(() => {
    if (!menuOpen) {
      // 닫힐 때 토글 버튼으로 포커스 복원(키보드 사용자 흐름 유지)
      if (burgerRef.current && document.activeElement !== burgerRef.current) {
        // open → close 전환일 때만 의미가 있지만, 이미 다른 곳으로 이동했다면 건너뜀
        const inMenu = menuRef.current?.contains(document.activeElement);
        if (inMenu) burgerRef.current.focus();
      }
      return undefined;
    }

    // 열릴 때: 첫 nav 링크로 포커스 이동
    const firstFocusable = menuRef.current?.querySelector(
      'a[href], button:not([disabled])'
    );
    firstFocusable?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = menuRef.current?.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [menuOpen]);

  const handleAnchor = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: scrollBehavior() });
  };

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div
        className="nav__progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={(e) => handleAnchor(e, "top")}>
          <span className="nav__brand-mark">JS</span>
          <span>Jeongsu Park</span>
        </a>

        <nav
          id="primary-nav"
          ref={menuRef}
          className={`nav__menu${menuOpen ? " is-open" : ""}`}
          aria-label="Primary"
        >
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link${active === item.id ? " is-active" : ""}`}
              aria-current={active === item.id ? "location" : undefined}
              onClick={(e) => handleAnchor(e, item.id)}
            >
              {item.label}
            </a>
          ))}

          <button
            type="button"
            className="nav__lang"
            onClick={toggleLang}
            aria-label={t("nav.langToggle")}
          >
            {lang === "ko" ? "EN" : "KO"}
          </button>

          <button
            type="button"
            className="nav__theme"
            onClick={toggle}
            aria-label={theme === "dark" ? t("nav.themeDark") : t("nav.themeLight")}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            className="nav__cta"
            href="https://github.com/JeongsuPark-dev/JeongsuPark-dev.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.1-3.2.69-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.66.8.55C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
            Source
          </a>
        </nav>

        <button
          type="button"
          ref={burgerRef}
          className={`nav__burger${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
