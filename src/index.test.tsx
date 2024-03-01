import * as React from 'react'
import App from './app'
import { render } from '@testing-library/react'

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

test('renders the app', () => {
  const { getByText } = render(
    <App/>
  )
  const linkElement = getByText(/Noah B. Johnson/i)
  expect(linkElement).toBeInTheDocument()
})
