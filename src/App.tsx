import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import games from './games.json';

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

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const BOOK_API = "https://www.googleapis.com/books/v1/volumes?q=Система";

function App() {

  const [books, setBooks] = useState<any[]>([]);
  useEffect(() => {
    fetch(BOOK_API)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items);
      });
  }, [])


{books.length > 0 && books.map((book, index) => {console.log(book.volumeInfo.description)}
  )}
  return (
    <div className="App">
    <Container>
    <Grid container spacing={2}>
      {books.length > 0 && books.map((book, index) => (
        <Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 4 }} minHeight={160} >
        <Card sx={{ maxWidth: 345 }}>
        {book.volumeInfo.imageLinks === undefined ? 
        <Skeleton variant="rounded" width={"auto"} height={500}/>  :
        <CardMedia
          sx={{ minHeight: 500 }}
          image={book.volumeInfo.imageLinks.thumbnail}
          title="book"
        />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.volumeInfo.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{wordWrap: 'break-word', maxHeight: '200px', overflow: 'hidden'}}>
            Price aviability rating {book.volumeInfo.description}
          </Typography>
        </CardContent>
        <Chip label="500 uah" variant="outlined" />
        <Chip label="aviable" color="success"/>
        <Chip label="5⭐"/>
        <CardActions>
          <Button size="small">Buy</Button>
        </CardActions>
      </Card>
      </Grid>
      ))}
      </Grid>
      </Container>
    </div>
  );
}

export default App;
