import { Box, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { FunctionComponent } from 'react';

export const FancyProvider: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={createMuiTheme({})}>
      <Box
      // sx={{
      //   width: '100%',
      //   height: '100%',
      //   background: 'gray',
      // }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};
