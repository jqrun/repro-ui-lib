import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

export const FancyProvider: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={createMuiTheme({})}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          background: 'gray',
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};
