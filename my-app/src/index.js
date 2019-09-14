import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import App2 from "./App2"

const container = document.querySelector("#root")

ReactDOM.render(<App2 text="Hello everyone!" />, container)
