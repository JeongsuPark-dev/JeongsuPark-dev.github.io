import { render, screen, act } from "@testing-library/react";
import useActiveSection from "../useActiveSection";

function mountSection(id, top) {
  const el = document.createElement("section");
  el.id = id;
  el.getBoundingClientRect = () => ({
    top,
    bottom: top + 200,
    left: 0,
    right: 0,
    width: 0,
    height: 200,
    x: 0,
    y: top,
    toJSON: () => ({}),
  });
  document.body.appendChild(el);
  return el;
}

function Probe({ ids }) {
  const active = useActiveSection(ids, 64);
  return <span data-testid="active">{active}</span>;
}

describe("useActiveSection", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    window.scrollY = 0;
  });

  test("스크롤 위치에 따라 활성 섹션 갱신", () => {
    mountSection("top", 0);
    mountSection("about", 500);
    mountSection("projects", 1500);

    render(<Probe ids={["top", "about", "projects"]} />);
    expect(screen.getByTestId("active").textContent).toBe("top");

    act(() => {
      window.scrollY = 600;
      window.dispatchEvent(new Event("scroll"));
    });
    expect(screen.getByTestId("active").textContent).toBe("about");

    act(() => {
      window.scrollY = 1600;
      window.dispatchEvent(new Event("scroll"));
    });
    expect(screen.getByTestId("active").textContent).toBe("projects");
  });

  test("DOM에 섹션이 없을 때 첫 id를 유지", () => {
    render(<Probe ids={["top", "about"]} />);
    expect(screen.getByTestId("active").textContent).toBe("top");
  });
});
