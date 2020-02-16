import * as React from 'react'

type ProviderProps = {
  children: any
}

type ProviderState = {
  darkMode: boolean
}

const defaultContext = {
  darkMode: false,
  toggleDark: () => {}
}

export const PreferencesContext = React.createContext(defaultContext)

/**
 * Preferences context and provider
 */
export const PreferencesProvider = class extends React.Component<ProviderProps, ProviderState> {
  toggleDark = () => this.setState({ darkMode: !this.state.darkMode })
  state = defaultContext

  render () {
    const { children } = this.props
    const { darkMode } = this.state
    const toggleDark = this.toggleDark
    return (
      <PreferencesContext.Provider value={{ darkMode, toggleDark }}>
        {children}
      </PreferencesContext.Provider>
    )
  }
}
