import { Component } from "react";

// React.lazy로 분할된 청크가 새 배포로 인해 사라졌을 때 (ChunkLoadError)
// 흰 화면 대신 한 번 새로고침해서 새 entry를 로드하도록 유도한다.
function isChunkLoadError(error) {
  if (!error) return false;
  const name = error.name || "";
  const message = error.message || "";
  return (
    name === "ChunkLoadError" ||
    /Loading chunk \d+ failed/i.test(message) ||
    /dynamically imported module/i.test(message)
  );
}

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    if (isChunkLoadError(error)) {
      // 새 배포로 청크 해시가 어긋난 케이스 — 한 번 새로고침으로 복구
      if (typeof window !== "undefined" && !window.__chunkReloadAttempted) {
        window.__chunkReloadAttempted = true;
        window.location.reload();
      }
    }
  }

  reset = () => {
    this.setState({ error: null });
  };

  render() {
    if (!this.state.error) return this.props.children;

    if (isChunkLoadError(this.state.error)) {
      // reload 트리거 중 — 빈 placeholder
      return <div className="route-fallback" aria-hidden="true" />;
    }

    return (
      <div className="notfound" role="alert">
        <div>
          <h1 className="notfound__title">문제가 발생했습니다.</h1>
          <p className="notfound__desc">잠시 후 다시 시도해 주세요.</p>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              this.reset();
              window.location.reload();
            }}
          >
            새로고침
          </button>
        </div>
      </div>
    );
  }
}
