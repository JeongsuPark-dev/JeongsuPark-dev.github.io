import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import useMouseTilt from "../hooks/useMouseTilt";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 3h6v6M10 14L21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
  </svg>
);

function ExternalCard({ project }) {
  const tilt = useMouseTilt();
  return (
    <a
      className="project-card"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      {...tilt}
    >
      <div className="project-card__media">
        <img
          src={`${process.env.PUBLIC_URL}/images/${project.image}.png`}
          alt={`${project.title} 프로젝트 미리보기`}
          loading="lazy"
        />
      </div>
      <div className="project-card__body">
        <div className="project-card__tags">
          {(project.tags || ["External"]).map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
        <div className="project-card__title">
          {project.title}
          <span className="project-card__arrow"><ArrowIcon /></span>
        </div>
        {project.description && <p className="project-card__desc">{project.description}</p>}
        {project.subLink && (
          <span className="project-card__link">
            <ExternalIcon /> {project.subContents || project.subLink}
          </span>
        )}
      </div>
    </a>
  );
}

function InternalCard({ project }) {
  const tilt = useMouseTilt();
  return (
    <Link
      to={`/${project.link}`}
      className="project-card"
      {...tilt}
    >
      <div className="project-card__media">
        <img
          src={`${process.env.PUBLIC_URL}/images/${project.link}.png`}
          alt={`${project.title} 미리보기`}
          loading="lazy"
        />
      </div>
      <div className="project-card__body">
        <div className="project-card__tags">
          {(project.tags || ["Mini Project"]).map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
        <div className="project-card__title">
          {project.title}
          <span className="project-card__arrow"><ArrowIcon /></span>
        </div>
        {project.description && <p className="project-card__desc">{project.description}</p>}
      </div>
    </Link>
  );
}

export default function Project({ outerLinks = [], innerLinks = [] }) {
  const ref = useReveal();

  return (
    <section id="projects" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="section__eyebrow">Projects</span>
          <h2 className="section__title">손으로 빚은 작은 프로젝트들</h2>
          <p className="section__subtitle">
            학습과 실험을 위해 직접 만들어 본 사이드 프로젝트입니다.
            각 카드를 클릭하면 상세 정보 또는 외부 링크로 이동합니다.
          </p>

          <div className="projects__grid">
            {outerLinks.map((project) => (
              <ExternalCard key={project.title} project={project} />
            ))}
            {innerLinks.map((project) => (
              <InternalCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
