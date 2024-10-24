import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {RouterProvider,createBrowserRouter,} from "react-router-dom"
const Home=lazy(()=>import('./pages/Home.tsx'))
import Loading from './pages/Loading.tsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<Suspense fallback={<Loading/>}><App/></Suspense>,
    children:[
      {
path:"/",
element:<Suspense fallback={<Loading/>}><Home/></Suspense>
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
