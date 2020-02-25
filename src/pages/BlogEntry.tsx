import React, { FC, useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PreferencesContext } from '../contexts/Preferences'
import { Link, RouteComponentProps } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import * as request from 'superagent'

interface BlogEntryProps {
  slug: string
}

export const BlogEntry: FC<RouteComponentProps<BlogEntryProps>> = (props) => {
  const { darkMode } = useContext(PreferencesContext)
  const slug = props.match?.params.slug
  const [contents, setContents] = useState<string>('Loading...')

  request.get(`/posts/${slug}.md`).then((res)=>setContents(res.text))

  return <Container className={`page ${darkMode ? 'dark' : 'light'}`} fluid>
    <Row>
      <Link to={'/blog'}>Blog Home</Link>
    </Row>
    <Row>
      <Col lg={12}>
        <ReactMarkdown source={contents} />
      </Col>
    </Row>
  </Container>
}
