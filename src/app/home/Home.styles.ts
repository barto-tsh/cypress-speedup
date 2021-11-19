import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import hexRgb from 'hex-rgb';

import { TrendingTagsBox } from 'ui/trendingTagsBox/TrendingTagsBox';
import { Button as ButtonBase } from 'ui/button/Button';
import { Dropdown as DropdownBase } from 'ui/dropdown/Dropdown';
import { Pagination as PaginationBase } from 'ui/pagination/Pagination';
import { ReactComponent as LoaderBase } from 'assets/svg/spinner.svg';

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-row: 2 / 3;
  margin-bottom: 16px;
  padding: 0 16px;
  flex-wrap: wrap;

  ${up('md')} {
    padding: 0;
    grid-row: 1 / 2;
  }
`;

export const AddButton = styled(ButtonBase)`
  align-self: center;
  margin-left: auto;
  order: 2;

  ${up('lg')} {
    order: 3;
    margin-left: 16px;
  }
`;

export const EntriesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row: 3 / 4;
  padding: 0 16px;

  ${up('md')} {
    padding: 0;
    grid-row: 2 / 3;
  }
`;

export const Entries = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  row-gap: 16px;
`;

export const Pagination = styled(PaginationBase)`
  margin: 40px auto 0;
`;

export const TrendingTags = styled(TrendingTagsBox)`
  width: 100vw;
  margin-bottom: 24px;
  grid-row: 1 / 2;

  ${up('md')} {
    width: 100%;
    position: sticky;
    top: 24px;
    grid-row: 2 / 3;
    margin-left: 0;
    margin-bottom: 0;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;

  ${up('md')} {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 24px;
  }
`;

export const LoaderOverlay = styled.div<{ visible: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 48px;
  border-radius: 16px;
  background-color: ${({ theme, visible }) =>
    visible ? hexRgb(theme.color.white, { alpha: 0.75, format: 'css' }) : 'transparent'};
  z-index: 10;
`;

export const Loader = styled(LoaderBase)`
  margin: 24px 0;

  ${up('md')} {
    margin: 0;
  }
`;

export const LoadMoreButton = styled(ButtonBase)`
  margin-top: 32px;
`;

export const Dropdown = styled(DropdownBase)`
  width: 100%;
  margin-top: 16px;
  order: 3;

  ${up('lg')} {
    order: 2;
    width: auto;
    margin-top: 0;
    margin-left: auto;
    min-width: 200px;
  }
`;
