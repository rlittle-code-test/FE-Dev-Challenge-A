import React, { PropsWithChildren, useCallback } from 'react';
import { stitches } from '../../../config/stitches.config';

import Logo from '../Logo';
import JobDescription, { JobDescriptionProps } from '../JobDescription';
import Tablet from '../Tablet';
import { ListStateActionCreators } from 'hooks/use-list-state';
import { JobListComponentPropsWithDispatch } from 'types';

export const StyledJobPost = stitches.styled('section', {
  background: 'white',
  borderRadius: '0.4rem',
  boxShadow: '0px 20px 50px -30px #7b8e8e',
  display: 'flex',
  padding: '2rem',
  width: '75%',
  '& .JobPost--tablets': {
    display: 'flex',
    flexWrap: 'wrap',
    '& button': {
      margin: '0.5rem',
    },
  },
  '& .JobPost--rule': {
    background: '$bluegray300',
    height: '1.5px',
    marginY: '0.3rem',
    width: '100%',
  },
  variants: {
    layout: {
      desktop: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',

        '& img': {
          marginX: '1rem',
        },
        '& .JobPost--tablets': {
          alignSelf: 'center',
          justifyContent: 'flex-end',
          flexDirection: 'row',
          marginInlineStart: 'auto',
        },
        '& .JobPost--rule': {
          display: 'none',
        },
      },
      mobile: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: '95%',
        position: 'relative',
        img: {
          height: '60px',
          width: '60px',
          position: 'absolute',
          top: '-30px',
          left: '2rem',
        },
        'div, span': {
          marginY: '0.5rem',
        },
        '& .JobPost--rule': {
          display: 'block',
        },
        '& .JobPost--tablets': {
          justifyContent: 'flex-start',
        },
      },
    },
    color: {
      featured: {
        borderLeft: '0.4rem solid $blue400',
        paddingInlineStart: '1.6rem',
      },
      regular: {
        border: 'none',
      },
    },
  },
  defaultVariants: {
    color: 'regular',
  },
});

export type JobPostProps = JobDescriptionProps &
  JobListComponentPropsWithDispatch & {
    languages: string[];
    logo: string;
    tools: string[];
  };

export function JobPost(props: PropsWithChildren<JobPostProps>) {
  const tabletOnClick = (filter: string) =>
    useCallback(
      () =>
        props.dispatch(ListStateActionCreators.createAddFilterAction(filter)),
      [props.dispatch, filter]
    );

  return (
    <StyledJobPost
      color={props.featured ? 'featured' : 'regular'}
      layout={{
        '@bp3': 'mobile',
        '@initial': 'desktop',
      }}
    >
      <Logo src={props.logo} />
      <JobDescription {...props} />
      <div className="JobPost--rule" />
      <div className="JobPost--tablets">
        {[...props.languages, ...props.tools].map((t: string) => (
          <Tablet key={t} onClick={tabletOnClick(t)}>
            {t}
          </Tablet>
        ))}
      </div>
    </StyledJobPost>
  );
}

export default JobPost;
