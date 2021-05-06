import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/core/Icon/Icon';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Route } from 'react-router';
import { SignIn } from "./SignIn";
import { useHistory } from 'react-router';
import { useState } from 'react';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            NicoleNZ
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
    }

    const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', 
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    }));

    const SignUp = () => {
    
        const classes = useStyles();
        const history = useHistory();

        const [formState, setFormState] = useState({
            username: "",
            password: ""
        });

        const handleFieldChange = (e) => {
            console.log('formState', formState);
            const newState = { ...formState }
            newState[e.target.name] = e.target.value;
            console.log('newState', newState);
            setFormState(newState);
        };

        const handleSignUpSubmit = (e) => {
            e.preventDefault();
            console.log(formState);
            fetch('http://localhost:4000/api/auth/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formState.username, 
                    password: formState.password
                    }
                )
            })
            .then(response => response.json());
            fetch('http://localhost:4000/api/auth/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username: formState.username, password: formState.password})
            })
                .then(response => response.json())
                .then(data => {
                    window.localStorage.setItem('token', data.token)
                    if (data.token) {
                    history.replace('/grid')
                    }
                });
    };

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign up
            </Typography>
            <form onSubmit={handleSignUpSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    value={formState.username} 
                    onChange={handleFieldChange}
                    label="Username"
                    name="username"
                    autoComplete="username"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={formState.password} 
                    onChange={handleFieldChange}
                    autoComplete="current-password"
                />
                </Grid>

            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                <Link href="/" variant="body2">
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
            </form>
            <Route
                path="/"
                component={SignIn}
                exact
            />
        </div>
        <Box mt={5}>
            <Copyright />
        </Box>
        </Container>
    );
}

export { SignUp }