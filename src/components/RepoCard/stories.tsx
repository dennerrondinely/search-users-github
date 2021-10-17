import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import RepoCard, { RepoCardProps } from '.';
import { repo } from 'mock/repo';

export default {
  title: 'RepoCard',
  component: RepoCard,
  argTypes: {
    onRepoClick: { action: 'clicked' },
    repo: { type: '' }
  }
} as Meta;

export const Default: Story<RepoCardProps> = (args) => <RepoCard {...args} />;

Default.args = {
  repo
};
