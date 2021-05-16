import React from 'react'
import { Link } from 'react-router-dom'
import Utils from './Utils'
var utils = new Utils()
var isAuth = utils.readLocalStorage('email')

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              {isAuth ? (
                <Link class="nav-link active" aria-current="page" to="/dashboard">
                  Dashboard
                </Link>
              ) : (
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              )}
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="about">
                About
              </Link>
            </li>
            {isAuth ? (
              <li class="nav-item">
                <Link class="nav-link" to="contact">
                  contact
                </Link>
              </li>
            ) : (
              ''
            )}
            <li class="nav-item">
              {isAuth ? (
                <Link class="nav-link" onClick={() => utils.logOut()}>
                  Log out
                </Link>
              ) : (
                <Link class="nav-link" to="login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
