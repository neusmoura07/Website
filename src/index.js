import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css'

//1 configurando router
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Pagina01 from './routes/pagina1';
import Pagina02 from './routes/pagina2';
import Pagina03 from './routes/pagina3';
import errorpage from './routes/errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pagina01/>,
    errorElement: <errorpage/>,
  },
  {
    path:"login",
    element: <Pagina02/>,
  },
  {
    path:"areademembros",
    element: <Pagina03/>,
  }
])


//fim

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
