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
    "TODO: IoT 센서 데이터의 어떤 문제를 풀고 싶었는지 (예: \"BLE 연결 끊김으로 인한 측정 누락\")",
  ],
  approach: [
    "TODO: 어떤 아키텍처 / 프로토콜 / 동기화 전략 선택했는지",
  ],
  stack: ["Android (Java)", "Bluetooth Low Energy", "MySQL", "REST API"],
  tradeoffs: [
    "TODO: 무엇을 포기하고 무엇을 얻었는지 (예: \"실시간 스트리밍 대신 1초 간격 배치 — 배터리 ↑\")",
  ],
  metrics: [
    { label: "센서 샘플링 주기", value: "TODO" },
    { label: "BLE 재연결 성공률", value: "TODO" },
    { label: "데이터 손실률", value: "TODO" },
  ],
  learned: [
    "TODO: 가장 인상 깊었던 학습",
  ],
};

export default function MiniProject002() {
  const { t } = useLang();
  return (
    <div className="app">
      <Header />
      <main className="detail">
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
