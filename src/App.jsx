import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import Home from './components/Home'

const router=createBrowserRouter([
  {
     path:'/',
     element:
     <div>
         <Navbar/>
         <Home/>
     </div>
  },
  {
    path:"/login",
    element:
    <div>
      <Navbar/>
        <Login/>
    </div>
  },
  {
    path:'/signup',
    element:
    <div>
      <Navbar/>
       <SignUp/>
    </div>
  },
  {
     path:'*',
     element:
     <div>
          <NotFound/>
     </div>
  }
])

function App() {
  

  return (
    <>
      <div>
        <RouterProvider router={router}>

        </RouterProvider>
        
       </div>
    </>
  )
}

export default App
