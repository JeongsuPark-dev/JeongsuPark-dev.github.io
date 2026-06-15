import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Main from "./pages/Main";

const MiniProject001 = lazy(() => import("./pages/MiniProject001"));
const MiniProject002 = lazy(() => import("./pages/MiniProject002"));

function NotFound() {
  return (
    <div className="notfound">
      <div>
        <h1 className="notfound__title">페이지를 찾을 수 없습니다.</h1>
        <p className="notfound__desc">주소가 정확한지 확인해 주세요.</p>
        <Link to="/" className="btn btn--primary">
          메인으로 이동
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div className="route-fallback" aria-hidden="true" />}>
      <Switch>
        <Route exact path="/miniproject001" component={MiniProject001} />
        <Route exact path="/miniproject002" component={MiniProject002} />
        <Route exact path="/" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}
