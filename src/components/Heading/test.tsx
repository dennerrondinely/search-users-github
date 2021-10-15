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

  it('should render a heading with a line to the left side', () => {
    render(<Heading lineLeft>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #241911'
    });
  });

  it('should render a heading with a line at the bottom', () => {
    render(<Heading lineBottom>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #241911',
      {
        modifier: '::after'
      }
    );
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

  it('should render a Heading with a primary line color', () => {
    render(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i });
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #241911' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #241911', {
      modifier: '::after'
    });
  });

  it('should render a Heading with a secondary line color', () => {
    render(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i });
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #2B716E' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #2B716E', {
      modifier: '::after'
    });
  });
});
