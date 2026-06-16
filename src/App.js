import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense, useCallback, useState } from "react";
import Main from "./pages/Main";
import ShortcutsModal from "./components/ShortcutsModal";
import useShortcuts from "./hooks/useShortcuts";
import useTheme from "./hooks/useTheme";
import { useLang } from "./i18n/context";

const MiniProject001 = lazy(() => import("./pages/MiniProject001"));
const MiniProject002 = lazy(() => import("./pages/MiniProject002"));
const Colophon = lazy(() => import("./pages/Colophon"));
const DesignSystem = lazy(() => import("./pages/DesignSystem"));

function NotFound() {
  const { t } = useLang();
  return (
    <div className="notfound">
      <div>
        <h1 className="notfound__title">{t("notFound.title")}</h1>
        <p className="notfound__desc">{t("notFound.desc")}</p>
        <Link to="/" className="btn btn--primary">
          {t("notFound.cta")}
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  const [helpOpen, setHelpOpen] = useState(false);
  const { toggle: toggleTheme } = useTheme();
  const { toggle: toggleLang } = useLang();

  const showHelp = useCallback(() => setHelpOpen(true), []);
  const closeHelp = useCallback(() => setHelpOpen(false), []);

  useShortcuts({
    onToggleTheme: toggleTheme,
    onToggleLang: toggleLang,
    onShowHelp: showHelp,
  });

  return (
    <>
      <Suspense fallback={<div className="route-fallback" aria-hidden="true" />}>
        <Routes>
          <Route path="/miniproject001" element={<MiniProject001 />} />
          <Route path="/miniproject002" element={<MiniProject002 />} />
          <Route path="/colophon" element={<Colophon />} />
          <Route path="/design" element={<DesignSystem />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ShortcutsModal open={helpOpen} onClose={closeHelp} />
    </>
  );
}
