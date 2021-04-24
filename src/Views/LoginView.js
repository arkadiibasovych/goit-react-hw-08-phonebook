import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/user/user-operations';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'tomato',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    color: 'black',
    margin: theme.spacing(3, 0, 2),
    padding: '5px 40px',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: 5,
    boxShadow: '0px 0px 3px 0px black',
    cursor: 'pointer',
    '&:hover': {
      color: '#fff',
      backgroundColor: 'tomato',
    },
  },
}));

export default function LoginView() {
  const s = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Grid container component="main" className={s.root}>
      <CssBaseline />

      <Grid md={5}>
        <div className={s.paper}>
          <Avatar className={s.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <form className={s.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleChange}
              className={s.label}
              activeClass={s.activeLabel}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={s.submit}
            >
              Sign in
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
