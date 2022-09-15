import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react";
import AnimalApp from "./AnimalApp";
import api from "../../api";
import server from "./mocks/server"
import userEvent from "@testing-library/user-event"

beforeAll(() => server.listen())
beforeEach(() => render(<AnimalApp />))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("search zebra", async () => {
  const searchTextbox = screen.getByRole("textbox")
  await userEvent.type(searchTextbox, "zebra[Enter]")
  const animalCards = await screen.findAllByRole("animal")
  expect(animalCards).toHaveLength(1)
})