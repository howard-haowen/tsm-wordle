import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Not Wordle', () => {
  render(<App />)
  const linkElement = screen.getByText(/Not Wordle - YourLanguageHere/i)
  expect(linkElement).toBeInTheDocument()
})
