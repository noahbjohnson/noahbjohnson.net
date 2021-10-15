import React from 'react'
// import { Nav, Navbar } from 'react-bootstrap'
import './navbar.css'
import 'react-toggle/style.css'
// import { PreferencesContext } from '../../contexts/Preferences'
// import Toggle from 'react-toggle'
// import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

// TODO: add background color to active button
// TODO: add collapse for sidebar on mobile

export const Header = () => {
  // const { darkMode, toggleDark } = useContext(PreferencesContext)
  return (
    <>
      <div id="header" className="lcars-row header">

        <div className="lcars-elbow left-bottom lcars-golden-tanoi-bg"/>

        <div className="lcars-bar horizontal">
          {/*<div className="lcars-title right" style={{fontFamily: "Swiss911", fontSize:"250%"}}>Noah B Johnson</div>*/}
          <div className="lcars-title right">Noah B Johnson</div>
        </div>

        <div className="lcars-bar horizontal right-end decorated"/>
      </div>

      <div id="left-menu" className="lcars-column start-space lcars-u-1"
           style={{ textTransform: 'uppercase', width: '50%' }}>
        <NavLink to={'/about'}>
          <div className="lcars-element button">profile</div>
        </NavLink>
        <NavLink to={'/apps'}>
          <div className="lcars-element button">Layout</div>
        </NavLink>
        <NavLink to={'/data-science'}>
          <div className="lcars-element button">Grid</div>
        </NavLink>
        <NavLink to={'/blog'}>
          <div className="lcars-element button">Colors</div>
        </NavLink>
        {/*<a href="#hyperlinks_section">*/}
        {/*  <div className="lcars-element button">Links</div>*/}
        {/*</a>*/}
        {/*<a href="#bar_section">*/}
        {/*  <div className="lcars-element button">Bar</div>*/}
        {/*</a>*/}
        {/*<a href="#textbox_section">*/}
        {/*  <div className="lcars-element button">Text Box</div>*/}
        {/*</a>*/}
        {/*<a href="#element_section">*/}
        {/*  <div className="lcars-element button">Element</div>*/}
        {/*</a>*/}
        {/*<a href="#elbow_section">*/}
        {/*  <div className="lcars-element button">Elbow</div>*/}
        {/*</a>*/}
        {/*<a href="#brackets_section">*/}
        {/*  <div className="lcars-element button">Brackets</div>*/}
        {/*</a>*/}
        {/*<a href="#inputs_section">*/}
        {/*  <div className="lcars-element button">INPUTS</div>*/}
        {/*</a>*/}
        {/*<a href="#table_section">*/}
        {/*  <div className="lcars-element button">TABLE</div>*/}
        {/*</a>*/}
        {/*<a href="#audio_section">*/}
        {/*  <div className="lcars-element button lcars-pale-canary-bg">Audio</div>*/}
        {/*</a>*/}
        {/*<a href="#svg_section">*/}
        {/*  <div className="lcars-element button lcars-pale-canary-bg">SVG</div>*/}
        {/*</a>*/}
        {/*<a href="https://github.com/joernweissenborn/lcars" target="_blank">*/}
        {/*  <div className="lcars-element button lcars-lavender-purple-bg">SRC</div>*/}
        {/*</a>*/}
        <div className="lcars-bar lcars-u-1"></div>
      </div>

    </>
    // <Navbar bg={darkMode ? 'dark' : 'light'} expand={'md'} variant={darkMode ? 'dark' : 'light'} collapseOnSelect={true}
    //         className={'headerFont headerStyles'} fixed={'top'}>
    //   <Navbar.Brand href="#">Noah B. Johnson</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    //   <Navbar.Collapse id="responive-navbar-nav">
    //     <Nav>
    //       <NavLink to={'/about'}>profile</NavLink>
    //       <NavLink to={'/apps'}>apps</NavLink>
    //       <NavLink to={'/data-science'}>data science</NavLink>
    //       <NavLink to={'/blog'}>blog</NavLink>
    //     </Nav>
    //   </Navbar.Collapse>
    //   <Navbar.Collapse className="justify-content-end">
    //     <Toggle onChange={toggleDark} checked={darkMode} className={'toggle'} icons={{
    //       checked: <FontAwesomeIcon icon={faMoon}/>,
    //       unchecked: <FontAwesomeIcon icon={faSun}/>
    //     }}/>
    //   </Navbar.Collapse>
    // </Navbar>
  )
}
