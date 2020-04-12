// Dependencies
import React, { useState, useContext, useEffect } from 'react';
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
  Menu,
  MenuItem,
} from '@material-ui/core/';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import Alert from './Alert';

// Icons
import { ArrowBack, ExpandMore } from '@material-ui/icons';
import japanFlag from '../../assets/img/Japan_Flag.png';

// Context
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

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
  const {
    register,
    error,
    clearError,
    loadUser,
    token,
    login,
    user,
    logout,
  } = authContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Constant
  const societyPasswordTrue = 'umeshu';

  // Life Cycle
  useEffect(() => {
    if (error) {
      setAlert(error, 'danger');
      setTimeout(() => {
        clearError();
      }, 5000);
    }
  }, [error]);

  useEffect(() => {
    if (token) {
      loadUser();
    }
  }, [token]);
  // Methods
  const handleClick = (origin) => {
    setModalContent(origin);
    setOpen(true);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleUserClose = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
    setName('');
    setEmail('');
    setPassword('');
    setPassword2('');
    setSocietyPassword('');
    setModalContent('');
  };

  const handleLogout = () => {
    logout();
    handleUserClose();
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === 'register') {
      if (name === '' || email === '' || password === '') {
        setAlert('Please enter all fields', 'danger');
      } else if (password !== password2) {
        setAlert('Password is different from the comfirm one', 'danger');
      } else if (societyPassword !== societyPasswordTrue) {
        setAlert('Incorrect society password', 'danger');
      } else {
        register({ name, email, password }, handleClose);
      }
    } else if (type === 'login') {
      login({ email, password }, handleClose);
    } else {
      console.log('hi');
    }
  };

  // Forms
  const loginForm = (
    <Paper className={classes.form} elevation={5}>
      <Typography color='secondary' variant='h4' className={classes.formItem}>
        <FormattedMessage id='navbar.login' defaultMessage='Staff Login' />
      </Typography>
      <Alert />
      <TextField
        label='User Email'
        variant='outlined'
        color='secondary'
        className={classes.textInput}
        value={email}
        autoComplete='no'
        autoFocus
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
      <Button
        className={classes.submit}
        color='secondary'
        variant='outlined'
        onClick={(e) => handleSubmit(e, 'login')}
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
      <Alert />
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
        onClick={(e) => handleSubmit(e, 'register')}
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
            {!user && (
              <>
                <Button color='inherit' onClick={() => handleClick('login')}>
                  <Typography variant='h6' className={classes.title}>
                    <FormattedMessage
                      id='navbar.login'
                      defaultMessage='Login'
                    />
                  </Typography>
                </Button>
                <Button
                  color='inherit'
                  onClick={(e) => handleClick('register')}
                >
                  <Typography variant='h6' className={classes.title}>
                    <FormattedMessage
                      id='navbar.register'
                      defaultMessage='Register'
                    />
                  </Typography>
                </Button>
              </>
            )}
            {user && (
              <>
                <Button
                  color='inherit'
                  onClick={(e) => handleUserClick(e)}
                  endIcon={<ExpandMore />}
                >
                  <Typography variant='h6' className={classes.title}>
                    {user.name}
                  </Typography>
                </Button>
                <Menu
                  id='simple-menu'
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleUserClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Typography variant='body1'>
                      <FormattedMessage
                        id='navbar.account'
                        defaultMessage='My Account'
                      />
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Typography variant='body1'>
                      <FormattedMessage
                        id='navbar.membet'
                        defaultMessage='Manage Membership'
                      />
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography variant='body1'>
                      <FormattedMessage
                        id='navbar.logout'
                        defaultMessage='Logout'
                      />
                    </Typography>
                  </MenuItem>
                </Menu>
              </>
            )}
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
