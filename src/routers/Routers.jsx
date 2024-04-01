import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Origin from "../pages/About/Origin";
import Services from "../pages/About/Services";
import Jobs from "../pages/About/Jobs";
import News from "../pages/News/News";
import Card from "../pages/Card";
import Maps from "../pages/Maps";
import Menu from "../pages/Menu/Menu";
import Products from "../pages/Menu/Products";
import Page404 from "../pages/Page404";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/Menu/ProductDetail";
import NewDetail from "../pages/News/NewDetail";
import Discover from "../pages/Discover";
import Cart from "../pages/Cart";
import Layout from "../Admin/components/Layout";
import Dashboard from "../Admin/pages/Dashboard";
import AllProducts from "../Admin/pages/AllProducts";
import AllOrder from "../Admin/pages/AllOrder";
import AllCustomers from "../Admin/pages/AllCustomer";

const Routers = () => {
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/origin" element={<Origin />} />
      <Route path="/services" element={<Services />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewDetail />} />
      <Route path="/card" element={<Card />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/admin" element={<Layout />} >
        <Route index element={<Dashboard />} />
        <Route path="/admin/products" element={<AllProducts />} />
        <Route path="/admin/orders" element={<AllOrder />} />
        <Route path="/admin/customers" element={<AllCustomers />} />
      </Route>
    </Routes>
  )
}

export default Routers
