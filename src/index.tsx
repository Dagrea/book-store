import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './components/Root';
import BookCard from './components/BookCard';
import About from './components/About';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Skeleton from '@mui/material/Skeleton'; 
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
   <RouterProvider
    router={router}
    fallbackElement={<Skeleton variant="rounded" width={"auto"} height={"100vh"}/> }
  />
  </React.StrictMode>
);

reportWebVitals();
