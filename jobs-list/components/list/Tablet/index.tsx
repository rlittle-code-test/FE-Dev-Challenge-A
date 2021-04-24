import React from 'react';
import { stitches } from '../../../config/stitches.config';

const StyledTablet = stitches.styled('span', {
  background: '$bluegray200',
  borderRadius: '0.2rem',
  color: '$blue400',
  fontSize: '15px',
  fontWeight: 700,
  padding: '0.4rem',
  '&:hover': {
    background: '$blue400',
    color: 'white',
  },
});

export function Tablet(props: React.PropsWithChildren<{}>) {
  return <StyledTablet>{props.children}</StyledTablet>;
}

export default Tablet;
