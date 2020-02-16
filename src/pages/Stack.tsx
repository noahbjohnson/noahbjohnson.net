import './stack.css'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Stack = () => {
  return (
    <Container fluid className={'page'}>
      <Row>
        <Col md={4}>
          1
        </Col>
        <Col md={4}>
          2
        </Col>
        <Col md={4}>
          3
        </Col>
      </Row>
    </Container>
  )
}
