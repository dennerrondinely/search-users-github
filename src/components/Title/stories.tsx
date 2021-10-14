import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Title, { TitleProps } from './index';

export default {
  title: 'Title',
  component: Title
} as Meta;

export const Default: Story<TitleProps> = (args) => <Title {...args} />;

Default.args = {
  title: 'Title'
};
