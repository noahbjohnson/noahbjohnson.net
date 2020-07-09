import React from 'react'
import './App.css'
import { PreferencesContext, PreferencesProvider } from './contexts/Preferences'
import { NavBar } from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect, Route, Switch, HashRouter } from 'react-router-dom';
import { About } from './pages/About'
import { DataScience } from './pages/DataScience'
import { dataScienceProjects } from './content/dsProjects'
import { withTracker } from './tracker'
import Footer from './components/footer'
import { Blog } from './pages/Blog'
import { BlogEntry } from './pages/BlogEntry'
import { Apps } from './pages/Apps'

function dsWrapper () {
  return (<DataScience projects={dataScienceProjects} />)
}

function App () {
  return (
    <HashRouter>
      <PreferencesProvider>
        <PreferencesContext.Consumer>
          {() => (
            <div className="App">
              <NavBar />
              <Switch>
                <Route path='/about' component={withTracker(About)} />
                <Route path='/data-science' component={withTracker(dsWrapper)} />
                <Route exact path="/blog/:slug" component={withTracker(BlogEntry)} />
                <Route path='/blog' component={withTracker(Blog)} />
                <Route path={['/apps', '/apps/**']} component={withTracker(Apps)} />
                <Redirect path={'**'} to={'/about'} />
              </Switch>
              <Footer />
            </div>
          )}
        </PreferencesContext.Consumer>
      </PreferencesProvider>
    </HashRouter>
  )
}

export default App
