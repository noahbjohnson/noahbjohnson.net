import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

/**
 * Data Science Portfolio
 * @todo: add senior year stuff
 * @constructor
 */
export const DataScience = () => {
  return (
    <Container className={'page'}>
      <header>
        <Row>
          <Col lg={12}>
            <h1>Data Science</h1>
            <h4>My Data Analysis and Other DS-Related Projects</h4>
          </Col>
        </Row>
      </header>
      <Col md={12}>
        <Card>
          <Card.Header>An Analysis of Politically Biased News - <i>12/6/2018</i></Card.Header>
          <Card.Body>
            <Card.Title>Completed for DS320 at Luther College</Card.Title>
          </Card.Body>
          <Card.Body>
            <Card.Text>In this report, I collected and examined articles from two biased news sites. Theblaze.com is a
              conservative news platform founded by conservative commentator Glenn Beck. On the liberal side,
              thinkprogress.org is a progressive political news blog run by the Center for American Progress. The center
              is, according to Wikipedia, a public policy research and advocacy organization which presents a liberal
              viewpoint on economic and social issues. Both of these sites are near the extreme end of their respective
              political biases, and they both often have their content go viral on social media. This makes them a
              perfect
              pair for analyzing the issue of media bias.</Card.Text>
            <Card.Text>I used the pre-trained text analysis models from indico.io and the Natural Language Toolkit(NLTK)
              to generate variables for analysis. Using these variables, I created visualizations using Matplotlib and
              Seaborn to visually identify patterns in the data.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="https://noahbjohnson.github.io/DS320" target="_blank">Visit Project Site</a>

          </Card.Footer>
        </Card></Col>
      <Col md={12}>
        <Card>
          <Card.Header>Analysis of Income Bracket Data with Logistic Regression - <i>12/10/2017</i></Card.Header>
          <Card.Body>
            <Card.Title>Completed for MATH327 at Luther College</Card.Title>
          </Card.Body>
          <Card.Body>
            <Card.Text>The purpose of this analysis is to build a model that can accurately determine if someone’s
              income
              is over $50,000 or under/equal. The data used in this analysis was downloaded from the website data.world
              as
              a complete package including a training set and test set. (original attribution is at the end of this
              document) The data was originally obtained from the US census bureau and includes information about
              employment, education, and demographics.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="https://noahbjohnson.github.io/MATH327/income/report.html"
               target="_blank">Read the Report</a>
          </Card.Footer>
        </Card></Col>
      <Col md={12}>
        <Card>
          <Card.Header>An Analysis of World Happiness Data - <i>11/3/2017</i></Card.Header>
          <Card.Body>
            <Card.Title>Completed for MATH327 at Luther College</Card.Title>
          </Card.Body>
          <Card.Body>
            <Card.Text>This report examines possible contributing factors to the Happiness of a nation’s
              populace (“AVGHappiness”) rated on a scale of 1-10. All variables are national averages, mostly of survey
              responses, with the exception of “country”,“year”,“HappinessSD”,“HappinessSD/mean”. The primary goal of
              this
              report is determine the most predictive measure of average national Happiness.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="https://noahbjohnson.github.io/MATH327/final/report.html"
               target="_blank">Read the Report</a>
            <a href="https://noahbjohnson.github.io/MATH327/final/poster.pdf"
               target="_blank">View the Poster</a>
          </Card.Footer>
        </Card>
      </Col>
    </Container>
  )
}
