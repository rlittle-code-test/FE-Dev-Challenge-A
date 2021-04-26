import React, { PropsWithChildren, useCallback } from 'react';
import { stitches } from '../../../../config/stitches.config';
import RemoveIcon from '../../../../public/images/icon-remove.svg';
import { ListStateActionCreators } from '../../../../hooks/use-list-state';
import { JobListComponentPropsWithDispatch } from 'types';

export const StyledFilterTablet = stitches.styled('div', {
  display: 'inline-flex',
  flexDirection: 'row',
  height: '2rem',
  '& label': {
    alignItems: 'center',
    background: '$bluegray200',
    borderRadius: '0.2rem 0 0 0.2rem',
    color: '$blue400',
    display: 'inline-flex',
    height: '100%',
    fontSize: '15px',
    fontWeight: 700,
    paddingX: '0.5rem',
    textAlign: 'center',
  },
  '& button': {
    alignItems: 'center',
    background: '$blue400',
    border: 'none',
    color: 'white',
    display: 'inline-flex',
    height: '100%',
    borderRadius: '0 0.2rem 0.2rem 0',
    padding: '0.5rem',
    '&:hover': {
      background: '$gray1000',
    },
  },
});

export type FilterLabelProps = JobListComponentPropsWithDispatch & {
  filterText: string;
};

export function FilterTablet(props: PropsWithChildren<FilterLabelProps>) {
  const onRemove = useCallback(
    () =>
      props.dispatch(
        ListStateActionCreators.createRemoveFilterAction(props.filterText)
      ),
    [props.dispatch, props.filterText]
  );

  return (
    <StyledFilterTablet>
      <label>{props.filterText}</label>
      <button>
        <RemoveIcon onClick={onRemove} />
      </button>
    </StyledFilterTablet>
  );
}

export default FilterTablet;
