import { render } from 'tests';

import { Tag } from './Tag';

describe('Tag', () => {
  test('renders provided label with hash', () => {
    const { getByText } = render(<Tag tag="linkshare" />);
    const label = getByText('#linkshare');
    expect(label).toBeInTheDocument();
  });
});
