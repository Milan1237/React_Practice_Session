import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Root , {loader as rootLoader} from '../Routes/Root'
import Contact from '../Routes/Contact'
import ErrorPage from '../Routes/Error'
import {action as rootAction} from '../Routes/Root'
import {loader as contactLoader} from '../Routes/Contact'
import EditContact from '../Routes/Edit'
import {loader as editLoader} from '../Routes/Edit'
import {action as editAction} from '../Routes/Edit'
import {action as destroyAction } from '../Routes/Destroy'
import {action as contactAction} from '../Routes/Contact'
import Index from '../Routes/Index'
//createBrowserRouter is the main and starting function which controll all the routes in a website 
const routeProvider = createBrowserRouter([
  {
    path: "/" ,
    element: <Root />,
    errorElement: <ErrorPage/> ,
    loader: rootLoader ,
    action: rootAction ,
    children: [
      {
        index:true,
        element: <Index />
      },
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader ,
        errorElement: <ErrorPage/>,
        action: contactAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: editLoader,
        action: editAction,
        errorElement: <ErrorPage/>
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <ErrorPage/>
      }
    ]
  },
],)


ReactDOM.createRoot(document.getElementById('root')).render(
   
  <React.StrictMode>
    {/* Router provider provides all the route element etc we give while in createBrowserRouter function */}
    <RouterProvider router={routeProvider}/> 
  </React.StrictMode>,
)
