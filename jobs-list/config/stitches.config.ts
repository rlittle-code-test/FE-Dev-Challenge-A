import { createCss } from '@stitches/react';

export const stitches = createCss({
  media: {
    bp1: '(max-width: 375px)',
    bp2: '(max-width: 650px)',
    bp3: '(max-width: 900px)',
    bp4: '(max-width: 1440px)',
  },
  prefix: '',
  theme: {
    colors: {
      bluegray100: '#effafa',
      bluegray200: '#eef6f6',
      bluegray300: '#7b8e8e',
      bluegray1000: '#2c3a3a',
      blue400: '#5ba4a4',
      gray1000: '#2a3a39',
    },
  },
  utils: {
    paddingX: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (config) => (value) => ({
      paddingBottom: value,
      paddingTop: value,
    }),
    marginX: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (config) => (value) => ({
      marginBottom: value,
      marginTop: value,
    }),
  },
});
