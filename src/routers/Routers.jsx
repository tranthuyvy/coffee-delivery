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
import Coffee from "../pages/Menu/Coffee";
import Page404 from "../pages/Page404";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/origin" element={<Origin />} />
      <Route path="/services" element={<Services />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/news" element={<News />} />
      <Route path="/card" element={<Card />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/coffee" element={<Coffee />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default Routers
