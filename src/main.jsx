import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Landing_page/Home/Home.jsx";
import About from "./Landing_page/About/About.jsx";
import {Signup,Login} from "./Landing_page/Signup/Index.jsx"
import PricingPage from "./Landing_page/Pricing/PricingPage.jsx";
import SupportPage from "./Landing_page/Support/SupportPage.jsx";
import ProductsPage from "./Landing_page/Products/ProductsPage.jsx";
import SignupPage from "./Landing_page/Signup/SignupPage.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
