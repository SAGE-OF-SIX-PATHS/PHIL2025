import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout";
import NotFoundPage from "../pages/NotFoundPage";

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <Layout />, // Component to render for this path
    errorElement: <NotFoundPage />, // Component to render if there's an error
  },
]);

// Router component to provide routing context
const Router = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default Router;
