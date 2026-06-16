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

export default function MiniProject001() {
  const { t } = useLang();
  usePageMeta({
    title: t("meta.miniproject001.title"),
    description: t("meta.miniproject001.description"),
    path: "/miniproject001",
  });
  return (
    <div className="app">
      <Header />
      <main id="main" className="detail">
        <div className="container">
          <Link to="/" className="detail__back">
            <BackIcon /> {t("detail.back")}
          </Link>

          <span className="section__eyebrow">Mini Project · Android</span>
          <h1 className="detail__title">학습 보조 안드로이드 앱</h1>
          <p className="detail__lead">
            네이티브 안드로이드 환경에서 직접 만든 학습 도우미 앱입니다.
            로컬 DB 연동과 푸시 알림, 그리고 플레이스토어 배포까지의 전 과정을 경험했습니다.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=socket.androidtown.org.learningassistance"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary detail__cta"
          >
            플레이스토어에서 확인하기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>

          <div className="detail__media">
            <picture>
              <source srcSet={import.meta.env.BASE_URL + "images/miniproject001_high.webp"} type="image/webp" />
              <img
                src={import.meta.env.BASE_URL + "images/miniproject001_high.png"}
                alt="학습 보조 앱의 메인 화면 — 학습 항목 리스트와 진도 표시 UI"
                loading="lazy"
                width="1069"
                height="729"
              />
            </picture>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
