import './stack.css'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import WreckingBall from '../components/wrecking-ball'

/**
 * @todo: set up stack toggler and fix sprite scale
 * @constructor
 */
export const Stack = () => {
  const [logoList, setLogoList] = useState<string[]>([
    '/sprites/Advanced Solutions Lab.png',
    '/sprites/AI-Platform.png',
    '/sprites/AI-Platform-Data-Labeling-Service.png',
    '/sprites/API-Analytics.png',
    '/sprites/API-Monetization.png',
    '/sprites/Apigee-API-Platform.png'
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
