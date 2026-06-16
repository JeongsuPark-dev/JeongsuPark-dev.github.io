import useReveal from "../hooks/useReveal";
import { useLang } from "../i18n/context";

const EXPERIENCES = {
  ko: [
    {
      period: "2021 — Present",
      role: "Backend / Full-stack Developer",
      company: "라이브 스트리밍 서비스",
      description:
        "SNS 라이브 스트리밍과 라이브 챗 서비스의 백엔드를 개발·운영하고 있습니다. CI/CD와 테스트 자동화를 정착시키며 안정적인 배포 흐름을 만들었습니다.",
      achievements: [
        "Node.js·TypeScript·Express·tsoa 기반의 API 서버 설계 및 운영",
        "메시지 큐 기반 비동기 처리로 실시간 트래픽 안정화",
        "Docker·GCP·AWS 환경에서 CI/CD 파이프라인 구축",
        "테스트 케이스 작성 문화 정착에 기여",
      ],
      tags: ["TypeScript", "Node.js", "Express", "Docker", "GCP", "AWS"],
    },
    {
      period: "2021",
      role: "Full-stack Developer",
      company: "핀테크 스타트업",
      description:
        "Next.js 기반의 서비스를 개발하고 AWS 인프라 구성·부하 테스트까지 담당했습니다.",
      achievements: [
        "Next.js·React·TypeScript로 사용자 화면과 서버 사이드 로직 구현",
        "AWS(EC2·Route53·Elastic Beanstalk·Code Deploy·S3) 기반 배포 환경 구성",
        "JMeter로 부하 테스트를 수행해 서비스 안정성 점검",
      ],
      tags: ["Next.js", "React", "TypeScript", "AWS", "MySQL"],
    },
    {
      period: "2019 — 2020",
      role: "Backend / Web Developer",
      company: "B2B 서비스 기업",
      description:
        "Spring 기반 백엔드와 JSP·React 프론트엔드를 함께 다루며 웹/웹앱 배포까지 풀스택으로 참여했습니다.",
      achievements: [
        "Java·Spring·MariaDB로 API 및 비즈니스 로직 구현",
        "JSP 기반 레거시와 React로 작성된 신규 페이지를 함께 운영",
        "웹앱 빌드·배포 프로세스 경험",
      ],
      tags: ["Java", "Spring", "MariaDB", "React", "JSP"],
    },
    {
      period: "2019",
      role: "Web / Android Developer",
      company: "초기 커리어 스타트업",
      description:
        "웹 백엔드·프론트엔드와 Android 네이티브 개발을 병행하며 풀스택의 기초를 다졌습니다.",
      achievements: [
        "Java·MariaDB 기반의 백엔드 API 개발",
        "JSP·JavaScript·AJAX를 활용한 화면 구현",
        "Android 네이티브 앱 개발 경험",
      ],
      tags: ["Java", "MariaDB", "Android", "JSP"],
    },
  ],
  en: [
    {
      period: "2021 — Present",
      role: "Backend / Full-stack Developer",
      company: "Live streaming service",
      description:
        "Building and operating the backend of an SNS live streaming and live chat service. Established CI/CD and test automation to create a reliable deployment flow.",
      achievements: [
        "Designed and operated API servers built on Node.js · TypeScript · Express · tsoa",
        "Stabilized real-time traffic with async message-queue-based processing",
        "Built CI/CD pipelines on Docker · GCP · AWS",
        "Helped establish a culture of writing test cases",
      ],
      tags: ["TypeScript", "Node.js", "Express", "Docker", "GCP", "AWS"],
    },
    {
      period: "2021",
      role: "Full-stack Developer",
      company: "Fintech startup",
      description:
        "Built a Next.js-based service end-to-end, including AWS infrastructure and load testing.",
      achievements: [
        "Implemented client-side and server-side logic with Next.js · React · TypeScript",
        "Set up deployments on AWS (EC2 · Route53 · Elastic Beanstalk · CodeDeploy · S3)",
        "Verified service stability via JMeter load testing",
      ],
      tags: ["Next.js", "React", "TypeScript", "AWS", "MySQL"],
    },
    {
      period: "2019 — 2020",
      role: "Backend / Web Developer",
      company: "B2B service company",
      description:
        "Worked across Spring backend and JSP · React frontend, taking part in full-stack web / web-app delivery.",
      achievements: [
        "Implemented APIs and business logic with Java · Spring · MariaDB",
        "Operated legacy JSP code alongside newer React pages",
        "Hands-on with web-app build and deployment processes",
      ],
      tags: ["Java", "Spring", "MariaDB", "React", "JSP"],
    },
    {
      period: "2019",
      role: "Web / Android Developer",
      company: "Early-career startup",
      description:
        "Worked across web backend, frontend, and Android native development — laying the groundwork for full-stack practice.",
      achievements: [
        "Developed backend APIs on Java · MariaDB",
        "Implemented UI with JSP · JavaScript · AJAX",
        "Hands-on experience with Android native development",
      ],
      tags: ["Java", "MariaDB", "Android", "JSP"],
    },
  ],
};

export default function Experience() {
  const ref = useReveal();
  const { lang, t } = useLang();

  return (
    <section id="experience" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="section__eyebrow">{t("experience.eyebrow")}</span>
          <h2 className="section__title">{t("experience.title")}</h2>
          <p className="section__subtitle">{t("experience.subtitle")}</p>

          <ol className="timeline">
            {EXPERIENCES[lang].map((item) => (
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
                    {item.tags.map((tag) => (
                      <span key={tag} className="timeline__tag">{tag}</span>
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
