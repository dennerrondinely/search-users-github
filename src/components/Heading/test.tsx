import React from 'react';
import { render, screen } from 'utils/tests/helpers';

import Heading from '.';

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    render(<Heading>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FFFFFF'
    });
  });

  it('should render a black heading when color is passed', () => {
    render(<Heading color="black">Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#000000'
    });
  });

  it('should render a heading with a small size', () => {
    render(<Heading size="small">Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    });

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    );
  });

  it('should render a heading with a huge size', () => {
    render(<Heading size="huge">Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '5.2rem'
    });
  });
});
