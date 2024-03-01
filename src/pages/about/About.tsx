import { Col, Container, Row } from 'react-bootstrap'
import React, { useContext } from 'react'
import './about.css'
import { PreferencesContext } from '../../contexts/Preferences'

/**
 *
 * @constructor
 */
export const About = () => {
  const { darkMode } = useContext(PreferencesContext)
  return (
    <Container fluid className={`page ${darkMode ? 'dark' : 'light'}`}>
      <Row className={'about-section cover'}>
        <Col lg={12} className={`cover-header${darkMode ? ' dark' : ''}`}>
          <h1>about</h1>
          <h3>full-stack data science</h3>
          <br/>
        </Col>
      </Row>
      <Row className={'about-section'}>
        <Col lg={6} className={'about-column'}>
          <h2 id="skills">About Me</h2>
          <p>
            Tinkerer and Engineer
          </p>

          <p><b>pronouns: <br/></b> he/they</p>
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
            product maintenance,
            stakeholder management,
            proving ROI
          </p>
          <p><b>currently reading: <br/></b> The Wheel of Time </p>
          <p><b>hobbies: <br/></b>
            electronics,
            3d printing,
            genealogy,
            digitizing film negatives,
            making things,
            e-recycling,
            home improvement
          </p>
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
            <h4>Backend Software Engineer</h4>
            <h6><a href="https://form.com/">form.com</a> | Remote | September 2022 - present</h6>
            <ul>
              <li>Integral part of small team addressing tech debt and product stability</li>
              <li>Worked extensively in Go to decouple existing services and develop new features</li>
              <li>Achieved service restoration when faced with overloaded architecture and upstream
                services failing
              </li>
            </ul>
          </div>
          <div className={'job'}>
            <h4>GCP Software Engineer</h4>
            <h6><a href="https://kion.io/">kion.io (previously cloudtamer.io)</a> | Remote | September 2020
              - August 2022</h6>
            <ul>
              <li>Spearheaded support for Google Cloud Platform in Kion's cloud governance solution</li>
              <li>Built features from planning to release using Angular, GO, Typescript, and MySQL</li>
              <li>Developed internal libraries, SDKs, and documentation to increase GCP Fluency</li>
            </ul>
          </div>
          <div className={'job'}>
            <h4>Senior Backend Developer</h4>
            <h6>Stellar IMS | Remote | March 2020 – July 2020</h6>
            <ul>
              <li>Deployed backend using AWS API Gateway, Typescript, and gRPC</li>
            </ul>
          </div>
          <div className={'job'}>
            <h4>Data Integration Engineer, Integration Engineer</h4>
            <h6>Trinity Insight LLC | Rochester, Minnesota | May 2019 - March 2020</h6>
            <ul>
              <li>Built Custom serverless data pipelines and integrations on Google Cloud Platform</li>
              <li>Led React application development for client portal and internal tooling</li>
              <li>Leveraged Google BigQuery to ensure reliable conversion attribution and segmentation
              </li>
            </ul>
          </div>
          <div className={'job'}>
            <h4>Data Integration Analyst - Internship</h4>
            <h6>SC Data Center, Inc. | Monroe, Wisconsin | Summer 2018</h6>
            <ul>
              <li>Developed a data dictionary web application for the data warehouse. Built full-stack on
                AWS using
                Node.js and Vue.js
              </li>
              <li>Provided extensive business value with clear data provenance and metadata for all
                users
              </li>
              <li>Assisted in company-wide efforts to lift-and-shift cobol mainframe routines to an
                AWS-hosted Hadoop
                cluster
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className={'about-section'}>
        <Col lg={12} className={`about-column center`}>
          <h2>Certifications</h2>
          <Row className={'certifications'}>
            <Col md={6}>
              <img src="about-assets/gcp-cloud-dev.png" alt="Google Cloud Certified Cloud Developer"/>
            </Col>
            <Col md={6}>
              <img src={'about-assets/aws-certified.png'} alt="AWS Certified"/><br/>
              <img src={'about-assets/cloud-practitioner.png'} alt="Cloud Practitioner"/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
