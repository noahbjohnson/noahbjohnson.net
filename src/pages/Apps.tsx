import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PreferencesContext } from '../contexts/Preferences'
import '../assets/styles/apps.css'

export const Apps = () => {
  const { darkMode } = useContext(PreferencesContext)
  return <Container className={`page ${darkMode ? 'dark' : 'light'}`} fluid>
    <header>
      <Row>
        <Col lg={12}>
          <h1>Nothing here yet</h1>
          <h4>I'll get to it</h4>
        </Col>
      </Row>
    </header>
  </Container>
}
