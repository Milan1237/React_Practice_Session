import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Login from './pages/Login.jsx'
import Signup from './Components/Signup.jsx'
import AddPost from './pages/Add-post.jsx'
import Post from './pages/Post.jsx'
import Allposts from './pages/All-post.jsx'
import EditPost from './pages/EditForm.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element : <Signup/>
      },
      {
        path: "/add-post",
        element: <AddPost />

      },
      {
        path: "/posts/:slug",
        element: <Post />
      },
      {
        path:"/all-posts",
        element: <Allposts />
      },
      {
        path: "edit-post/:slug",
        element: <EditPost />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={router}/>
    </Provider >
  </React.StrictMode>
)
