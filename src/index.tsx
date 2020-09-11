import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import { pdfjs } from 'react-pdf'
import './pages/apps/apps/app.css'
import { PreferencesContext, PreferencesProvider } from './contexts/Preferences'
import { NavBar } from './components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect, Route, Switch, HashRouter } from 'react-router-dom'
import { About } from './pages/about/About'
import { DataScience } from './pages/data-science/DataScience'
import { dataScienceProjects } from './pages/data-science/dsProjects'
import { withTracker } from './contexts/tracker'
import Footer from './components/footer/footer'
import { Blog } from './pages/blog/Blog'
import { BlogEntry } from './pages/blog/BlogEntry'
import { Apps } from './pages/apps/Apps'

function dsWrapper () {
  return (<DataScience projects={dataScienceProjects}/>)
}

export function App () {
  return (
    <HashRouter>
      <PreferencesProvider>
        <PreferencesContext.Consumer>
          {() => (
            <div className="App">
              <NavBar/>
              <Switch>
                <Route path='/about' component={withTracker(About)}/>
                <Route path='/data-science' component={withTracker(dsWrapper)}/>
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

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>, document.getElementById('root'))
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()


