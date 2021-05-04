import React from 'react';
import { render } from '@testing-library/react'
import Drawer from './'
import { BrowserRouter } from 'react-router-dom';


describe('Drawer', () => {
  it('should render', () => {
    let close = jest.fn()
    const { getByText } = render(
      <BrowserRouter>
        <Drawer open={true} close={close} />

      </BrowserRouter>
    )

    expect(getByText(/Dashboard/)).toBeInTheDocument()
  })
})