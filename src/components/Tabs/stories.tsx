import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Tabs, { TabsProps, TabPane } from './index';

export default {
  title: 'Tabs',
  component: Tabs
} as Meta;

export const Default: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <TabPane name="Repositorios" key="1">
      Repositorios
    </TabPane>
    <TabPane name="Repositorios com Estrelou" key="2">
      Repositorios com Estrelou
    </TabPane>
  </Tabs>
);

Default.args = {
  activeTab: 'Repositorios'
};
