import { Col, Container, Row } from 'react-bootstrap'
import React, { useContext } from 'react'
import './about.css'
import { PreferencesContext } from '../contexts/Preferences'

export const About = () => {
  const { darkMode } = useContext(PreferencesContext)
  return (
    <Container fluid className={'page'}>

      <Row className={'about-section cover'}>
        <Col lg={12} className={`cover-header${darkMode ? ' dark' : ''}`}>
          <h1>My Name</h1>
          <h3>A catchy tag line</h3>
        </Col>
      </Row>

      <Row className={'about-section'}>
        <Col lg={12}>

          <h2 id="skills">About Me</h2>
        </Col>
      </Row>


      <Row className={'about-section'}>
        <Col lg={12}>
          <h2>Work Experience</h2>
        </Col>
      </Row>

      <Row className={'about-section'}>
        <Col lg={12}>
          <h2>Contact Me</h2>
        </Col>
      </Row>

    </Container>
  )
}
