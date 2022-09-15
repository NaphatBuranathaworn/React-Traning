import React,{useState} from "react"

const ColorButton = () => {

  const [color, setColor] = useState("red")
  const newColor = color === "red" ? "blue" : "red"

  return (
    <>
      <button 
        className="ui button"
        style={{backgroundColor: color}}
        onClick={() => setColor(newColor)}>
          Change to {newColor}
      </button>
    </>
  )
}

export default ColorButton