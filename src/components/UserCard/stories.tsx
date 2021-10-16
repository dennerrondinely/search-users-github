import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import user from 'mock/user';

import UserCard, { UserCardProps } from '.';

export default {
  title: 'UserCard',
  component: UserCard,
  argTypes: {
    onRepoClick: { action: 'clicked' },
    user: { type: '' }
  }
} as Meta;

export const Default: Story<UserCardProps> = (args) => <UserCard {...args} />;

Default.args = {
  user
};
