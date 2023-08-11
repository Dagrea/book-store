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

import Carousel from 'react-material-ui-carousel';

import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';
import carousel4 from '../assets/carousel4.jpg';
import carousel5 from '../assets/carousel5.jpg';

import {BOOKS_API} from '../utils/API/root';
import {genres, gengeImages} from '../utils/services/genres';
import {promotionCarouselImages} from '../utils/services/carousels';

import {blockCarouselData} from '../utils/helpers/carousel';

function Root() {
  const [books, setBooks] = useState<any[]>([]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetch(BOOKS_API)
      .then(res => res.json())
      .then(data => {
        setBooks(data.items);
      });
  }, []);

  return (
    <div className='App'>
      <Container maxWidth='xl' sx={{ minHeight: '100vh' }}>
        <Carousel>
          {promotionCarouselImages.map((item, i) => (
            <CardMedia sx={{ height: 450, backgroundSize: 'cover' }} image={item} key={i} />
          ))}
        </Carousel>
        <Typography gutterBottom variant='h1' component='div' sx={{ marginTop: '50px' }}>
          Best sellers
        </Typography>
        <Carousel
          autoPlay={false}
          animation='slide'
          indicators={false}
          navButtonsAlwaysVisible={true}
          height={570}
          sx={{ margin: '50px' }}
        >
          {books ? blockCarouselData(books) : []}
        </Carousel>
        <Paper sx={{ minWidth: '100%', minHeight: '600px', backgroundColor: '#000' }}>
          <Typography variant='body1' align='left' color='#fff' sx={{ fontSize: '36px', padding: '30px' }}>
            Pick a genre you like
          </Typography>
          <Typography
            variant='body2'
            align='right'
            color='#fff'
            sx={{ fontSize: '30px', padding: '0px 30px 10px 0px' }}
          >
            Find your favorite book in two steps
          </Typography>
          <Divider sx={{ backgroundColor: '#fff' }} />
          <Grid container justifyContent='center' alignItems='center'>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              sx={{ width: '80%', padding: '30px 0px' }}
            >
              {genres.map((genre, i) => (
                <Grid container justifyContent='center' alignItems='center' xs={4} key={i}>
                  <Card
                    variant='outlined'
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 350,
                      minHeight: 350,
                      backgroundColor: '#000',
                      borderColor: '#fff',
                      margin: '10px',
                      padding: '0px',
                    }}
                  >
                    <CardContent>
                      <Paper
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#fff',
                          minHeight: '250px',
                          width: '250px',
                          marginBottom: '15px',
                          padding: '5px',
                        }}
                      >
                        <CardMedia
                          sx={{ height: '200px', width: '200px', backgroundSize: 'contain' }}
                          image={genre.image}
                          component={Link}
                          to={'/categories'}
                        />
                      </Paper>
                      <Typography variant='h5' color='#fff'>
                        {genre.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
        <Card
          variant='outlined'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            minHeight: '500px',
            margin: '50px 0px',
          }}
        >
          <CardMedia sx={{ width: '50%', minHeight: '500px', backgroundSize: 'cover' }} image={carousel1} />
          <Paper
            sx={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#e9e9e9',
            }}
          >
            <Typography variant='h2'>Read with pleasure</Typography>
            <Typography variant='body1' sx={{ margin: '20px 0px' }}>
              Read your favorite books in a convenient way for you at any time
            </Typography>
            <Button
              variant='contained'
              size='large'
              color='info'
              component={Link}
              to={'/categories'}
              sx={{ width: '200px' }}
            >
              Buy now
            </Button>
          </Paper>
        </Card>
      </Container>
    </div>
  );
}

export default Root;
