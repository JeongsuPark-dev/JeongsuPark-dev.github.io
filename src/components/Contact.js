import { useState } from "react";
import useReveal from "../hooks/useReveal";

const EMAIL = "jeongsupark.dev@gmail.com";

const CHANNELS = [
  {
    label: "GitHub",
    value: "github.com/JeongsuPark-dev",
    href: "https://github.com/JeongsuPark-dev",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.1-3.2.69-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.66.8.55C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jeongsu-park",
    href: "https://www.linkedin.com/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
];

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Contact() {
  const ref = useReveal();
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {}
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="section__eyebrow">Contact</span>
          <h2 className="section__title">함께 이야기 나눠요</h2>
          <p className="section__subtitle">
            새로운 협업 기회, 채용 제안, 또는 가벼운 커피챗까지 — 편하게 연락 주세요.
          </p>

          <div className="contact">
            <div className="contact__card contact__card--primary">
              <MailIcon />
              <div className="contact__main">
                <p className="contact__label">Email</p>
                <a className="contact__email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="contact__actions">
                <button
                  type="button"
                  className="btn btn--ghost btn--sm"
                  onClick={onCopy}
                  aria-label="이메일 복사"
                >
                  {copied ? <CheckIcon /> : <CopyIcon />}
                  {copied ? "복사됨" : "복사"}
                </button>
                <a className="btn btn--primary btn--sm" href={`mailto:${EMAIL}`}>
                  메일 보내기
                </a>
              </div>
            </div>

            <div className="contact__channels">
              {CHANNELS.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__channel"
                >
                  <span className="contact__channel-icon">{ch.icon}</span>
                  <span className="contact__channel-body">
                    <span className="contact__channel-label">{ch.label}</span>
                    <span className="contact__channel-value">{ch.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
