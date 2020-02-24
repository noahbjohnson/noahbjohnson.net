import { DsProject } from '../pages/DataScience'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

export const dataScienceProjects: DsProject[] = [
  {
    title: 'Senior Project Notes',
    subtitle: 'Completed for the Senior Project requirement at Luther College',
    date: 'May, 2019',
    bodyText: [
      'Tourism is often regarded as a positive force for its perceived effects on economic development, modernization, and globalization of destination populations. Much of the analysis of this issue relies on a number of assumptions about the nature of \'development\' and its accoutrement. Significant relationships are often taken out of context or extrapolated inappropriately. The purpose of this analysis is to identify other correlations with tourist activity to provide further context to relationships and demonstrate the limitations of underlying assumptions.'
    ],
    footerButtons: [
      {
        icon: <FontAwesomeIcon icon={faFileAlt}/>,
        text: 'Visit Project Site',
        link: 'https://noahbjohnson.net/senior-project/'
      },
      {
        icon: <FontAwesomeIcon icon={faGithub}/>,
        text: 'View on Github',
        link: 'https://github.com/noahbjohnson/senior-project/'
      }
    ]
  },
  {
    title: 'Food Desert Classification and Analysis using USDA County-Level Data',
    subtitle: 'Completed for DS420 at Luther College',
    date: 'May, 2019',
    bodyText: [
      `
      According to the
            American Nutrition Association, a food desert is an area, especially one with low-income residents,
            that has limited
            access to affordable and nutritious food.`,
      `In addition to obesity, many other health issues are associated with
              poor access to affordable healthy foods.`,
      `
      The USDA defines what’s considered a food
            desert and which areas will be
            helped by its initiatives. To qualify as a “low-access community,” at
            least 500 people and/or at least 33% of the census tract’s
            population must reside more than one mile from a supermarket or large
            grocery store.`
    ],
    footerButtons: [
      {
        icon: <FontAwesomeIcon icon={faFileAlt}/>,
        text: 'Visit Project Site',
        link: 'https://noahbjohnson.net/DS420/'
      },
      {
        icon: <FontAwesomeIcon icon={faGithub}/>,
        text: 'View on Github',
        link: 'https://github.com/noahbjohnson/DS420/'
      }
    ]
  },
  {
    title: 'An Analysis of Politically Biased News',
    subtitle: 'Completed for DS320 at Luther College',
    date: 'Dec, 2018',
    bodyText: [
      `
      In this report, I collected and examined
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
  pair for analyzing the issue of media bias.`,
      `I used the pre-trained text analysis
models from indico.io and the
Natural Language
Toolkit(NLTK)
to generate variables for analysis. Using these variables, I created visualizations using Matplotlib and
Seaborn to visually identify patterns in the data.`
    ],
    footerButtons: [
      {
        icon: <FontAwesomeIcon icon={faFileAlt}/>,
        text: 'Visit Project Site',
        link: 'https://noahbjohnson.net/DS320/'
      },
      {
        icon: <FontAwesomeIcon icon={faGithub}/>,
        text: 'View on Github',
        link: 'https://github.com/noahbjohnson/DS320/'
      }
    ]
  },
  {
    title: 'Analysis of Income Bracket Data with Logistic Regression',
    subtitle: 'Completed for MATH327 at Luther College',
    date: 'Dec, 2017',
    bodyText: [
      `
      The purpose of this analysis is to build a
model that can accurately
determine if someone’s
income
is over $50,000 or under/equal. The data used in this analysis was downloaded from the website
data.world
as
a complete package including a training set and test set. (original attribution is at the end of this
document) The data was originally obtained from the US census bureau and includes information about
employment, education, and demographics.`
    ],
    footerButtons: [
      {
        icon: <FontAwesomeIcon icon={faFileAlt}/>,
        text: 'Visit Project Site',
        link: 'https://noahbjohnson.net/MATH327/'
      },
      {
        icon: <FontAwesomeIcon icon={faGithub}/>,
        text: 'View on Github',
        link: 'https://github.com/noahbjohnson/MATH327/'
      }
    ]
  },
  {
    title: 'An Analysis of World Happiness Data',
    subtitle: 'Completed for MATH327 at Luther College',
    date: 'Nov, 2017',
    bodyText: [
      `
      This report examines possible contributing
factors to the Happiness of a
nation’s
populace (“AVGHappiness”) rated on a scale of 1-10. All variables are national averages, mostly of
survey
responses, with the exception of “country”, “year”, “HappinessSD”, “HappinessSD/mean”. The primary goal of
this
report is determine the most predictive measure of average national Happiness.`
    ],
    footerButtons: [
      {
        icon: <FontAwesomeIcon icon={faFileAlt}/>,
        text: 'Read the Report',
        link: 'https://noahbjohnson.net/MATH327/final/report.html'
      },
      {
        icon: <FontAwesomeIcon icon={faChartBar}/>,
        text: 'View the Poster',
        link: 'https://noahbjohnson.net/MATH327/final/poster.pdf'
      },
      {
        icon: <FontAwesomeIcon icon={faGithub}/>,
        text: 'View on Github',
        link: 'https://github.com/noahbjohnson/MATH327/'
      }
    ]
  }
]
