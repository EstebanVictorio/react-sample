import React, { Fragment } from "react"
import Button from "./components/button"

class App2 extends React.Component {
  constructor() {
    super()
    this.state = { counter: 0 }
    this.incrementCounter = this.incrementCounter.bind(this)
  }

  getCounter() {
    const { counter } = this.state
    return counter
  }

  incrementCounter() {
    const { counter } = this.state
    this.setState({ counter: counter + 1 })
  }

  render() {
    return (
      <Fragment>
        <div>My count is: {this.getCounter()}</div>
        <Button color="red" text="Red" handleClick={this.incrementCounter} />
      </Fragment>
    )
  }
}

export default App2
