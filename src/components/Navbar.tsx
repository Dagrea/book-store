import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { deleteItem as deleteFavoriteItem } from '../redux/favorite';
import { increment, decrement, deleteItem as deleteCartItem } from '../redux/cart';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const pages = ['New releases', 'Categories', 'Recommended'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const favorite = useAppSelector(state => state.favorite);
  const cart = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const [sticky, setSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener('scroll', handleScroll);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElFav, setAnchorElFav] = React.useState<null | HTMLElement>(null);
  const [anchorElCart, setAnchorElCart] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenFavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElFav(event.currentTarget);
  };

  const handleOpenCartMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCart(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseFavMenu = () => {
    setAnchorElFav(null);
  };
  const handleCloseCartMenu = () => {
    setAnchorElCart(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(page => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center' component={Link} to='/categories'>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
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
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open wishlist'>
                <IconButton onClick={handleOpenFavMenu} sx={{ m: '10px', p: '10px', background: '#fff' }}>
                  <Badge badgeContent={favorite.items.length} color='secondary'>
                    <FavoriteIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title='Open cart'>
                <IconButton onClick={handleOpenCartMenu} sx={{ m: '10px', p: '10px', background: '#fff' }}>
                  <Badge badgeContent={cart.items.length} color='secondary'>
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ m: '10px', p: '10px', background: '#fff' }}>
                  <PersonIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElFav}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElFav)}
                onClose={handleCloseFavMenu}
              >
                {favorite.items.length > 0 ? (
                  favorite.items.map((item: any) => (
                    <MenuItem key={item.name}>
                      <Grid container justifyContent='center' alignItems='center'>
                        <Card
                          variant='outlined'
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 400,
                            height: 200,
                            borderColor: '#fff',
                            margin: '10px',
                            padding: '0px',
                          }}
                        >
                          <CardContent sx={{ width: '250px' }}>
                            <Typography align='center' noWrap variant='h5' sx={{ marginBottom: '20px' }}>
                              {item.name}
                            </Typography>
                            <Typography align='center' variant='body1' sx={{ marginBottom: '20px' }}>
                              Patrick M. Garry
                            </Typography>
                            <Grid container justifyContent='space-around'>
                              <Chip label='500 uah' variant='outlined' sx={{ fontSize: '18px' }} />
                              <Chip label='aviable' color='success' sx={{ fontSize: '18px' }} />
                            </Grid>
                            <Grid container justifyContent='end' alignItems='center'>
                              <Button
                                onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                  dispatch(deleteFavoriteItem(item.id));
                                }}
                                size='small'
                              >
                                <ClearIcon />
                              </Button>
                            </Grid>
                          </CardContent>
                          <CardMedia
                            sx={{ height: '200px', width: '150px', backgroundSize: 'cover' }}
                            image={item.img}
                            component={Link}
                            to={'/card/' + item.id}
                          />
                        </Card>
                      </Grid>
                    </MenuItem>
                  ))
                ) : (
                  <Grid
                    container
                    justifyContent='center'
                    alignItems='center'
                    sx={{ width: 400, height: 200 }}
                  >
                    <Typography align='center' noWrap variant='h5'>
                      Browse in categories
                    </Typography>
                  </Grid>
                )}
              </Menu>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElCart}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElCart)}
                onClose={handleCloseCartMenu}
              >
                {cart.items.length > 0 ? (
                  <div>
                    {cart.items.map((item: any) => (
                      <MenuItem key={item.name} onClick={handleCloseFavMenu}>
                        <Grid container justifyContent='center' alignItems='center'>
                          <Card
                            variant='outlined'
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              width: 400,
                              height: 200,
                              borderColor: '#fff',
                              margin: '10px',
                              padding: '0px',
                            }}
                          >
                            <CardContent sx={{ width: '400px' }}>
                              <Typography variant='h5'>{item.name}</Typography>
                              <Typography align='center' variant='body1' sx={{ marginBottom: '20px' }}>
                                Patrick M. Garry
                              </Typography>
                              <Grid container>
                                <Grid
                                  container
                                  item
                                  xs={6}
                                  sx={{
                                    display: 'flex',
                                    flexWrap: 'noWrap',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Button
                                    onClick={() => {
                                      dispatch(decrement(item.id));
                                    }}
                                  >
                                    <RemoveIcon />
                                  </Button>
                                  <Typography variant='body1'>{item.quantity}</Typography>
                                  <Button
                                    onClick={() => {
                                      dispatch(increment(item.id));
                                    }}
                                  >
                                    <AddIcon />
                                  </Button>
                                </Grid>
                                <Grid
                                  container
                                  item
                                  xs={6}
                                  sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Grid>
                                    <Typography variant='body1'>Price: {item.price}</Typography>
                                  </Grid>
                                  <Grid>
                                    <Typography variant='body1'>
                                      Total: {item.price * item.quantity}
                                    </Typography>
                                  </Grid>
                                </Grid>
                                <Grid container justifyContent='end' alignItems='center'>
                                  <Button
                                    onClick={() => {
                                      dispatch(deleteCartItem(item.id));
                                    }}
                                    size='small'
                                  >
                                    <ClearIcon />
                                  </Button>
                                </Grid>
                              </Grid>
                            </CardContent>
                            <CardMedia
                              sx={{ height: '200px', width: '200px', backgroundSize: 'cover' }}
                              image={item.img}
                              component={Link}
                              to={'/categories'}
                            />
                          </Card>
                        </Grid>
                      </MenuItem>
                    ))}
                    <Divider sx={{ backgroundColor: '#fff', borderTop: '6px double  #000' }} />
                    <Grid container item xs={12} justifyContent='space-around' alignItems='center'>
                      <Typography variant='h5'>
                        Total price:{' '}
                        {cart.items
                          .map((item: any) => item.price * item.quantity)
                          .reduce((accumulator, currentValue) => accumulator + currentValue)}
                      </Typography>
                      <Button
                        variant='outlined'
                        sx={{
                          color: '#000',
                          borderColor: '#000',
                          '&:hover': { backgroundColor: '#000', color: '#fff', borderColor: '#000' },
                        }}
                      >
                        Go to checkout
                        <ShoppingCartIcon />
                      </Button>
                    </Grid>
                  </div>
                ) : (
                  <Grid
                    container
                    justifyContent='center'
                    alignItems='center'
                    sx={{ width: 400, height: 200 }}
                  >
                    <Typography align='center' noWrap variant='h5'>
                      Browse in categories
                    </Typography>
                  </Grid>
                )}
              </Menu>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </div>
    </AppBar>
  );
}
export default Navbar;
