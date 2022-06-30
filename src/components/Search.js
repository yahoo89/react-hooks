import React, { useContext, useState } from "react"
import { AlertContext } from "../context/alert/alertContext"
import { GithubContext } from "../context/alert/github/githubContext"

export const Search = () => {

  const [value, setValue] = useState('')

  const alert = useContext(AlertContext)

  const github = useContext(GithubContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

    github.clearUsers()

    if (value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show("Enter user's info")
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