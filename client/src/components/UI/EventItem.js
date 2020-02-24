import React from 'react';
import { Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '35vw',
    minWidth: '250px',
    borderBottomStyle: 'ridge',
    borderWidth: '1px'
  },
  leftSection: {
    borderRightStyle: 'ridge',
    minWidth: '35%',
    borderWidth: '1px'
  },
  leftTopSection: {
    height: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  leftBottomSection: {
    borderTopStyle: 'ridge',
    height: '5vh',
    borderWidth: '1px',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '2rem',
    paddingBottom: '2rem'
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing()
  }
}));

const EventItem = ({ date, type, content }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.leftSection}>
        <div className={classes.leftTopSection}>
          <Typography variant='h4' color='secondary'>
            {date.month}
          </Typography>
          <Typography variant='h5' color='secondary'>
            {date.day}
          </Typography>
        </div>
        <div className={classes.leftBottomSection}>
          <Typography variant='h6' color='secondary'>
            {type}
          </Typography>
        </div>
      </div>
      <div className={classes.rightSection}>
        <Typography variant='h6' color='secondary'>
          {content}
        </Typography>
      </div>
    </div>
  );
};

export default EventItem;
