import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { PreferencesContext } from '../contexts/Preferences'
import '../assets/styles/apps.css'
import { myApps } from '../content/apps'
import { Link } from 'react-router-dom'

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
    <Row>
      {myApps.map((app, index) => {
        return <Col lg={6} key={index}>
          <Card className={`blog-card ${darkMode ? 'dark' : 'light'}`}>
            <Card.Body className={`blog-body ${darkMode ? 'dark' : 'light'}`}>
              <Card.Title className={`blog-title ${darkMode ? 'dark' : 'light'}`}>{app.name}</Card.Title>
              <Card.Text className={`blog-text ${darkMode ? 'dark' : 'light'}`}>{app.description}</Card.Text>
            </Card.Body>
            <Card.Footer className={`blog-footer ${darkMode ? 'dark' : 'light'}`}>
              <Link to={`/blog/${app.blogSlug || ''}`}>
                <Button variant={darkMode ? 'outline-light' : 'outline-dark'}>Read</Button>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      })}
    </Row>
  </Container>
}
