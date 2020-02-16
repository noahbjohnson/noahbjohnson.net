import React from 'react'
import './App.css'
import { PreferencesContext, PreferencesProvider } from './contexts/Preferences'
import { NavBar } from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <PreferencesProvider>
      <PreferencesContext.Consumer>
        {context => (
          <div className="App">
            <NavBar/>
          </div>
        )}
      </PreferencesContext.Consumer>
    </PreferencesProvider>
  )
}

export default App
