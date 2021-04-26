import React, { PropsWithChildren } from 'react';
import { stitches } from '../../../../config/stitches.config';

/** Time since posting, type of position, or location */
export const StyledJobDetail = stitches.styled('span', {
  color: '$bluegray300',
  display: 'block',
});

/** Short list of details */
export const StyledJobDetails = stitches.styled('span', {
  display: 'flex',
  flexDirection: 'row',
  '& span + span:before': {
    content: '•',
    paddingX: '0.6rem',
  },
});

export type JobDetailsProps = {
  /** Postion location – USA, internationl, remote */
  location: string;
  /** Approximate time since posting */
  postedAt: string;
  /** Postion role */
  role: string;
};

export function JobDetails(props: PropsWithChildren<JobDetailsProps>) {
  return (
    <StyledJobDetails>
      <StyledJobDetail>{props.postedAt}</StyledJobDetail>
      <StyledJobDetail>{props.role}</StyledJobDetail>
      <StyledJobDetail>{props.location}</StyledJobDetail>
    </StyledJobDetails>
  );
}

export default JobDetails;
