import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./index.css"
import Home from "./pages/home"
import About from "./pages/about"
import AnotherAbout from "./pages/another-about"
import Contact from "./pages/contact"
const container = document.querySelector("#root")

ReactDOM.render(
  <Router>
    <nav>
      <Link to="/">To Home</Link>
      <Link to="/about">To About</Link>
      <Link to="/about">To Another About</Link>
      <Link to="/contact">To Contact</Link>
    </nav>
    <Switch>
      <Route exact path="/" render={props => <Home text="" />} />
      <Route exact path="/about" component={AnotherAbout} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </Router>,
  container
)
