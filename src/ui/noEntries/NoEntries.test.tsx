import { render } from 'tests';

import { NoEntries } from './NoEntries';

describe('NoEntries', () => {
  test('renders provided label', () => {
    const text = 'No entries found';
    const { getByText } = render(<NoEntries label={text} />);
    const label = getByText('No entries found');
    expect(label).toBeInTheDocument();
  });
});
