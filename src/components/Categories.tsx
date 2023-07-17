import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { increment, addItem } from '../redux/favorite'

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip'; 
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; 
import Pagination from '@mui/material/Pagination'; 
import Skeleton from '@mui/material/Skeleton'; 

const BOOK_API = "https://www.googleapis.com/books/v1/volumes?q=Garry&maxResults=40";

function Categories() {

  const favorite = useAppSelector(state => state.favorite);
  const dispatch = useAppDispatch();

  const [books, setBooks] = useState<any[]>([]);
  useEffect(() => {
    fetch(BOOK_API)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items);
      });
  }, [])

  return (
    <div className="App" >
    <Container  sx={{minHeight: '100vh'}}>
    <Grid container spacing={2} justifyContent='center'>
      {books.length > 0 && books.map((book, index) => (
        <Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} height={'auto'}>
        <Card sx={{ maxWidth: 345,  minHeight: '100%', position: 'relative' }} >
        {book.volumeInfo.imageLinks === undefined ? 
        <Skeleton variant="rounded" width={"auto"} height={195}/>  :
        <CardMedia
          sx={{ height: 195, backgroundSize: 'contain' }}
          image={book.volumeInfo.imageLinks.thumbnail}
          component={Link} to={'/card/'+ ++index}
        />}
        <CardContent>
          <Typography gutterBottom variant="body1" component={Link} to={'/card/'+ ++index} sx={{textDecoration: "none", color:'inherit'}}>
            {book.volumeInfo.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{wordWrap: 'break-word', maxHeight: '200px', overflow: 'hidden'}}>
            {book.volumeInfo.authors[0]}
          </Typography>
          <Chip label="500 uah" variant="outlined" />
          <Chip label="aviable" color="success" sx={{ marginLeft: '10px', marginRight: '10px' }} />
          <Chip label="5⭐"/>
        </CardContent>
        <CardActions sx={{visibility :'hidden'}}>
          <Button size="small">Buy</Button>
        </CardActions>
        <CardActions sx={{ position: 'absolute', bottom: '0', right: '0' }}>
          <Button onClick={() => dispatch(addItem({name:book.volumeInfo.title, img:book.volumeInfo.imageLinks.thumbnail}))}  size="small">To favorite</Button>
          <Button size="small">Buy</Button>
        </CardActions>
      </Card>
      </Grid>
      ))}
      <Pagination count={10} />
      </Grid>
      </Container>
    </div>
  );
}

export default Categories;
