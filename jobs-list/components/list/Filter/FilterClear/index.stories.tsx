import React from 'react';
import FilterClear from '.';

export default {
  title: 'Components/List/Filter/FilterClear',
  component: FilterClear,
  parameters: {
    docs: {
      description: {
        component: 'A FilterClear component',
      },
    },
  },
};
export const primary = () => {
  return <FilterClear></FilterClear>;
};
