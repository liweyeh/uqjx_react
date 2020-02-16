// Dependencies
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import logo from '../assets/img/UQJX_Logo_White.png';

// UI
import WelcomeMenu from '../components/layout/HomeWelcomeMenu';
import NavBar from '../components/layout/NavBar';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100vw'
  },
  content: {
    height: '90vh',
    width: '100vw'
  },
  navBar: {
    height: '10vh',
    width: 'inherited'
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
        <NavBar className={classes.navBar} />
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
