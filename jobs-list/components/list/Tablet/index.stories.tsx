import React from 'react';
import Tablet from '.';

export default {
  title: 'Components/List/Tablet',
  component: Tablet,
  parameters: {
    docs: {
      description: {
        component: 'A simple tablet component',
      },
    },
  },
};
export const primary = () => {
  return <Tablet>Frontend</Tablet>;
};
