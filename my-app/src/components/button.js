import React from "react"

const Button = (props) => {
  const { color, text } = props
  return (
    <input type="button" className={`${color}-button`} value={text} />
  )
}

export default Button
