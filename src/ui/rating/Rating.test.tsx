import { render } from 'tests';

import { Rating } from './Rating';

describe('Rating', () => {
  test('renders provided score', () => {
    const { getByText } = render(<Rating score={24} />);
    const score = getByText(/24/);
    expect(score).toBeInTheDocument();
  });

  test('renders negative score', () => {
    const { getByText } = render(<Rating score={-15} />);
    const score = getByText(/-15/);
    expect(score).toBeInTheDocument();
  });
});
