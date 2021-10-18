import React from 'react';
import { render } from 'utils/tests/helpers';

import Loading from './index';

describe('<Loading />', () => {
  it('should render the Loading', () => {
    const { container } = render(<Loading loading />);

    expect(container).toContainHTML('svg');
  });

  it('should not render the Loading', () => {
    const { container } = render(<Loading />);

    expect(container).not.toContainHTML('svg');
  });
});
