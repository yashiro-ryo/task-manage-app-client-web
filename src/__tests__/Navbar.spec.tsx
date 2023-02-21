import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";

const sel = (id: string) => `[data-tesidt="${id}"]`;

test("Navbarのタイトルに`Task Manage App`と表示されていること", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const element = screen.getByTestId("nav-brand");
  expect(element.textContent).toBe("Task Manage App");
});

test("Navbarのリンクの`ログアウト`という文字列が表示されていること", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const element = screen.getByTestId("nav-link-signout");
  expect(element.textContent).toBe("ログアウト");
});
