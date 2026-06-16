import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLang } from "../i18n/context";

const COLOR_TOKENS = [
  "bg-base", "bg-surface", "bg-elevated", "bg-overlay",
  "border-subtle", "border-default", "border-strong",
  "text-primary", "text-secondary", "text-muted", "text-faint",
  "accent", "accent-strong", "accent-soft", "accent-glow",
  "danger", "success",
];

const SPACE_TOKENS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const RADIUS_TOKENS = ["sm", "md", "lg", "full"];

const TYPE_SCALE = [
  { token: "Display", size: "clamp(40px, 6vw, 64px)", weight: 800, text: "함께 일하고 싶은" },
  { token: "Section title", size: "clamp(28px, 4vw, 40px)", weight: 700, text: "걸어온 길" },
  { token: "Heading 3", size: "20px", weight: 700, text: "Backend / Web Developer" },
  { token: "Body", size: "16px", weight: 400, text: "정보의 공유와 소통, 상호 존중을 중시합니다." },
  { token: "Caption", size: "13px", weight: 600, text: "PORTFOLIO" },
];

export default function DesignSystem() {
  const { t } = useLang();
  return (
    <div className="app">
      <Header />
      <main className="detail design-system">
        <div className="container">
          <Link to="/" className="detail__back">
            ← {t("detail.back")}
          </Link>

          <span className="section__eyebrow">Design System</span>
          <h1 className="detail__title">디자인 토큰 카탈로그</h1>
          <p className="detail__lead">
            이 사이트의 시각 언어를 구성하는 토큰들입니다. 컬러·간격·반경·타이포 모두 CSS Custom Properties로 정의되어
            다크/라이트 모드 전환과 테마 확장에 즉시 대응합니다.
          </p>

          <section className="ds-section">
            <h2 className="ds-heading">Colors</h2>
            <p className="ds-desc">현재 테마(<code>data-theme</code>)에 따라 자동으로 바뀝니다.</p>
            <div className="ds-color-grid">
              {COLOR_TOKENS.map((token) => (
                <div key={token} className="ds-color">
                  <div
                    className="ds-color__swatch"
                    style={{ background: `var(--${token})` }}
                  />
                  <div className="ds-color__meta">
                    <span className="ds-color__name">--{token}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="ds-section">
            <h2 className="ds-heading">Spacing (8px grid)</h2>
            <div className="ds-space">
              {SPACE_TOKENS.map((n) => (
                <div key={n} className="ds-space__row">
                  <span className="ds-space__label">--space-{n}</span>
                  <div className="ds-space__bar" style={{ width: `var(--space-${n})` }} />
                </div>
              ))}
            </div>
          </section>

          <section className="ds-section">
            <h2 className="ds-heading">Radius</h2>
            <div className="ds-radius">
              {RADIUS_TOKENS.map((r) => (
                <div key={r} className="ds-radius__item">
                  <div
                    className="ds-radius__shape"
                    style={{ borderRadius: `var(--radius-${r})` }}
                  />
                  <span>--radius-{r}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="ds-section">
            <h2 className="ds-heading">Typography</h2>
            <div className="ds-type">
              {TYPE_SCALE.map((item) => (
                <div key={item.token} className="ds-type__row">
                  <div className="ds-type__meta">
                    <strong>{item.token}</strong>
                    <span>{item.size} · {item.weight}</span>
                  </div>
                  <p
                    className="ds-type__sample"
                    style={{ fontSize: item.size, fontWeight: item.weight }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="ds-section">
            <h2 className="ds-heading">Buttons</h2>
            <div className="ds-buttons">
              <button type="button" className="btn btn--primary">Primary</button>
              <button type="button" className="btn btn--ghost">Ghost</button>
              <button type="button" className="btn btn--primary btn--sm">Primary sm</button>
              <button type="button" className="btn btn--ghost btn--sm">Ghost sm</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
