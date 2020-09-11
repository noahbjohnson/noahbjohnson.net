import * as React from 'react'
import { App } from './index'
import { render } from '@testing-library/react'

test('renders learn react link', () => {
  const { getByText } = render(<App/>)
  const linkElement = getByText(/Noah B. Johnson/i)
  expect(linkElement).toBeInTheDocument()
})
