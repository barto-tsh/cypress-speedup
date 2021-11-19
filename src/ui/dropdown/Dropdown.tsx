import { useState, useRef } from 'react';

import { useOutsideClick } from 'hooks/useOutsideClick/useOutsideClick';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';

import * as Styled from './Dropdown.styles';
import { DropdownProps } from './Dropdown.types';

export const Dropdown = <T,>({ onChange, options, selectedValue, className }: DropdownProps<T>) => {
  const [isOpened, setIsOpened] = useState(false);
  const { formatMessage } = useLocale();
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideClick(wrapperRef, () => setIsOpened(false));

  const selectedLabel = options.find((option) => option.value === selectedValue)?.label;

  const handleChange = (value: T) => {
    onChange(value);
    setIsOpened(false);
  };

  return (
    <Styled.Wrapper ref={wrapperRef} className={className}>
      <Styled.SelectBox onClick={() => setIsOpened(!isOpened)} data-testid="dropdown-opener">
        {selectedLabel || formatMessage({ id: AppMessages['sort.label'] })} <Styled.Icon />
      </Styled.SelectBox>
      <Styled.Elevation isOpened={isOpened}>
        <Styled.OptionsList data-testid="dropdown-list">
          {options.map(({ id, value, label }) => (
            <li key={id}>
              <Styled.Option onClick={() => handleChange(value)} selected={value === selectedValue} type="button">
                {label || value}
              </Styled.Option>
            </li>
          ))}
        </Styled.OptionsList>
      </Styled.Elevation>
    </Styled.Wrapper>
  );
};
