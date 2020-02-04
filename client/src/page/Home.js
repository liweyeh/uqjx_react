import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '100px'
  }
}));
const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Button className={classes.root} variant='contained' color='primary'>
        Join
      </Button>
    </Fragment>
  );
};

export default Home;
