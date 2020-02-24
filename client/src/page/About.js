import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Paper, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import groupImage from '../assets/img/UQJX_Group.png';

const useStyles = makeStyles(theme => ({
  root: {
    height: '40vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  form: {
    width: '40vw',
    minWidth: '300px',
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
    padding: theme.spacing(),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  formItem: {
    margin: theme.spacing(2),
    marginBottom: theme.spacing(3)
  },
  image: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    objectFIt: 'contain',
    width: '90%'
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Paper className={classes.form} elevation={5}>
          <Typography
            color='secondary'
            variant='h4'
            className={classes.formItem}
            gutterBottom
          >
            <FormattedMessage id='about.title' defaultMessage='Signup' />
          </Typography>
          <Typography
            color='secondary'
            variant='body1'
            className={classes.formItem}
          >
            <FormattedMessage id='about.content' defaultMessage='Signup' />
          </Typography>
          <Typography
            color='secondary'
            variant='body1'
            className={classes.formItem}
          >
            <FormattedMessage id='about.content2' defaultMessage='Signup' />
          </Typography>
          <Typography
            color='secondary'
            variant='body1'
            className={classes.formItem}
          >
            <FormattedMessage id='about.content3' defaultMessage='Signup' />
          </Typography>
          <img src={groupImage} alt='UQJX Group' className={classes.image} />
        </Paper>
      </div>
    </div>
  );
};

export default About;
