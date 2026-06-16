import useReveal from "../hooks/useReveal";
import { useLang } from "../i18n/context";

const RESPONSIBILITIES = {
  ko: [
    "JAVA, Spring Framework 기반의 Web Application 개발",
    "MariaDB / MySQL을 활용한 데이터 모델링과 쿼리 튜닝",
    "Linux(CentOS, Redhat) 환경에서의 운영 및 배포 경험",
    "Ajax, jQuery, HTML, JavaScript, CSS 기반의 프론트엔드 구현",
    "Jenkins 파이프라인을 통한 배포 자동화(CI/CD)",
    "외부 API 연동(네이버 아이디 로그인, 단축 URL 등)",
    "Safari / Chrome / IE 등 멀티 브라우저 호환성 처리",
    "결제 처리 및 결제 전/후 로깅·연산 처리",
    "RESTful API 설계 및 구현",
    "SSL 인증서 발급/갱신 및 적용",
    "IoT 연동(스캐너, 프린터, 조명, 콘센트, 에어컨 등)",
    "웹앱(Android/iOS) 배포, 푸시 알림, 버전 업데이트 관리",
  ],
  en: [
    "Web application development with Java and Spring Framework",
    "Data modeling and query tuning with MariaDB / MySQL",
    "Operations and deployment on Linux (CentOS, Redhat)",
    "Frontend implementation with Ajax, jQuery, HTML, JavaScript, CSS",
    "CI/CD automation via Jenkins pipelines",
    "Third-party API integration (Naver login, URL shortening, etc.)",
    "Multi-browser compatibility (Safari / Chrome / IE)",
    "Payment processing with pre/post logging and calculations",
    "Designing and implementing RESTful APIs",
    "SSL certificate issuance, renewal, and deployment",
    "IoT integration (scanners, printers, lighting, outlets, air conditioners)",
    "Web app (Android/iOS) deployment, push notifications, version management",
  ],
};

const HIGHLIGHTS = {
  ko: [
    "반복되는 작업을 스크립트/함수로 추상화해 자동화",
    "복잡한 단일 파일을 기능 단위로 분리해 응집도 향상",
    "git-flow 기반 협업으로 변경 이력 명확화",
    "사용자 피드백을 기반으로 성능·사용성 점진 개선",
    "DB 로그 분석을 통한 장애 원인 추적과 회복",
  ],
  en: [
    "Automated repetitive tasks by abstracting them into scripts/functions",
    "Increased cohesion by splitting complex single files into feature units",
    "Clarified change history via git-flow based collaboration",
    "Incrementally improved performance and usability based on user feedback",
    "Traced and recovered from incidents through DB log analysis",
  ],
};

export default function About() {
  const ref = useReveal();
  const { lang, t } = useLang();

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="section__eyebrow">{t("about.eyebrow")}</span>
          <h2 className="section__title">{t("about.title")}</h2>
          <p className="section__subtitle">{t("about.subtitle")}</p>

          <div className="about__grid">
            <div>
              <p className="about__list-title">{t("about.responsibilitiesTitle")}</p>
              <ul className="about__list">
                {RESPONSIBILITIES[lang].map((text) => (
                  <li key={text} className="about__list-item">{text}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="about__list-title">{t("about.highlightsTitle")}</p>
              <ul className="about__list">
                {HIGHLIGHTS[lang].map((text) => (
                  <li key={text} className="about__list-item">{text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
