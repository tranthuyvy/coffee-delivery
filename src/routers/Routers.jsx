import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Origin from "../pages/Origin";
import Services from "../pages/Services";
import Jobs from "../pages/Jobs";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/origin" element={<Origin />} />
      <Route path="/services" element={<Services />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  )
}

export default Routers
