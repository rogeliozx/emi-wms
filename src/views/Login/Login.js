import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  error: {
    background: "red",
    color: "white",
    fontSize: "1vw"
  }
}));

export default function SignInSide() {
  const hist = createBrowserHistory();
  const classes = useStyles();
  const [error, saveErrror] = useState(false);
  let usuarioDto = {
    login: "",
    password: ""
  };
  const handleChange = e => {
    {
      usuarioDto = {
        ...usuarioDto,
        [e.target.name]: e.target.value
      };
    }
  };
  const handleSubmit = async e => {
    await axios
      .post("http://localhost:3001/login/validausuario", usuarioDto)
      .then(result => {
        const { data } = result;
        const { listaProcesoCedisEmpresaDto } = data;
        localStorage.setItem("Data", JSON.stringify(listaProcesoCedisEmpresaDto));
        hist.push("/admin/lpn");
       hist.go("/admin/lpn");
      })
      .catch(e => {
        console.log(e)
        saveErrror(true);
      });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
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
              id="login"
              label="Usuario"
              name="login"
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
            {error ? (
              <div className={classes.error}>Password o usuario incorrecto</div>
            ) : (
              <div></div>
            )}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Iniciar
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
