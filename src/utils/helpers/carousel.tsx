import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';

type BookProps = {
	book: any;
	index: number;
};

const CarouselBook = ({ book, index }: BookProps) => {
	return (
		<Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} height={'570px'}>
			<Card
				sx={{ maxWidth: 345, minHeight: '100%', position: 'relative', boxShadow: 3 }}
				variant='outlined'
			>
				{book.volumeInfo.imageLinks === undefined ? (
					<Skeleton variant='rounded' width={'auto'} height={400} />
				) : (
					<CardMedia
						sx={{ height: 400, backgroundSize: 'cover' }}
						image={book.volumeInfo.imageLinks.thumbnail}
						component={Link}
						to={'/card/' + ++index}
					/>
				)}
				<CardContent>
					<Typography
						variant='body1'
						component={Link}
						to={'/card/' + ++index}
						sx={{ textDecoration: 'none', color: 'inherit' }}
					>
						{book.volumeInfo.title ? book.volumeInfo.title : 'Unknown'}
					</Typography>
					<Grid container justifyContent='center'>
						<Chip label='500 uah' variant='outlined' sx={{ m: '10px', fontSize: '16px' }} />
						<Chip label='aviable' color='success' sx={{ m: '10px', fontSize: '16px' }} />
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
};

export const blockCarouselData = (items: any) => {
	if (items.length === 0) {
		return [];
	}
	const sliderItems: number = items.length > 4 ? 4 : items.length;
	const result: Array<any> = [];

	for (let i = 0; i < items.length; i += sliderItems) {
		if (i % sliderItems === 0) {
			result.push(
				<Grid container spacing={2} key={i}>
					{items.slice(i, i + sliderItems).map((item: any, index: number) => (
						<CarouselBook book={item} index={index + item.volumeInfo.title} />
					))}
				</Grid>
			);
		}
	}
	return result;
};
