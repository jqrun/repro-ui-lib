/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Button } from '@material-ui/core';
import { FunctionComponent } from 'react';

export const FancyButton: FunctionComponent = ({ children }) => {
  return <Button css={{ background: 'red' }}>{children}</Button>;
};
