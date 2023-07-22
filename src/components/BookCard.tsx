import React, {useState, useEffect} from 'react';

import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { increment, addItem, deleteItem } from '../redux/favorite'

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

import Carousel from 'react-material-ui-carousel'
import Zoom from 'react-img-zoom'

import mockImage1 from '../assets/carousel1.jpg';
import mockImage2 from '../assets/carousel2.jpg';
import mockImage3 from '../assets/carousel3.jpg';

const mockTitle = 'Book store item';
const mockDescription = 'Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description Book store item description '
 const mockCarouselImages = [
      mockImage1,mockImage2,mockImage3
  ];

 const anArrayOfNumbers = [<img style={{ height: 60, padding: 10, backgroundSize: 'cover' }} src={mockImage1}/>, 
                          <img style={{ height: 60, padding: 10, backgroundSize: 'cover' }} src={mockImage2}/>, 
                          <img style={{ height: 60, padding: 10, backgroundSize: 'cover' }} src={mockImage3}/>
                         ];


const RECOMMENDED_BOOK_API = "https://www.googleapis.com/books/v1/volumes?q=Garry&maxResults=12&startIndex=21";
const POPULAR_BOOK_API = "https://www.googleapis.com/books/v1/volumes?q=Garry&maxResults=12&startIndex=41";

function BookCard () {

  const favorite = useAppSelector(state => state.favorite);
  const dispatch = useAppDispatch();

  const [recommendedBooks, setRecommendedBooks] = useState<any[]>([]);
  const [populardBooks, setPopulardBooks] = useState<any[]>([]);

  const favoriteIds = favorite.items.map((book) => book.id)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetch(RECOMMENDED_BOOK_API)
      .then((res) => res.json())
      .then((data) => {
        setRecommendedBooks(data.items);
      });
      fetch(POPULAR_BOOK_API)
      .then((res) => res.json())
      .then((data) => {
        setPopulardBooks(data.items);
      });

  }, [])

  const rsliderItems: number = recommendedBooks.length > 4 ? 4 : recommendedBooks.length;
  const ritems: Array<any> = [];

  for (let i = 0; i < recommendedBooks.length; i += rsliderItems) {
    if (i % rsliderItems === 0) {
      ritems.push(
        <Grid container spacing={2} >
            {recommendedBooks.slice(i, i + rsliderItems).map((book, index) => (
             <Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} height={'570px'}>
                <Card sx={{ maxWidth: 345,  minHeight: '100%', position: 'relative', boxShadow: 3 }} variant="outlined" >
                  {book.volumeInfo.imageLinks === undefined ? 
                  <Skeleton variant="rounded" width={"auto"} height={400}/>  :
                  <CardMedia
                    sx={{ height: 400, backgroundSize: 'cover' }}
                    image={book.volumeInfo.imageLinks.thumbnail}
                  />}
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                      {book.volumeInfo.title}
                    </Typography>
                    <Chip label="500 uah" variant="outlined" />
                    <Chip label="aviable" color="success" sx={{ marginLeft: '10px', marginRight: '10px' }} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
      );
    }
  }

  const psliderItems: number = populardBooks.length > 4 ? 4 : populardBooks.length;
  const pitems: Array<any> = [];

  for (let i = 0; i < populardBooks.length; i += psliderItems) {
    if (i % psliderItems === 0) {
      pitems.push(
        <Grid container spacing={2} >
            {populardBooks.slice(i, i + psliderItems).map((book, index) => (
             <Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} height={'570px'}>
                <Card sx={{ maxWidth: 345,  minHeight: '100%', position: 'relative', boxShadow: 3 }} variant="outlined" >
                  {book.volumeInfo.imageLinks === undefined ? 
                  <Skeleton variant="rounded" width={"auto"} height={400}/>  :
                  <CardMedia
                    sx={{ height: 400, backgroundSize: 'cover' }}
                    image={book.volumeInfo.imageLinks.thumbnail}
                  />}
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                      {book.volumeInfo.title}
                    </Typography>
                    <Chip label="500 uah" variant="outlined" />
                    <Chip label="aviable" color="success" sx={{ marginLeft: '10px', marginRight: '10px' }} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
      );
    }
  }

return (
  <div >
    <Container  sx={{minHeight: '100vh'}}>
    <Grid container spacing={2} >
    <Grid container xs={6} spacing={1} >
    <Grid container  xs={12}>
    <Carousel autoPlay={false} navButtonsAlwaysVisible swipe={false} IndicatorIcon={anArrayOfNumbers} sx={{ width: '100%'}} >
      {
        mockCarouselImages.map( (item, i) => (
          <div style={{ display:'flex', justifyContent:'center'}}>
       <Zoom  zoomScale={4} width={480} height={600} img={item}
        />
        </div>
        ) )
      }
    </Carousel>  
          </Grid> </Grid> 
          <Grid container xs={6} spacing={1} >
    <Grid container  xs={12} sx={{ backgroundColor: '#e5e5e5', padding:'20px', display:'flex', justifyContent:'space-around' }}>
    <Typography gutterBottom variant="h3" component="div">
            {mockTitle}
          </Typography>
          <Typography variant="body1" sx={{ maxHeight: '300px', overflow: 'hidden'}}>
            {mockDescription}
          </Typography>
          <Typography variant="h3"sx={{color:"#DD226F", width: '100%'}}>
            500 uah
          </Typography>
          <Typography variant="h5" sx={{backgroundColor: '#0DD90D', color:"#fff", border: '2px solid #0DD90D', borderRadius: '30px', height: '50px', width: '150px', display:'flex', justifyContent:'center', alignItems:'center','&:hover': {
            backgroundColor: '#e5e5e5',
            color: '#0DD90D'
          },  }}>
            aviable
          </Typography>
          <Grid>
          <Typography component="legend" sx={{color: '#0D9FD9'}}>32 ratings</Typography>
          <Rating name="read-only" value={5} size="large" readOnly />
          </Grid>
          <Grid container xs={12}  sx={{ display:'flex', justifyContent:'center'}}>
          
          {
            favoriteIds.includes("322") ? 
            <Button size="large" endIcon={<FavoriteSharpIcon />} sx={{height:'50px', backgroundColor: '#e5e5e5',color: '#000','&:hover': {
            backgroundColor: '#0D9FD9',
            color: '#fff'
          }}} onClick={() => dispatch(deleteItem("322"))} >Remove from favorite</Button>
            :
            <Button size="large" endIcon={<FavoriteSharpIcon />} sx={{height:'50px', backgroundColor: '#e5e5e5',color: '#000','&:hover': {
            backgroundColor: '#0D9FD9',
            color: '#fff'
          }}} onClick={() => dispatch(addItem({id: "322", name:'Garry Trudeau', img:mockImage1, quantity:1}))} >Add to favorite</Button>
          }


          
          <Button size="large" endIcon={<AddShoppingCartSharpIcon />}  sx={{height:'50px', backgroundColor: '#e5e5e5',color: '#000',
          '&:hover': {
            backgroundColor: '#5F6379',
            color: '#fff'
          }
        }}>Add to cart</Button>
          <Button size="large"  endIcon={<AddCardSharpIcon />} sx={{height:'50px', backgroundColor: '#e5e5e5',color: '#000','&:hover': {
            backgroundColor: '#DD226F',
            color: '#fff'
          },}}>Buy now</Button>
          </Grid>
          </Grid>
          </Grid>
          </Grid>
          <Typography align='center' gutterBottom variant="h3" component="div" sx={{marginTop:'100px'}}>
      Recommended for you
    </Typography>
    <Carousel animation='slide' interval={10000} indicators={false} navButtonsAlwaysVisible={true} height={570} sx={{margin: '50px'}}>
      {ritems}
    </Carousel>
    <Typography align='center' gutterBottom variant="h3" component="div" sx={{marginTop:'50px'}}>
      Popular books
    </Typography>
    <Carousel animation='slide' interval={10000} indicators={false} navButtonsAlwaysVisible={true} height={570} sx={{margin: '50px'}}>
      {pitems}
    </Carousel>
      </Container>
  </div>
    )
}
export default BookCard;