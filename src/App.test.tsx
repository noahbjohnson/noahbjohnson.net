import React from 'react'
import App from './App'
import { render } from '@testing-library/react'

test('renders learn react link', () => {
  const { getByText } = render(<App/>)
  const linkElement = getByText(/Noah B. Johnson/i)
  expect(linkElement).toBeInTheDocument()
})
