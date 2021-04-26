import React, { PropsWithChildren } from 'react';
import { stitches } from '../../../../config/stitches.config';

export const StyledJobCompany = stitches.styled('span', {
  color: '$blue400',
  fontSize: '0.8rem',
  fontWeight: 700,
});

export function JobCompany(props: PropsWithChildren<{}>) {
  return <StyledJobCompany>{props.children}</StyledJobCompany>;
}

export default JobCompany;
