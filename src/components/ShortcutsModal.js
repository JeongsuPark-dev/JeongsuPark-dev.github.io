import { useEffect } from "react";
import { useLang } from "../i18n/context";

function Kbd({ children }) {
  return <kbd className="kbd">{children}</kbd>;
}

export default function ShortcutsModal({ open, onClose }) {
  const { t } = useLang();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
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
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h2 id="shortcuts-title" className="modal__title">
            {t("shortcuts.title")}
          </h2>
          <button
            type="button"
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
