import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import React, { useContext, useState } from 'react'
import './about.css'
import { PreferencesContext } from '../contexts/Preferences'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { Document, Page } from 'react-pdf'
import { Link } from 'react-router-dom'

export const About = () => {
  const { darkMode } = useContext(PreferencesContext)
  const [showResume, setShowResume] = useState<boolean>(false)
  return (
    <Container fluid className={'page'}>
      <Modal show={showResume}
             onHide={() => {setShowResume(false)}} className={'resume-modal'}>
        <Modal.Header>
          <Button variant="secondary" onClick={() => {setShowResume(false)}}>
            Close
          </Button>
          <Link to="/resume.pdf" target="_blank" download>
            <Button variant="outline-dark">
              <FontAwesomeIcon icon={faFileDownload}/> &nbsp;
              Download PDF
            </Button>
          </Link>
        </Modal.Header>
        <Modal.Body>
          <Document
            className={'resume-doc'}
            file='/resume.pdf'>
            <Page pageNumber={1} className={'resume-page'}/>
          </Document>
        </Modal.Body>
      </Modal>

      <Row className={'about-section cover'}>
        <Col lg={12} className={`cover-header${darkMode ? ' dark' : ''}`}>
          <h1>My Name</h1>
          <h3>A catchy tag line</h3>
        </Col>
      </Row>

      <Row className={'about-section'}>
        <Col lg={12}>
          <h2 id="skills">About Me</h2>
          <Button
            variant={'outline-primary'}
            className={'resume-button'}
            onClick={() => {setShowResume(!showResume)}}
          >
            <FontAwesomeIcon icon={faFileAlt}/> &nbsp;
            boring formal resume
          </Button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec maximus purus nec posuere accumsan.
            Sed a sapien sit amet mi vestibulum vestibulum.
            Nam ultrices lorem odio, in sagittis tortor auctor in.
            Phasellus ut lacus in sapien eleifend vehicula.
            Phasellus luctus elit et justo tristique bibendum.
            Mauris blandit turpis nec nisl pulvinar, eget sollicitudin mauris porttitor.
            Donec justo est, varius sit amet massa in, egestas lacinia augue.
            In sed ex felis. Morbi lacus sapien, feugiat vel sapien at, efficitur luctus orci.
            Praesent nec erat et enim pulvinar aliquet.
            Nunc dapibus est sodales, consectetur purus sed, blandit dui.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Suspendisse urna diam, suscipit id tincidunt semper, rhoncus in nulla.
            Maecenas ultricies metus et nisl fringilla facilisis.
            Vivamus euismod sed mi ac venenatis.</p>
        </Col>
      </Row>

      <Row className={'about-section'}>
        <Col lg={12}>
          <h2>Work</h2>
          <p>Put some cards here for jobs.</p>
        </Col>
      </Row>
      <Row className={'about-section'}>
        <Col lg={12}>
          <h2>Certifications</h2>
        </Col>
        <Col md={3}>
          <div className={'certifications'}>
            <img src='gcp-cloud-dev.png'/>
          </div>
        </Col>
        <Col md={3}>
          <div className={'certifications'}>
            <img src={'aws-certified.png'}/><br/>
            <img src={'cloud-practitioner.png'}/>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
