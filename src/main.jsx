// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )





import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Layout from "./layout/Layout.jsx";
import Landing from "./Landing/Landing.jsx";





const router = createBrowserRouter([
  {
        path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Landing></Landing>
      },
    ]
  }
]);



createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
