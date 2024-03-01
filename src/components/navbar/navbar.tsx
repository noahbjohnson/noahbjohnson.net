import React, { useContext } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import './navbar.css'
import 'react-toggle/style.css'
import { PreferencesContext } from '../../contexts/Preferences'
import Toggle from 'react-toggle'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  const { darkMode, toggleDark } = useContext(PreferencesContext)
  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} expand={'md'} variant={darkMode ? 'dark' : 'light'} collapseOnSelect={true}
            className={'headerFont headerStyles'} fixed={'top'}>
      <Navbar.Brand href="#">Noah B. Johnson</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavLink to={'/about'}>profile</NavLink>
          <NavLink to={'/apps'}>apps</NavLink>
          <NavLink to={'/data-science'}>data science</NavLink>
          <NavLink to={'/blog'}>blog</NavLink>
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
