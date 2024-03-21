import { useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Routers from "../routers/Routers.jsx";

const Layout = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";
  const isForgotPasswordPage = location.pathname === "/forgotPassword";

  if (isLoginPage || isSignupPage || isForgotPasswordPage) {
    return (
      <div>
        <Routers />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
