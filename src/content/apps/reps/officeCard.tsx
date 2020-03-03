import React from 'react'
import { Card } from 'react-bootstrap'
import { Official, OfficialCard } from './officialCard'
import { PreferencesContext } from '../../../contexts/Preferences'

export interface Office {
  name: string
  officialIndices: number[]
}

interface officeCardProps {
  office: Office
  officials: Official[]
}

export const OfficeCard: React.FC<officeCardProps> = (props) => {
  const { darkMode } = React.useContext(PreferencesContext)

  return <Card className={`card ${darkMode ? 'dark' : 'light'}`}>
    <Card.Header className={`card-header ${darkMode ? 'dark' : 'light'}`}>
      {props.office.name}
    </Card.Header>
    <Card.Body className={`card-body ${darkMode ? 'dark' : 'light'}`}>
      {props.office.officialIndices.map((officialIndex: number, key2: number) => {
        return <OfficialCard key={key2} official={props.officials[officialIndex]}/>
      })}
    </Card.Body>
  </Card>
}
