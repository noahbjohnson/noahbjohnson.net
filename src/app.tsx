import { DataScience } from './pages/data-science/DataScience'
import { dataScienceProjects } from './pages/data-science/dsProjects'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { PreferencesContext, PreferencesProvider } from './contexts/Preferences'
import { NavBar } from './components/navbar/navbar'
import { withTracker } from './contexts/tracker'
import { About } from './pages/about/About'
import { BlogEntry } from './pages/blog/BlogEntry'
import { Blog } from './pages/blog/Blog'
import { Apps } from './pages/apps/Apps'
import Footer from './components/footer/footer'
import React from 'react'

export default app
function app() {
  return (
    <HashRouter>
      <PreferencesProvider>
        <PreferencesContext.Consumer>
          {() => (
            <div className="App">
              <NavBar/>
              <Switch>
                <Route path='/about' component={withTracker(About)}/>
                <Route path='/data-science'
                       component={withTracker(() => <DataScience projects={dataScienceProjects}/>)}/>
                <Route exact path="/blog/:slug" component={withTracker(BlogEntry)}/>
                <Route path='/blog' component={withTracker(Blog)}/>
                <Route path={['/apps', '/apps/**']} component={withTracker(Apps)}/>
                <Redirect path={'**'} to={'/about'}/>
              </Switch>
              <Footer/>
            </div>
          )}
        </PreferencesContext.Consumer>
      </PreferencesProvider>
    </HashRouter>
  )
}
