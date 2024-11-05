import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loading from './pages/Loading.tsx';

// Lazy loading the components
const Home = lazy(() => import('./pages/Home.tsx'));
const Nopage = lazy(() => import('./pages/Nopage.tsx'));
const Signup = lazy(() => import('./pages/Signup.tsx'));
const Login = lazy(() => import('./pages/Login.tsx'));
const Game = lazy(() => import('./pages/Game.tsx'));
const Quizegamepage = lazy(() => import('./pages/Games/Quizegame.tsx'));
const TopStories = lazy(() => import('./pages/TopStories.tsx'));
const Selfies=lazy(() => import('./pages/Selfies.tsx'));
const Userpage=lazy(()=>import('./pages/Userpage.tsx'))
// Setting up the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loading />}><App /></Suspense>,
    children: [
      {
        path:"/:username",
        element:<Suspense fallback={<Loading/>}><Userpage/></Suspense>
      }
      ,
      {
        path: "/home",
        element: <Suspense fallback={<Loading />}><Home /></Suspense>
      },

      {
        path: "/signup",
        element: <Suspense fallback={<Loading />}><Signup /></Suspense>
      },
      {
        path: "/login",
        element: <Suspense fallback={<Loading />}><Login /></Suspense>
      },
      {
        path: "/top-stories",
        element: <Suspense fallback={<Loading />}><TopStories /></Suspense>
      },
      {
        path: "/game",
        element: <Suspense fallback={<Loading />}><Game /></Suspense>
      },
      {
        path: "/game/quizegame",
        element: <Suspense fallback={<Loading />}><Quizegamepage /></Suspense>
      },
      {
        path:"/selfies",
        element:<Suspense fallback={<Loading />}><Selfies /></Suspense>

      },
      {
        path: "*",
        element: <Suspense fallback={<Loading />}><Nopage /></Suspense>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
