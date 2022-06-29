import React, { useContext, useState } from "react"
import { AlertContext } from "../context/alert/alertContext"

export const Search = () => {

  const [value, setValue] = useState('')

  const { show } = useContext(AlertContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

    if (value.trim()) {
      console.log('Make request with: ', value)
    } else {
      show("Enter user's info")
    }
  }


  return (
    <div className="form-group" style={{ marginBottom: 15 + 'px' }}>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Your Nickname"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}