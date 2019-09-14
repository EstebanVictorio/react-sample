import React, { Fragment } from "react"
import Button from "./components/button"
class App2 extends React.Component {
  render() {
    return (
      <Fragment>
        <Button color="red" text="Red" />
        <Button color="blue" text="Blue" />
        <Button color="green" text="Green" />
      </Fragment>
    )
  }
}

export default App2
