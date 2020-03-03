import React from 'react'
import { Card } from 'react-bootstrap'
import { Official, OfficialCard } from './officialCard'

export interface Office {
  name: string
  officialIndices: number[]
}

interface officeCardProps {
  office: Office
  officials: Official[]
}

export const OfficeCard: React.FC<officeCardProps> = (props) => {
  return <Card>
    <Card.Header>
      {props.office.name}
    </Card.Header>
    <Card.Body>
      {props.office.officialIndices.map((officialIndex: number, key2: number) => {
        return <OfficialCard key={key2} official={props.officials[officialIndex]}/>
      })}
    </Card.Body>
  </Card>
}
