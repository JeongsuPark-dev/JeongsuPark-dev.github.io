import useReveal from "../hooks/useReveal";

const RESPONSIBILITIES = [
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
];

const HIGHLIGHTS = [
  "반복되는 작업을 스크립트/함수로 추상화해 자동화",
  "복잡한 단일 파일을 기능 단위로 분리해 응집도 향상",
  "git-flow 기반 협업으로 변경 이력 명확화",
  "사용자 피드백을 기반으로 성능·사용성 점진 개선",
  "DB 로그 분석을 통한 장애 원인 추적과 회복",
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="section__eyebrow">About</span>
          <h2 className="section__title">기술과 사람, 두 가지를 같이 고민합니다.</h2>
          <p className="section__subtitle">
            제품의 문제는 코드뿐 아니라 커뮤니케이션에서도 자주 발생합니다.
            그래서 저는 코드의 품질만큼이나 기록과 공유에 시간을 씁니다.
          </p>

          <div className="about__grid">
            <div>
              <p className="about__list-title">이런 업무를 했습니다</p>
              <ul className="about__list">
                {RESPONSIBILITIES.map((text) => (
                  <li key={text} className="about__list-item">{text}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="about__list-title">이런 경험도 했습니다</p>
              <ul className="about__list">
                {HIGHLIGHTS.map((text) => (
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
