// Dependencies
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import logo from '../assets/img/UQJX_Logo_White.png';

// UI
import WelcomeMenu from '../components/layout/HomeWelcomeMenu';

const useStyles = makeStyles((theme) => ({
  'root': {
    height: '90vh',
  },
  'content': {
    height: '90vh',
    width: '99vw',
  },
  'welcomeMenu': {
    position: 'relative',
    animationName: '$fadeInLeft',
    animationDuration: '2s',
  },
  'logo': {
    height: '40vw',
    width: '40vw',
    position: 'relative',
    borderRadius: '400px',
    animationName: '$fadeInRight',
    animationDuration: '2s',
  },
  '@keyframes fadeInLeft': {
    from: { opacity: 0, right: '30vw' },
    to: { opacity: 1, right: '0vw' },
  },
  '@keyframes fadeInRight': {
    from: { opacity: 0, left: '30vw' },
    to: { opacity: 1, left: '0vw' },
  },
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
          <Grid item className={classes.welcomeMenu}>
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
