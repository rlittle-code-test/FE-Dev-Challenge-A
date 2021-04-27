import { JobPostings } from 'types';

export type JobListState = {
  /** Array of post IDs that match the filters in `filters` */
  filteredPostIds: number[];
  /** Array of strings that must match a tool or language of a job */
  filters: string[];
  /** Array of all job posts loaded into state */
  posts: JobPostings;
};
export const InitialState: JobListState = {
  filteredPostIds: [],
  filters: [],
  posts: [],
};
