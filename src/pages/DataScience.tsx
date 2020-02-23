import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './datascience.css'

/**
 * Data Science Portfolio
 * @todo: add senior year stuff
 * @constructor
 */
export const DataScience = () => {
  return (

    <Container className={'page'}>
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
          <Card className={'ds-card'}>
            <Card.Header className={'ds-header'}>Senior Project Notes - <i>May, 2019</i></Card.Header>
            <Card.Body className={'ds-body'}>
              <Card.Title className={'ds-title'}>Completed for the Senior Project requirement at Luther
                College</Card.Title>
              <Card.Text className={'ds-text'}>Tourism is often regarded as a positive force for its perceived effects
                on economic
                development, modernization, and globalization of destination populations. Much of the analysis of
                this issue relies on a number of assumptions about the nature of 'development' and its accoutrement.
                Significant relationships are often taken out of context or extrapolated inappropriately.
                The purpose of this analysis is to identify other correlations with tourist activity to provide
                further context to relationships and demonstrate the limitations of underlying assumptions.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://noahbjohnson.net/senior-project/" target="_blank" rel="noopener noreferrer">
                Visit Project Site
              </a>
            </Card.Footer>
          </Card></Col>
        <Col lg={6}>
          <Card className={'ds-card'}>
            <Card.Header className={'ds-header'}>
              Food Desert Classification and Analysis using USDA County-Level Data - <i>May, 2019</i>
            </Card.Header>
            <Card.Body className={'ds-body'}>
              <Card.Title className={'ds-title'}>Completed for DS420 at Luther College</Card.Title>
              <Card.Text className={'ds-text'}>
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
              <Card.Text className={'ds-text'}>The USDA defines what’s considered a food desert and which areas will be
                helped by its initiatives. To qualify as a “low-access community,” at
                least 500 people and/or at least 33% of the census tract’s
                population must reside more than one mile from a supermarket or large
                grocery store.
                <sup>
                  <a href="http://americannutritionassociation.org/newsletter/usda-defines-food-deserts"
                     rel="noopener noreferrer" target="_blank">2</a>
                </sup>
                <p>This project's goal was to build a model to predict this
                  classification on a county level without using explicit components of its original calculation.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className={'ds-footer'}>
              <a href="https://noahbjohnson.github.io/DS420" target="_blank">Visit Project Site</a>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className={'ds-card'}>
            <Card.Header className={'ds-header'}>An Analysis of Politically Biased News - <i>12/6/2018</i></Card.Header>
            <Card.Body className={'ds-body'}>
              <Card.Title className={'ds-title'}>Completed for DS320 at Luther College</Card.Title>
              <Card.Text className={'ds-text'}>In this report, I collected and examined articles from two biased news
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
              <Card.Text className={'ds-text'}>I used the pre-trained text analysis models from indico.io and the
                Natural Language
                Toolkit(NLTK)
                to generate variables for analysis. Using these variables, I created visualizations using Matplotlib and
                Seaborn to visually identify patterns in the data.</Card.Text>
            </Card.Body>
            <Card.Footer className={'ds-footer'}>
              <a href="https://noahbjohnson.github.io/DS320" target="_blank" rel="noopener noreferrer">Visit Project
                Site</a>

            </Card.Footer>
          </Card></Col>
        <Col lg={6}>
          <Card className={'ds-card'}>
            <Card.Header className={'ds-header'}>Analysis of Income Bracket Data with Logistic Regression
              - <i>12/10/2017</i></Card.Header>
            <Card.Body className={'ds-body'}>
              <Card.Title className={'ds-title'}>Completed for MATH327 at Luther College</Card.Title>
              <Card.Text className={'ds-text'}>The purpose of this analysis is to build a model that can accurately
                determine if someone’s
                income
                is over $50,000 or under/equal. The data used in this analysis was downloaded from the website
                data.world
                as
                a complete package including a training set and test set. (original attribution is at the end of this
                document) The data was originally obtained from the US census bureau and includes information about
                employment, education, and demographics.</Card.Text>
            </Card.Body>
            <Card.Footer className={'ds-footer'}>
              <a href="https://noahbjohnson.github.io/MATH327/income/report.html"
                 target="_blank" rel="noopener noreferrer">Read the Report</a>
            </Card.Footer>
          </Card></Col>
        <Col lg={6}>
          <Card className={'ds-card'}>
            <Card.Header className={'ds-header'}>An Analysis of World Happiness Data - <i>11/3/2017</i></Card.Header>
            <Card.Body className={'ds-body'}>
              <Card.Title className={'ds-title'}>Completed for MATH327 at Luther College</Card.Title>
              <Card.Text className={'ds-text'}>This report examines possible contributing factors to the Happiness of a
                nation’s
                populace (“AVGHappiness”) rated on a scale of 1-10. All variables are national averages, mostly of
                survey
                responses, with the exception of “country”,“year”,“HappinessSD”,“HappinessSD/mean”. The primary goal of
                this
                report is determine the most predictive measure of average national Happiness.</Card.Text>
            </Card.Body>
            <Card.Footer className={'ds-footer'}>
              <a href="https://noahbjohnson.github.io/MATH327/final/report.html"
                 target="_blank" rel="noopener noreferrer">Read the Report</a>
              <a href="https://noahbjohnson.github.io/MATH327/final/poster.pdf"
                 target="_blank" rel="noopener noreferrer">View the Poster</a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
