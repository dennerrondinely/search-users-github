import React from 'react';
import { render, screen } from 'utils/tests/helpers';
import user from 'mock/user';

import UserCard from '.';

describe('<UserCard />', () => {
  it('should render a user card with his information', () => {
    const { container } = render(<UserCard user={user} />);
    expect(screen.getByRole('img', { name: user.name })).toHaveAttribute(
      'src',
      user.avatarUrl
    );

    expect(
      screen.getByRole('heading', { name: user.name })
    ).toBeInTheDocument();

    expect(screen.getByText(user.bio)).toBeInTheDocument();

    expect(screen.getByText(user.reposNumber)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
