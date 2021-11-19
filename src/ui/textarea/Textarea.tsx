import { forwardRef } from 'react';

import { Wrapper, Label, Error } from 'ui/input/Input.styles';

import * as Styled from './Textarea.styles';
import { TextareaProps } from './Textarea.types';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, label, count, error, className, maxLength, ...rest }: TextareaProps, ref) => {
    return (
      <Wrapper className={className}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <Styled.Textarea as="textarea" id={id} maxLength={maxLength} error={!!error} {...rest} ref={ref} />
        {error && <Error data-testid="input-error">{error}</Error>}
        {typeof count === 'number' && (
          <Styled.Count>
            {count} / {maxLength}
          </Styled.Count>
        )}
      </Wrapper>
    );
  },
);
