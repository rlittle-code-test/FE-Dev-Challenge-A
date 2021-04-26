import React from 'react';
import JobDescription from '.';

export default {
  title: 'Components/List/JobDescription',
  component: JobDescription,
  parameters: {
    docs: {
      description: {
        component: 'A JobDescription component',
      },
    },
  },
};
export const primary = () => {
  return (
    <JobDescription
      company="Loop Studios"
      featured
      location="Remote"
      new
      position="Junior Frontend Developer"
      postedAt="1d ago"
      role="Full Time"
    />
  );
};
