import { render, screen } from "@testing-library/react";
import Explorer from "./Explorer";

it("test for the explorer compoenent", () => {
  render(<Explorer />);
  const Element = screen.getByText(/New/i);
  expect(Element).toBeInTheDocument();
});
