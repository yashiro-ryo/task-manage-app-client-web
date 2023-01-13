import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("NavbarのタイトルにNavbar Titleと表示されていること", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/Navbar Title/i);
  expect(linkElement).toBeInTheDocument();
});
