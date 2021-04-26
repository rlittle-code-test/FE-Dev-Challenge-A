import React from 'react';
import { stitches } from '../../../config/stitches.config';

const StyledTablet = stitches.styled('button', {
  background: '$bluegray200',
  border: 'none',
  borderRadius: '0.2rem',
  color: '$blue400',
  fontSize: '15px',
  fontWeight: 700,
  outline: 'none',
  padding: '0.4rem',
  '&:hover': {
    background: '$blue400',
    color: 'white',
  },
});

export type TabletProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function Tablet(props: React.PropsWithChildren<TabletProps>) {
  return <StyledTablet onClick={props.onClick}>{props.children}</StyledTablet>;
}

export default Tablet;
