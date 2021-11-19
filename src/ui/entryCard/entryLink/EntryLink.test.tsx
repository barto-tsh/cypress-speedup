import { render } from 'tests';

import { EntryLink } from './EntryLink';

describe('EntryLink', () => {
  test('renders provided link', () => {
    const url = 'https://google.com/';
    const { getByRole } = render(<EntryLink url={url} />);
    const link = getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', url);
  });
});
