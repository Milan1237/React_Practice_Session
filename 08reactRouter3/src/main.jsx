import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from '../Router/Index'
import Home from '../components/Home';
import About from '../components/About'
import Contact from '../components/Contact';
import Github, { follower } from '../components/Github';
import './index.css';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Myparams from '../components/Myparams';

const router = createBrowserRouter([
 {
  path: "/",
  element: <Main />,
  children: [
    {
      path: "",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/github",
      element: <Github />,
      loader: follower
      
    },
    {
      path: "/users/:userId",
      element: <Myparams />
    }

  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
