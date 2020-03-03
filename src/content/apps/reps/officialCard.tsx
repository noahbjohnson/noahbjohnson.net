import React from 'react'
import { Card } from 'react-bootstrap'

export interface Official {
  name: string
  address: {
    locationName: string
    line1: string
    line2: string
    line3: string
    city: string
    state: string
    zip: string
  }[]
  party: string
  phones: string[],
  urls: string | string[],
  photoUrl: string,
  emails: string[],
  channels: {
    type: string
    id: string
  }[]
}

interface officialCardProps {
  official: Official
}

export const OfficialCard: React.FC<officialCardProps> = (props) => {
  return <Card>
    <Card.Header>
      {props.official.name}
    </Card.Header>
    <Card.Body>
      <b>Address</b>
      <p>
        {JSON.stringify(props.official.address)}
      </p>
      <b>Party</b>
      <p>
        {props.official.party}
      </p>
      <b>Phone</b>
      <p>
        {props.official.phones}
      </p>
      <b>Site</b>
      <p>
        {JSON.stringify(props.official.urls)}
      </p>
      <b>Photo</b>
      <p>
        <img width={'256px'} src={props.official.photoUrl}/>
      </p>
      <b>Social</b>
      <p>
        {JSON.stringify(props.official.channels)}
      </p>
    </Card.Body>
  </Card>
}
