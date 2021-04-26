import React, { PropsWithChildren } from 'react';
import { stitches } from '../../../config/stitches.config';
import JobDetails, { JobDetailsProps } from './JobDetails';
import JobTitle from './JobTitle';
import JobCompany from './JobCompany';
import Tag from '../Tag';

export const StyledJobDescription = stitches.styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '& .JobDescription--company-area span': {
    marginX: '0.2rem',
  },
});

export type JobDescriptionProps = {
  company: string;
  featured?: boolean;
  new?: boolean;
  position: string;
} & JobDetailsProps;

export function JobDescription(props: PropsWithChildren<JobDescriptionProps>) {
  return (
    <StyledJobDescription>
      <div className="JobDescription--company-area">
        <JobCompany>{props.company}</JobCompany>
        {props.new && <Tag variant="cyan">NEW!</Tag>}
        {props.featured && <Tag>FEATURED</Tag>}
      </div>
      <JobTitle>{props.position}</JobTitle>
      <JobDetails
        postedAt={props.postedAt}
        role={props.role}
        location={props.location}
      />
    </StyledJobDescription>
  );
}

export default JobDescription;
