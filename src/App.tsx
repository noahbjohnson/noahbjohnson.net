import React from 'react'
import './App.css'
import { PreferencesContext, PreferencesProvider } from './contexts/Preferences'
import { NavBar } from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect, Route, Switch } from 'react-router-dom'
import { About } from './pages/About'
import { Stack } from './pages/Stack'
import { DataScience } from './pages/DataScience'
import { dataScienceProjects } from './content/dsProjects'
import { withTracker } from './tracker'
import Footer from './components/footer'
import { Blog } from './pages/blog'
import { BlogEntry } from './pages/BlogEntry'

function dsWrapper () {
  return (<DataScience projects={dataScienceProjects}/>)
}

function App () {
  return (
    <PreferencesProvider>
      <PreferencesContext.Consumer>
        {context => (
          <div className="App">
            <NavBar/>
            <Switch>
              <Route path='/about' component={withTracker(About)}/>
              <Route path='/my-stack' component={withTracker(Stack)}/>
              <Route path='/data-science' component={withTracker(dsWrapper)}/>
              <Route exact path="/blog/:slug" component={BlogEntry} />
              <Route path='/blog' component={withTracker(Blog)}/>
              <Redirect path={'**'} to={'/about'}/>
            </Switch>
            <Footer/>
          </div>
        )}
      </PreferencesContext.Consumer>
    </PreferencesProvider>
  )
}

export default App
