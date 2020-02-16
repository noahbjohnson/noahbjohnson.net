import React from 'react'
import './App.css'
import { PreferencesContext, PreferencesProvider } from './contexts/Preferences'
import { NavBar } from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { About } from './pages/About'
import { Stack } from './pages/Stack'

function App () {
  return (
    <PreferencesProvider>
      <PreferencesContext.Consumer>
        {context => (
          <div className="App">
            <NavBar/>
            <BrowserRouter>
              <Switch>
                <Route path='/about' component={About}/>
                <Route path='/stack' component={Stack}/>
                <Redirect path={'/'} to={'/about'}/>
              </Switch>
            </BrowserRouter>
          </div>
        )}
      </PreferencesContext.Consumer>
    </PreferencesProvider>
  )
}

export default App
