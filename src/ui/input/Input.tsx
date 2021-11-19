import { forwardRef } from 'react';

import * as Styled from './Input.styles';
import { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, count, error, className, maxLength, ...rest }, ref) => {
    return (
      <Styled.Wrapper className={className}>
        {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
        <Styled.Input id={id} error={!!error} maxLength={maxLength} {...rest} ref={ref} />
        {error && <Styled.Error data-testid="input-error">{error}</Styled.Error>}
        {typeof count === 'number' && (
          <Styled.Count>
            {count} / {maxLength}
          </Styled.Count>
        )}
      </Styled.Wrapper>
    );
  },
);
