// Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography, ButtonGroup } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { PersonAdd, LocalLibrary } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  welcomeMessage: {
    marginBottom: '3rem'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  button: {
    minWidth: '13vw',
    padding: '1rem',
    textDecoration: 'none'
  },
  buttonItem: {
    marginRight: '0.6rem'
  }
}));

const HomeWelcomeMenu = () => {
  const classes = useStyles();
  return (
    <div>
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
          <Button
            color='primary'
            className={classes.button}
            variant='contained'
            component={Link}
            to='/signup'
          >
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
    </div>
  );
};

export default HomeWelcomeMenu;
