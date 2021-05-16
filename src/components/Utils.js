import React, { Component } from 'react'

export default class Utils extends Component {

  createLocalStorage(name, value, days) {
    localStorage[name] = value
  }

  readLocalStorage(name) {
    return localStorage[name]
  }

  eraseLocalStorage(name) {
    localStorage.removeItem(name)
  }
  logOut() {
    console.log(".....window.......");
    console.log(window.location.href);
    this.eraseLocalStorage('email')
    window.location = window.location.origin + "/";
  }
  render() {
    return <div></div>
  }
}
