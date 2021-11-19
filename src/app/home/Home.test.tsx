import { render } from 'tests';

import { Home } from './Home';

describe('Home', () => {
  test('renders heading', () => {
    const { getByText } = render(<Home />);
    const heading = getByText('All entries');
    expect(heading).toBeInTheDocument();
  });
});
