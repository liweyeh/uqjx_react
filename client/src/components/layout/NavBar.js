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
import { useHistory } from 'react-router-dom';

// Icons
import { ArrowBack, ExpandMore } from '@material-ui/icons';
import japanFlag from '../../assets/img/Japan_Flag.png';

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

  const originalPath = '/';

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
              <img src={japanFlag} alt='flag' />
              <ExpandMore />
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
