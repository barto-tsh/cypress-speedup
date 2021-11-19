import { render } from 'tests';

import { Page } from './Page';

describe('Page', () => {
  test('renders children', () => {
    const { getByText } = render(
      <Page>
        <h1>Linkshare</h1>
      </Page>,
    );
    const heading = getByText('Linkshare');
    expect(heading).toBeInTheDocument();
  });
});
