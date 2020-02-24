import React from 'react';
import EventItem from '../components/UI/EventItem.js';
import { Paper, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles(theme => ({
  root: {
    height: '40vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: { marginTop: '1rem', textAlign: 'center' },
  schedule: {
    width: '40vw',
    minWidth: '350px',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '2rem',
    marginTop: '85rem'
  }
}));

const Events = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.schedule} elevation={5}>
        <Typography
          className={classes.title}
          variant='h2'
          color='secondary'
          gutterBottom
        >
          UQJX Events
        </Typography>
        <EventItem
          date={{
            month: 'Feb',
            day: '20th'
          }}
          type='Market Day'
          content='People who are interested in UQJX can come sign up'
        />
        <EventItem
          date={{
            month: 'Mar',
            day: '14th'
          }}
          type='BBQ'
          content='This is the welcome BBQ for all UQJX member. Come enjoy the food and drinks'
        />
        <EventItem
          date={{
            month: 'Mar',
            day: '20th'
          }}
          type='Dinner'
          content='A UQJX dinner night'
        />
        <EventItem
          date={{
            month: 'Apr',
            day: '3trd'
          }}
          type='Dinner #2'
          content='A UQJX dinner night'
        />
        <EventItem
          date={{
            month: 'May',
            day: '1st'
          }}
          type='Dinner #3'
          content='A UQJX dinner night'
        />
        <EventItem
          date={{
            month: 'Aug',
            day: '7th'
          }}
          type='Dinner #4'
          content='A UQJX dinner night'
        />
        <EventItem
          date={{
            month: 'Aug',
            day: '15th'
          }}
          type='BBQ'
          content='This is the welcome BBQ for all UQJX member. Come enjoy the food and drinks'
        />
        <EventItem
          date={{
            month: 'Aug',
            day: '21th'
          }}
          type='Dinner #5'
          content='A UQJX dinner night'
        />
        <EventItem
          date={{
            month: 'Aug',
            day: '21th'
          }}
          type='Dinner #6'
          content='A UQJX dinner night'
        />
      </Paper>
    </div>
  );
};

export default Events;
