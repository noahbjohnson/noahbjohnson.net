import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
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
import { faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <ButtonGroup size="lg" style={{position: 'fixed', bottom: 0}}>
      <a href="https://www.linkedin.com/in/noahbjohnson/" target="_blank">
        <Button><FontAwesomeIcon icon={faLinkedin}/></Button>
      </a>
      <a href="https://github.com/noahbjohnson" target="_blank">
        <Button><FontAwesomeIcon icon={faGithub}/></Button>
      </a>
      <a href="https://stackoverflow.com/users/5379654/noah-b-johnson" target="_blank">
        <Button><FontAwesomeIcon icon={faStackOverflow}/></Button>
      </a>
      <a href="https://twitter.com/NoahBJ" target="_blank">
        <Button><FontAwesomeIcon icon={faTwitter}/></Button>
      </a>
      <a href="https://www.instagram.com/noahbjohnsonphotos/" target="_blank">
        <Button><FontAwesomeIcon icon={faInstagram}/></Button>
      </a>
      <a href="mailto:noah@noahbjohnson.net" target="_blank">
        <Button><FontAwesomeIcon icon={faEnvelope}/></Button>
      </a>
      <a href="https://www.flickr.com/noahbjohnson/" target="_blank">
        <Button><FontAwesomeIcon icon={faFlickr}/></Button>
      </a>
      <a href="skype:noah.johnson2015" target="_blank">
        <Button><FontAwesomeIcon icon={faSkype}/></Button>
      </a>
      <a href="sms:noahbjohnson@icloud.com" target="_blank">
        <Button><FontAwesomeIcon icon={faComment}/></Button>
      </a>
    </ButtonGroup>
  )
}
