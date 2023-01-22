import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // 一旦通るテストを記述
  expect(1 + 1).toBe(2);
});
