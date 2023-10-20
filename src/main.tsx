import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './routes/root'
import { Home } from './routes/home'
import { Eventos } from './routes/eventos'
import { Nosotros } from './routes/nosotros'
import { RootAdmin } from './routes/admin/rootAdmin'
import { HomeAdmin } from './routes/admin/homeAdmin'
import { Registro } from './routes/auth/registro'
import { IniciarSesion } from './routes/auth/iniciarSesion'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'auth/iniciar-sesion',
        element: <IniciarSesion />,
      },
      {
        path: 'eventos',
        element: <Eventos />,
      },
      {
        path: 'nosotros',
        element: <Nosotros />,
      },
      {
        path: 'registro',
        element: <Registro />,
      },
    ],
  },
  {
    path: '/dashboard/admin',
    element: <RootAdmin />,
    children: [
      {
        index: true,
        element: <HomeAdmin />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
