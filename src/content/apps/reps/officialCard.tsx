import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { PreferencesContext } from '../../../contexts/Preferences'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

interface address {
  locationName: string
  line1: string
  line2: string
  line3: string
  city: string
  state: string
  zip: string
}

export interface Official {
  name: string
  address: address[]
  party: string
  phones: string[],
  urls: string[],
  photoUrl: string,
  emails: string[],
  channels: {
    type: 'Facebook' | 'Twitter' | 'YouTube'
    id: string
  }[]
}

interface officialCardProps {
  official: Official
}

export const OfficialCard: React.FC<officialCardProps> = (props) => {
  const { darkMode } = useContext(PreferencesContext)
  return <Card className={`card ${darkMode ? 'dark' : 'light'}`}>
    <Card.Header className={`card-header ${darkMode ? 'dark' : 'light'}`}>
      {props.official.name}
    </Card.Header>
    <Card.Body className={`card-body ${darkMode ? 'dark' : 'light'}`}>
      {props.official.address
        ? <><b>Address</b>
          <p>
            {props.official.address[0].locationName ? <> {props.official.address[0].locationName} <br/></> : ''}
            {props.official.address[0].line1 ? <> {props.official.address[0].line1} <br/></> : ''}
            {props.official.address[0].line2 ? <> {props.official.address[0].line2} <br/></> : ''}
            {props.official.address[0].line3 ? <> {props.official.address[0].line3} <br/></> : ''}
            {props.official.address[0].city}, {props.official.address[0].state} {props.official.address[0].zip} <br/>
          </p>
        </>
        : ''}
      <b>Party</b>
      <p>
        {props.official.party}
      </p>
      <b>Phone</b>
      <p>
        {props.official.phones}
      </p>
      {props.official.urls?.length > 0
        ? <>
          <b>Site</b>
          <p>
            <a href={props.official.urls[0]}>Website</a>
          </p>
        </>
        : ''}
      <b>Photo</b>
      <p>
        <img width={'256px'} src={props.official.photoUrl}/>
      </p>
      <b>Social</b>
      <p>
        {props.official.channels?.map((channel, index) => {
          switch (channel.type) {
            case 'Facebook':
              return <a href={`https://fb.me/${channel.id}`}><Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faFacebook}/></Button></a>
            case 'Twitter':
              return <a href={`https://twitter.com/${channel.id}`}><Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon
                icon={faTwitter}/></Button></a>
            case 'YouTube':
              return <a href={`https://www.youtube.com/results?search_query=${channel.id}`}><Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon
                icon={faYoutube}/></Button></a>
          }
        })}
      </p>
    </Card.Body>
  </Card>
}
