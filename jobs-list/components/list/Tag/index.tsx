import React, { PropsWithChildren } from 'react';
import { stitches } from '../../../config/stitches.config';

const StyledTag = stitches.styled('span', {
  background: '$gray1000',
  borderRadius: '1.2rem',
  color: 'white',
  fontSize: '10px',
  paddingBlockEnd: '0.3rem',
  paddingBlockStart: '0.3rem',
  paddingInlineEnd: '0.6rem',
  paddingInlineStart: '0.6rem',
  textTransform: 'uppercase',
  variants: {
    variant: {
      gray: {
        background: '$gray1000',
      },
      cyan: {
        background: '$blue400',
      },
    },
  },
  defaultVariants: {
    variant: 'gray',
  },
});

export type TagProps = {
  variant?: 'cyan' | 'gray';
};

export function Tag(props: PropsWithChildren<TagProps>) {
  return <StyledTag variant={props.variant}>{props.children}</StyledTag>;
}

export default Tag;
