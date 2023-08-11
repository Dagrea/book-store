import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { addItem as addFavItem, deleteItem as deleteFavItem } from '../redux/favorite';
import { addItem as addCartItem } from '../redux/cart';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Skeleton from '@mui/material/Skeleton';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import AddCardSharpIcon from '@mui/icons-material/AddCardSharp';

import Carousel from 'react-material-ui-carousel';
import Zoom from 'react-img-zoom';

import { RECOMMENDED_BOOK_API, POPULAR_BOOK_API } from '../utils/API/root';
import { blockCarouselData } from '../utils/helpers/carousel';

import mockImage1 from '../assets/carousel1.jpg';
import mockImage2 from '../assets/carousel2.jpg';
import mockImage3 from '../assets/carousel3.jpg';

const mockTitle = 'Book store item';
const mockDescription =
  'Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description ';
const mockCarouselImages = [mockImage1, mockImage2, mockImage3];

const anArrayOfNumbers = [
  <img style={{ height: 60, padding: 10, backgroundSize: 'cover' }} src={mockImage1} />,
  <img style={{ height: 60, padding: 10, backgroundSize: 'cover' }} src={mockImage2} />,
  <img style={{ height: 60, padding: 10, backgroundSize: 'cover' }} src={mockImage3} />,
];

function BookCard() {
  const favorite = useAppSelector(state => state.favorite);
  const cart = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const [recommendedBooks, setRecommendedBooks] = useState<any[]>([]);
  const [populardBooks, setPopulardBooks] = useState<any[]>([]);

  const favoriteIds = favorite.items.map((book: any) => book.id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetch(RECOMMENDED_BOOK_API)
      .then(res => res.json())
      .then(data => {
        setRecommendedBooks(data.items);
      });
    fetch(POPULAR_BOOK_API)
      .then(res => res.json())
      .then(data => {
        setPopulardBooks(data.items);
      });
  }, []);

  return (
    <div>
      <Container sx={{ minHeight: '100vh' }}>
        <Grid container spacing={2}>
          <Grid container xs={6} spacing={1}>
            <Grid container xs={12}>
              <Carousel
                autoPlay={false}
                navButtonsAlwaysVisible
                swipe={false}
                IndicatorIcon={anArrayOfNumbers}
                sx={{ width: '100%' }}
              >
                {mockCarouselImages.map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Zoom zoomScale={4} width={480} height={600} img={item} />
                  </div>
                ))}
              </Carousel>
            </Grid>{' '}
          </Grid>
          <Grid container xs={6} spacing={1}>
            <Grid
              container
              xs={12}
              sx={{
                backgroundColor: '#e5e5e5',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <Typography gutterBottom variant='h3' component='div'>
                {mockTitle}
              </Typography>
              <Typography variant='body1' sx={{ maxHeight: '300px', overflow: 'hidden' }}>
                {mockDescription}
              </Typography>
              <Typography variant='h3' sx={{ color: '#DD226F', width: '100%' }}>
                500 uah
              </Typography>
              <Typography
                variant='h5'
                sx={{
                  backgroundColor: '#0DD90D',
                  color: '#fff',
                  border: '2px solid #0DD90D',
                  borderRadius: '30px',
                  height: '50px',
                  width: '150px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: '#e5e5e5',
                    color: '#0DD90D',
                  },
                }}
              >
                aviable
              </Typography>
              <Grid>
                <Typography component='legend' sx={{ color: '#0D9FD9' }}>
                  32 ratings
                </Typography>
                <Rating name='read-only' value={5} size='large' readOnly />
              </Grid>
              <Grid container xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                {favoriteIds.includes('322') ? (
                  <Button
                    size='large'
                    endIcon={<FavoriteSharpIcon />}
                    sx={{
                      height: '50px',
                      backgroundColor: '#e5e5e5',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: '#0D9FD9',
                        color: '#fff',
                      },
                    }}
                    onClick={() => dispatch(deleteFavItem('322'))}
                  >
                    Remove from favorite
                  </Button>
                ) : (
                  <Button
                    size='large'
                    endIcon={<FavoriteSharpIcon />}
                    sx={{
                      height: '50px',
                      backgroundColor: '#e5e5e5',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: '#0D9FD9',
                        color: '#fff',
                      },
                    }}
                    onClick={() =>
                      dispatch(addFavItem({ id: '322', name: 'Garry Trudeau', img: mockImage1 }))
                    }
                  >
                    Add to favorite
                  </Button>
                )}
                <Button
                  size='large'
                  endIcon={<AddShoppingCartSharpIcon />}
                  sx={{
                    height: '50px',
                    backgroundColor: '#e5e5e5',
                    color: '#000',
                    '&:hover': {
                      backgroundColor: '#5F6379',
                      color: '#fff',
                    },
                  }}
                  onClick={() =>
                    dispatch(
                      addCartItem({
                        id: '322',
                        name: 'Garry Trudeau',
                        img: mockImage1,
                        quantity: 1,
                        price: 777,
                      })
                    )
                  }
                >
                  Add to cart
                </Button>
                <Button
                  size='large'
                  endIcon={<AddCardSharpIcon />}
                  sx={{
                    height: '50px',
                    backgroundColor: '#e5e5e5',
                    color: '#000',
                    '&:hover': {
                      backgroundColor: '#DD226F',
                      color: '#fff',
                    },
                  }}
                >
                  Buy now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography align='center' gutterBottom variant='h3' component='div' sx={{ marginTop: '100px' }}>
          Recommended for you
        </Typography>
        <Carousel
          animation='slide'
          interval={10000}
          indicators={false}
          navButtonsAlwaysVisible={true}
          height={570}
          sx={{ margin: '50px' }}
        >
          {recommendedBooks ? blockCarouselData(recommendedBooks) : []}
        </Carousel>
        <Typography align='center' gutterBottom variant='h3' component='div' sx={{ marginTop: '50px' }}>
          Popular books
        </Typography>
        <Carousel
          animation='slide'
          interval={10000}
          indicators={false}
          navButtonsAlwaysVisible={true}
          height={570}
          sx={{ margin: '50px' }}
        >
          {recommendedBooks ? blockCarouselData(populardBooks) : []}
        </Carousel>
      </Container>
    </div>
  );
}
export default BookCard;
