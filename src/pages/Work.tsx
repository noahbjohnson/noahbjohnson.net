import './work.css'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import WreckingBall from '../components/wrecking-ball'

export const Work = () => {
  return (
    <Container fluid className={'page'}>
      <Row>
        <Col lg={12}>
          <WreckingBall/>
        </Col>
      </Row>
    </Container>
  )
}
