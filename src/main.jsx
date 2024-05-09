import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';
import Error from './components/error/Error.jsx';
import Home from './components/pages/HomePage.jsx';
import BigBooks from './components/bookelements/BigBooks.jsx';
import List from './components/list/List.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/book/:bookId',
        element: <BigBooks></BigBooks>,
        loader: () => fetch('/Books.json')
      },
      {
        path: '/list',
        element: <List></List>,
        loader: () => fetch('/Books.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
