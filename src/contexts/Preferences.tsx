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
  manualDarkModeSet: boolean
}

/**
 * Defines interface for hook
 */
const defaultContext = {
  darkMode: false,
  manualDarkModeSet: false,
  toggleDark: () => {
  }
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

  /**
   * toggle the dark mode and sync with local storage
   */
  toggleDark = () => {
    // toggle dark mode and flag the value as manually overridden
    const currentValue = this.state.darkMode
    if (this._isMounted) this.setState({
      darkMode: !currentValue,
      manualDarkModeSet: true
    })

    // save values to local storage
    localStorage.setItem('darkMode', JSON.stringify(!currentValue))
    localStorage.setItem('manualDarkModeSet', JSON.stringify(true))
  }

  /**
   * method to run when the local storage is updated to sync state across doms
   */
  localStorageUpdated () {
    const localValue = localStorage.getItem('darkMode')
    if (localValue) {
      this.setState({
        darkMode: JSON.parse(localValue)
      })
    }
  }

  /**
   * set up the local storage listener and load values in
   */
  componentDidMount (): void {
    this._isMounted = true

    // add local storage listener
    window.addEventListener('storage', this.localStorageUpdated)

    // check if the system is using a dark mode
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const useDarkMode = mq.matches

    // set the dark mode to the system default
    this.setState({ darkMode: useDarkMode })

    // load saved values from local storage
    this.localStorageUpdated()
  }

  /**
   * tear down listeners
   */
  componentWillUnmount () {
    this._isMounted = false

    // remove local storage listener
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', this.localStorageUpdated)
    }
  }

  render () {
    const { children } = this.props
    const { darkMode, manualDarkModeSet } = this.state
    const toggleDark = this.toggleDark
    return (
      <PreferencesContext.Provider
        value={{ darkMode, manualDarkModeSet, toggleDark }}>
        {children}
      </PreferencesContext.Provider>
    )
  }
}
