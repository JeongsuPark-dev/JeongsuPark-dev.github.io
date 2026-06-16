import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import usePageMeta from "../hooks/usePageMeta";
import { useLang } from "../i18n/context";

const BackIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default function MiniProject002() {
  const { t } = useLang();
  usePageMeta({
    title: t("meta.miniproject002.title"),
    description: t("meta.miniproject002.description"),
    path: "/miniproject002",
  });
  return (
    <div className="app">
      <Header />
      <main id="main" className="detail">
        <div className="container">
          <Link to="/" className="detail__back">
            <BackIcon /> {t("detail.back")}
          </Link>

          <span className="section__eyebrow">Mini Project · IoT</span>
          <h1 className="detail__title">IoT 센서 연동 앱</h1>
          <p className="detail__lead">
            블루투스를 통해 외부 센서값을 수집하고, 이를 백엔드 DB에 적재해
            모바일 화면에서 시각화하는 IoT 연동 실험 프로젝트입니다.
          </p>

          <div className="detail__media">
            <picture>
              <source srcSet={import.meta.env.BASE_URL + "images/miniproject002_high.webp"} type="image/webp" />
              <img
                src={import.meta.env.BASE_URL + "images/miniproject002_high.png"}
                alt="IoT 앱의 센서 데이터 대시보드 화면"
                loading="lazy"
                width="1052"
                height="777"
              />
            </picture>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
