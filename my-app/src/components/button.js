import React from "react"

const Button = props => {
  const { color, text, handleClick } = props
  return (
    <input
      value={text}
      type="button"
      onClick={() => handleClick()}
      className={`${color}-button`}
    />
  )
}

export default Button
