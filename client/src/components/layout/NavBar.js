// Dependencies
import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Modal,
  Paper,
  TextField,
} from '@material-ui/core/';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';

// Icons
import { ArrowBack, ExpandMore } from '@material-ui/icons';
import japanFlag from '../../assets/img/Japan_Flag.png';

// Context
import AuthContext from '../../context/auth/authContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '10vh',
  },
  button: {
    marginRight: theme.spacing(2),
  },
  rightSideContent: {
    position: 'absolute',
    right: '16px',
  },
  form: {
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
  formRoot: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formItem: {
    margin: theme.spacing(2),
    width: '80%',
  },
  textInput: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.secondary.main,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.main,
      },
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.secondary.main,
    },
    'margin': theme.spacing(2),
    'width': '80%',
  },
  submit: {
    margin: theme.spacing(2),
    width: '40%',
  },
}));

const NavBar = (basePath) => {
  // Context
  const authContext = useContext(AuthContext);
  const { register } = authContext;
  // Hooks
  const classes = useStyles();
  const { goBack, location } = useHistory();
  const { pathname } = location;
  const originalPath = '/';

  // States
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [societyPassword, setSocietyPassword] = useState('');

  // Methods
  const handleClick = (origin) => {
    if (origin === 'register') {
      setModalContent(origin);
    } else {
      setModalContent(origin);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalContent(null);
  };

  const handleSubmit = () => {
    register({ name, email, password });
  };

  // Forms
  const loginForm = (
    <Paper className={classes.form} elevation={5}>
      <Typography color='secondary' variant='h4' className={classes.formItem}>
        <FormattedMessage id='navbar.login' defaultMessage='Staff Login' />
      </Typography>
      <TextField
        label='User'
        variant='outlined'
        color='secondary'
        className={classes.textInput}
        value={name}
        autoComplete='no'
        autoFocus
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label='Password'
        variant='outlined'
        color='secondary'
        className={classes.textInput}
        value={password}
        autoComplete='no'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        className={classes.submit}
        color='secondary'
        variant='outlined'
        onClick={handleSubmit}
      >
        <Typography color='secondary'>
          <FormattedMessage id='navbar.login' defaultMessage='Login' />
        </Typography>
      </Button>
    </Paper>
  );

  const registerForm = (
    <Paper className={classes.form} elevation={5}>
      <Typography color='secondary' variant='h4' className={classes.formItem}>
        <FormattedMessage id='navbar.register' defaultMessage='Signup' />
      </Typography>
      <TextField
        label='User'
        variant='outlined'
        color='secondary'
        className={classes.textInput}
        value={name}
        autoComplete='no'
        autoFocus
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label='Email'
        variant='outlined'
        color='secondary'
        className={classes.textInput}
        value={email}
        autoComplete='no'
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label='Password'
        variant='outlined'
        color='secondary'
        className={classes.textInput}
        value={password}
        autoComplete='no'
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label='Confirm Password'
        variant='outlined'
        color='secondary'
        className={classes.textInput}
        value={password2}
        autoComplete='no'
        onChange={(e) => setPassword2(e.target.value)}
      />
      <TextField
        label='Society Password'
        variant='outlined'
        color='secondary'
        className={classes.textInput}
        value={societyPassword}
        autoComplete='no'
        onChange={(e) => setSocietyPassword(e.target.value)}
      />
      <Button
        className={classes.submit}
        color='secondary'
        variant='outlined'
        onClick={handleSubmit}
      >
        <Typography color='secondary'>
          <FormattedMessage id='navbar.register' defaultMessage='register' />
        </Typography>
      </Button>
    </Paper>
  );

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
            <Button color='inherit' onClick={() => handleClick('login')}>
              <Typography variant='h6' className={classes.title}>
                <FormattedMessage id='navbar.login' defaultMessage='Login' />
              </Typography>
            </Button>
            <Button color='inherit' onClick={() => handleClick('register')}>
              <Typography variant='h6' className={classes.title}>
                <FormattedMessage
                  id='navbar.register'
                  defaultMessage='Register'
                />
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        className={classes.formRoot}
      >
        {modalContent === 'register' ? registerForm : loginForm}
      </Modal>
    </div>
  );
};

export default NavBar;
