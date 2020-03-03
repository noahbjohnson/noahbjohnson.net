import React, { FC, useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { PreferencesContext } from '../contexts/Preferences'
import '../assets/styles/apps.css'
import { Link, Route, Switch } from 'react-router-dom'
import { Reps } from '../content/apps/reps'
import { withTracker } from '../tracker'

const DefaultView: FC = () => {
  const { darkMode } = useContext(PreferencesContext)
  return <Container className={`page ${darkMode ? 'dark' : 'light'}`} fluid>
    <header>
      <Row>
        <Col lg={12}>
          <h1>Apps and Tools</h1>
          <h4>Enjoy these poorly-styled demonstrations of my coding skills</h4>
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
    <Route exact path={'/apps/reps'} component={withTracker(Reps)}/>
    <Route component={withTracker(DefaultView)}/>
  </Switch>
}
