import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: 'Albert Sans',
    heading: 'Albert Sans',
    mono: 'Albert Sans',
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'purple.300',
      },
    },
  },
});
