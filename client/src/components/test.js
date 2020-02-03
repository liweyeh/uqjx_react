import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.background
  }
}));

const Test = () => {
  const classes = useStyles();

  return (
    <button type='button' className={classes.root}>
      Theming
    </button>
  );
};

export default Test;
