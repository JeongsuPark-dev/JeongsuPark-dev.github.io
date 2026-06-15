import useReveal from "../hooks/useReveal";

const EXPERIENCES = [
  {
    period: "2020 — Present",
    role: "Full-stack Developer",
    company: "Independent / Side Projects",
    description:
      "React·Node.js 기반의 개인 프로젝트와 학습용 클론 코딩을 진행하며 프론트엔드와 백엔드 양쪽의 흐름을 익히고 있습니다.",
    achievements: [
      "React Router 기반 SPA 포트폴리오 사이트 직접 설계·배포",
      "GitHub Pages를 활용한 정적 배포 자동화",
      "Pretendard·CSS 토큰 시스템을 적용한 디자인 시스템 도입",
    ],
    tags: ["React", "Node.js", "GitHub Pages"],
  },
  {
    period: "2018 — 2020",
    role: "Backend / Web Developer",
    company: "SI / 자사 서비스",
    description:
      "Java·Spring 기반의 웹 애플리케이션을 개발하고 운영했습니다. Jenkins 파이프라인으로 배포를 자동화하고 결제·API 연동을 담당했습니다.",
    achievements: [
      "Spring + MariaDB로 결제 전·후 로깅 및 정산 로직 구현",
      "Jenkins CI/CD 파이프라인 구축으로 배포 시간 단축",
      "네이버 로그인·단축 URL 등 외부 API 연동",
      "Linux(CentOS) 환경 운영 및 SSL 인증서 발급·갱신",
    ],
    tags: ["Java", "Spring", "MariaDB", "Jenkins", "Linux"],
  },
  {
    period: "2016 — 2018",
    role: "App / IoT Developer",
    company: "초기 커리어",
    description:
      "Android 네이티브 앱과 IoT 연동 프로젝트를 통해 기기-서버 데이터 흐름을 학습했습니다. 첫 출시 앱을 직접 운영하며 사용자 피드백을 반영했습니다.",
    achievements: [
      "Android 학습 보조 앱 출시 및 운영",
      "블루투스 센서·서버 DB 연동 IoT 프로토타입 개발",
      "푸시 알림·버전 업데이트 등 앱 운영 전반 경험",
    ],
    tags: ["Android", "Java", "IoT", "Bluetooth"],
  },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="section__eyebrow">Experience</span>
          <h2 className="section__title">걸어온 길</h2>
          <p className="section__subtitle">
            지금까지 거쳐 온 역할과 그 안에서 배운 것들을 시간 순서대로 정리했습니다.
          </p>

          <ol className="timeline">
            {EXPERIENCES.map((item) => (
              <li key={item.period} className="timeline__item">
                <div className="timeline__marker" aria-hidden="true" />
                <div className="timeline__content">
                  <span className="timeline__period">{item.period}</span>
                  <h3 className="timeline__role">{item.role}</h3>
                  <p className="timeline__company">{item.company}</p>
                  <p className="timeline__desc">{item.description}</p>
                  <ul className="timeline__list">
                    {item.achievements.map((a) => (
                      <li key={a} className="timeline__list-item">{a}</li>
                    ))}
                  </ul>
                  <div className="timeline__tags">
                    {item.tags.map((t) => (
                      <span key={t} className="timeline__tag">{t}</span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
