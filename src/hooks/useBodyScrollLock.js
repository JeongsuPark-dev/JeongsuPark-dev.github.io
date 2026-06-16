import { useEffect } from "react";

// 여러 컴포넌트(모달, 모바일 메뉴 등)가 동시에 스크롤을 잠글 수 있으므로
// 단순 set/clear 대신 카운터 패턴으로 안전하게 해제 시점을 결정한다.
let lockCount = 0;
let previousOverflow = null;

function lock() {
  if (lockCount === 0) {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  lockCount += 1;
}

function unlock() {
  if (lockCount === 0) return;
  lockCount -= 1;
  if (lockCount === 0) {
    document.body.style.overflow = previousOverflow ?? "";
    previousOverflow = null;
  }
}

export default function useBodyScrollLock(active) {
  useEffect(() => {
    if (!active) return undefined;
    lock();
    return unlock;
  }, [active]);
}
