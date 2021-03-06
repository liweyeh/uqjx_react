import React, { useState, useContext } from 'react';
import {
  Paper,
  Typography,
  Button,
  MenuItem,
  TextField,
  Modal,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import AlertContext from '../context/alert/alertContext';
import Alert from '../components/layout/Alert';

const useStyles = makeStyles((theme) => ({
  'root': {
    height: '40vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  'form': {
    width: '40vw',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '5rem',
    position: 'relative',
    animationName: '$fadeInLeft',
    animationDuration: '2s',
  },
  'formItem': {
    margin: theme.spacing(2),
    width: '80%',
  },
  'modal': {
    width: '20vw',
    minWidth: '400px',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '5rem',
  },
  'modalRoot': {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'modalItem': {
    textAlign: 'center',
  },
  'modalBottom': {
    marginTop: theme.spacing(),
  },
  'textInput': {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.secondary.main,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.main,
      },
    },
    '& .MuiInputBase-input': {
      color: theme.palette.secondary.main,
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.secondary.main,
    },
    'margin': theme.spacing(2),
    'width': '80%',
  },
  'submit': {
    marginBottom: theme.spacing(2),
    width: '40%',
  },
  '@keyframes fadeInLeft': {
    from: { opacity: 0, right: '30vw' },
    to: { opacity: 1, right: '0vw' },
  },
}));

const Signup = () => {
  // state
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nationality, setNationality] = useState('');
  const [studentType, setStudentType] = useState('');
  const [japanese, setJapanese] = useState('');
  const [open, setOpen] = useState('');

  // context
  const alertContext = useContext(AlertContext);
  const { setAlert, clearAlert } = alertContext;

  //Todo: add debounce if have time
  const onSubmit = () => {
    const user = {
      firstName,
      lastName,
      studentNumber,
      email,
      phone,
      nationality,
      studentType,
      japanese,
    };
    registerMember(user);
  };

  const registerMember = (formData) => {
    let status = null;
    let errorArr = [];
    fetch('/api/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        status = res.status;
        return res.json();
      })
      .then((data) => {
        if (status >= 200 && status <= 300) {
          setOpen(true);
        } else {
          if (Array.isArray(data.errors)) {
            for (let error of data.errors) {
              errorArr.push(error.msg);
            }
            throw new Error();
          } else {
            errorArr.push(data.msg);
            throw new Error();
          }
        }
      })
      .catch((error) => {
        setAlert(errorArr.length > 0 ? errorArr : error, 'danger');
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
  };

  const handleClose = () => {
    setOpen(false);
    setFirstName('');
    setLastName('');
    setStudentNumber('');
    setEmail('');
    setPhone('');
    setNationality('');
    setStudentType('');
    setJapanese('');
    clearAlert();
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
          <Alert />
          <TextField
            label='First Name'
            variant='outlined'
            color='secondary'
            className={classes.textInput}
            value={firstName}
            autoComplete='no'
            autoFocus
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField
            label='Last Name'
            variant='outlined'
            color='secondary'
            autoComplete='no'
            className={classes.textInput}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <TextField
            label='Stundent Number'
            variant='outlined'
            color='secondary'
            className={classes.textInput}
            value={studentNumber}
            autoComplete='no'
            onChange={(e) => setStudentNumber(e.target.value)}
            required
          />
          <TextField
            label='Phone'
            variant='outlined'
            color='secondary'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label='Nationality'
            variant='outlined'
            color='secondary'
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            className={classes.textInput}
            autoComplete='no'
          />
          <TextField
            label='Student Type'
            variant='outlined'
            color='secondary'
            className={classes.textInput}
            value={studentType}
            onChange={(e) => setStudentType(e.target.value)}
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
            onChange={(e) => setJapanese(e.target.value)}
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          className={classes.modalRoot}
        >
          <Paper className={classes.modal} elevation={5}>
            <Typography
              color='secondary'
              className={classes.modalItem}
            >{`Dear ${lastName},`}</Typography>
            <Typography color='secondary' className={classes.modalItem}>
              <FormattedMessage
                id='signup.success'
                defaultMessage='You have succesfully registered to UQJX '
              />
            </Typography>

            <Typography color='secondary' className={classes.modalItem}>
              <FormattedMessage id='signup.success2' defaultMessage='' />
            </Typography>
            <Button
              className={classes.modalBottom}
              color='primary'
              variant='contained'
              onClick={() => {
                setOpen(false);
                handleClose();
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <Typography color='secondary'>
                <FormattedMessage id='signup.close' defaultMessage='close' />
              </Typography>
            </Button>
          </Paper>
        </Modal>
      </div>
    </div>
  );
};

export default Signup;
