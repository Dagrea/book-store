import React from 'react';

import store from './redux/store'
import { Provider } from 'react-redux'

import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider, Outlet} from "react-router-dom";

import Root from './pages/Root';
import Navbar from './components/Navbar';
import BookCard from './pages/BookCard';
import About from './pages/About';
import Footer from './components/Footer';
import Categories from './pages/Categories';

import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton'; 

import './index.css';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Layout = ()=>{
  return <div >
  <Navbar/>
  <Outlet />
  <Footer/>
  </div>
}

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
     children:[
      {
        path: '/',
        element: <Root/>
      },
      {
        path:'/categories',
        element: <Categories/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/card/:cardId',
        element: <BookCard/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider 
    router={router}
    fallbackElement={<Skeleton variant="rounded" width={"auto"} height={"100vh"}/> }
  />
  </Provider>
  </React.StrictMode>
);

reportWebVitals();
