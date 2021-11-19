export type TagResult = {
  tag: string;
  num_res: number;
};

export enum TagsOrdering {
  TRENDING_ASC = 'num_res',
  TRENDING_DESC = '-num_res',
  NAME_ASC = 'tag',
  NAME_DESC = '-tag',
}

export type GetTagsArguments = {
  page?: number;
  per_page?: number;
  search?: string;
  ordering?: TagsOrdering;
};

export type GetTagsResponse = {
  results: TagResult[];
  next: string | null;
  count?: number;
};
