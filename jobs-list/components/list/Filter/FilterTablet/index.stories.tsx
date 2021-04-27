import React from 'react';
import FilterTablet from '.';

export default {
  title: 'Components/List/Filter/FilterTablet',
  component: FilterTablet,
  parameters: {
    docs: {
      description: {
        component: 'A FilterTablet component',
      },
    },
  },
};
export const primary = () => {
  return <FilterTablet filterText={'Frontend'} dispatch={() => {}} />;
};
