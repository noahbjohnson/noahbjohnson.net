import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { PreferencesContext } from '../contexts/Preferences'
import { BlogPosts } from '../content/blogPosts'
import { Link } from 'react-router-dom'
import '../assets/styles/blog.css'

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
      {BlogPosts.map((post, index) => {
        return <Col lg={6} key={index}>
          <Card className={`blog-card ${darkMode ? 'dark' : 'light'}`}>
            <Card.Header
              className={`blog-header ${darkMode ? 'dark' : 'light'}`}>{post.tags?.join(', ').toLowerCase()} - <i>{post.date}</i></Card.Header>
            <Card.Body className={`blog-body ${darkMode ? 'dark' : 'light'}`}>
              <Card.Title className={`blog-title ${darkMode ? 'dark' : 'light'}`}>{post.title}</Card.Title>
              <Card.Text className={`blog-text ${darkMode ? 'dark' : 'light'}`}>{post.summary}</Card.Text>
            </Card.Body>
            <Card.Footer className={`blog-footer ${darkMode ? 'dark' : 'light'}`}>
              <Link to={`/blog/${post.slug}`}>
                <Button variant={darkMode ? 'outline-light' : 'outline-dark'}>Read</Button>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      })}
    </Row>
  </Container>
}
