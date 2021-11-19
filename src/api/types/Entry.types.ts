import { User } from './User.types';

export type UserVote = -1 | 1 | null;

export type Entry = {
  resource_url: string;
  title: string;
  description: string;
  id: number;
  url?: string;
  user_vote: UserVote;
  thumbnail?: string | null;
  score: number;
  tags?: string[];
  user: User;
  created_at?: string;
};
