import { render, screen, act } from "@testing-library/react";
import { LangProvider, useLang } from "../context";

function Probe() {
  const { lang, toggle, t } = useLang();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="value">{t("hero.ctaProjects")}</span>
      <button type="button" onClick={toggle}>toggle</button>
    </div>
  );
}

describe("i18n context", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("기본 언어는 ko (또는 navigator 기반)", () => {
    render(
      <LangProvider>
        <Probe />
      </LangProvider>
    );
    const lang = screen.getByTestId("lang").textContent;
    expect(["ko", "en"]).toContain(lang);
  });

  test("toggle 호출 시 ko ↔ en 전환", () => {
    localStorage.setItem("lang", "ko");
    render(
      <LangProvider>
        <Probe />
      </LangProvider>
    );
    expect(screen.getByTestId("lang").textContent).toBe("ko");
    expect(screen.getByTestId("value").textContent).toBe("프로젝트 보기");

    act(() => {
      screen.getByText("toggle").click();
    });
    expect(screen.getByTestId("lang").textContent).toBe("en");
    expect(screen.getByTestId("value").textContent).toBe("View Projects");
  });

  test("존재하지 않는 키는 한국어 fallback 후 원문 반환", () => {
    localStorage.setItem("lang", "en");

    function Missing() {
      const { t } = useLang();
      return <span data-testid="missing">{t("does.not.exist")}</span>;
    }
    render(
      <LangProvider>
        <Missing />
      </LangProvider>
    );
    expect(screen.getByTestId("missing").textContent).toBe("does.not.exist");
  });
});
