import {useRef, useState, useEffect, useContext} from 'react';
import './Login.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';

import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';


export default function Login () {

    const navigate = useNavigate();
    
   const [value, setValue] = useContext(UserContext);
    
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    
      useEffect(() => {
      userRef.current.focus();
    }, []);  

    useEffect(() => {
      setErrMsg('');
    }, [user, pwd]);



      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('adminname', user);
        data.append('password', pwd);
        try
        {
          const res = await axios.post('http://localhost/panelApi/login/', data);
        if(res?.data != '')
        {
          setValue(res.data);
          navigate('/', {replace: true});
        }
        setUser('');
        setPwd('');
        
      }

      catch(err){
        console.log(err);
        if(!err?.response)
      {
        setErrMsg('No Server Response');
      }

      else if(err.response?.status === 400)
      {
        setErrMsg('Missing Username or Password');
      }

      else if(err.response?.status === 401)
      {
        setErrMsg('Unauthorized');
      }

      else{
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
      }
        //Axios with auth
      }

      



      return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="adminname"
              label="Username"
              name="adminname"
              ref={userRef}
              autoFocus
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
            </Grid>
          </Box>
        </Box>
        
      </Container>

      
      );
    
}


