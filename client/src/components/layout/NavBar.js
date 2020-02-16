// Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core/';
import { FormattedMessage } from 'react-intl';

// Icons
import { Menu, ArrowBack } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    marginRight: theme.spacing(2)
  },
  rightSideContent: {
    position: 'absolute',
    right: '16px'
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {false && (
            <IconButton
              edge='start'
              className={classes.button}
              color='inherit'
              aria-label='back'
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
