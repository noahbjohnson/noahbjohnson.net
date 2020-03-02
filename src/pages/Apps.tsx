import React, { FC, useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { PreferencesContext } from '../contexts/Preferences'
import '../assets/styles/apps.css'
import { Switch, Route, Link } from 'react-router-dom'
import { Reps } from '../content/apps/reps'

const DefaultView: FC = () => {
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
      <Col lg={6}>
        <Card className={`blog-card ${darkMode ? 'dark' : 'light'}`}>
          <Card.Body className={`blog-body ${darkMode ? 'dark' : 'light'}`}>
            <Card.Title className={`blog-title ${darkMode ? 'dark' : 'light'}`}>reps</Card.Title>
            <Card.Text className={`blog-text ${darkMode ? 'dark' : 'light'}`}>Find your elected
              representatives</Card.Text>
          </Card.Body>
          <Card.Footer className={`blog-footer ${darkMode ? 'dark' : 'light'}`}>
            <Link to={'/apps/reps'}>
            <Button variant={darkMode ? 'outline-light' : 'outline-dark'}>Open</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </Container>
}

export const Apps = () => {

  return <Switch>
    <Route exact path={'/apps/reps'}>
      <Reps/>
    </Route>
    <Route>
      <DefaultView/>
    </Route>
  </Switch>
}
