import React from 'react';
import { render } from '@testing-library/react'
import Drawer from './'


describe('Drawer', () => {
  it('should render', () => {
    const { getByText } = render(<Drawer />)

    expect(getByText(/Prediction/)).toBeInTheDocument()
  })
})