import React from 'react';
import JobPost from '.';
import LoopStudios from '../../../public/images/loop-studios.svg';

export default {
  title: 'Components/List/JobPost',
  component: JobPost,
  parameters: {
    docs: {
      description: {
        component: 'A JobPost component',
      },
    },
  },
};

export const Primary = () => (
  <JobPost
    company={'Loop Studios'}
    dispatch={() => {}}
    languages={['JavaScript']}
    location={'Remote'}
    logo={LoopStudios}
    new
    position={'Junior Frontend Developer'}
    postedAt={'1d ago'}
    role={'Full Time'}
    tools={['React', 'Sass', 'Fullstack', 'Midweight']}
  />
);
