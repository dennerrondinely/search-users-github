import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import NotFound, { NotFoundProps } from '.';

export default {
  title: 'NotFound',
  component: NotFound,
  argTypes: {
    children: { type: '' }
  }
} as Meta;

export const Default: Story<NotFoundProps> = (args) => <NotFound {...args} />;

Default.args = {
  title: 'Desculpe, nenhum resultado encontrado :(',
  children: (
    <>
      <p>O Usuário que você pesquisou</p>
      <p>infelizmente não foi encontrado ou não existe.</p>
    </>
  )
};
