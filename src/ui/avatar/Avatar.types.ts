import { User } from 'api/types/User.types';

export type AvatarProps = {
  size: number;
  user: User;
  className?: string;
};
