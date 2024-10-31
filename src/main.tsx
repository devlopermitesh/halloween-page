import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {RouterProvider,createBrowserRouter,} from "react-router-dom"
const Home=lazy(()=>import('./pages/Home.tsx'))
const Nopage=lazy(()=>import('./pages/Nopage.tsx'))
const Signup=lazy(()=>import('./pages/Signup.tsx'))
const Login=lazy(()=>import('./pages/Login.tsx'))
import Loading from './pages/Loading.tsx'
import TopStories from './pages/TopStories.tsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<Suspense fallback={<Loading/>}><App/></Suspense>,
    children:[
      {
path:"/",
element:<Suspense fallback={<Loading/>}><Home/></Suspense>
      },
      {
path:"/signup",
element:<Suspense fallback={<Loading/>}><Signup/></Suspense>
      },
      {
path:"/login",
element:<Suspense fallback={<Loading/>}><Login/></Suspense>
      },
      {
        path:'/top-Stories',
        element:<Suspense fallback={<Loading/>}><TopStories/></Suspense>
      },
      {
        path:"*",
        element:<Suspense fallback={<Loading/>}><Nopage/></Suspense>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
