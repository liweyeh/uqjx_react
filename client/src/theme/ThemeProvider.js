import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const themeInstance = createMuiTheme({
  palette: {
    primary: red,
    third: red
  },
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
});

const Theming = props => {
  return <ThemeProvider theme={themeInstance}>{props.children}</ThemeProvider>;
};

export default Theming;
