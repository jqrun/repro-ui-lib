import Button from '@material-ui/core/Button';
import { FunctionComponent } from 'react';

export const FancyButton: FunctionComponent = ({ children }) => {
  // return <Button sx={{ background: 'red' }}>{children}</Button>;
  return <Button>{children}</Button>;
};
