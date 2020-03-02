import React, { FC, useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { PreferencesContext } from '../contexts/Preferences'
import { Link, RouteComponentProps } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { myApps } from '../content/apps'
import ReactGA from 'react-ga'

interface AppEntryProps {
  slug: string
}

export const AppEntry: FC<RouteComponentProps<AppEntryProps>> = (props) => {
  const { darkMode } = useContext(PreferencesContext)
  const slug = props.match?.params.slug || ''
  const [contents, setContents] = useState<FC | undefined>()

  useEffect(()=>{
    const appMatch = myApps.filter(x => x.slug === slug)

    if (appMatch.length === 0) {
      ReactGA.exception({
        description: 'App not found',
        fatal: false
      })
    } else {
      setContents(appMatch[0].component)
    }
  }, [])



  return <Container className={`page ${darkMode ? 'dark' : 'light'}`} fluid>
    <header>
      <Row>
        <Col xs={'12'} style={{ textAlign: 'center' }}>
          <Link to={'/apps'}><Button><FontAwesomeIcon icon={faArrowAltCircleLeft}/> More Apps</Button></Link>
        </Col>
      </Row>
    </header>
    <Row>
      <Col lg={12}>
        {contents
          ? contents
          : <h1>This app was not found please click More Apps above</h1>}
      </Col>
    </Row>
  </Container>
}
