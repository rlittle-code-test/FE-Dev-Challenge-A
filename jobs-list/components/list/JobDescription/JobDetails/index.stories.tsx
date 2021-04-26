import React from 'react';
import JobDetails from '.';

export default {
  title: 'Components/List/JobDescription/JobDetails',
  component: JobDetails,
  parameters: {
    docs: {
      description: {
        component: 'A JobDetails component',
      },
    },
  },
};
export const primary = () => {
  return (
    <JobDetails role={'Full Time'} location={'Remote'} postedAt={'1d ago'} />
  );
};
