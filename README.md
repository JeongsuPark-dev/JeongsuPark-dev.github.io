# 박정수 포트폴리오 (Jeongsu Park — Portfolio)

> React 18 · Vite · React Router 6 기반의 개인 포트폴리오 사이트

배포 URL: <https://jeongsupark-dev.github.io/>

---

## 🚀 Quick Start

```bash
# 설치
npm install

# 개발 서버 (http://localhost:3000)
npm run dev

# 프로덕션 빌드 → ./build
npm run build

# 빌드 결과 로컬 미리보기
npm run preview

# 테스트
npm test
```

## 📦 기술 스택

| 영역 | 사용 기술 |
|------|----------|
| **UI** | React 18, React Router 6 |
| **번들러** | Vite 5 |
| **테스트** | Vitest + Testing Library |
| **스타일** | Vanilla CSS + CSS Custom Properties |
| **i18n** | 자체 Context (ko / en) |
| **호스팅** | GitHub Pages (`gh-pages` 브랜치 자동 배포) |

## 🗺️ 주요 페이지

- `/` — 메인 (Hero · About · Experience · Skills · Projects · Writing · Contact)
- `/miniproject001` · `/miniproject002` — 케이스 스터디
- `/colophon` — 이 사이트의 기술/디자인 결정 메타 페이지
- `/design` — 디자인 토큰 카탈로그

## ⌨️ 키보드 단축키

| 키 | 동작 |
|----|------|
| `?` | 단축키 안내 모달 |
| `g h/a/e/s/p/c` | 섹션 점프 (Top/About/Exp/Skills/Proj/Contact) |
| `t` | 테마 토글 |
| `l` | 언어 토글 (ko ↔ en) |

## 🎨 디자인 원칙

- **외부 UI 라이브러리 없이** CSS Custom Properties 토큰 시스템으로 일관성 유지
- 다크 / 라이트 / 인쇄용 테마 자동 전환
- `prefers-reduced-motion`, focus-visible, skip-link 등 접근성 기본기 챙김
- IntersectionObserver 기반 가벼운 reveal 애니메이션

## 📁 디렉토리 구조

```
src/
├── components/     UI 컴포넌트
├── pages/          라우트별 페이지
├── hooks/          custom hook
├── i18n/           i18n 컨텍스트 + 번역
└── main.jsx        엔트리
public/             정적 자산 (이미지 / favicon / manifest / sitemap)
build/              빌드 산출물 (gh-pages 배포 경로)
```

## 🚢 배포

master에 push되면 GitHub Actions가 자동으로 빌드해서 `gh-pages` 브랜치에 배포합니다.
사이트는 루트(`https://jeongsupark-dev.github.io/`)에서 서빙됩니다.

기존에 외부에 공유된 `/build/*` URL은 `public/404.html`의 fallback 스크립트가
prefix를 자동 제거하여 새 경로로 리다이렉트합니다.

수동 배포가 필요하면 Actions 탭에서 `Deploy to gh-pages` workflow_dispatch.

## 📝 라이센스 / 출처

본 사이트의 콘텐츠는 박정수 본인의 경력 정보입니다.
코드는 자유롭게 참고하실 수 있습니다.
