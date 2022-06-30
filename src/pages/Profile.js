import React, { useContext, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'
import { GithubContext } from "../context/alert/github/githubContext"
import { Repos } from '../components/Repos'

export const Profile = () => {

  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
  const userData = useParams()
  const urlName = userData.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <p className="text-center">Загрузка...</p>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos,
    public_gists
  } = user


  return (
    <>
      <Link to="/" className="btn btn-link">Go to Home Page</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                style={{ width: '150px' }}
              />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <><h3>BIO</h3><p>{bio}</p></>
              }
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >Open Profile</a>
              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}

                {company && <li>
                  <strong>Компания: </strong> {company}
                </li>}

                {blog && <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>
              <div className="badge bg-primary">Followers: {followers}</div>
              <div className="badge bg-success">Following: {following}</div>
              <div className="badge bg-info">Public Repos: {public_repos}</div>
              <div className="badge bg-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  )
}