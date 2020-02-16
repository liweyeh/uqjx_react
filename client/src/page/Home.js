// Dependencies
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import logo from '../assets/img/UQJX_Logo_White.png';

// UI
import WelcomeMenu from '../components/layout/HomeWelcomeMenu';

const useStyles = makeStyles(theme => ({
  root: {
    height: '90vh'
  },
  content: {
    height: '90vh',
    width: '100vw'
  },
  logo: {
    height: '40vw',
    width: '40vw',
    borderRadius: '400px'
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.root}>
        <Grid
          className={classes.content}
          container
          spacing={3}
          justify='space-around'
          alignItems='center'
        >
          <Grid item>
            <WelcomeMenu />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={logo} alt='UQJX_Logo' />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Home;
