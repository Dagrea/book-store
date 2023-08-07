import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';

import Favorite from './Favorite';
import Cart from './Cart';
import User from './User';
import Navigation from './Navigation';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const pages = ['New releases', 'Categories', 'Recommended'];

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener('scroll', handleScroll);

  return (
    <AppBar
      position='sticky'
      sx={{ height: '150px', marginBottom: '50px', boxShadow: 'none', backgroundColor: 'transparent' }}
    >
      <div
        style={
          sticky
            ? {
                width: '100%',
                height: '70px',
                backgroundColor: '#427dff',
                boxShadow:
                  'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
              }
            : {
                width: '100%',
                height: '120px',
                backgroundColor: '#427dff',
                boxShadow:
                  'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
              }
        }
      >
        <Container
          maxWidth='xl'
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'noWrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <AutoStoriesIcon fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
            <Typography
              variant='h3'
              noWrap
              component={Link}
              to='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Readmag
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Navigation />
            </Box>
            <AutoStoriesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant='h5'
              noWrap
              component={Link}
              to='/'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Readmag
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(page => (
                <Button
                  component={Link}
                  to='/categories'
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Favorite />
              <Cart />
              <User />
            </Box>
          </Toolbar>
        </Container>
      </div>
    </AppBar>
  );
}
export default Navbar;
