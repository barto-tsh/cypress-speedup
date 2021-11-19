import { UserVote, Entry } from 'api/types/Entry.types';

export enum EntriesOrdering {
  CREATED_ASC = 'created_at',
  CREATED_DESC = '-created_at',
  SCORE_ASC = 'score',
  SCORE_DESC = '-score',
}

export type GetEntriesArguments = {
  page?: number;
  per_page?: number;
  score?: number;
  user?: string;
  min_score?: string;
  max_score?: string;
  order?: EntriesOrdering;
  tags?: string[];
  tags_or?: string;
  search?: string;
};

export type GetEntriesResponse = {
  results: Entry[];
  count?: number;
  next: string | null;
};

export type RateArguments = {
  value: UserVote;
};

export type AddEntryArguments = {
  resource_url: string;
  title: string;
  description: string;
  user: {
    username: string;
  };
  thumbnail?: string;
  tags?: string[];
};
