import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { loader as rootLoader, action as rootAction } from './routes/Root'
import ErrorPage from './ErrorPage'
import Contact from './routes/Contact'
import { contactLoader , favoriteAction } from './routes/Contact'
import Edit from './routes/Edit'
import {action as editAction} from './routes/Edit'
import { deleteCont } from './routes/Delete'
import Index from './routes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,
    children: [
      {index:true , element: <Index />},
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        errorElement: <ErrorPage />,
        action: favoriteAction,
      },
      {
        path: "/contacts/:contactId/destroy",
        action: deleteCont,
        errorElement: <div>Hello this is an custom error for deleting a contact</div>
      },

      {
        path: "contacts/:contactId/edit", //here edit is synced by action tag in contact page's edit
        element: <Edit />,
        loader: contactLoader,
        action: editAction,
      }
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
