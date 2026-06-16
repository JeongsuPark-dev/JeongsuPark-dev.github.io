import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { LangProvider } from "./i18n/context";
import { ThemeProvider } from "./hooks/useTheme";

test("메인 진입 시 Hero 인사말이 렌더링된다", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <ThemeProvider>
        <LangProvider>
          <App />
        </LangProvider>
      </ThemeProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText(/안녕하세요, 박정수입니다|Hello, I'm Jeongsu Park/)).toBeInTheDocument();
  });
});
