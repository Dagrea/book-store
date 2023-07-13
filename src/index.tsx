import React from 'react';

import Root from './components/Root';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import About from './components/About';
import Footer from './components/Footer';
import Categories from './components/Categories';

import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton'; 

import './index.css';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
   path: "categories",
   element: <Categories />,
  },
  {
   path: "about",
   element: <About />,
  },
  {
   path: "card",
   element: <BookCard />,
  }


]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
  <Navbar/>
  <Container  sx={{
            minHeight: '100vh'
          }}>
  <RouterProvider 
    router={router}
    fallbackElement={<Skeleton variant="rounded" width={"auto"} height={"100vh"}/> }
  />
  </Container>
  <Footer/>
  </React.StrictMode>
);

reportWebVitals();
