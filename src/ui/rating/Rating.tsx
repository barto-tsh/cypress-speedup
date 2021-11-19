import { ReactComponent as IconPlus } from 'assets/svg/plus.svg';
import { ReactComponent as IconMinus } from 'assets/svg/minus.svg';
import { RateType } from 'hooks/useRating/useRating.types';

import * as Styled from './Rating.styles';
import { RatingProps } from './Rating.types';

export const Rating = ({ score, userVote, onRate, className }: RatingProps) => {
  return (
    <Styled.Wrapper className={className}>
      <Styled.Button onClick={() => onRate(RateType.DOWN)} chosen={userVote === -1} vote={RateType.DOWN}>
        <IconMinus />
      </Styled.Button>
      <Styled.Score>{score}</Styled.Score>
      <Styled.Button onClick={() => onRate(RateType.UP)} chosen={userVote === 1} vote={RateType.UP}>
        <IconPlus />
      </Styled.Button>
    </Styled.Wrapper>
  );
};
