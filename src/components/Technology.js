import useReveal from "../hooks/useReveal";
import { useLang } from "../i18n/context";

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
  { key: "expert", modifier: "expert" },
  { key: "proficient", modifier: "proficient" },
  { key: "familiar", modifier: "familiar" },
];

function SkillIcon({ name }) {
  return (
    <div className="skill-item">
      <img
        className="skill-item__icon"
        src={`${import.meta.env.BASE_URL}images/${name}.png`}
        alt=""
        loading="lazy"
        width="36"
        height="36"
      />
      <span className="skill-item__label">{LABELS[name] || name}</span>
    </div>
  );
}

export default function Technology({ techHighList = [], techMidList = [], techLowList = [] }) {
  const ref = useReveal();
  const { t } = useLang();
  const lists = {
    expert: techHighList,
    proficient: techMidList,
    familiar: techLowList,
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="section__eyebrow">{t("skills.eyebrow")}</span>
          <h2 className="section__title">{t("skills.title")}</h2>
          <p className="section__subtitle">{t("skills.subtitle")}</p>

          <div className="skills__groups">
            {GROUPS.map((group) => (
              <div key={group.key} className={`skill-group skill-group--${group.modifier}`}>
                <div className="skill-group__header">
                  <h3 className="skill-group__title">{t(`skills.groups.${group.key}.title`)}</h3>
                  <span className="skill-group__badge">{t(`skills.groups.${group.key}.badge`)}</span>
                </div>
                <p className="skill-group__desc">{t(`skills.groups.${group.key}.desc`)}</p>
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
