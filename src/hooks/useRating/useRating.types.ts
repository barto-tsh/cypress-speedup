import { Entry } from 'api/types/Entry.types';

export type ContextType = {
  previousData: Entry[];
};

export enum RateType {
  UP,
  DOWN,
}
