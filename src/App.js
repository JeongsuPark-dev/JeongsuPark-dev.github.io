import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Main from "./pages/Main";
import MiniProject001 from "./pages/MiniProject001";
import MiniProject002 from "./pages/MiniProject002";

function NotFound() {
  return (
    <div className="notfound">
      <div>
        <h1 className="notfound__title">페이지를 찾을 수 없습니다.</h1>
        <p className="notfound__desc">주소가 정확한지 확인해 주세요.</p>
        <Link to={process.env.PUBLIC_URL + "/"} className="btn btn--primary">
          메인으로 이동
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Switch>
      <Route exact path="/build/miniproject001" component={MiniProject001} />
      <Route exact path="/build/miniproject002" component={MiniProject002} />
      <Route exact path={["/", "/build", "/build/"]} component={Main} />
      <Route component={NotFound} />
    </Switch>
  );
}
