import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Homepage} from './pages1/Homepage';
import {Gallery} from './pages1/Gallery';
import {MemeMagic} from './pages1/MemeMagic';
import {Playlists} from './pages1/Playlists';
import {SocialMashup} from './pages1/SocialMashup';
import {Guestbook} from './pages1/Guestbook';
import './index.css'
import App from './App.jsx'
import { AboutUs } from "./pages1/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/memes",
        element: <MemeMagic />,
      },
      {
        path: "/playlists",
        element: <Playlists />,
      },
      {
        path: "/social",
        element: <SocialMashup />,
      },
      {
        path: "/guestbook",
        element: <Guestbook />,
      },
      {
        path: "/About-us",
        element: <AboutUs />,
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
