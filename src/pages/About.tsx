import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import './about.css'

export const About = () => {
  return (
    <Container fluid className={'page'}>
      <Row className={'about-section'}>
        <Col lg={12}>
          <h2 id="about">About Me</h2>
          <p>This site is not up to date, but my resume is!</p>
        </Col>
      </Row>

      <Row className={'about-section'}>
        <Col lg={12}>
          <h2 id="skills">Skills</h2>
        </Col>
      </Row>

      <Row className={'about-section'}>
        <Col lg={12}>
          <h2>Education</h2>
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
