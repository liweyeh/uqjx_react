import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container, Typography } from '@material-ui/core';

const themeInstance = createMuiTheme({
  palette: {
    background: {
      default: '#ab0f03'
    },
    primary: {
      main: '#ab0f03'
    }
  }
});

const Theming = props => {
  return (
    <ThemeProvider theme={themeInstance}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default Theming;
