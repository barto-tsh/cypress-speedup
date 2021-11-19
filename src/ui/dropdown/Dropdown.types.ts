export type OptionType<T> = {
  id: string;
  value: T;
  label?: string;
};

export type DropdownProps<T> = {
  options: OptionType<T>[];
  onChange(value: T): void;
  selectedValue?: T;
  className?: string;
};
