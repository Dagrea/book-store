import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { increment, decrement, deleteItem as deleteCartItem } from '../../redux/cart';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Cart() {
  const cart = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  const [anchorElCart, setAnchorElCart] = React.useState<null | HTMLElement>(null);
  const handleOpenCartMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCart(event.currentTarget);
  };
  const handleCloseCartMenu = () => {
    setAnchorElCart(null);
  };

  return (
    <>
      <Tooltip title='Open cart'>
        <IconButton onClick={handleOpenCartMenu} sx={{ m: '10px', p: '10px', background: '#fff' }}>
          <Badge badgeContent={cart.items.length} color='secondary'>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Tooltip>
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
              <MenuItem key={item.name} onClick={handleCloseCartMenu}>
                <Grid container justifyContent='center' alignItems='center'>
                  <Card
                    variant='outlined'
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: 600,
                      height: 200,
                      borderColor: '#fff',
                      margin: '10px',
                      padding: '0px',
                    }}
                  >
                    <CardContent sx={{ width: '450px' }}>
                      <Typography align='center' noWrap variant='h5' sx={{ marginBottom: '20px' }}>
                        {item.name}
                      </Typography>
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
                            <Typography variant='body1'>Total: {item.price * item.quantity}</Typography>
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
                      sx={{ height: '200px', width: '150px', backgroundSize: 'cover' }}
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
          <Grid container justifyContent='center' alignItems='center' sx={{ width: 400, height: 200 }}>
            <Typography align='center' noWrap variant='h5'>
              Browse in categories
            </Typography>
          </Grid>
        )}
      </Menu>
    </>
  );
}

export default Cart;
