import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

const themeInstance = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
};

const Theming = props => {
  return <ThemeProvider theme={themeInstance}>{props.children}</ThemeProvider>;
};

export default Theming;
