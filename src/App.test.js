import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders main hero title", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const heading = screen.getByText(/안녕하세요, 박정수입니다/i);
  expect(heading).toBeInTheDocument();
});
