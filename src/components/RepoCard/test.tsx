import React from 'react';
import { render, screen } from 'utils/tests/helpers';

import { repo } from 'mock/repo';

import RepoCard from '.';

describe('<RepoCard />', () => {
  it('should render a card repo with his information', () => {
    const { container } = render(<RepoCard repo={repo} />);
    expect(screen.getByRole('img', { name: repo.name })).toHaveAttribute(
      'src',
      repo.avatarUrl
    );

    expect(
      screen.getByRole('heading', { name: repo.name })
    ).toBeInTheDocument();

    expect(screen.getByText(repo.description)).toBeInTheDocument();

    expect(screen.getByText(repo.stargazers)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
