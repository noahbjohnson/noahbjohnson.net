import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export const NavBar = () => {
  return (
    <Navbar bg={'dark'} expand={'lg'} variant={'dark'} collapseOnSelect>
      <Navbar.Brand href="#">Noah B. Johnson</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="index.html#about">About</Nav.Link>
          <Nav.Link href="index.html#skills">Skills</Nav.Link>
          <Nav.Link href="index.html#education">Education</Nav.Link>
          <Nav.Link href="index.html#experience">Experience</Nav.Link>
          <Nav.Link href="index.html#contact">Contact</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="ds.html">Data Science</NavDropdown.Item>
            <NavDropdown.Item href="photos.html">Photography</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="https://www.linkedin.com/in/noahbjohnson/"><FontAwesomeIcon icon={faLinkedin}/></Nav.Link>
          <Nav.Link href="https://github.com/noahbjohnson"><FontAwesomeIcon icon={faGithub}/></Nav.Link>
          <Nav.Link href="https://stackoverflow.com/users/5379654/noah-b-johnson"><FontAwesomeIcon
            icon={faStackOverflow}/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
