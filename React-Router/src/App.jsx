import { useState } from 'react'
import Navbar from './componenr/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './componenr/Home'
import Login from './componenr/Login'
import About from './componenr/About'
import User from './componenr/User'

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <><Navbar /> <Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /> <Login /></>
    },
    {
      path: "/about",
      element: <><Navbar /> <About /></>
    },
 {
      path: "/user/:username",
      element: <><Navbar /> <User/></>
    },

  ])


  return (
    <>

      <RouterProvider router={router} />  

    </>
  )
}

export default App
