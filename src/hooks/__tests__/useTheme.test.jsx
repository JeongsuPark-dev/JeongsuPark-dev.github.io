import { render, screen, act } from "@testing-library/react";
import useTheme, { ThemeProvider } from "../useTheme";

function Probe() {
  const { theme, toggle } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button type="button" onClick={toggle}>toggle</button>
    </div>
  );
}

function renderWithProvider(ui) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe("useTheme", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  test("data-theme 속성이 있으면 그 값을 초기값으로 사용", () => {
    document.documentElement.setAttribute("data-theme", "light");
    renderWithProvider(<Probe />);
    expect(screen.getByTestId("theme").textContent).toBe("light");
  });

  test("data-theme 미설정 시 dark로 초기화", () => {
    renderWithProvider(<Probe />);
    expect(screen.getByTestId("theme").textContent).toBe("dark");
  });

  test("toggle 호출 시 dark ↔ light 전환", () => {
    document.documentElement.setAttribute("data-theme", "dark");
    renderWithProvider(<Probe />);

    act(() => screen.getByText("toggle").click());
    expect(screen.getByTestId("theme").textContent).toBe("light");

    act(() => screen.getByText("toggle").click());
    expect(screen.getByTestId("theme").textContent).toBe("dark");
  });

  test("테마 변경 시 documentElement data-theme + localStorage 갱신", () => {
    document.documentElement.setAttribute("data-theme", "dark");
    renderWithProvider(<Probe />);

    act(() => screen.getByText("toggle").click());
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });

  test("Provider 없이 사용하면 명시적 에러", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<Probe />)).toThrow(/within ThemeProvider/);
    spy.mockRestore();
  });
});
