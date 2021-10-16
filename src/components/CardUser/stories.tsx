import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import user from 'mock/user';

import CardUser, { CardUserProps } from '.';

export default {
  title: 'CardUser',
  component: CardUser
} as Meta;

export const Default: Story<CardUserProps> = (args) => <CardUser {...args} />;

Default.args = {
  user
};
