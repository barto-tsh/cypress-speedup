import { render } from 'tests';
import { entry } from 'tests/mocks/entry';

import { EntryCard } from './EntryCard';

describe('EntryCard', () => {
  test('renders provided title and description', () => {
    const { getByText } = render(<EntryCard entry={entry} />);
    const title = getByText('Test title');
    const description = getByText('Test description');
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
  test('renders provided tags', () => {
    const { getAllByText } = render(<EntryCard entry={entry} />);
    const tags = getAllByText(/#/);
    expect(tags).toHaveLength(entry.tags.length);
  });
});
