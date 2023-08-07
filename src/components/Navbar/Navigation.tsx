import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { increment, decrement, deleteItem as deleteCartItem } from '../../redux/cart';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Navigation() {
	const pages = ['New releases', 'Categories', 'Recommended'];
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
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
		</>
	);
}

export default Navigation;
