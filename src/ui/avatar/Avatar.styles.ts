import styled, { css } from 'styled-components';

import { ReactComponent as IconUserBase } from 'assets/svg/user.svg';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const ImageWrapper = styled.div(
  ({ size }: { size: number }) => css`
    overflow: hidden;
    width: ${size}px;
    height: ${size}px;
    margin-right: ${size > 30 ? '8px' : '4px'};
    border-radius: 50%;
  `,
);

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PlaceholderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.grey};
`;

export const IconUser = styled(IconUserBase)`
  width: 100%;
  height: 85%;
  color: ${({ theme }) => theme.color.darkGrey};
`;

export const Label = styled.p(
  ({ theme }) => css`
    font-size: ${theme.font.size.xs};
    font-weight: ${theme.font.weight.medium};
    line-height: ${theme.lineHeight.base};
    white-space: nowrap;
  `,
);
