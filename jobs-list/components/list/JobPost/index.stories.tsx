import React from 'react';
import JobPost from '.';
import LoopStudios from '../../../public/images/loop-studios.svg';
import { JobPostProps } from '.';
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

const Template = (args) => <JobPost {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  company: 'Loop Studios',
  languages: ['JavaScript'],
  location: 'Remote',
  logo: LoopStudios,
  new: true,
  position: 'Junior Frontend Developer',
  postedAt: '1d ago',
  role: 'Full Time',
  tools: ['React', 'Sass', 'Fullstack', 'Midweight'],
};
