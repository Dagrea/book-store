import React, {useState, useEffect} from 'react';

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

import Carousel from 'react-material-ui-carousel'

import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';
import carousel4 from '../assets/carousel4.jpg';
import carousel5 from '../assets/carousel5.jpg';

import genre1 from '../assets/genre1.png';
import genre2 from '../assets/genre2.png';
import genre3 from '../assets/genre3.png';
import genre4 from '../assets/genre4.png';
import genre5 from '../assets/genre5.png';
import findGenre from '../assets/findgenre.png';

const BOOK_API = "https://www.googleapis.com/books/v1/volumes?q=Garry&maxResults=12";



function Root() {

  const [books, setBooks] = useState<any[]>([]);
  useEffect(() => {
    fetch(BOOK_API)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items);
      });
  }, [])

  const carouselImages = [
      carousel1,carousel2,carousel3,carousel4,carousel5
  ];
  const gengeImages = [
      genre1,genre2,genre3,genre4,genre5
  ];
  const genres = [
  {
    name: 'dragon',
    image: genre1
  },
  {
    name: 'detective',
    image: genre2
  },
  {
    name: 'romantic',
    image: genre3
  },
  {
    name: 'ninja',
    image: genre4
  },
  {
    name: 'fantasy',
    image: genre5
  },
  {
    name: 'Somethig else?',
    image: findGenre
  }
  ];

  const sliderItems: number = books.length > 4 ? 4 : books.length;
  const items: Array<any> = [];

  for (let i = 0; i < books.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <Grid container spacing={2} >
            {books.slice(i, i + sliderItems).map((book, index) => (
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
    <div className="App">
    <Container  maxWidth="xl" sx={{minHeight: '100vh'}}>
    <Carousel>
      {
        carouselImages.map( (item, i) => (
        <CardMedia
          sx={{ height: 450, backgroundSize: 'cover' }}
          image={item}
        />
        ) )
      }
    </Carousel>    
    <Typography gutterBottom variant="h1" component="div" sx={{marginTop:'50px'}}>
      Best sellers
    </Typography>
    <Carousel autoPlay={false} animation='slide' indicators={false} navButtonsAlwaysVisible={true}  sx={{margin: '50px'}}>
      {items}
    </Carousel>
    <Paper sx={{ minWidth: '100%',  minHeight: '600px', backgroundColor: '#000' }}>
    <Typography variant='body1' align='left' color="#fff" sx={{ fontSize: '36px', padding: '30px' }}>Pick a genre you like</Typography >
    <Typography variant='body2'  align='right' color="#fff" sx={{ fontSize: '30px', padding: '0px 30px 10px 0px' }}>Find your favorite book in two steps</Typography >
    <Divider   sx={{ backgroundColor: "#fff" }} />
    <Grid container justifyContent="center" alignItems="center" >
    <Grid container justifyContent="center" alignItems="center" sx={{ width: '80%', padding: '30px 0px' }} >
    {
        genres.map( (genre, i) => (
          <Grid container justifyContent="center" alignItems="center" xs={4}>
        <Card variant="outlined" sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' , width: 350,  minHeight: 350, backgroundColor: '#000', borderColor: '#fff', margin: "10px",   padding: '0px' }}>
      <CardContent >
        <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',minHeight: '250px',width: '250px',  marginBottom: '15px', padding: '5px' }}>
        <CardMedia
         sx={{ height: '200px',width: '200px', backgroundSize: 'contain' }}
         image={genre.image}
        />
        </Paper>
        <Typography variant='h5' color="#fff">
          {genre.name}
        </Typography>
      </CardContent>  
    </Card>
    </Grid>
        ) )
      }
    </Grid>
</Grid>
    </Paper>
      <Card variant="outlined"  sx={{ display: 'flex', flexDirection: 'row',width: '100%', minHeight: '500px', margin: '50px 0px'}}>
      <CardMedia
                    sx={{ width: '50%',minHeight: '500px', backgroundSize: 'cover' }}
                    image={carousel1}
                  />
    <Paper sx={{ width: '50%',display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center',backgroundColor: '#e9e9e9'}}>
      <Typography variant='h2' >Read with pleasure</Typography >
      <Typography variant='body1' sx={{ margin: "20px 0px" }} >Read your favorite books in a convenient way for you at any time</Typography >
      <Button variant="contained"  size="large" color="info" sx={{width: '200px'}}>Buy now</Button>
    </Paper>
      </Card>
      </Container>
    </div>
  );
}

export default Root;
