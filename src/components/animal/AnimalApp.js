import React, { useState } from "react"
import api from "../../api"
import AnimalList from "./AnimalList"
import SearchBar from "./SearchBar"


const AnimalApp = () => {
  
  const [animals, setAnimals] = useState([])
  
  const searchAnimals = async (searchText) => {
    const res = await api.get("/africa/animals", {
      params: {
        search: searchText
      }
    })
    setAnimals(res.data)
  }

  return (
    <div className="ui container">
      <SearchBar onSubmit={searchAnimals} />
      <AnimalList animals={animals}/>
    </div>
  )
}

export default AnimalApp