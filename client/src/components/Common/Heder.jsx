import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [buttonClicked, setButtonClicked] = useState(null);

  const handleButtonClick = (buttonType) => {
    setButtonClicked(buttonType);
    
  };

  return (
    <div>
      <AppBar
        style={{
          backgroundColor: '#c71585'
        }}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant={'h4'}
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#f5fffa',
                textDecoration: 'none',
                paddingLeft: '20px',
              }}
            >
              QuiZZ APP
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {buttonClicked !== 'login' && (
              <Button
                variant='contained'
                style={{ marginRight: '10px', marginLeft: '20px', backgroundColor: '#c71585' }}
                disabled={buttonClicked === 'login'}
                onClick={() => handleButtonClick('login')}
              >
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>Login</Link>
              </Button>
            )}
            {buttonClicked !== 'signup' && (
              <Button
                variant='contained'
                style={{ marginRight: '10px', marginLeft: '20px', backgroundColor: '#c71585' }}
                disabled={buttonClicked === 'signup'}
                onClick={() => handleButtonClick('signup')}
              >
                <Link style={{ textDecoration: 'none', color: 'white' }} to='/publicReg'>SignUp</Link>
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
