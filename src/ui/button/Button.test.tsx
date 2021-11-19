import { render, fireEvent } from 'tests';

import { Button } from './Button';

describe('Button', () => {
  test('renders with provided label', () => {
    const { getByText } = render(<Button>Load more</Button>);
    const button = getByText('Load more');
    expect(button).toBeInTheDocument();
  });
  test('fires provided callback', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Load more</Button>);
    const button = getByText('Load more');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
