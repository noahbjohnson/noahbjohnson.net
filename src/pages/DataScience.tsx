import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './datascience.css'
import { PreferencesContext } from '../contexts/Preferences'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChartBar, faFileAlt } from '@fortawesome/free-solid-svg-icons'

interface DsProject {

}

/**
 * Data Science Portfolio
 * @todo: add senior year stuff
 * @constructor
 */
export const DataScience = () => {
  const { darkMode } = useContext(PreferencesContext)
  return (
    <Container className={`page ${darkMode ? 'dark' : 'light'}`} fluid>
      <header className={'ds-page-header'}>
        <Row>
          <Col lg={12}>
            <h1>Data Science</h1>
            <h4>Data Analysis, Data Engineering, and Machine Learning Projects</h4>
          </Col>
        </Row>
      </header>
      <Row>
        <Col lg={6}>
          <Card className={`ds-card ${darkMode ? 'dark' : 'light'}`}>
            <Card.Header className={`ds-header ${darkMode ? 'dark' : 'light'}`}>Senior Project Notes - <i>May, 2019</i></Card.Header>
            <Card.Body className={`ds-body ${darkMode ? 'dark' : 'light'}`}>
              <Card.Title className={`ds-title ${darkMode ? 'dark' : 'light'}`}>Completed for the Senior Project
                requirement at Luther
                College</Card.Title>
              <Card.Text className={`ds-text ${darkMode ? 'dark' : 'light'}`}>Tourism is often regarded as a positive
                force for its perceived effects
                on economic
                development, modernization, and globalization of destination populations. Much of the analysis of
                this issue relies on a number of assumptions about the nature of 'development' and its accoutrement.
                Significant relationships are often taken out of context or extrapolated inappropriately.
                The purpose of this analysis is to identify other correlations with tourist activity to provide
                further context to relationships and demonstrate the limitations of underlying assumptions.</Card.Text>
            </Card.Body>
            <Card.Footer className={`ds-footer ${darkMode ? 'dark' : 'light'}`}>
              <a href="https://noahbjohnson.net/senior-project/" target="_blank" rel="noopener noreferrer">
                <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faFileAlt}/> Visit Project Site</Button>
              </a>
              <a href="https://github.com/noahbjohnson/senior-project/" target="_blank" rel="noopener noreferrer">
                <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faGithub}/> View on Github</Button>
              </a>
            </Card.Footer>
          </Card></Col>
        <Col lg={6}>
          <Card className={`ds-card ${darkMode ? 'dark' : 'light'}`}>
            <Card.Header className={`ds-header ${darkMode ? 'dark' : 'light'}`}>
              Food Desert Classification and Analysis using USDA County-Level Data - <i>May, 2019</i>
            </Card.Header>
            <Card.Body className={`ds-body ${darkMode ? 'dark' : 'light'}`}>
              <Card.Title className={`ds-title ${darkMode ? 'dark' : 'light'}`}>Completed for DS420 at Luther
                College</Card.Title>
              <Card.Text className={`ds-text ${darkMode ? 'dark' : 'light'}`}>
                According to the
                American Nutrition Association, a food desert is an area, especially one with low-income residents,
                that has limited
                access to affordable and nutritious food.<sup>
                <a href="http://americannutritionassociation.org/newsletter/usda-defines-food-deserts"
                   rel="noopener noreferrer" target="_blank">*</a>
              </sup>
                <p>In addition to obesity, many other health issues are associated with
                  poor access to affordable healthy foods.</p>
              </Card.Text>
              <Card.Text className={`ds-text ${darkMode ? 'dark' : 'light'}`}>The USDA defines what’s considered a food
                desert and which areas will be
                helped by its initiatives. To qualify as a “low-access community,” at
                least 500 people and/or at least 33% of the census tract’s
                population must reside more than one mile from a supermarket or large
                grocery store.
                <sup>
                  <a href="http://americannutritionassociation.org/newsletter/usda-defines-food-deserts"
                     rel="noopener noreferrer" target="_blank">*</a>
                </sup>
                <p>This project's goal was to build a model to predict this
                  classification on a county level without using explicit components of its original calculation.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className={`ds-footer ${darkMode ? 'dark' : 'light'}`}>
              <a href="https://noahbjohnson.net/DS420/" target="_blank" rel="noopener noreferrer">
                <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faFileAlt}/> Visit Project Site</Button>
              </a>
              <a href="https://github.com/noahbjohnson/DS420/" target="_blank" rel="noopener noreferrer">
                <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faGithub}/> View on Github</Button>
              </a>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className={`ds-card ${darkMode ? 'dark' : 'light'}`}>
            <Card.Header className={`ds-header ${darkMode ? 'dark' : 'light'}`}>An Analysis of Politically Biased News
              - <i>12/6/2018</i></Card.Header>
            <Card.Body className={`ds-body ${darkMode ? 'dark' : 'light'}`}>
              <Card.Title className={`ds-title ${darkMode ? 'dark' : 'light'}`}>Completed for DS320 at Luther
                College</Card.Title>
              <Card.Text className={`ds-text ${darkMode ? 'dark' : 'light'}`}>In this report, I collected and examined
                articles from two biased news
                sites. Theblaze.com is a
                conservative news platform founded by conservative commentator Glenn Beck. On the liberal side,
                thinkprogress.org is a progressive political news blog run by the Center for American Progress. The
                center
                is, according to Wikipedia, a public policy research and advocacy organization which presents a liberal
                viewpoint on economic and social issues. Both of these sites are near the extreme end of their
                respective
                political biases, and they both often have their content go viral on social media. This makes them a
                perfect
                pair for analyzing the issue of media bias.</Card.Text>
              <Card.Text className={`ds-text ${darkMode ? 'dark' : 'light'}`}>I used the pre-trained text analysis
                models from indico.io and the
                Natural Language
                Toolkit(NLTK)
                to generate variables for analysis. Using these variables, I created visualizations using Matplotlib and
                Seaborn to visually identify patterns in the data.</Card.Text>
            </Card.Body>
            <Card.Footer className={`ds-footer ${darkMode ? 'dark' : 'light'}`}>
              <a href="https://noahbjohnson.net/DS320/" target="_blank" rel="noopener noreferrer">
                <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faFileAlt}/> Visit Project Site</Button>
              </a>
              <a href="https://github.com/noahbjohnson/DS320/" target="_blank" rel="noopener noreferrer">
                <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faGithub}/> View on Github</Button>
              </a>

            </Card.Footer>
          </Card></Col>
        <Col lg={6}>
          <Card className={`ds-card ${darkMode ? 'dark' : 'light'}`}>
            <Card.Header className={`ds-header ${darkMode ? 'dark' : 'light'}`}>Analysis of Income Bracket Data with
              Logistic Regression
              - <i>12/10/2017</i></Card.Header>
            <Card.Body className={`ds-body ${darkMode ? 'dark' : 'light'}`}>
              <Card.Title className={`ds-title ${darkMode ? 'dark' : 'light'}`}>Completed for MATH327 at Luther
                College</Card.Title>
              <Card.Text className={`ds-text ${darkMode ? 'dark' : 'light'}`}>The purpose of this analysis is to build a
                model that can accurately
                determine if someone’s
                income
                is over $50,000 or under/equal. The data used in this analysis was downloaded from the website
                data.world
                as
                a complete package including a training set and test set. (original attribution is at the end of this
                document) The data was originally obtained from the US census bureau and includes information about
                employment, education, and demographics.</Card.Text>
            </Card.Body>
            <Card.Footer className={`ds-footer ${darkMode ? 'dark' : 'light'}`}>
              <a href="https://noahbjohnson.net/MATH327/" target="_blank" rel="noopener noreferrer">
                <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faFileAlt}/> Visit Project Site</Button>
              </a>
              <a href="https://github.com/noahbjohnson/MATH327/" target="_blank" rel="noopener noreferrer">
                <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faGithub}/> View on Github</Button>
              </a>
            </Card.Footer>
          </Card></Col>
        <Col lg={6}>
          <Card className={`ds-card ${darkMode ? 'dark' : 'light'}`}>
            <Card.Header className={`ds-header ${darkMode ? 'dark' : 'light'}`}>An Analysis of World Happiness Data
              - <i>11/3/2017</i></Card.Header>
            <Card.Body className={`ds-body ${darkMode ? 'dark' : 'light'}`}>
              <Card.Title className={`ds-title ${darkMode ? 'dark' : 'light'}`}>Completed for MATH327 at Luther
                College</Card.Title>
              <Card.Text className={`ds-text ${darkMode ? 'dark' : 'light'}`}>This report examines possible contributing
                factors to the Happiness of a
                nation’s
                populace (“AVGHappiness”) rated on a scale of 1-10. All variables are national averages, mostly of
                survey
                responses, with the exception of “country”,“year”,“HappinessSD”,“HappinessSD/mean”. The primary goal of
                this
                report is determine the most predictive measure of average national Happiness.</Card.Text>
            </Card.Body>
            <Card.Footer className={'ds-footer'}>
              <a href="https://noahbjohnson.net/final/report.html" target="_blank" rel="noopener noreferrer">
                <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faFileAlt}/> Read the Report</Button>
              </a>
              <a href="https://noahbjohnson.net/final/poster.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faChartBar}/> View the Poster</Button>
              </a>
              <a href="https://github.com/noahbjohnson/MATH327" target="_blank" rel="noopener noreferrer">
                <Button variant={darkMode ? 'outline-light' : 'outline-dark'}><FontAwesomeIcon icon={faGithub}/> View on Github</Button>
              </a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
