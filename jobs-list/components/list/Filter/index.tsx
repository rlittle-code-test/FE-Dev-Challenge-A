import React, { PropsWithChildren } from 'react';
import { stitches } from '../../../config/stitches.config';
import FilterClear from './FilterClear';
import FilterTablet from './FilterTablet';
import { JobListComponentPropsWithDispatch } from 'types';

export const StyledFilter = stitches.styled('section', {
  alignItems: 'center',
  background: 'white',
  borderRadius: '0.4rem',
  boxShadow: '0px 20px 50px -30px #7b8e8e',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '2rem',
  width: '75%',
  '& .Filter--tablets': {
    '& > div': {
      marginX: '0.5rem',
    },
  },
  variants: {
    layout: {
      desktop: {},
      mobile: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        '& .Filter--tablets': {
          flexDirection: 'row',
          flexWrap: 'wrap',
          '& > div': {
            marginX: '0.75rem',
            marginY: '0.5rem',
          },
        },
      },
    },
  },
});

export type FilterProps = JobListComponentPropsWithDispatch & {
  filterTags: string[];
};

/**
 * Wrap up selected filters and filter clear button
 * @param {FilterProps} props
 */
export function Filter(props: PropsWithChildren<FilterProps>) {
  return (
    <>
      {props.filterTags?.length > 0 && (
        <StyledFilter
          layout={{
            '@bp3': 'mobile',
            '@initial': 'desktop',
          }}
        >
          <div className="Filter--tablets">
            {props.filterTags.map((f) => (
              <FilterTablet key={f} filterText={f} dispatch={props.dispatch} />
            ))}
          </div>
          <FilterClear dispatch={props.dispatch} />
        </StyledFilter>
      )}
    </>
  );
}

export default Filter;
