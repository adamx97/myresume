import { createRoot } from "react-dom/client";
import { render, screen, act } from "@testing-library/react";
import App from "./App";

let prev;
beforeAll(() => {
  const prev = global.IS_REACT_ACT_ENVIRONMENT;
  global.IS_REACT_ACT_ENVIRONMENT = false; //  this disables act() warnings and can be reenabled in any test.
});

afterAll(() => {
  global.IS_REACT_ACT_ENVIRONMENT = prev;
});

describe("App", () => {
  it("renders without crashing", () => {
      render(<App />);
  });
});

it("renders a name", async () => {
  render(<App />);
  await screen.findAllByText(/RESUME/i);
  await screen.findAllByRole("button", { name: /RESUME/i });
  await screen.findAllByRole("button", { name: /BLOG/i });

  //expect(screen.getByText("Hello World!")).toBeInTheDocument();
});
