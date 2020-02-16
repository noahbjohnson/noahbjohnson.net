import React from 'react'
import './App.css'
import { PreferencesContext, PreferencesProvider } from './contexts/Preferences'
import { NavBar } from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFlickr,
  faGithub,
  faInstagram,
  faLinkedin,
  faSkype,
  faStackOverflow,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { About } from './pages/About'

function App () {
  return (
    <PreferencesProvider>
      <PreferencesContext.Consumer>
        {context => (
          <div className="App">
            <NavBar/>
            <BrowserRouter>
              <Switch>
                <Route path='/about'>
                  <About />
                </Route>
              </Switch>
            </BrowserRouter>
            <div>
              <a href="https://www.linkedin.com/in/noahbjohnson/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
              <a href="https://github.com/noahbjohnson" target="_blank">
                <FontAwesomeIcon icon={faGithub}/>
              </a>
              <a href="https://stackoverflow.com/users/5379654/noah-b-johnson" target="_blank">
                <FontAwesomeIcon icon={faStackOverflow}/>
              </a>
              <a href="https://twitter.com/NoahBJ" target="_blank">
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
              <a href="https://www.instagram.com/noahbjohnsonphotos/" target="_blank">
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
              <a href="mailto:noah@noahbjohnson.net" target="_blank">
                <FontAwesomeIcon icon={'envelope'}/>
              </a>
              <a href="https://www.flickr.com/noahbjohnson/" target="_blank">
                <FontAwesomeIcon icon={faFlickr}/>
              </a>
              <a href="skype:noah.johnson2015" target="_blank">
                <FontAwesomeIcon icon={faSkype}/>
              </a>
              <a href="sms:noahbjohnson@icloud.com" target="_blank">
                <FontAwesomeIcon icon={'comment'}/>
              </a>
            </div>
          </div>
        )}
      </PreferencesContext.Consumer>
    </PreferencesProvider>
  )
}

export default App
