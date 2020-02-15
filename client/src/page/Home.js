import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Grid, Typography, ButtonGroup } from '@material-ui/core';
import logo from '../assets/img/UQJX_Logo_White.png';
import { FormattedMessage } from 'react-intl';

import { PersonAdd, LocalLibrary } from '@material-ui/icons';

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
            <Grid container direction='column' justify='space-around'>
              <Typography
                className={classes.welcomeMessage}
                variant='h4'
                color='secondary'
              >
                <FormattedMessage id='home.welcome' defaultMessage='Welcome' />
              </Typography>
              <ButtonGroup
                className={classes.buttonGroup}
                color='primary'
                size='large'
              >
                <Button className={classes.button} variant='contained'>
                  <PersonAdd className={classes.buttonItem} />
                  <Typography color='secondary'>
                    <FormattedMessage id='home.join' defaultMessage='Welcome' />
                  </Typography>
                </Button>
                <Button className={classes.button} variant='contained'>
                  <LocalLibrary className={classes.buttonItem} />
                  <Typography color='secondary'>
                    <FormattedMessage id='home.know' defaultMessage='Welcome' />
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
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
