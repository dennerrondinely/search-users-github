import React from 'react';
import { render, screen } from 'utils/tests/helpers';

import Message from './index';

describe('<Message />', () => {
  it('should render the Message', () => {
    const { container } = render(
      <Message title="Desculpe, nenhum resultado encontrado :(">
        <p role="paragraph">O Usuário não foi encontrado</p>
      </Message>
    );

    expect(screen.getByRole('heading')).toHaveTextContent(
      'Desculpe, nenhum resultado encontrado :('
    );

    expect(screen.getByRole('paragraph')).toHaveTextContent(
      'O Usuário não foi encontrado'
    );

    expect(container).toContainHTML('p');

    expect(container).toMatchSnapshot();
  });
});
