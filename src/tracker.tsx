import React, { useEffect } from 'react'
import ReactGA, { FieldsObject } from 'react-ga'
import { RouteComponentProps } from 'react-router-dom'

export const withTracker = <P extends RouteComponentProps> (
  WrappedComponent: React.ComponentType<P>,
  options: FieldsObject = {},
) => {
  ReactGA.initialize('UA-158638918-1', {
    gaOptions: {
      siteSpeedSampleRate: 100,
      alwaysSendReferrer: true
    },
    testMode: window.location.hostname === 'localhost'
  })
  const trackPage = (page: string) => {
    ReactGA.set({ page, ...options })
    ReactGA.pageview(page)
  }

  return (props: P) => {
    useEffect(() => {
      const path = props.location.hash || props.location.pathname
      trackPage(path)
    }, [props.location.hash, props.location.pathname])

    return <WrappedComponent {...props} />
  }
}
