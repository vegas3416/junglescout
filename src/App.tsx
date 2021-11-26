import React, { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Container,
  Grid,
  TextField,
  Badge,
  InputAdornment,
  Typography,
  Link,
  Drawer,
  Divider,
  ListItem,
  List,
  ListItemText,
  IconButton,
} from '@mui/material';
import data from './data/data.json';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CardLayout from './components/CardLayout';
import { Home } from '@mui/icons-material';

export const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [dialog, setDialog] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const drawerRef = useRef(null);

  const addToCart = () => {
    setCartCount(cartCount + 1);
    setDialog(true);
  };

  const handleDropdown = () => {
    if (drawerRef) {
      setDrawer(false);
    }
  };

  useEffect(() => {
    if (drawer) {
      document.addEventListener('mousedown', handleDropdown);
    }
    return () => {
      document.removeEventListener('mousedown', handleDropdown);
    };
  }, [drawer]);

  const categoryTypes = [...new Set(data.map((item) => item.category))];

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
          my: 15,
        },
      }}
    >
      <Box
        component='header'
        sx={{
          backgroundColor: '#ffffff',
          boxShadow: '0px -2px 5px grey',

          padding: 1,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 999,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', paddingLeft: 1 }}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{}}
              onClick={() => setDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Avatar
              sx={{
                m: '4px',
                border: '1px solid',
                borderColor: 'black',
                cursor: 'pointer',
                display: { xs: 'none', sm: 'block' },
              }}
              src={require('./images/logo.png')}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <Box
              sx={{
                paddingRight: 5,
                position: 'relative',
                '.dialog-popup': {
                  textAlign: 'center',
                  right: '-70px',
                  position: 'absolute',
                  backgroundColor: '#1976d2',
                  borderRadius: '2px',
                  height: '48px',
                  width: '200px',
                  bottom: '-60px',
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: 0,
                    height: 0,
                    borderColor: '#1976d2',
                    position: 'absolute',
                    borderLeft: '12px solid transparent',
                    borderBottom: '12px solid #1976d2',
                    borderRight: '12px solid transparent',
                    left: '66px',
                    top: '-10px',
                  },
                },
              }}
            >
              <Badge badgeContent={cartCount} color='secondary'>
                <ShoppingCartIcon />
              </Badge>
              {dialog && (
                <Box
                  className='dialog-popup'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '.dialog-text': {
                      color: 'white',
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
              sx={{
                backgroundColor: '#ffffff',
                width: '240px',
                input: {
                  py: 1,
                },
              }}
              placeholder='Search'
              id='search field'
              variant='outlined'
            />
          </Box>
          <Drawer
            ref={drawerRef}
            sx={{
              '.drawer-items': {
                px: 2,
              },
            }}
            anchor={'left'}
            open={drawer}
          >
            <Box sx={{ cursor: 'pointer', padding: 1, textAlign: 'center' }}>
              <Home
                color='primary'
                onClick={() => {
                  alert('This sends you back home and closes drawer');
                  setDrawer(false);
                }}
              />
            </Box>

            <Divider />
            <Typography className='drawer-items' variant='h6'>
              Filter by category
            </Typography>
            <Divider />
            <List className='drawer-items'>
              {categoryTypes.map((text, index) => {
                return (
                  <ListItem key={index} sx={{ padding: 'unset' }}>
                    <ListItemText
                      sx={{
                        cursor: 'pointer',
                        textDecoration: 'underline',
                      }}
                      primary={text}
                      onClick={() => {
                        alert(
                          'This would filter list down by category and close drawer. Probably add a loading state to give user the impression of' +
                            ' something changing'
                        );
                        setDrawer(false);
                      }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Drawer>
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
