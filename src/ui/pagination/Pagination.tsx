import ReactPaginate from 'react-paginate';
import clsx from 'clsx';

import { ReactComponent as IconArrowLeft } from 'assets/svg/arrow_left.svg';
import { ReactComponent as IconArrowRight } from 'assets/svg/arrow_right.svg';

import { PaginationProps } from './Pagination.types';

export const Pagination = ({ pageCount, forcePage, onPageChange, className }: PaginationProps) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={forcePage}
      onPageChange={onPageChange}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      previousLabel={<IconArrowLeft />}
      nextLabel={<IconArrowRight />}
      containerClassName={clsx('pagination__container', className)}
      pageClassName="pagination__item"
      activeClassName="pagination__item--active"
      previousClassName="pagination__previous"
      nextClassName="pagination__next"
      breakClassName="pagination__break"
      disabledClassName="pagination__nav--disabled"
    />
  );
};
