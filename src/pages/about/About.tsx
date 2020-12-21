import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import React, { useContext, useState } from 'react'
import './about.css'
import { PreferencesContext } from '../../contexts/Preferences'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { Document, Page } from 'react-pdf'
import ReactGA from 'react-ga'

/**
 *
 * @constructor
 */
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
          <ReactGA.OutboundLink to="about-assets/resume.pdf" target="_blank" download eventLabel={'resume'}>
            <Button variant="outline-dark">
              <FontAwesomeIcon icon={faFileDownload}/> &nbsp;
              Download PDF
            </Button>
          </ReactGA.OutboundLink>
        </Modal.Header>
        <Modal.Body>
          <Document
            className={'resume-doc'}
            file='about-assets/resume.pdf'>
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
            onClick={() => {
              ReactGA.modalview('resume')
              ReactGA.event({
                category: 'User',
                action: 'Opened Resume Modal'
              })
              setShowResume(!showResume)
            }}>
            <FontAwesomeIcon icon={faFileAlt}/> &nbsp;
            boring formal resume
          </Button><br/>
        </Col>
      </Row>
      <Row className={'about-section'}>
        <Col lg={6} className={'about-column'}>
          <h2 id="skills">About Me</h2>
          <p>
            I'm a full-stack data scientist and engineer.

            I enjoy decoupling data architectures, refactoring code repeatedly, and abstracting infrastructure into
            json and yaml.

            Strong believer in the pillars of SCRUM:
            transparency, inspection, and adaptation.</p>
          <p><b>pronouns: <br/></b> he/him</p>
          <p><b>great at: <br/></b>
            internal tooling development & enablement,
            clearing roadblocks,
            conceptual communication,
            teaching
          </p>
          <p><b>good at: <br/></b>
            cloud stuff,
            standards,
            documentation,
            big picture,
            APIs,
            data models,
            data engineering
          </p>
          <p><b>pretty ok at: <br/></b>
            project management,
            stakeholder management,
            proving ROI
          </p>
          <p><b>currently reading: <br/></b> The Wheel of Time</p>
          <p><b>hobbies: <br/></b>
            electronics,
            genealogy,
            digitizing film negatives,
            data hoarding</p>
          <p><b>academic interests: <br/></b>
            social science statistics,
            algorithmic bias,
            archival science,
            information ethics
          </p>
        </Col>
        <Col lg={6} className={`about-column`}>
          <h2>Work</h2>
          <div className={'job'}>
            <h4>GCP Software Engineer</h4>
            <h6><a href="https://cloudtamer.io/">cloudtamer.io</a> | Remote | September 2020 - present</h6>
          </div>
          <div className={'job'}>
            <h4>Senior Backend Developer</h4>
            <h6>Stellar IMS | Remote | March 2020 – July 2020</h6>
            <ul>
              <li>Designed cloud infrastructure with the other backend developer</li>
              <li>Authored containerized microservices and API gateway in TS/Node</li>
            </ul>
          </div>
          <div className={'job'}>
            <h4>Data Integration Engineer, Integration Engineer</h4>
            <h6>Trinity Insight LLC | Rochester, Minnesota | May 2019 - March 2020</h6>
            <ul>
              <li>Built Custom serverless data pipelines and integrations on Google Cloud Platform</li>
              <li>Led React application development for client portal and internal tooling</li>
              <li>Leveraged Google BigQuery to ensure reliable conversion attribution and segmentation</li>
            </ul>
          </div>
          <div className={'job'}>
            <h4>Data Integration Analyst - Internship</h4>
            <h6>SC Data Center, Inc. | Monroe, Wisconsin | Summer 2018</h6>
            <ul>
              <li>Led development on a serverless data dictionary web application for the data warehouse team</li>
              <li>Provided extensive business value with clear data provenance and metadata for all users</li>
              <li>Assisted in company-wide efforts to lift-and-shift cobol mainframe routines to an AWS-hosted Hadoop
                cluster
              </li>
            </ul>
          </div>

          {/*<Link to={'/work'}>Check out the work page for more detailed stack information and other work</Link>*/}
        </Col>
      </Row>
      <Row className={'about-section'}>
        <Col lg={12} className={`about-column center`}>
          <h2>Certifications</h2>
          <Row className={'certifications'}>
            <Col md={6}>
              <img src='about-assets/gcp-cloud-dev.png' alt='Google Cloud Certified Cloud Developer'/>
            </Col>
            <Col md={6}>
              <img src={'about-assets/aws-certified.png'} alt='AWS Certified'/><br/>
              <img src={'about-assets/cloud-practitioner.png'} alt='Cloud Practitioner'/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
