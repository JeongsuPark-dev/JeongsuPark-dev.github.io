import { useEffect, useRef } from "react";
import useBodyScrollLock from "../hooks/useBodyScrollLock";
import { useLang } from "../i18n/context";

function Kbd({ children }) {
  return <kbd className="kbd">{children}</kbd>;
}

export default function ShortcutsModal({ open, onClose }) {
  const { t } = useLang();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const previousFocusRef = useRef(null);

  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return undefined;

    // 열기 직전 포커스를 백업하고 모달 close 버튼으로 이동
    previousFocusRef.current = document.activeElement;
    closeRef.current?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
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

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      // 닫힐 때 이전 포커스 복원
      const prev = previousFocusRef.current;
      if (prev && typeof prev.focus === "function") {
        prev.focus();
      }
      previousFocusRef.current = null;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="shortcuts-title"
      onClick={onClose}
    >
      <div className="modal" ref={dialogRef} onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h2 id="shortcuts-title" className="modal__title">
            {t("shortcuts.title")}
          </h2>
          <button
            type="button"
            ref={closeRef}
            className="modal__close"
            onClick={onClose}
            aria-label={t("shortcuts.close")}
          >
            ×
          </button>
        </div>

        <div className="modal__body">
          <div className="kbd-group">
            <p className="kbd-group__title">{t("shortcuts.group.navigation")}</p>
            <ul className="kbd-list">
              <li><span>{t("shortcuts.key.top")}</span><span><Kbd>g</Kbd> <Kbd>h</Kbd></span></li>
              <li><span>{t("shortcuts.key.about")}</span><span><Kbd>g</Kbd> <Kbd>a</Kbd></span></li>
              <li><span>{t("shortcuts.key.experience")}</span><span><Kbd>g</Kbd> <Kbd>e</Kbd></span></li>
              <li><span>{t("shortcuts.key.skills")}</span><span><Kbd>g</Kbd> <Kbd>s</Kbd></span></li>
              <li><span>{t("shortcuts.key.projects")}</span><span><Kbd>g</Kbd> <Kbd>p</Kbd></span></li>
              <li><span>{t("shortcuts.key.contact")}</span><span><Kbd>g</Kbd> <Kbd>c</Kbd></span></li>
            </ul>
          </div>

          <div className="kbd-group">
            <p className="kbd-group__title">{t("shortcuts.group.actions")}</p>
            <ul className="kbd-list">
              <li><span>{t("shortcuts.key.themeToggle")}</span><span><Kbd>t</Kbd></span></li>
              <li><span>{t("shortcuts.key.langToggle")}</span><span><Kbd>l</Kbd></span></li>
              <li><span>{t("shortcuts.key.help")}</span><span><Kbd>?</Kbd></span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
