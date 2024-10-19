import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Catalog from "./pages/CatalogPage/Catalog";
import Contacts from "./pages/ContactsPage/Contacts";
import Documents from "./pages/DocumentsPage/Documents";
import Product from "./pages/ProductPage/Product";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/documents" element={<Documents />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
