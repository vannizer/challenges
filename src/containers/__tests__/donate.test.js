import React from 'react'
import { render, Simulate } from 'react-testing-library'
import CharityCard from '../CharityCard'

test('calls toggle when press donate button', () => {
  const handleToggle = jest.fn()
  const { getByText } = render(<CharityCard onToggle={handleToggle} />)
  const donateButton = getByText('donate', { selector: 'button' })

  Simulate.click(donateButton)

  expect(handleToggle).toHaveBeenCalledTimes(1)
})

test('pay button will disabled if not selected value', () => {
  const { getByText, getByLabelText } = render(<CharityCard />)
  const payButton = getByText('pay', { selector: 'button' })
  const input10 = getByLabelText('10', { selector: 'input' })

  expect(payButton.disabled).toBe(true)
  Simulate.click(input10)
  expect(payButton.disabled).toBe(false)
})

test('calls submit and toggle when press pay button', () => {
  const handleToggle = jest.fn()
  const handleSubmit = jest.fn()

  const { getByLabelText, getByText } = render(
    <CharityCard onSubmit={handleSubmit} onToggle={handleToggle} />,
  )
  const payButton = getByText('pay', { selector: 'button' })
  const input10 = getByLabelText('10', { selector: 'input' })

  Simulate.click(input10)
  Simulate.click(payButton)

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleToggle).toHaveBeenCalledTimes(1)
})
