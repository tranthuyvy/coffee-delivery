import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Origin from "../pages/About/Origin";
import Services from "../pages/About/Services";
import Jobs from "../pages/About/Jobs";
import News from "../pages/News/News";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/origin" element={<Origin />} />
      <Route path="/services" element={<Services />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/news" element={<News />} />
    </Routes>
  )
}

export default Routers
