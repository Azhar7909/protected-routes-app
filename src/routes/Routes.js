import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DashboardPage from '../pages/DashboardPage'
import AboutPage from '../pages/AboutPage'
import LoginPage from '../pages/LoginPage'
import ProtectedRoutes from './ProtectedRoutes';
import Utils from '../components/Utils'
import ContactPage from '../pages/ContactPage'
var utils = new Utils();
var isAuth = utils.readLocalStorage("email");

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        {/* All protected component add path, component and isAuth and so on */}
        <ProtectedRoutes path="/dashboard" component={DashboardPage} isAuth={isAuth} />
      </Switch>
      <Footer />
    </Router>
  )
}
