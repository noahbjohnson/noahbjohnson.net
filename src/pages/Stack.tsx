import './work.css'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import WreckingBall from '../components/wrecking-ball'

export const Work = () => {
  const [logoList, setLogoList] = useState<string[]>([
    '/service-logos/typescript.svg',
    '/service-logos/slack-1.svg',
    '/service-logos/react.svg',
    '/service-logos/javascript.svg'
  ])
  return (
    <Container fluid className={'page'}>
      <Row>
        <h6>While I'm working on this page please enjoy this html canvas</h6>
      </Row>
      <Row>
        <Col lg={12}>
          <WreckingBall logos={logoList}/>
        </Col>
      </Row>
    </Container>
  )
}
