import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Button,
  MenuItem,
  TextField
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles(theme => ({
  root: {
    height: '40vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  form: {
    width: '40vw',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '5rem'
  },
  formItem: {
    margin: theme.spacing(2),
    width: '80%'
  },
  textInput: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.secondary.main
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.main
      }
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.secondary.main
    },
    'margin': theme.spacing(2),
    'width': '80%'
  },
  submit: {
    marginBottom: theme.spacing(2),
    width: '40%'
  }
}));

const Signup = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nationality, setNationality] = useState('');
  const [studentType, setStudentType] = useState('');
  const [japanese, setJapanese] = useState('');

  //Todo: add debounce if have time
  const onSubmit = () => {
    const user = {
      firstName,
      lastName,
      email,
      phone,
      nationality,
      studentType,
      japanese
    };
    console.log(user);
  };
  return (
    <div className={classes.root}>
      <div>
        <Paper className={classes.form} elevation={5}>
          <Typography
            color='secondary'
            variant='h4'
            className={classes.formItem}
          >
            <FormattedMessage id='signup.title' defaultMessage='Signup' />
          </Typography>
          <Typography
            color='secondary'
            variant='h5'
            className={classes.formItem}
          >
            <FormattedMessage id='signup.instruction' defaultMessage='Signup' />
          </Typography>
          <TextField
            label='First Name'
            variant='outlined'
            color='secondary'
            className={classes.textInput}
            value={firstName}
            autoComplete='no'
            autoFocus
            onChange={e => setFirstName(e.target.value)}
            required
          />

          <TextField
            label='Last Name'
            variant='outlined'
            color='secondary'
            autoComplete='no'
            className={classes.textInput}
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />

          <TextField
            label='Phone'
            variant='outlined'
            color='secondary'
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className={classes.textInput}
            autoComplete='no'
            required
          />
          <TextField
            label='Email'
            variant='outlined'
            color='secondary'
            className={classes.textInput}
            value={email}
            autoComplete='no'
            onChange={e => setEmail(e.target.value)}
            required
          />
          <TextField
            label='Nationality'
            variant='outlined'
            color='secondary'
            value={nationality}
            onChange={e => setNationality(e.target.value)}
            className={classes.textInput}
            autoComplete='no'
          />
          <TextField
            label='Student Type'
            variant='outlined'
            color='secondary'
            className={classes.textInput}
            value={studentType}
            onChange={e => setStudentType(e.target.value)}
            select
            autoComplete='no'
          >
            <MenuItem value={'international'}>
              <FormattedMessage id='signup.international' />
            </MenuItem>
            <MenuItem value={'domestic'}>
              <FormattedMessage id='signup.domestic' />
            </MenuItem>
            <MenuItem value={'other'}>
              <FormattedMessage id='signup.other' />
            </MenuItem>
          </TextField>
          <TextField
            id='fluency'
            label='Japanese Fluency'
            variant='outlined'
            color='secondary'
            className={classes.textInput}
            value={japanese}
            onChange={e => setJapanese(e.target.value)}
            select
            autoComplete='no'
          >
            <MenuItem value={'beginner'}>
              <FormattedMessage id='signup.beginner' />
            </MenuItem>
            <MenuItem value={'intermediate'}>
              <FormattedMessage id='signup.intermediate' />
            </MenuItem>
            <MenuItem value={'advanced'}>
              <FormattedMessage id='signup.advanced' />
            </MenuItem>
            <MenuItem value={'native'}>
              <FormattedMessage id='signup.native' />
            </MenuItem>
          </TextField>
          <Typography
            color='secondary'
            variant='h5'
            className={classes.formItem}
          >
            <FormattedMessage id='signup.reminder' defaultMessage='Signup' />
          </Typography>
          <Button
            className={classes.submit}
            color='primary'
            variant='contained'
            onClick={onSubmit}
          >
            <Typography color='secondary'>
              <FormattedMessage id='signup.register' defaultMessage='Welcome' />
            </Typography>
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default Signup;
