import useReveal from "../hooks/useReveal";

// 본인의 실제 글로 교체 (velog/티스토리/Medium URL 등)
const POSTS = [
  {
    title: "TODO: 첫 번째 글 제목",
    href: "#",
    date: "2026-06",
    excerpt: "TODO: 글의 요약을 한두 줄로",
    tags: ["TODO"],
  },
  {
    title: "TODO: 두 번째 글 제목",
    href: "#",
    date: "2026-05",
    excerpt: "TODO: 글의 요약",
    tags: ["TODO"],
  },
  {
    title: "TODO: 세 번째 글 제목",
    href: "#",
    date: "2026-04",
    excerpt: "TODO: 글의 요약",
    tags: ["TODO"],
  },
];

const NOW = {
  reading: "TODO: 요즘 읽는 책 또는 문서",
  learning: "TODO: 요즘 학습 중인 기술",
  building: "TODO: 진행 중인 사이드 프로젝트",
};

export default function Writing() {
  const ref = useReveal();

  return (
    <section id="writing" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="section__eyebrow">Writing</span>
          <h2 className="section__title">기록하고 공유하기</h2>
          <p className="section__subtitle">
            배운 것을 글로 정리하면 더 오래 남고, 누군가에게는 시작점이 됩니다.
          </p>

          <div className="now-grid">
            <div className="now-card">
              <span className="now-card__label">📚 Reading</span>
              <p className="now-card__value">{NOW.reading}</p>
            </div>
            <div className="now-card">
              <span className="now-card__label">🧠 Learning</span>
              <p className="now-card__value">{NOW.learning}</p>
            </div>
            <div className="now-card">
              <span className="now-card__label">🔨 Building</span>
              <p className="now-card__value">{NOW.building}</p>
            </div>
          </div>

          <div className="posts">
            {POSTS.map((post) => (
              <a
                key={post.title}
                href={post.href}
                className="post-card"
                {...(post.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <div className="post-card__meta">
                  <span className="post-card__date">{post.date}</span>
                  <div className="post-card__tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="post-card__tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 className="post-card__title">{post.title}</h3>
                <p className="post-card__excerpt">{post.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
