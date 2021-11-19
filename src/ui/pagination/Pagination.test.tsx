import { render, fireEvent } from 'tests';

import { Pagination } from './Pagination';

describe('Pagination', () => {
  test('fires callback function when page changed', () => {
    const handlePageChange = jest.fn();
    const { getByText } = render(<Pagination pageCount={10} onPageChange={handlePageChange} />);
    const pageButton = getByText('2');
    fireEvent.click(pageButton);
    expect(handlePageChange).toHaveBeenCalledWith({ selected: 1 });
  });
  test('handles page forcing', () => {
    const handlePageChange = jest.fn();
    const { getByText, rerender } = render(<Pagination pageCount={10} onPageChange={handlePageChange} />);
    const pageButton = getByText('2');
    expect(pageButton.parentElement).not.toHaveClass('pagination__item--active');

    rerender(<Pagination forcePage={1} pageCount={10} onPageChange={handlePageChange} />);
    expect(pageButton.parentElement).toHaveClass('pagination__item--active');
  });
});
