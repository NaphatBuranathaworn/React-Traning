import React from "react"
import "@testing-library/jest-dom"
import SearchBar from "./SearchBar"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"


test("type and get correct text on submit", async () => {
  const onSubmit = (searchText) => {
    expect(searchText).toBe("lion")
  }

  render(<SearchBar onSubmit={onSubmit} />)

  const textbox = screen.getByRole("textbox")
  // screen.debug(textbox)

  await userEvent.type(textbox, "lion[Enter]")
})