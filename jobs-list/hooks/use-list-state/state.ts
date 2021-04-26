import { JobPostings } from 'types';

export type JobListState = {
  posts: JobPostings;
  filters: string[];
  filteredPostIds: number[];
};
export const InitialState: JobListState = {
  posts: [],
  filters: [],
  filteredPostIds: [],
};
