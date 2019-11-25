import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {createBrowserHistory} from 'history';

const useStyles = makeStyles(theme => ( {
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
} ));

export default function SignInSide(){

  const hist = createBrowserHistory();
  const classes = useStyles();

  let credentials = {
    user: '',
    password: ''
  };

  const handleChange = e => {
    {
      credentials = {
        ...credentials,
        [e.target.name]: e.target.value
      };
    }
  };

  const handleSubmit = e => {
    if(credentials.user !== '' && credentials.password !== '') {
      hist.push('/admin/dashboard');
      hist.go('/admin/dashboard')
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline/>
      <Grid item xs={false} sm={4} md={7} className={classes.image}/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user"
              label="Usuario"
              name="user"
              onChange={handleChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              onChange={handleChange}
              autoComplete="current-password"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Iniciar
            </Button>
            {/*<Grid container>*/}
            {/*  <Grid item>*/}
            {/*    <Link href="#" variant="body2">*/}
            {/*      {'¿No tienes una cuenta? Create una'}*/}
            {/*    </Link>*/}
            {/*  </Grid>*/}
            {/*</Grid>*/}
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
