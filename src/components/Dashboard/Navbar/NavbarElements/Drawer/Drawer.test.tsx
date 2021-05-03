import React from 'react';
import { render } from '@testing-library/react'
import Drawer from './'
import { BrowserRouter } from 'react-router-dom';


describe('Drawer', () => {
  it('should render', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Drawer open={true} />

      </BrowserRouter>
    )

    expect(getByText(/Prediction/)).toBeInTheDocument()
  })
})