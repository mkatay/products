import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Products } from "./components/Products";
import { Product } from "./components/Product";
import { Contact } from "./components/Contact";
import "./app.scss";

function App() {
  return (
    <>
      <NavBar />
      <div className="mt-5 " id="app">
        <Routes>
          <Route path="/" element={<div>Home page...</div>} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
