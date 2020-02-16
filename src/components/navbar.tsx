import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import './navbar.css'

export const NavBar = () => {
  return (
    <Navbar bg={'dark'} expand={'lg'} variant={'dark'} collapseOnSelect className={'headerFont'} sticky={'top'}>
      <Navbar.Brand href="#">Noah B. Johnson</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav variant={'pills'}>
          <Nav.Link href="index.html#about">About</Nav.Link>
          <Nav.Link href="index.html#skills">Skills</Nav.Link>
          <Nav.Link href="index.html#education">Education</Nav.Link>
          <Nav.Link href="index.html#experience">Experience</Nav.Link>
          <Nav.Link href="index.html#contact">Contact</Nav.Link>
          <NavDropdown title="Projects" id="collapsible-nav-dropdown" className={'headerFont'}>
            <NavDropdown.Item href="ds.html" className={'headerFont'}>Data Science</NavDropdown.Item>
            {/*<NavDropdown.Item href="photos.html">Photography</NavDropdown.Item>*/}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="https://www.linkedin.com/in/noahbjohnson/"><FontAwesomeIcon icon={faLinkedin}
                                                                                      size={'lg'}/></Nav.Link>
          <Nav.Link href="https://github.com/noahbjohnson"><FontAwesomeIcon icon={faGithub} size={'lg'}/></Nav.Link>
          <Nav.Link href="https://stackoverflow.com/users/5379654/noah-b-johnson"><FontAwesomeIcon
            icon={faStackOverflow} size={'lg'}/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
