import React, { PropsWithChildren, useCallback } from 'react';
import { stitches } from '../../../../config/stitches.config';
// Hooks
import { ListStateActionCreators } from '../../../../hooks/use-list-state';
// Types
import { JobListComponentPropsWithDispatch } from 'types';

export const StyledFilterClear = stitches.styled('button', {
  background: 'transparent',
  border: 'none',
  borderRadius: '0.2rem',
  color: '$blue400',
  fontSize: '15px',
  fontWeight: 700,
  outline: 'none',
  '&:focus': {
    boxShadow: '0 0 0 2px #5ba4a4',
  },
  '&:hover': {
    textDecoration: 'underline',
  },
});

export function FilterClear(
  props: PropsWithChildren<JobListComponentPropsWithDispatch>
) {
  const onClear = useCallback(
    () => props.dispatch(ListStateActionCreators.createClearFiltersAction()),
    [props.dispatch]
  );

  return <StyledFilterClear onClick={onClear}>Clear</StyledFilterClear>;
}

export default FilterClear;
