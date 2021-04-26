import React, { PropsWithChildren } from 'react';
import { stitches } from '../../../../config/stitches.config';

const StyledJobTitle = stitches.styled('span', {
  color: '$gray1000',
  display: 'block',
  fontSize: '1.3rem',
  fontWeight: 700,
  marginY: '0.75rem',
  '&:hover': {
    color: '$blue400',
  },
  '&:focus': {
    color: '$blue400',
  },
});

export function JobTitle(props: PropsWithChildren<{}>) {
  return <StyledJobTitle>{props.children}</StyledJobTitle>;
}

export default JobTitle;
