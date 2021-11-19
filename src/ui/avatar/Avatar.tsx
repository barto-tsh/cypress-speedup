import { useState } from 'react';
import md5 from 'md5';

import * as Styled from './Avatar.styles';
import { AvatarProps } from './Avatar.types';

export const Avatar = ({ size, user, className }: AvatarProps) => {
  const { username, avatar, email, full_name } = user;
  const [avatarLoadError, setAvatarLoadError] = useState(false);

  const hashedEmail = email && md5(email.trim().toLowerCase());
  const gravatarUrl = `https://www.gravatar.com/avatar/${hashedEmail}?s=${size * 2}&d=mp`;

  return (
    <Styled.Wrapper className={className}>
      <Styled.ImageWrapper size={size}>
        <Styled.Avatar
          src={!avatar || avatarLoadError ? gravatarUrl : avatar}
          alt={username}
          onError={() => setAvatarLoadError(true)}
        />
      </Styled.ImageWrapper>
      <Styled.Label>{full_name || username}</Styled.Label>
    </Styled.Wrapper>
  );
};
