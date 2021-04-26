import { JobListReducerAction } from 'hooks/use-list-state';

export type JobPosting = {
  company: string;
  contract: string;
  featured: boolean;
  id: number;
  languages: string[];
  level: string;
  location: string;
  /** Company logo filepath */
  logo: string;
  new: boolean;
  position: string;
  postedAt: string;
  role: string;
  tools: string[];
};

export type JobPostings = JobPosting[];

export type JobListComponentPropsWithDispatch = {
  dispatch: React.Dispatch<JobListReducerAction>;
};
