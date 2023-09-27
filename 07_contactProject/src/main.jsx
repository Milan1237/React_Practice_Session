import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { loader as rootLoader, action as rootAction } from './routes/Root'
import ErrorPage from './ErrorPage'
import Contact from './routes/Contact'
import { contactLoader } from './routes/Contact'
import Edit from './routes/Edit'
import {action as editAction} from './routes/Edit'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        errorElement: <ErrorPage />,
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
