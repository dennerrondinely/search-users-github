import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { render } from 'utils/tests/helpers';

import Tabs, { TabPane } from './index';

describe('<Tabs />', () => {
  const Component = () => (
    <Tabs>
      <TabPane name="Informação">Content of Tab Pane 1</TabPane>
      <TabPane name="Historico do Cliente">Content of Tab Pane 2</TabPane>
      <TabPane name="contrato social">Content of Tab Pane 3</TabPane>
    </Tabs>
  );

  it('should render the Tabs', () => {
    const { container } = render(<Component />);

    expect(container).toMatchSnapshot();
  });

  it('should change Tabs', () => {
    const { container } = render(<Component />);

    fireEvent.click(screen.getByText('Historico do Cliente'));
    expect(container).toHaveTextContent('Content of Tab Pane 2');

    fireEvent.click(screen.getByText('contrato social'));
    expect(container).toHaveTextContent('Content of Tab Pane 3');

    fireEvent.click(screen.getByText('Informação'));
    expect(container).toHaveTextContent('Content of Tab Pane 1');
  });

  it('should valid is a element', () => {
    const { container } = render(<Tabs>teste</Tabs>);

    expect(container).not.toContainHTML('li');
  });
});
