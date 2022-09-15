import React, { useState } from "react"
import PropTypes from "prop-types"

const SearchBar = ({ onSubmit }) => {

  const [searchText, setSearchText] = useState("")

  return (
    <div className="ui segment">
      <form
        className="ui form"
        onSubmit={e => {
          e.preventDefault()
          onSubmit(searchText)
        }}>
        <div className="field">
          <label>Animal Search</label>
          <input
            type="text"
            autoFocus
            onChange={e => setSearchText(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}


export default SearchBar