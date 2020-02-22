import React from 'react'
import './App.css'
import { PreferencesContext, PreferencesProvider } from './contexts/Preferences'
import { NavBar } from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect, Route, Switch } from 'react-router-dom'
import { About } from './pages/About'
import { Stack } from './pages/Stack'
import { DataScience } from './pages/DataScience'

function App () {
  return (
    <PreferencesProvider>
      <PreferencesContext.Consumer>
        {context => (
          <div className="App">
            <NavBar/>
            <Switch>
              <Route path='/about' component={About}/>
              <Route path='/my-stack' component={Stack}/>
              <Route path='/data-science' component={DataScience}/>
              <Redirect path={'**'} to={'/about'}/>
            </Switch>
          </div>
        )}
      </PreferencesContext.Consumer>
    </PreferencesProvider>
  )
}

export default App
