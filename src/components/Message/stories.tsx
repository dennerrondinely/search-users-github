import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Message, { MessageProps } from '.';

export default {
  title: 'Message',
  component: Message,
  argTypes: {
    children: { type: '' }
  }
} as Meta;

export const Default: Story<MessageProps> = (args) => <Message {...args} />;

Default.args = {
  title: 'Desculpe, nenhum resultado encontrado :(',
  children: (
    <>
      <p>O Usuário que você pesquisou</p>
      <p>infelizmente não foi encontrado ou não existe.</p>
    </>
  )
};
