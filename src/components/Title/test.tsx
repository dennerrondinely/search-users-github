import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Title from './index';

describe('<Title />', () => {
  it('should render the Title', () => {
    renderWithTheme(<Title title="title" />);

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
  });
});
