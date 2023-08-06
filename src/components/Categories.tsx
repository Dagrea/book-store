import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { addItem as addFavItem, deleteItem as deleteFavItem } from '../redux/favorite'
import { addItem as addCartItem } from '../redux/cart'

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
  const favoriteIds = favorite.items.map((book: any) => book.id)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      { (books.length > 0) && books.map((book, index) => (
        <Grid key={book.id} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} height={'auto'}>
        <Card sx={{ maxWidth: 345,  minHeight: '100%', position: 'relative' }} >
        {!book.volumeInfo.imageLinks ? 
        <Skeleton variant="rounded" width={"auto"} height={195}/>  :
        <CardMedia
          sx={{ height: 195, backgroundSize: 'contain' }}
          image={book.volumeInfo.imageLinks.thumbnail}
          component={Link} to={'/card/'+ ++index}
        />}
        <CardContent>
          <Typography gutterBottom variant="body1" component={Link} to={'/card/'+ ++index} sx={{textDecoration: "none", color:'inherit'}}>
            {book.volumeInfo.title ? book.volumeInfo.title : "Unknown"}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{wordWrap: 'break-word', maxHeight: '200px', overflow: 'hidden'}}>
            {book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Unknown author"}
          </Typography>
          <Chip label={book.volumeInfo.pageCount ? book.volumeInfo.pageCount+" uah" : '...'} variant="outlined" />
          <Chip label="aviable" color="success" sx={{ marginLeft: '10px', marginRight: '10px' }} />
          <Chip label="5⭐"/>
        </CardContent>
        <CardActions sx={{visibility :'hidden'}}>
          <Button size="small">Buy</Button>
        </CardActions>
        <CardActions sx={{ position: 'absolute', bottom: '0', right: '0' }}>
          {
            favoriteIds.includes(book.id) ? 
            <Button onClick={() => dispatch(deleteFavItem(book.id))}  size="small">From favorite</Button> 
            :

            <Button onClick={() => dispatch(addFavItem({
              id: book.id, name:book.volumeInfo.title || "", 
              img: book.volumeInfo.imageLinks?.thumbnail || "" }))}  
            size="small">To favorite</Button>
          }
          <Button onClick={() => dispatch(addCartItem({
            id: book.id, 
            name:book.volumeInfo.title || "", 
            img:book.volumeInfo.imageLinks?.thumbnail || "", 
            quantity:1, 
            price: book.volumeInfo.pageCount || "" }))} 
          size="small">Buy</Button>
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
