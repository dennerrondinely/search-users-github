import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from 'utils/tests/helpers';

import Header from '.';

describe('<Header />', () => {
  it('should render header', () => {
    const { container } = render(<Header />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should to call onInputUser with typed text', async () => {
    const onInputUser = jest.fn();
    const { container } = render(<Header onInputUser={onInputUser} />);

    const input = screen.getByRole('textbox');
    const text = 'dennerrondinely';
    userEvent.type(input, text);
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

    expect(onInputUser).toHaveBeenCalledWith(text);

    expect(container.firstChild).toMatchSnapshot();
  });
});
