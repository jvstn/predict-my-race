import React from 'react';
import { render } from '@testing-library/react'
import Info from './'
import { BrowserRouter } from 'react-router-dom';


describe('Info', () => {
  it('should render', () => {
    const { getByText } = render(
      <BrowserRouter>
      <Info />
      </BrowserRouter>
    )

    expect(getByText(/How to use/i)).toBeInTheDocument()
  })
})