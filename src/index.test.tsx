import * as React from 'react'
import App from './app'
import { render } from '@testing-library/react'

test('renders the app', () => {
  const { getByText } = render(
    <App/>
  )
  const linkElement = getByText(/Noah B. Johnson/i)
  expect(linkElement).toBeInTheDocument()
})
