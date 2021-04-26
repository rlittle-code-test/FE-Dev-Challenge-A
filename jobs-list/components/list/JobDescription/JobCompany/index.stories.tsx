import React from 'react';
import JobCompany from '.';

export default {
  title: 'Components/List/JobDescription/JobCompany',
  component: JobCompany,
  parameters: {
    docs: {
      description: {
        component: 'A JobCompany component',
      },
    },
  },
};
export const primary = () => {
  return <JobCompany>Loop Studios</JobCompany>;
};
