import React, { FC, useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './datascience.css'
import { PreferencesContext } from '../contexts/Preferences'
import ReactGA from 'react-ga'
interface FooterButton {
  /**
   * Button link url
   */
  link: string
  /**
   * Button display text
   */
  text: string
  /**
   * Font Awesome icon dom element with icon ID
   */
  icon?: JSX.Element
}

export interface DsProject {
  /**
   * The project title
   */
  title: string
  /**
   * When the project was completed
   */
  date: string
  /**
   * Generally what class it was for
   */
  subtitle: string
  /**
   * Paragraph(s) of text for the project card
   */
  bodyText: string[]
  /**
   * Links for the card footer
   */
  footerButtons: FooterButton[]
}

interface DsProps {
  projects: DsProject[]
}

/**
 * Data Science Portfolio
 * @constructor
 */
export const DataScience: FC<DsProps> = (props) => {
  const { darkMode } = useContext(PreferencesContext)
  return (
    <Container className={`page ${darkMode ? 'dark' : 'light'}`} fluid>
      <header className={'ds-page-header'}>
        <Row>
          <Col lg={12}>
            <h1>Data Science</h1>
            <h4>Data Analysis, Data Engineering, and Machine Learning Projects</h4>
          </Col>
        </Row>
      </header>
      <Row>
        {
          props.projects.map((project, index) => {
            return <Col lg={6} key={index}>
              <Card className={`ds-card ${darkMode ? 'dark' : 'light'}`}>
                <Card.Header
                  className={`ds-header ${darkMode ? 'dark' : 'light'}`}>{project.subtitle} - <i>{project.date}</i></Card.Header>
                <Card.Body className={`ds-body ${darkMode ? 'dark' : 'light'}`}>
                  <Card.Title className={`ds-title ${darkMode ? 'dark' : 'light'}`}>{project.title}</Card.Title>
                  {project.bodyText.map((paragraph, index2) => {
                    return <Card.Text className={`ds-text ${darkMode ? 'dark' : 'light'}`}
                                      key={index2}>{paragraph}</Card.Text>
                  })}
                </Card.Body>
                <Card.Footer className={`ds-footer ${darkMode ? 'dark' : 'light'}`}>
                  <></>
                  {project.footerButtons.map((footerButton, index2) => {
                    return <ReactGA.OutboundLink eventLabel={project.title} to={footerButton.link} target="_blank" rel="noopener noreferrer" key={index2}>
                      <Button variant={darkMode ? 'outline-light' : 'outline-dark'}>
                        {footerButton.icon || ''} {footerButton.text}
                      </Button>
                    </ReactGA.OutboundLink>
                  })}
                </Card.Footer>
              </Card>
            </Col>
          })
        }
      </Row>
    </Container>
  )
}
