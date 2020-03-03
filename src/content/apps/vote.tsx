import React, { FC, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
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

const key = 'AIzaSyD_aPp6QpLVktpfB8Ayxn_hgILELpEH5zw'

export const Vote: FC = () => {

  const { darkMode } = React.useContext(PreferencesContext)
  const [loading, setLoading] = useState(false)
  const [addressValue, setAddressValue] = useState<string>('')
  const [voterInfo, setVoterInfo] = useState<any>()

  const getReps = () => {
    if (addressValue.length > 0) {
      if (!loading) setLoading(true)
      ReactGA.event({ category: 'Apps', action: 'Retrieved Voting Information' })
      request
        .get('https://www.googleapis.com/civicinfo/v2/voterinfo')
        .query({
          key,
          address: addressValue
        })
        .then((res) => {
          setVoterInfo(res.body)
          setLoading(false)
          console.log(voterInfo)
        })
        .catch((res) => {
          setVoterInfo(res.body)
          setLoading(false)
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
        {voterInfo ? <>
          <h4>Here's your voting info!</h4>

          <h5>Polling location</h5>
          {JSON.stringify(voterInfo.pollingLocations)}

          <h5>Next Election</h5>
          {JSON.stringify(voterInfo.election)}

          <h2>RAW</h2>
          <p>{JSON.stringify(voterInfo)}</p>
        </> : ''}
      </Col>
    </Row>
  </Container></LoadingOverlay>
}
