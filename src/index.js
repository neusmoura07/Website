import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//1 configurando router
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Pagina01 from './routes/pagina1';
import Pagina02 from './routes/pagina2';
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
  }
])


//fim

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
