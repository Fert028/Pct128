import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Catalog from "./pages/CatalogPage/Catalog";
import Contacts from "./pages/ContactsPage/Contacts";
import Documents from "./pages/DocumentsPage/Documents";
import Product from "./pages/ProductPage/Product";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home title={"ПХТ"} />} />
          <Route path="/about" element={<About title={"ПХТ - О нас"} />} />
          <Route path="/catalog" element={<Catalog title={"ПХТ - Каталог"} />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contacts" element={<Contacts title={"ПХТ - Контакты"} />} />
          <Route path="/documents" element={<Documents title={"ПХТ - Документы"} />} />
          <Route path="*" element={<Home title={"ПХТ"} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
