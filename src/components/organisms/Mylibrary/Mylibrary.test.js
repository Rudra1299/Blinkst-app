import { render, screen } from "@testing-library/react";
import Mylibrary from "./Mylibrary";

it("test for the explorer compoenent", () => {
  render(<Mylibrary />);
  const Element = screen.getByText(/currently reading/i);
  expect(Element).toBeInTheDocument();
});
