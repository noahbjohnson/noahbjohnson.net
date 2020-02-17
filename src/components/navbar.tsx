import React, { useContext } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './navbar.css'
import 'react-toggle/style.css'
import { PreferencesContext } from '../contexts/Preferences'
import Toggle from 'react-toggle'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavBar = () => {
  const { darkMode, toggleDark } = useContext(PreferencesContext)
  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} expand={'lg'} variant={darkMode ? 'dark' : 'light'} collapseOnSelect
            className={'headerFont'} fixed={'top'}>
      <Navbar.Brand href="#">Noah B. Johnson</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/about">profile</Nav.Link>
          <Nav.Link href="/work">work</Nav.Link>


          <NavDropdown title="projects" id="collapsible-nav-dropdown" className={'headerFont'}>
            <NavDropdown.Item href="ds.html" className={'headerFont'}>Data Science</NavDropdown.Item>
            {/*<NavDropdown.Item href="photos.html">Photography</NavDropdown.Item>*/}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Toggle onChange={toggleDark} checked={darkMode} className={'toggle'} icons={{
          checked: <FontAwesomeIcon icon={faMoon}/>,
          unchecked: <FontAwesomeIcon icon={faSun}/>
        }}/>
      </Navbar.Collapse>
    </Navbar>
  )
}
