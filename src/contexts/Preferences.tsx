import * as React from 'react'

/**
 * Use as context wrapper
 */
type ProviderProps = {
  children: any
}

/**
 * State model
 */
type ProviderState = {
  darkMode: boolean
}

/**
 * Defines interface for hook
 */
const defaultContext = {
  darkMode: false,
  toggleDark: () => {}
}

export const PreferencesContext = React.createContext(defaultContext)

/**
 * Preferences context and provider
 */
export const PreferencesProvider = class extends React.Component<ProviderProps, ProviderState> {
  constructor (props: Readonly<ProviderProps>) {
    super(props)
    this.toggleDark = this.toggleDark.bind(this)
    this.localStorageUpdated = this.localStorageUpdated.bind(this)
    this.state = defaultContext
  }

  toggleDark = () => {
    this.setState({ darkMode: !this.state.darkMode })
    localStorage.setItem('darkMode', JSON.stringify(this.state.darkMode))
  }

  localStorageUpdated () {
    this.setState({ darkMode: JSON.parse(localStorage.getItem('darkMode') || 'false') })
    console.log(this.state)
    console.log(localStorage.getItem('darkMode'))
  }

  componentDidMount (): void {
    window.addEventListener('storage', this.localStorageUpdated)
    this.setState({
      darkMode: localStorage.getItem('darkMode') === null
        ? this.state.darkMode
        : Boolean(localStorage.getItem('darkMode'))
    })
  }

  componentWillUnmount () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', this.localStorageUpdated)
    }
  }

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
