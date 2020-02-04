import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.background
  }
}));

const Test = () => {
  const classes = useStyles();

  return <Button color='third'>Primary</Button>;
};

export default Test;
