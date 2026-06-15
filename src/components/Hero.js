import useReveal from "../hooks/useReveal";

const META = [
  { label: "Role", value: "Full-stack Developer" },
  { label: "Stack", value: "Java · Spring · React" },
  { label: "Location", value: "Seoul, Korea" },
];

export default function Hero() {
  const ref = useReveal();

  return (
    <section id="top" className="hero">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="hero__greeting">
            <span className="hero__greeting-dot" aria-hidden="true" />
            안녕하세요, 박정수입니다
          </span>

          <h1 className="hero__title">
            함께 일하고 싶은
            <br />
            <span className="hero__title-accent">개발자가 되겠습니다.</span>
          </h1>

          <p className="hero__lead">
            정보의 공유와 소통, 상호 존중을 중시하고 문서화와 기록을 꾸준히 이어 갑니다.
            반복되는 일을 자동화하고, 사용자 피드백으로 제품을 더 낫게 만드는 것을 좋아합니다.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              프로젝트 보기
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
              GitHub 방문하기
            </a>
          </div>

          <dl className="hero__meta">
            {META.map((item) => (
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
