import useReveal from "../hooks/useReveal";
import { useLang } from "../i18n/context";

export default function Hero() {
  const ref = useReveal();
  const { t } = useLang();

  const meta = [
    { label: t("hero.metaRole"), value: t("hero.metaRoleValue") },
    { label: t("hero.metaStack"), value: t("hero.metaStackValue") },
    { label: t("hero.metaLocation"), value: t("hero.metaLocationValue") },
  ];

  return (
    <section id="top" className="hero">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="hero__greeting">
            <span className="hero__greeting-dot" aria-hidden="true" />
            {t("hero.eyebrow")}
          </span>

          <h1 className="hero__title">
            {t("hero.title1")}
            <br />
            <span className="hero__title-accent">{t("hero.title2")}</span>
          </h1>

          <p className="hero__lead">{t("hero.lead")}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              {t("hero.ctaProjects")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://github.com/JeongsuPark-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              {t("hero.ctaGithub")}
            </a>
          </div>

          <dl className="hero__meta">
            {meta.map((item) => (
              <div key={item.label} className="hero__meta-item">
                <dt className="hero__meta-label">{item.label}</dt>
                <dd className="hero__meta-value">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
