// Dependencies
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core/';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';

// Icons
import { Menu, ArrowBack } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '10vh'
  },
  button: {
    marginRight: theme.spacing(2)
  },
  rightSideContent: {
    position: 'absolute',
    right: '16px'
  }
}));

const NavBar = basePath => {
  // hooks
  const classes = useStyles();
  const { goBack, location } = useHistory();
  const { pathname } = location;

  // state
  const [originalPath, setPath] = useState('/');

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {originalPath !== pathname && (
            <IconButton
              edge='start'
              className={classes.button}
              color='inherit'
              aria-label='back'
              onClick={goBack}
            >
              <ArrowBack />
            </IconButton>
          )}
          <div className={classes.rightSideContent}>
            <IconButton
              edge='start'
              className={classes.button}
              color='inherit'
              aria-label='menu'
            >
              <Menu />
            </IconButton>
            <Button color='inherit'>
              <Typography variant='h6' className={classes.title}>
                <FormattedMessage id='navbar.login' defaultMessage='Login' />
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
