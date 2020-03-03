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
import ReactGA from 'react-ga'
// @ts-ignore
import LoadingOverlay from 'react-loading-overlay'
import moment from 'moment'

const key = 'AIzaSyD_aPp6QpLVktpfB8Ayxn_hgILELpEH5zw'

export const Vote: FC = () => {

  const { darkMode } = React.useContext(PreferencesContext)
  const [loading, setLoading] = useState(false)
  const [addressValue, setAddressValue] = useState<string>('')
  const [voterInfo, setVoterInfo] = useState<VoterInfo | undefined>()
  const [apiError, setApiError] = useState(false)

  const getReps = () => {
    if (addressValue.length > 0) {
      if (!loading) setLoading(true)
      ReactGA.event({ category: 'Apps', action: 'Retrieved Voting Information' })
      request
        .get('https://www.googleapis.com/civicinfo/v2/voterinfo')
        .query({
          key,
          address: addressValue,
          prettyPrint: false
        })
        .then((res) => {
          setVoterInfo(res.body)
          setLoading(false)
          setApiError(false)
          console.log(voterInfo)
        })
        .catch((res) => {
          setVoterInfo(res.body)
          setLoading(false)
          setApiError(true)
        })
    }
  }

  ReactGA.set({ page: '/apps/reps' })
  ReactGA.pageview('/apps/reps')

  return <LoadingOverlay
    active={loading}
    spinner
    text='Loading your voting information'
  ><Container className={`page ${darkMode ? 'dark' : 'light'}`} fluid>
    <Row>
      <Col xs={'12'} style={{ textAlign: 'center' }}>
        <Link to={'/apps'}><Button><FontAwesomeIcon icon={faArrowAltCircleLeft}/> Apps Home</Button></Link>
      </Col>
    </Row>
    <header>
      <Row>
        <Col lg={12}>
          <h1>Find your polling place and candidates</h1>
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
        <Button onClick={getReps}>GO</Button>
      </Col>
    </Row>
    <Row>
      <Col lg={12}>
        {
          apiError
            ? <>
              <h4>Unable to find information for that address!</h4>
            </>
            : voterInfo
            ? <>
              <h4>Here's your voting info!</h4>

              <Accordion>
                {
                  voterInfo.election ?
                    <Card className={`card ${darkMode ? 'dark' : 'light'}`}>
                      <Card.Header className={`card-header ${darkMode ? 'dark' : 'light'}`}
                                   onClick={() => ReactGA.event({
                                     category: 'Apps',
                                     action: 'Viewed Voter Information'
                                   })}>
                        <Accordion.Toggle as={Button} variant="link" eventKey={'early'}
                                          disabled={!voterInfo.election}>
                          {voterInfo.election.name} {moment().calendar(moment(voterInfo.election.electionDay as string, 'YYYY-MM-DD'), {
                          sameDay: '[Today]',
                          nextDay: '[Tomorrow]',
                          nextWeek: 'dddd',
                          lastDay: '[Yesterday]',
                          lastWeek: '[Last] dddd',
                          sameElse: 'DD/MM/YYYY'
                        })}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={'early'}>
                        <Card.Body className={`card-body ${darkMode ? 'dark' : 'light'}`}>
                          {JSON.stringify(voterInfo.election)}
                          <p>{JSON.stringify(voterInfo.contests[0])}</p></Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    : ''
                }
                <Card className={`card ${darkMode ? 'dark' : 'light'}`}>
                  <Card.Header className={`card-header ${darkMode ? 'dark' : 'light'}`} onClick={() => ReactGA.event({
                    category: 'Apps',
                    action: 'Viewed Voter Information'
                  })}>
                    <Accordion.Toggle as={Button} variant="link" eventKey={JSON.stringify(voterInfo.state)}
                                      disabled={!voterInfo.state}>
                      Your State
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={JSON.stringify(voterInfo.state)}>
                    <Card.Body className={`card-body ${darkMode ? 'dark' : 'light'}`}>{
                      JSON.stringify(voterInfo.state)
                    }</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className={`card ${darkMode ? 'dark' : 'light'}`}>
                  <Card.Header className={`card-header ${darkMode ? 'dark' : 'light'}`} onClick={() => ReactGA.event({
                    category: 'Apps',
                    action: 'Viewed Voter Information'
                  })}>
                    <Accordion.Toggle as={Button} variant="link" eventKey={'locations'}
                                      disabled={!voterInfo.pollingLocations}>
                      Polling locations
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={'locations'}>
                    <Card.Body className={`card-body ${darkMode ? 'dark' : 'light'}`}>{
                      JSON.stringify(voterInfo.pollingLocations)
                    }</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className={`card ${darkMode ? 'dark' : 'light'}`}>
                  <Card.Header className={`card-header ${darkMode ? 'dark' : 'light'}`} onClick={() => ReactGA.event({
                    category: 'Apps',
                    action: 'Viewed Voter Information'
                  })}>
                    <Accordion.Toggle as={Button} variant="link" eventKey={'early'}
                                      disabled={!voterInfo.earlyVoteSites}>
                      Early voting locations
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={'early'}>
                    <Card.Body className={`card-body ${darkMode ? 'dark' : 'light'}`}>{
                      JSON.stringify(voterInfo.earlyVoteSites)
                    }</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className={`card ${darkMode ? 'dark' : 'light'}`}>
                  <Card.Header className={`card-header ${darkMode ? 'dark' : 'light'}`} onClick={() => ReactGA.event({
                    category: 'Apps',
                    action: 'Viewed Voter Information'
                  })}>
                    <Accordion.Toggle as={Button} variant="link" eventKey={'drop'}
                                      disabled={!voterInfo.dropOffLocations}>
                      Ballot Drop Off Locations
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={'drop'}>
                    <Card.Body className={`card-body ${darkMode ? 'dark' : 'light'}`}>{
                      JSON.stringify(voterInfo.dropOffLocations)
                    }</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </>
            : ''}
      </Col>
    </Row>
  </Container>
  </LoadingOverlay>
}

type election = {
  id: string
  name: string
  electionDay: string
  ocdDivisionId: string
}

type address = {
  locationName: string
  line1: string
  line2: string
  line3: string
  city: string
  state: string
  zip: string
}

export interface VoterInfo {
  kind: string
  election: election
  otherElections: election[]
  normalizedInput: address,
  pollingLocations: {
    id: number
    address: address
    notes: string
    pollingHours: string
    name: string
    voterServices: string
    startDate: string
    endDate: string
    sources: {
      name: string
      official: boolean
    }[]
  }[],
  earlyVoteSites: {
    id: number
    address: address
    notes: string
    pollingHours: string
    name: string
    voterServices: string
    startDate: string
    endDate: string
    sources: {
      name: string
      official: boolean
    }[]
  }[],
  dropOffLocations: {
    id: number
    address: address
    notes: string
    pollingHours: string
    name: string
    voterServices: string
    startDate: string
    endDate: string
    sources: {
      name: string
      official: boolean
    }[]
  }[],
  contests: {
    id: number
    type: string
    primaryParty: string
    electorateSpecifications: string
    special: string
    ballotTitle: string
    office: string
    level: string[]
    roles: string[]
    district: {
      name: string
      scope: string
      id: string
    }
    numberElected: number
    numberVotingFor: number
    ballotPlacement: number
    candidates: {
      name: string
      party: string
      candidateUrl: string
      phone: string
      photoUrl: string
      email: string
      orderOnBallot: number
      channels: {
        type: string
        id: string
      }[]
    }[],
    referendumTitle: string
    referendumSubtitle: string
    referendumUrl: string
    referendumBrief: string
    referendumText: string
    referendumProStatement: string
    referendumConStatement: string
    referendumPassageThreshold: string
    referendumEffectOfAbstain: string
    referendumBallotResponses: string[]
    sources: {
      name: string
      official: boolean
    }[]
  }[],
  state: {
    id: string
    name: string
    electionAdministrationBody: {
      name: string
      electionInfoUrl: string
      electionRegistrationUrl: string
      electionRegistrationConfirmationUrl: string
      absenteeVotingInfoUrl: string
      votingLocationFinderUrl: string
      ballotInfoUrl: string
      electionRulesUrl: string
      voter_services: string[]
      hoursOfOperation: string
      correspondenceAddress: {
        locationName: string
        line1: string
        line2: string
        line3: string
        city: string
        state: string
        zip: string
      },
      physicalAddress: address,
      electionOfficials: {
        name: string
        title: string
        officePhoneNumber: string
        faxNumber: string
        emailAddress: string
      }[]
    },
    sources: {
      name: string,
      official: boolean
    }[]
  }[],
  mailOnly: boolean
}
