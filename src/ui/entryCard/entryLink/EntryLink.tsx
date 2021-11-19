import { IconLink } from './EntryLink.styles';
import * as Styled from './EntryLink.styles';
import { EntryLinkProps } from './EntryLink.types';

export const EntryLink = ({ url, className }: EntryLinkProps) => {
  return (
    <Styled.Link href={url} target="_blank" rel="noopener noreferrer" className={className}>
      <IconLink />
      {url}
    </Styled.Link>
  );
};
