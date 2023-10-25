import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Details from "./routes/details";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
        path: "user/:userId",
        element: <Details />,
      },
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <App />
    <RouterProvider router={router} />
)
