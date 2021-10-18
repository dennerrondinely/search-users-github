import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TextField, { TextFieldProps } from '.';
import Icon from 'components/Icon';

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'Buscar',
    name: 'text',
    icon: <Icon icon="search" />,
    initialValue: '',
    placeholder: 'digite o nome do usuário',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

withError.args = {
  error: 'Ops...algo está errado'
};
