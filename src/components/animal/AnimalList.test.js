import React from "react"
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react";
import AnimalList from "./AnimalList";
import api from "../../api";
import server from "./mocks/server"

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("list animals", async () => {
  const res = await api.get("africa/animals")
  const animals = res.data
  render(<AnimalList animals={animals} />)
  const animalCards = await screen.findAllByRole("animal")
  expect(animalCards).toHaveLength(animals.length)
})