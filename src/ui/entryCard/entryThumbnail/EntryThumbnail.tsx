import { useState } from 'react';

import { ReactComponent as IconLandscape } from 'assets/svg/landscape.svg';

import * as Styled from './EntryThumbnail.styles';
import { EntryThumbnailProps } from './EntryThumbnail.types';

export const EntryThumbnail = ({ src, alt }: EntryThumbnailProps) => {
  const [thumbLoadError, setThumbLoadError] = useState(false);

  return (
    <Styled.ThumbnailWrapper>
      {src && !thumbLoadError ? (
        <Styled.Thumbnail src={src} alt={alt} onError={() => setThumbLoadError(true)} />
      ) : (
        <Styled.PlaceholderWrapper data-testid="entry-thumb-placeholder">
          <IconLandscape />
        </Styled.PlaceholderWrapper>
      )}
    </Styled.ThumbnailWrapper>
  );
};
