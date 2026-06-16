import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
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
        <Switch>
          <Route exact path="/miniproject001" component={MiniProject001} />
          <Route exact path="/miniproject002" component={MiniProject002} />
          <Route exact path="/colophon" component={Colophon} />
          <Route exact path="/design" component={DesignSystem} />
          <Route exact path="/" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <ShortcutsModal open={helpOpen} onClose={closeHelp} />
    </>
  );
}
