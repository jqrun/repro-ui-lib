/** @jsx jsx */
import { jsx } from '@emotion/react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { FunctionComponent } from 'react';

export const FancyProvider: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={createMuiTheme({})}>
      <div
        css={{
          width: '100%',
          height: '100%',
          background: 'gray',
        }}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};
