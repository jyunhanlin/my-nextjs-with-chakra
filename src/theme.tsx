import { extendTheme } from '@chakra-ui/react';

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints: {
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
  },
});

export default theme;
