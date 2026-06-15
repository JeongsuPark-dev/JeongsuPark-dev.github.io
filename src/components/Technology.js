import useReveal from "../hooks/useReveal";

const LABELS = {
  java: "Java",
  git: "Git",
  js: "JavaScript",
  mysql: "MySQL",
  html: "HTML5",
  css3: "CSS3",
  jquery: "jQuery",
  nodejs: "Node.js",
  react: "React",
  redux: "Redux",
  objective_c: "Objective-C",
};

const GROUPS = [
  {
    key: "expert",
    title: "Expert",
    badge: "주력",
    modifier: "expert",
    description: "실무에서 자주 활용하며 자신 있는 영역",
  },
  {
    key: "proficient",
    title: "Proficient",
    badge: "활용",
    modifier: "proficient",
    description: "필요한 기능을 직접 구현할 수 있는 수준",
  },
  {
    key: "familiar",
    title: "Familiar",
    badge: "학습",
    modifier: "familiar",
    description: "기본 개념을 익히고 점차 확장 중",
  },
];

function SkillIcon({ name }) {
  return (
    <div className="skill-item">
      <img
        className="skill-item__icon"
        src={`${process.env.PUBLIC_URL}/images/${name}.png`}
        alt=""
        loading="lazy"
      />
      <span className="skill-item__label">{LABELS[name] || name}</span>
    </div>
  );
}

export default function Technology({ techHighList = [], techMidList = [], techLowList = [] }) {
  const ref = useReveal();
  const lists = {
    expert: techHighList,
    proficient: techMidList,
    familiar: techLowList,
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="section__eyebrow">Skills</span>
          <h2 className="section__title">사용해 본 기술들</h2>
          <p className="section__subtitle">
            업무에서 실제로 다뤄본 기술을 숙련도에 따라 묶었습니다.
            모든 항목은 직접 코드를 작성하거나 운영해 본 경험이 있습니다.
          </p>

          <div className="skills__groups">
            {GROUPS.map((group) => (
              <div key={group.key} className={`skill-group skill-group--${group.modifier}`}>
                <div className="skill-group__header">
                  <h3 className="skill-group__title">{group.title}</h3>
                  <span className="skill-group__badge">{group.badge}</span>
                </div>
                <p className="skill-group__desc">{group.description}</p>
                <div className="skill-grid">
                  {lists[group.key].map((name) => (
                    <SkillIcon key={name} name={name} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
