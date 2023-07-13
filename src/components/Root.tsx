import React, {useState, useEffect} from 'react';

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

const BOOK_API = "https://www.googleapis.com/books/v1/volumes?q=Система";

function Root() {

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
          <Typography variant="body1" color="text.secondary" sx={{wordWrap: 'break-word', maxHeight: '200px', overflow: 'hidden'}}>
            {book.volumeInfo.description}
          </Typography>
          <Chip label="500 uah" variant="outlined" />
          <Chip label="aviable" color="success" sx={{ marginLeft: '10px', marginRight: '10px' }} />
          <Chip label="5⭐"/>
        </CardContent>
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

export default Root;
