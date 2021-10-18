import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Loading, { LoadingProps } from './index';

export default {
  title: 'Loading',
  component: Loading
} as Meta;

export const Default: Story<LoadingProps> = (args) => <Loading {...args} />;

Default.args = {
  loading: true
};
