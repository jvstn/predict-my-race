import React from 'react';
import { render } from '@testing-library/react'
import {Body, Headline, Title} from './'


describe('Typyography renders', () => {

  it('should render Body text', () => {
    const bodyText = "this is body text"
    const { getByText } = render(
      <Body>
        {bodyText}
      </Body>
    )
    expect(getByText(bodyText)).toBeInTheDocument()
  })
  it('should render Headline text', () => {
    const HeadlineText = "this is Headline text"
    const { getByText } = render(
      <Headline>
        {HeadlineText}
      </Headline>
    )
    expect(getByText(HeadlineText)).toBeInTheDocument()
  })
  it('should render Title text', () => {
    const TitleText = "this is Title text"
    const { getByText } = render(
      <Title>
        {TitleText}
      </Title>
    )
    expect(getByText(TitleText)).toBeInTheDocument()
  })

})