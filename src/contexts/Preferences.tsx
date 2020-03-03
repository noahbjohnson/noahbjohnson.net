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

  _isMounted = false

  toggleDark = () => {
    const currentValue = this.state.darkMode
    if (this._isMounted) this.setState({
      darkMode: !currentValue
    })
    localStorage.setItem('darkMode', JSON.stringify(!currentValue))
  }

  localStorageUpdated () {
    const localValue = localStorage.getItem('darkMode')
    if (localValue) {
      this.setState({
        darkMode: JSON.parse(localValue)
      })
    }
  }

  componentDidMount (): void {
    this._isMounted = true
    window.addEventListener('storage', this.localStorageUpdated)
    this.localStorageUpdated()
  }

  componentWillUnmount () {
    this._isMounted = false
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', this.localStorageUpdated)
    }
  }

  render () {
    const { children } = this.props
    const { darkMode } = this.state
    const toggleDark = this.toggleDark
    return (
      <PreferencesContext.Provider
        value={{ darkMode, toggleDark }}>
        {children}
      </PreferencesContext.Provider>
    )
  }
}
