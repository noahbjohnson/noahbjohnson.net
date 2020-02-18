import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import React, { useContext, useState } from 'react'
import './about.css'
import { PreferencesContext } from '../contexts/Preferences'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDna, faFileAlt, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { Document, Page } from 'react-pdf'
import { Link } from 'react-router-dom'

export const About = () => {
  const { darkMode } = useContext(PreferencesContext)
  const [showResume, setShowResume] = useState<boolean>(false)
  return (
    <Container fluid className={`page ${darkMode ? 'dark' : 'light'}`}>
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
          <h1>about</h1>
          <h3>full-stack data science</h3>
          <Button
            variant={darkMode ? 'dark' : 'light'}
            className={'resume-button'}
            onClick={() => {setShowResume(!showResume)}}>
            <FontAwesomeIcon icon={faFileAlt}/> &nbsp;
            boring formal resume
          </Button><br/>
          <a href={'https://github.com/noahbjohnson/dna'}><Button
            variant={darkMode ? 'dark' : 'light'}
            className={'resume-button'}
          >
            <FontAwesomeIcon icon={faDna}/> &nbsp;
            my genome
          </Button></a>
        </Col>
      </Row>
      <Row className={'about-section'}>
        <Col lg={6} className={'about-column'}>
          <h2 id="skills">About Me</h2>
          <p>I'm a full-stack data scientist and engineer. I enjoy decoupling data architectures, refactoring code
            repeatedly, and abstracting infrastructure into json and yaml. Strong believer in the pillars of SCRUM:
            transparency, inspection, and adaptation.</p>
          <p><b>pronouns: </b> he/him</p>
          <p><b>great at: </b> internal tooling development & enablement, clearing roadblocks, conceptual communication,
            teaching
          </p>
          <p><b>good at: </b> cloud stuff, standards, documentation, big picture, APIs, data models, data engineering
          </p>
          <p><b>pretty ok at: </b> project management, stakeholder management, proving ROI
          </p>
          <p><b>not great at: </b> embedded & low-level, anything microsoft, LAMP stack, calling it 'good enough',
            avoiding scope creep</p>
          <p><b>currently reading: </b> The Wheel of Time</p>
          <p><b>hobbies: </b> digitizing film negatives, star trek, data hoarding</p>
          <p><b>academic interests: </b> sociology, algorithmic bias, archival science, generative adversarial networks
          </p>
        </Col>
        <Col lg={6} className={'about-column'}>
          <h2>Work</h2>
          <div className={'job'}>
            <h4>Data Integration Engineer, Integration Engineer</h4>
            <h6>Trinity Insight LLC | Rochester, Minnesota | May 2019 - Present</h6>
            <ul style={{ fontWeight: 400, fontFamily: 'Montserrat; sans-serif' }}>
              <li>Custom serverless data pipelines and integrations on Google Cloud Platform</li>
              <li>Lead React application development for client portal and internal tooling</li>
              <li>Leverage Google BigQuery to ensure reliable conversion attribution and segmentation</li>
              <li>Maintain internal DevOps standards and practices and provide user support</li>
            </ul>
          </div>
          <div className={'job'}>
            <h4>Data Integration Analyst - Internship</h4>
            <h6>SC Data Center, Inc. | Monroe, Wisconsin | Summer 2018</h6>
            <ul style={{ fontWeight: 400, fontFamily: 'Montserrat; sans-serif' }}>
              <li>Lead development on a serverless data dictionary web application for the data warehouse</li>
              <li>Provided expansive business value with data provenance and metadata for all users</li>
              <li>Assisted in company-wide efforts to lift-and-shift cobol mainframe routines to AWS</li>
            </ul>
          </div>

          <Link to={'/work'}>Check out the work page for more detailed stack information and other work</Link>

          <h2>Certifications</h2>
          <div className={'certifications'}>
            <img src='gcp-cloud-dev.png'/>
          </div>
          <div className={'certifications'}>
            <img src={'aws-certified.png'}/><br/>
            <img src={'cloud-practitioner.png'}/>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
