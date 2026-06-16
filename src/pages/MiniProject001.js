import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLang } from "../i18n/context";

const BackIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

// 케이스 스터디 콘텐츠 — 본인의 실제 데이터로 교체 필요
const CASE_STUDY = {
  problem: [
    "TODO: 이 프로젝트가 풀려고 했던 실제 문제를 한두 문장으로 기술 (예: \"학습 습관 추적이 종이 노트로 관리되어 누락·왜곡이 빈번\")",
  ],
  approach: [
    "TODO: 어떤 접근으로 풀었는지 (예: \"로컬 SQLite + WorkManager 기반 백그라운드 동기화로 오프라인 우선 설계\")",
  ],
  stack: ["Android (Java)", "SQLite", "WorkManager", "Firebase Cloud Messaging"],
  tradeoffs: [
    "TODO: 의도적으로 포기한 것 / 선택한 것 (예: \"실시간 동기화 대신 5분 배치로 배터리 ↔ 신선도 트레이드오프\")",
  ],
  metrics: [
    { label: "DAU", value: "TODO" },
    { label: "Crash-free rate", value: "TODO" },
    { label: "평균 학습 세션 길이", value: "TODO" },
  ],
  learned: [
    "TODO: 가장 인상 깊었던 학습 1~2개 (실패 포함)",
  ],
};

export default function MiniProject001() {
  const { t } = useLang();
  return (
    <div className="app">
      <Header />
      <main className="detail">
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
              />
            </picture>
          </div>

          <section className="case-study">
            <div className="case-study__block">
              <h2 className="case-study__heading">문제 정의</h2>
              {CASE_STUDY.problem.map((line) => (
                <p key={line} className="case-study__text">{line}</p>
              ))}
            </div>

            <div className="case-study__block">
              <h2 className="case-study__heading">접근 방식</h2>
              {CASE_STUDY.approach.map((line) => (
                <p key={line} className="case-study__text">{line}</p>
              ))}
            </div>

            <div className="case-study__block">
              <h2 className="case-study__heading">기술 스택</h2>
              <div className="case-study__tags">
                {CASE_STUDY.stack.map((tag) => (
                  <span key={tag} className="case-study__tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="case-study__block">
              <h2 className="case-study__heading">트레이드오프</h2>
              {CASE_STUDY.tradeoffs.map((line) => (
                <p key={line} className="case-study__text">{line}</p>
              ))}
            </div>

            <div className="case-study__block">
              <h2 className="case-study__heading">결과 / 수치</h2>
              <dl className="case-study__metrics">
                {CASE_STUDY.metrics.map((m) => (
                  <div key={m.label} className="case-study__metric">
                    <dt>{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="case-study__block">
              <h2 className="case-study__heading">배운 것</h2>
              <ul className="case-study__list">
                {CASE_STUDY.learned.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
