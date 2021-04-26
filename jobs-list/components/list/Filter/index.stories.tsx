import React from 'react';
import Filter from '.';

export default {
  title: 'Components/List/Filter',
  component: Filter,
  parameters: {
    docs: {
      description: {
        component: 'A Filter component',
      },
    },
  },
};
export const primary = () => {
  const filters = ['React', 'CSS'];
  return <Filter dispatch={() => {}} filterTags={filters} />;
};
