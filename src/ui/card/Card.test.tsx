import { render } from 'tests';

import { Card } from './Card';

describe('Card', () => {
  test('renders children', () => {
    const { getByText } = render(
      <Card>
        <h1>Linkshare</h1>
      </Card>,
    );
    const heading = getByText('Linkshare');
    expect(heading).toBeInTheDocument();
  });
});
