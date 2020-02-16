// Dependencies
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Grid, Typography, ButtonGroup } from '@material-ui/core';
import logo from '../assets/img/UQJX_Logo_White.png';
import { FormattedMessage } from 'react-intl';
import { PersonAdd, LocalLibrary } from '@material-ui/icons';

// UI
import WelcomeMenu from '../components/layout/HomeWelcomeMenu';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100vw'
  },
  logo: {
    height: '40vw',
    width: '40vw',
    borderRadius: '400px'
  },
  welcomeMessage: {
    marginBottom: '3rem'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  button: {
    minWidth: '13vw',
    padding: '1rem'
  },
  buttonItem: {
    marginRight: '0.6rem'
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box>
        <Grid
          container
          className={classes.root}
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
