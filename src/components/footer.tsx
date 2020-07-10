import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFlickr,
  faGithub,
  faInstagram,
  faLinkedin,
  faSkype,
  faStackOverflow,
  faTwitter,
  faHackerrank
} from '@fortawesome/free-brands-svg-icons'
import { faComment, faEnvelope, faDna } from '@fortawesome/free-solid-svg-icons'
import ReactGA from 'react-ga'
import { PreferencesContext } from '../contexts/Preferences'
import '../assets/styles/footer.css'

const Footer = () => {
  const { darkMode } = useContext(PreferencesContext)
  return (
    <div className={`footer ${darkMode ? 'dark' : 'light'}`}>
        <ReactGA.OutboundLink rel="noopener noreferrer" to="https://www.linkedin.com/in/noahbjohnson/" target="_blank"
                              eventLabel={'LinkedIn'}>
          <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faLinkedin}/></Button>
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink rel="noopener noreferrer" to="https://github.com/noahbjohnson" eventLabel={'github'}
                              target="_blank">
          <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faGithub}/></Button>
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink rel="noopener noreferrer" to="https://stackoverflow.com/users/5379654/noah-b-johnson"
                              eventLabel={'stack overflow'}
                              target="_blank">
          <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon
            icon={faStackOverflow}/></Button>
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink rel="noopener noreferrer" to="https://twitter.com/NoahBJ" eventLabel={'twitter'}
                              target="_blank">
          <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faTwitter}/></Button>
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink rel="noopener noreferrer" to="https://www.instagram.com/noahbjohnsonphotos/"
                              eventLabel={'instagram'} target="_blank">
          <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faInstagram}/></Button>
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink rel="noopener noreferrer" to="mailto:noah@noahbjohnson.net" eventLabel={'email'}
                              target="_blank">
          <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faEnvelope}/></Button>
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink rel="noopener noreferrer" to="https://www.flickr.com/noahbjohnson/" eventLabel={'flickr'}
                              target="_blank">
          <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faFlickr}/></Button>
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink rel="noopener noreferrer" to="skype:noah.johnson2015" eventLabel={'skype'}
                              target="_blank">
          <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faSkype}/></Button>
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink rel="noopener noreferrer" to="sms:noahbjohnson@icloud.com" eventLabel={'sms'}
                              target="_blank">
          <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faComment}/></Button>
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink rel="noopener noreferrer" to="https://www.hackerrank.com/noahbjohnson" eventLabel={'hackerrank'}
                              target="_blank">
          <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faHackerrank}/></Button>
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink to={'https://github.com/noahbjohnson/dna'} target="_blank" rel="noopener noreferrer"
                                eventLabel={'dna'}>
            <Button variant={darkMode ? 'outline-light' : 'outline-dark'}>
              <FontAwesomeIcon icon={faDna}/>
            </Button>
          </ReactGA.OutboundLink>
    </div>
  )
}

export default Footer
