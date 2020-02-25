import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { PreferencesContext } from '../contexts/Preferences'
import { BlogPosts } from '../content/blogPosts'
import { Link } from 'react-router-dom'

export interface BlogPost {
  title: string
  /**
   * YYYY-MM-DD
   */
  date?: string
  tags?: string[]
  summary: string
  slug: string
  shareable?: boolean
}

export const Blog = () => {
  const { darkMode } = useContext(PreferencesContext)
  return <Container className={`page ${darkMode ? 'dark' : 'light'}`} fluid>
    <header>
      <Row>
        <Col lg={12}>
          <h1>Nothing here yet</h1>
          <h4>I'll get to it</h4>
        </Col>
      </Row>
    </header>
    <Row>
      <Col lg={12}>
        {BlogPosts.map((post, index) => {
          return <Col lg={6} key={index}>
            <Card className={`ds-card ${darkMode ? 'dark' : 'light'}`}>
              <Card.Header
                className={`ds-header ${darkMode ? 'dark' : 'light'}`}>{post.tags} - <i>{post.date}</i></Card.Header>
              <Card.Body className={`ds-body ${darkMode ? 'dark' : 'light'}`}>
                <Card.Title className={`ds-title ${darkMode ? 'dark' : 'light'}`}>{post.title}</Card.Title>
                <Card.Text className={`ds-text ${darkMode ? 'dark' : 'light'}`}>{post.summary}</Card.Text>
              </Card.Body>
              <Card.Footer className={`${darkMode ? 'dark' : 'light'}`}>
                <Link to={`/blog/${post.slug}`}>
                  <Button variant={darkMode ? 'outline-light' : 'outline-dark'}>{post.slug}</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        })}
      </Col>
    </Row>
  </Container>
}
