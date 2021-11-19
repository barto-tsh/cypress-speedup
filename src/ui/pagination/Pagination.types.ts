export type PaginationParam = {
  selected: number;
};

export type PaginationProps = {
  pageCount: number;
  onPageChange: (obj: PaginationParam) => void;
  forcePage?: number;
  className?: string;
};
