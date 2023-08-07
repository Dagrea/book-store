import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { deleteItem as deleteFavoriteItem } from '../../redux/favorite';

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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ClearIcon from '@mui/icons-material/Clear';

function Favorite() {
  const favorite = useAppSelector(state => state.favorite);
  const dispatch = useAppDispatch();
  const [anchorElFav, setAnchorElFav] = React.useState<null | HTMLElement>(null);
  const handleOpenFavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElFav(event.currentTarget);
  };
  const handleCloseFavMenu = () => {
    setAnchorElFav(null);
  };

  return (
    <>
      <Tooltip title='Open wishlist'>
        <IconButton onClick={handleOpenFavMenu} sx={{ m: '10px', p: '10px', background: '#fff' }}>
          <Badge badgeContent={favorite.items.length} color='secondary'>
            <FavoriteIcon />
          </Badge>
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

export default Favorite;
