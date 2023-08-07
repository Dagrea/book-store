import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { increment, decrement, deleteItem as deleteCartItem } from '../../redux/cart';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';

function User() {
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title='Open settings'>
        <IconButton onClick={handleOpenUserMenu} sx={{ m: '10px', p: '10px', background: '#fff' }}>
          <PersonIcon />
        </IconButton>
      </Tooltip>
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
    </>
  );
}

export default User;
