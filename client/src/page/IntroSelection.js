import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

// Images
import viewImage from '../assets/img/Japan_View.jpg';
import foodImage from '../assets/img/Japan_Food.jpg';
import eventImage from '../assets/img/Japan_Event.jpg';

// Links
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: '80vh'
  },
  card: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  media: {
    width: '100%',
    height: 'auto'
  }
}));

const IntroSelection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify='space-evenly'
      alignItems='center'
      className={classes.root}
    >
      <Grid item xs={10} sm={3}>
        <Card className={classes.card}>
          <CardActionArea className={classes.card}>
            <CardMedia className={classes.media}>
              <img src={viewImage} className={classes.media} alt='view' />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                <FormattedMessage id='intro.what' defaultMessage='UQJX' />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size='large'
              color='primary'
              variant='contained'
              component={Link}
              to='intro/about'
            >
              <FormattedMessage id='intro.learn' defaultMessage='Learn More' />
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={10} sm={3}>
        <Card className={classes.card}>
          <CardActionArea className={classes.card}>
            <CardMedia className={classes.media}>
              <img src={eventImage} className={classes.media} alt='event' />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                <FormattedMessage id='intro.events' defaultMessage='UQJX' />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size='large'
              color='primary'
              variant='contained'
              component={Link}
              to='intro/event'
            >
              <FormattedMessage id='intro.learn' defaultMessage='Learn More' />
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={10} sm={3}>
        <Card className={classes.card}>
          <CardActionArea className={classes.card}>
            <CardMedia className={classes.media}>
              <img src={foodImage} className={classes.media} alt='food' />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                <FormattedMessage id='intro.sponsors' defaultMessage='UQJX' />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size='large'
              color='primary'
              variant='contained'
              component={Link}
              to='intro/sponsor'
            >
              <FormattedMessage id='intro.learn' defaultMessage='Learn More' />
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default IntroSelection;
