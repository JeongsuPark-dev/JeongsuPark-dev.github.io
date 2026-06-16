import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";

const STACK = [
  { label: "Framework", value: "React 17 (CRA — Vite 마이그레이션 예정)" },
  { label: "Routing", value: "react-router-dom 5 + BrowserRouter basename" },
  { label: "Styling", value: "Vanilla CSS + CSS Custom Properties (no runtime CSS-in-JS)" },
  { label: "Typography", value: "Pretendard Variable (jsDelivr CDN + SRI)" },
  { label: "Animation", value: "IntersectionObserver 기반 reveal + CSS transitions" },
  { label: "Build", value: "Webpack 4 (ejected) — sourcemap off, INLINE_RUNTIME off" },
  { label: "Hosting", value: "GitHub Pages (master branch / build folder)" },
  { label: "i18n", value: "자체 Context 기반 — 외부 라이브러리 없음" },
  { label: "Testing", value: "Jest + React Testing Library" },
];

const DECISIONS = [
  {
    title: "왜 외부 UI 라이브러리를 쓰지 않았나",
    body:
      "antd, MUI 등을 도입하지 않고 디자인 토큰(CSS variables) 기반으로 직접 컴포넌트를 만들었습니다. 번들 크기를 줄이고, " +
      "디자인 결정을 명시적으로 드러내며, 토큰만 바꿔도 다크/라이트/추가 테마가 동작하도록 설계했습니다.",
  },
  {
    title: "왜 CSS-in-JS가 아닌 vanilla CSS인가",
    body:
      "런타임 비용이 0이고, FOUC가 없으며, 디자인 토큰이 한곳에 모이는 단순함을 택했습니다. " +
      "포트폴리오 규모에선 styled-components/emotion의 이점보다 단점이 큽니다.",
  },
  {
    title: "테마 부트스트랩을 인라인 스크립트로 한 이유",
    body:
      "React 마운트 이전에 localStorage 값을 읽어 data-theme를 미리 박아두지 않으면 첫 페인트에 잘못된 테마가 깜빡입니다(FOUC). " +
      "body 위에 짧은 IIFE 한 줄로 해결했습니다.",
  },
  {
    title: "왜 SPA에서 굳이 sitemap·canonical을 챙겼나",
    body:
      "검색 인덱싱과 OG 카드를 위해서입니다. SPA는 CSR이라 크롤러가 빈 페이지를 받을 수 있어, " +
      "최소한 메타·canonical·sitemap·JSON-LD(Person schema)를 정적으로 채워 인덱싱 가능성을 높였습니다.",
  },
  {
    title: "Pretendard CDN에 SRI를 붙인 이유",
    body:
      "jsDelivr 신뢰도는 높지만 CDN이 침해되면 임의 CSS 주입(UI redress·정보 노출)이 가능합니다. " +
      "sha384 integrity 한 줄로 zero-cost 방어를 했습니다.",
  },
];

const PERF = [
  { label: "Lighthouse Performance", value: "측정 예정", note: "Lighthouse CI 도입 시 자동 기록" },
  { label: "Lighthouse Accessibility", value: "측정 예정", note: "skip-link · focus-visible · reduced-motion 적용" },
  { label: "Lighthouse SEO", value: "측정 예정", note: "OG · JSON-LD · sitemap · robots 완비" },
  { label: "초기 JS 번들 (gzip)", value: "측정 예정", note: "React.lazy 적용으로 페이지별 분리" },
];

const A11Y = [
  "키보드 단축키 (?, g + h/a/e/s/p/c, t, l)",
  "skip-to-content 링크",
  "focus-visible 아웃라인",
  "prefers-reduced-motion 대응",
  "ESC / 외부 클릭으로 모바일 메뉴 닫기",
  "현재 섹션 aria-current=\"location\"",
  "장식 아이콘 alt=\"\" / 의미 있는 이미지 구체적 alt",
];

const TIMELINE = [
  { date: "2024", text: "초기 포트폴리오 React 프로젝트 시작" },
  { date: "2025-Q4", text: "모던 다크 테마로 전면 리뉴얼" },
  { date: "2026-Q2", text: "라우팅·접근성·보안·번들 전반 리뷰 후 후속 개선" },
];

export default function Colophon() {
  const ref = useReveal();

  return (
    <div className="app">
      <Header />
      <main className="detail colophon">
        <div className="container">
          <Link to="/" className="detail__back">
            ← 메인으로 돌아가기
          </Link>

          <span className="section__eyebrow">Colophon</span>
          <h1 className="detail__title">어떻게 이 사이트를 만들었나</h1>
          <p className="detail__lead">
            이 페이지는 포트폴리오 사이트 자체의 기술 스택·설계 결정·성능 측정을 정리한 메타 페이지입니다.
            "왜 그렇게 만들었는가" 에 대한 자기 회고이자, 코드와 일관된 사고를 보여드리고 싶었습니다.
          </p>

          <div ref={ref} className="reveal colophon__sections">
            <section className="colophon__section">
              <h2 className="colophon__heading">Stack</h2>
              <dl className="colophon__dl">
                {STACK.map((item) => (
                  <div key={item.label} className="colophon__dl-row">
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="colophon__section">
              <h2 className="colophon__heading">Design Decisions</h2>
              <ul className="colophon__decisions">
                {DECISIONS.map((d) => (
                  <li key={d.title} className="colophon__decision">
                    <h3>{d.title}</h3>
                    <p>{d.body}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="colophon__section">
              <h2 className="colophon__heading">Performance</h2>
              <dl className="colophon__dl">
                {PERF.map((item) => (
                  <div key={item.label} className="colophon__dl-row">
                    <dt>{item.label}</dt>
                    <dd>
                      {item.value}
                      {item.note && <span className="colophon__note"> — {item.note}</span>}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="colophon__section">
              <h2 className="colophon__heading">Accessibility</h2>
              <ul className="colophon__a11y">
                {A11Y.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="colophon__section">
              <h2 className="colophon__heading">Timeline</h2>
              <ol className="colophon__timeline">
                {TIMELINE.map((item) => (
                  <li key={item.date}>
                    <span className="colophon__time">{item.date}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
