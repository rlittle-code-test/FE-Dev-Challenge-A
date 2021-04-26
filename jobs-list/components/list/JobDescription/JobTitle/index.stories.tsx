import React from 'react';
import JobTitle from '.';
export default {
  title: 'Components/List/JobDescription/JobTitle',
  component: JobTitle,
  parameters: {
    docs: {
      description: {
        component: 'A job title component',
      },
    },
  },
};
export const primary = () => {
  return <JobTitle>Senior Frontend Developer</JobTitle>;
};
