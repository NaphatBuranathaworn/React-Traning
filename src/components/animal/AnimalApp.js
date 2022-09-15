import axios from "axios"
import React, { useState } from "react"
import AnimalList from "./AnimalList"
import SearchBar from "./SearchBar"


const AnimalApp = () => {
  
  const [animals, setAnimals] = useState([])
  
  const searchAnimals = async (searchText) => {
    const res = await axios.get("http://codebangkok.com:5000/africa/animals", {
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