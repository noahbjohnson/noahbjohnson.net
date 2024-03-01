import React, { FC, useContext, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { PreferencesContext } from '../../contexts/Preferences'
import { Link, RouteComponentProps } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import * as request from 'superagent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

interface BlogEntryProps {
  slug: string
}

export const BlogEntry: FC<RouteComponentProps<BlogEntryProps>> = (props) => {
  const { darkMode } = useContext(PreferencesContext)
  const slug = props.match?.params.slug
  const [contents, setContents] = useState<string>('Loading...')

  request.get(`/posts/${slug}.md`).then((res) => setContents(res.text))

  return <Container className={`page ${darkMode ? 'dark' : 'light'}`} fluid>
    <header>
      <Row>
        <Col xs={'12'} style={{ textAlign: 'center' }}>
          <Link to={'/blog'}><Button><FontAwesomeIcon icon={faArrowAltCircleLeft}/> Blog Home</Button></Link>
        </Col>
      </Row>
    </header>
    <Row>
      <Col lg={12}>
        <ReactMarkdown children={contents}/>
      </Col>
    </Row>
  </Container>
}
