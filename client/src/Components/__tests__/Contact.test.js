import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';

describe("Contact us page test cases " , ()=>{
test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading", { name: /contact us/i });

  // Assertion
  expect(heading).toBeInTheDocument();
});

// it can be test or it .
test("Should load button on contact component", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  // Assertion
  expect(button).toBeInTheDocument();
});



test("Should load button on contact component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("Name");

  // Assertion
  expect(inputName).toBeInTheDocument();
});

})
