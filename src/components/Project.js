import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

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
  return (
    <a
      key={project.Title}
      className="project-card"
      href={project.Link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-card__media">
        <img
          src={`${process.env.PUBLIC_URL}/images/${project.Image}.png`}
          alt={project.Title}
          loading="lazy"
        />
      </div>
      <div className="project-card__body">
        <div className="project-card__tags">
          {(project.Tags || ["External"]).map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
        <div className="project-card__title">
          {project.Title}
          <span className="project-card__arrow"><ArrowIcon /></span>
        </div>
        {project.Description && <p className="project-card__desc">{project.Description}</p>}
        {project.SubLink && (
          <span className="project-card__link">
            <ExternalIcon /> {project.SubContents || project.SubLink}
          </span>
        )}
      </div>
    </a>
  );
}

function InternalCard({ project }) {
  return (
    <Link
      key={project.Title}
      to={`${process.env.PUBLIC_URL}/${project.Link}`}
      className="project-card"
    >
      <div className="project-card__media">
        <img
          src={`${process.env.PUBLIC_URL}/images/${project.Link}.png`}
          alt={project.Title}
          loading="lazy"
        />
      </div>
      <div className="project-card__body">
        <div className="project-card__tags">
          {(project.Tags || ["Mini Project"]).map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
        <div className="project-card__title">
          {project.Title}
          <span className="project-card__arrow"><ArrowIcon /></span>
        </div>
        {project.Description && <p className="project-card__desc">{project.Description}</p>}
      </div>
    </Link>
  );
}

export default function Project({ outer_link = [], inner_link = [] }) {
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
            {outer_link.map((project) => (
              <ExternalCard key={project.Title} project={project} />
            ))}
            {inner_link.map((project) => (
              <InternalCard key={project.Title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
