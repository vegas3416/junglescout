import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Container,
  Grid,
  TextField,
  Badge,
  InputAdornment,
  Typography,
} from '@mui/material';
import data from './data/data.json';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import CardLayout from './components/BoxSetup/CardLayout';

export const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [dialog, setDialog] = useState(false);

  const addToCart = () => {
    setCartCount(cartCount + 1);
    setDialog(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setDialog(false);
    }, 2000);
  }, [setCartCount, cartCount]);

  return (
    <Box
      sx={{
        '.main-content': {
          marginLeft: 4,
          marginRight: 4,
          my: 14,
        },
      }}
    >
      <Box
        component='header'
        sx={{
          backgroundColor: '#6792f0',
          boxShadow: '0px 2px 12px grey',
          display: 'flex',
          justifyContent: 'space-between',
          padding: 1,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 999,
        }}
      >
        <Avatar
          sx={{ m: '4px', border: '1px solid', borderColor: 'black' }}
          src={require('./images/logo.png')}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',

            '.dialog-popup': {
              textAlign: 'center',
              padding: '18px',
              right: '84px',
              position: 'absolute',
              backgroundColor: 'white',
              borderRadius: '2px',
              boxShadow: '2px 0px 15px grey',
              height: '60px',
              width: '200px',
              top: '-8px',
              '&::after': {
                content: '""',
                display: 'block',
                width: 0,
                height: 0,
                borderColor: 'white',
                position: 'absolute',
                borderBottom: '12px solid transparent',
                borderLeft: '12px solid white',
                borderTop: '12px solid transparent',
                right: '-12px',
                top: '8px',
              },
            },
          }}
        >
          <Box sx={{ paddingRight: 5, position: 'relative' }}>
            <Badge badgeContent={cartCount} color='secondary'>
              <ShoppingCartIcon />
            </Badge>
            {dialog && (
              <Box
                className='dialog-popup'
                sx={{
                  '.dialog-text': {
                    fontSize: '14px',
                    fontWeight: '500',
                  },
                }}
              >
                <span className='dialog-text'>Item added successfully.</span>
              </Box>
            )}
          </Box>

          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: '#ffffff', width: '300px' }}
            placeholder='Search'
            id='search field'
            variant='outlined'
          />
        </Box>
      </Box>
      <main className='main-content'>
        <Container sx={{ mt: 2 }} maxWidth='lg'>
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4, lg: 6 }}
            columns={{ xs: 12, sm: 4, md: 8, lg: 9 }}
          >
            {data.map((item, index) => (
              <Grid item xs={12} sm={3} md={4} lg={3} key={index}>
                <CardLayout item={item} addToCart={() => addToCart()} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </Box>
  );
};

export default App;
