import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Icon, { IconProps } from './index';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    icon: {
      type: 'string'
    }
  }
} as Meta;

export const Default: Story<IconProps> = (args) => <Icon {...args} />;
Default.args = {
  size: 50,
  icon: 'search',
  color: 'primary'
};
