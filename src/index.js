import React from "react"
import { createRoot } from "react-dom/client"
import App from "./components/app"
import ColorButton from "./components/button/ColorButton"
import "./styles/App.css"




const el = document.getElementById("root")
const root = createRoot(el)
root.render(<ColorButton/>)
