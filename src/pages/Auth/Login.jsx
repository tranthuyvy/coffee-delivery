import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './authStyle.css';
import Helmet from "../../components/Helmet/Helmet";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getUserProfileRequest } from "../../redux/actions/actions";
import CoffeeCanvas from "../../components/Canvas/Coffee";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user.data);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGoHome = () => {
    navigate("/");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:9999/auth/signin', {
        username,
        password
      });
      const { token, status } = response.data;
      if (status && token) {
        localStorage.setItem('token', token);
        dispatch(getUserProfileRequest());
        console.log("Đăng nhập thành công");

      } else {
        console.log("Đăng nhập không thành công");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (user) {
      if (user.user.role && (user.user.role.role_name === "ADMIN" || user.user.role.role_name === "STAFF")) {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    }
  }, [user, navigate]);

  return (
    <Helmet title="Login">

      <div className="full-screen relative z-[-1]" >
        <img
          className="fixed h-full w-full hover:cursor-none"
          src="https://www.highlandscoffee.com.vn/vnt_upload/cake/SPECIALTYCOFFEE/Untitled-1-01.png"
          alt="Background"
        />

        <img
          onClick={handleGoHome}
          className="absolute cursor-pointer w-[100px] h-[80px] ml-3 py-[10px] pl-3"
          src="https://www.highlandscoffee.com.vn/vnt_upload/File/11_2023/Red_logo800.png"
          alt="Logo"
        />

        <div className="layout_login absolute flex justify-center items-center mt-[8%] ml-[8%] w-[75%] rounded-[15px]">
          <div className="flex-col col-span-1 w-1/3 h-full object-contain border-r-2 border-neutral-400">
            <CoffeeCanvas />
          </div>
          <div className="flex-col col-span-1 w-2/3">
            <h1 className="font-RobotoSemibold text-center mb-8 text-main text-[25px] uppercase">
              Đăng Nhập
            </h1>
            <div className="input">
              <label className="">Số Điện Thoại</label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="h-8 w-[45%] outline-0 bg-[#ebebeb] p-2 rounded"
              />
            </div>
            <div className="input">
              <label className="">Mật Khẩu</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="h-8 w-[45%] outline-0 bg-[#ebebeb] p-2 rounded mb-2"
              />
            </div>
            <a className="link_forgotPass" href="/forgotPassword">
              Quên Mật Khẩu
            </a>
            <div className="btn_submit">
              <button className="uppercase" type="button" onClick={handleLogin}>
                Đăng nhập
              </button>
            </div>
            <div className="ml-[26%]">
              <span>Bạn chưa có tài khoản? </span>
              <a className="link_signup" href="/signup">
                Đăng Ký Ngay
              </a>
            </div>
          </div>

        </div>
      </div>
    </Helmet>
  );
};

export default Login;
