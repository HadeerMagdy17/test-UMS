

import './App.css'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './Components/AuthLayout'
import Login from './Components/Login/Login'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import UserData from './Components/UserData/UserData'
import Profile from './Components/Profile/Profile';
import UsersList from './Components/UsersList'
import NotFound from './Components/NotFound/NotFound'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const routes=createBrowserRouter([
    {
      path:"",
      element:<AuthLayout/>,
      errorElement:<NotFound/>,
      children:[
        {index:true,element:<Login/>},
        {path:"login",element:<Login/>}    
      ]

    },
    {
      path:"dashboard",
      element:<MasterLayout/>,
      errorElement:<NotFound/>,
      children:[
        {index:true,element:<Home/>},
        {path:"home",element:<Home/>},
        {path:"user-data",element:<UserData/>},
        {path:"profile",element:<Profile/>},
        {path:"users-list",element:<UsersList/>},

      ]
    }
  ])

  return (
    <>
    <ToastContainer/>
   <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
