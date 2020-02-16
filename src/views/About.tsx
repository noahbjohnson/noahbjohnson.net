import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFlickr,
  faGithub,
  faInstagram,
  faLinkedin, faSkype,
  faStackOverflow,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

export const AboutView = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <h2 id="about">About Me</h2>
          <p className="lead"><a href="assets/noahbjohnsonresume.pdf" target="_blank">Download My Resume</a></p>
          <p>This site is not up to date, but my resume is!</p>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <h2 id="skills">Skills</h2>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <h2>Education</h2>
        </Col>
      </Row>


      <Row>
        <Col lg={12}>
          <h2>Work Experience</h2>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <h2>Contact Me</h2>
        </Col>
      </Row>

      <div>
        <a href="https://www.linkedin.com/in/noahbjohnson/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/noahbjohnson" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://stackoverflow.com/users/5379654/noah-b-johnson" target="_blank">
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
        <a href="https://twitter.com/NoahBJ" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/noahbjohnsonphotos/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="mailto:noah@noahbjohnson.net" target="_blank">
          <FontAwesomeIcon icon={'envelope'} />
        </a>
        <a href="https://www.flickr.com/noahbjohnson/" target="_blank">
          <FontAwesomeIcon icon={faFlickr} />
        </a>
        <a href="skype:noah.johnson2015" target="_blank">
          <FontAwesomeIcon icon={faSkype} />
        </a>
        <a href="sms:noahbjohnson@icloud.com" target="_blank">
          <FontAwesomeIcon icon={'comment'} />
        </a>
      </div>
    </Container>
  )
}
