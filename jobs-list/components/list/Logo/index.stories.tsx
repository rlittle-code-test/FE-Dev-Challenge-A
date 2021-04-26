import React from 'react';
import Logo from '.';
import PhotoSnap from '../../../public/images/photosnap.svg';
export default {
  title: 'Components/List/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: 'A circular logo component',
      },
    },
  },
};
export const primary = () => {
  return <Logo src={PhotoSnap}></Logo>;
};
