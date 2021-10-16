import React from 'react';

import Icon from './index';
import { render, screen } from 'utils/tests/helpers';

describe('<Icon />', () => {
  it('should render the icon size', () => {
    render(<Icon color="white" size={15} icon="search" data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveStyle({
      height: '15px'
    });
  });

  it('should render colors correctly', () => {
    const { container } = render(
      <Icon color="white" size={15} icon="search" data-testid="icon" />
    );

    expect(container.firstChild).toHaveStyle({ fill: '#ffffff' });
  });
});
