import { UserVote } from 'api/types/Entry.types';
import { RateType } from 'hooks/useRating/useRating.types';

export type RatingProps = {
  score: number;
  userVote: UserVote;
  onRate: (rate: RateType) => void;
  className?: string;
};
