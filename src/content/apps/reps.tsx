import React, { FC, useState } from 'react'
import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { PreferencesContext } from '../../contexts/Preferences'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
// @ts-ignore
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import 'react-google-places-autocomplete/dist/assets/index.css'
import * as request from 'superagent'
import { OfficeCard } from './reps/officeCard'
import ReactGA from 'react-ga'

const key = 'AIzaSyD_aPp6QpLVktpfB8Ayxn_hgILELpEH5zw'

export const Reps: FC = () => {

  const { darkMode } = React.useContext(PreferencesContext)
  const [addressValue, setAddressValue] = useState<string>('')
  const [voterInfo, setVoterInfo] = useState<any>()

  const getReps = async () => {
    if (addressValue.length > 0) {
      request
        .get('https://www.googleapis.com/civicinfo/v2/representatives')
        .query({
          key,
          address: addressValue
        })
        .then((res) => {
          setVoterInfo(res.body)
        })
    }
  }

  ReactGA.set({ page: '/apps/reps' })
  ReactGA.pageview('/apps/reps')

  return <Container className={`page ${darkMode ? 'dark' : 'light'}`} fluid>
    <Row>
      <Col xs={'12'} style={{ textAlign: 'center' }}>
        <Link to={'/apps'}><Button><FontAwesomeIcon icon={faArrowAltCircleLeft}/> Apps Home</Button></Link>
      </Col>
    </Row>
    <header>
      <Row>
        <Col lg={12}>
          <h1>Find your elected representatives</h1>
        </Col>
      </Row>
    </header>
    <Row>
      <Col lg={12}>
        <h4>Enter your address</h4>
      </Col>
    </Row>
    <Row>
      <Col lg={8}>
        <GooglePlacesAutocomplete
          autocompletionRequest={{
            componentRestrictions: {
              country: 'USA'
            }
          }}
          onSelect={(e: any) => setAddressValue(e.description)}
        />
      </Col>
      <Col lg={4}>
        <Button onClick={() => {
          ReactGA.event({ category: 'Apps', action: 'Retrieved Representatives' })
          return getReps()
        }}>GO</Button>
      </Col>
    </Row>
    <Row>
      <Col lg={12}>
        {voterInfo ? <>
            <h4>Select a Constituency</h4>
            <Accordion> {
              Object.entries(voterInfo.divisions).map((division: [string, any], key) => {
                return <Card key={key}>
                  <Card.Header onClick={()=>ReactGA.event({ category: 'Apps', action: 'Viewed Division Representatives' })}>
                    <Accordion.Toggle as={Button} variant="link" eventKey={String(key)}
                                      disabled={!division[1]?.officeIndices}>
                      {division[1].name}
                    </Accordion.Toggle>
                  </Card.Header>
                  {division[1]?.officeIndices
                    ? <Accordion.Collapse eventKey={String(key)}>
                      <Card.Body>{
                        division[1].officeIndices.map((officeIndex: number) => {
                          return <OfficeCard key={key} office={voterInfo.offices[officeIndex]}
                                             officials={voterInfo.officials}/>
                        })
                      }</Card.Body>
                    </Accordion.Collapse>
                    : ''
                  }
                </Card>
              })
            } </Accordion>
          </>
          : ''}
      </Col>
    </Row>
  </Container>
}
