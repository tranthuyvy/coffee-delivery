import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Origin from "../pages/About/Origin";
import Services from "../pages/About/Services";
import Jobs from "../pages/About/Jobs";
import News from "../pages/News/News";
import Card from "../pages/Card";
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
import AllCategory from "../Admin/pages/AllCategory";
import AdminOrderDetail from "../Admin/pages/AdminOrderDetail";
import AdminProductDetail from "../Admin/pages/AdminProductDetail";
import CreateProduct from "../Admin/pages/CreateProduct";
import UpdateProduct from "../Admin/pages/UpdateProduct";

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
      <Route path="/menu" element={<Menu />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/admin" element={<Layout />} >
        <Route index element={<Dashboard />} />
        <Route path="/admin/products" element={<AllProducts />} />
        <Route path="/admin/create-product" element={<CreateProduct />} />
        <Route path="/admin/update-product/:id" element={<UpdateProduct />} />
        <Route path="/admin/product/:id" element={<AdminProductDetail />} />
        <Route path="/admin/orders" element={<AllOrder />} />
        <Route path="/admin/order/:id" element={<AdminOrderDetail />} />
        <Route path="/admin/customers" element={<AllCustomers />} />
        <Route path="/admin/category" element={<AllCategory />} />
      </Route>
    </Routes>
  )
}

export default Routers
