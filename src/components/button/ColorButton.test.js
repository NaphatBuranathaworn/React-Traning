import React from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react";
import ColorButton from "./ColorButton";

beforeEach(() => {
  render(<ColorButton/>)
})

test("button initial color correct", () => {
  const button = screen.getByRole("button", {name: "Change to blue"})
  // screen.debug(button)
  expect(button).toBeInTheDocument
  expect(button).toHaveStyle({backgroundColor: "red"})
})

test("button change to blue when click", () => {
  const button = screen.getByRole("button", {name: "Change to blue"})
  fireEvent.click(button)
  expect(button).toHaveStyle({backgroundColor: "blue"})
  expect(button).toHaveTextContent("Change to red")
})