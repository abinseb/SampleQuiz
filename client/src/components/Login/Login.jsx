import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [user_id,setuser_id] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#C7EAE8' }}>
    <Box sx={{ bgcolor: '#fffaf0', height: '40vh', width: '40vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center',paddingTop:'40px' }}>
        <Typography variant='h5'>Login</Typography>
        <TextField
            label='UserName'
            margin='normal'
            variant='outlined'
            value={user_id}
            onChange={(e)=>setuser_id(e.target.value)}
        />
        <TextField
            label='Password'
            type='password'
            margin='normal'
            variant='outlined'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', margin: '10px' }}>
            <Button >Cancel</Button>
            <Button >Login</Button>
        </div>
        <div style={{ justifyContent: 'flex-start', paddingBottom: '20px', paddingLeft: '10px' }}>
            <p style={{ color: 'red', cursor: 'pointer' }}>Forgot Password?</p>
        </div>
    </Box>
</div>
  )
}

export default Login
