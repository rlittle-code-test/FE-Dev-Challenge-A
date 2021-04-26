import React from 'react';
import Tag from '.';

export default {
  title: 'Components/List/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'A simple tag component',
      },
    },
  },
};
export const primary = () => {
  return <Tag>Featured</Tag>;
};
export const secondary = () => {
  return <Tag variant="cyan">NEW!</Tag>;
};
