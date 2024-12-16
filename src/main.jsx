import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Catalog from "./pages/CatalogPage/Catalog";
import Contacts from "./pages/ContactsPage/Contacts";
import Documents from "./pages/DocumentsPage/Documents";
import Product from "./pages/ProductPage/Product";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/documents",
        element: <Documents />,
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
