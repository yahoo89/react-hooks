import React, { useContext } from "react"
import { AlertContext } from "../context/alert/alertContext"

export const Search = () => {

  const { show } = useContext(AlertContext)

  const onSubmit = event => {
    if (event.key === 'Enter') {
      show('This is alert')
    }
  }


  return (
    <div className="form-group" style={{ marginBottom: 15 + 'px' }}>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Your Nickname"
        onKeyPress={onSubmit}
      />
    </div>
  )
}