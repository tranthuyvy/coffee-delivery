import { useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartRequest } from "../redux/actions/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart.data);
  const cartQuantity = cart?.total_quantity
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCartRequest());
  }, [dispatch])

  const toggleAboutMenu = () => {
    setShowAboutMenu(!showAboutMenu);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <>
      <nav className="hidden md:block md:p-0 fixed w-full bg-main border-gray-200 z-[100] shadow-md">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center mx-auto md:px-5 md:pr-0 lg:px-14 lg:py-2 lg:pr-0">
          <a
            className="flex items-center py-[10px] px-[20px] md:py-0 md:px-0"
            href="/"
          >
            <img
              className="object-cover w-[50px] sm:w-[70px] lg:w-[90px]"
              src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/White_logo800.png"
              alt="logo"
            />
          </a>
          <button className="inline-flex items-center bg-primary md:bg-transparent py-[15px] px-[10px] md:py-2 md:px-2 ml-1 text-sm text-white md:hidden focus:outline-none focus:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-primary md:bg-transparent py-[10px] px-[30px] md:py-0 md:px-0">
            <ul className="flex flex-col mt-0 md:flex-row md:space-x-2 lg:space-x-8 md:mt-0 items-center">

              <li className="hidden sm:block w-full text-left md:w-fit">
                <div className="border-white hover:border-b-2 hover:border-white">
                  <p className="font-RobotoMedium uppercase text-[20px] md:text-[17px] xl:text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-white border-none sm:border-b border-gray-100 hover:bg-transparent lg:hover:bg-transparent lg:border-0 lg:hover:text-white md:py-4 lg:py-6 flex justify-center items-center cursor-pointer">
                    <a href="/discover">Khám Phá</a>
                  </p>
                </div>
              </li>

              <li className="hidden sm:block w-full text-left md:w-fit">
                <div className="border-b-2 border-main hover:border-b-2 hover:border-white">
                  <p className="font-RobotoMedium uppercase text-[20px] md:text-[17px] xl:text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-white border-none sm:border-b border-gray-100 hover:bg-transparent lg:hover:bg-transparent lg:border-0 md:py-4 lg:py-6 flex justify-center items-center cursor-pointer">
                    <a href="/about">Về Chúng Tôi</a>
                    <svg
                      onClick={toggleAboutMenu}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 ml-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      ></path>
                    </svg>
                  </p>
                  {showAboutMenu && (
                    <div className="hidden sm:block w-[90%] lg:w-[70%] left-[15%] absolute mx-auto bg-primary mt-[10px]">
                      <div className="flex">
                        <div className="w-[50%] text-white p-[60px]">
                          <h1 className="font-RobotoMedium text-4xl mb-3">
                            About
                          </h1>
                          <p className="font-normal text-white">
                            Highland ...
                          </p>
                        </div>
                        <div className="w-[50%] bg-white p-[60px]">
                          <div className="flex">
                            <div className="w-[50%]">
                              <ul className="font-medium">
                                <li className="mb-5 p-3">
                                  <a
                                    className="font-RobotoMedium text-[22px] hover:text-red"
                                    href="/about"
                                  >
                                    Giới Thiệu
                                  </a>
                                </li>
                                <li className="p-3">
                                  <a
                                    className="font-RobotoMedium text-[22px] hover:text-red"
                                    href="/origin"
                                  >
                                    Nguồn gốc
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-[50%]">
                              <ul className="font-RobotoMedium">
                                <li className="mb-5 p-3">
                                  <a
                                    className="font-RobotoMedium text-[22px] hover:text-red"
                                    href="/services"
                                  >
                                    Dịch Vụ
                                  </a>
                                </li>
                                <li className="p-3">
                                  <a
                                    className="font-RobotoMedium text-[22px] hover:text-red"
                                    href="/jobs"
                                  >
                                    Nghề Nghiệp
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </li>

              <li className="hidden sm:block w-full text-left md:w-fit">
                <div className="border-b-2 border-main hover:border-b-2 hover:border-white">
                  <p className="font-RobotoMedium uppercase text-[20px] md:text-[17px] xl:text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-white border-none sm:border-b border-gray-100 hover:bg-transparent lg:hover:bg-transparent lg:border-0 lg:hover:text-white md:py-4 lg:py-6 flex justify-center items-center cursor-pointer">
                    <a href="/menu">Thực Đơn</a>
                    <svg
                      onClick={toggleMenu}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 ml-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      ></path>
                    </svg>
                  </p>
                  {showMenu && (
                    <div className="hidden sm:block w-[90%] left-[5%] absolute mx-auto bg-primary mt-[10px]">
                      <div className="flex">
                        <div className="w-[30%] text-white p-[60px]">
                          <img
                            src="https://www.highlandscoffee.com.vn/vnt_upload/product/04_2023/PHIN_SUA_DA_5.1.png"
                            alt="coffee"
                          />
                        </div>
                        <div className="w-[70%] bg-white p-[60px]">
                          <div className="flex">
                            <div className="w-[35%]">
                              <a
                                className="font-RobotoMedium text-[30px] hover:text-red"
                                href="/products"
                              >
                                Cà Phê
                              </a>
                              <ul>
                                <li>
                                  <a
                                    className="text-[20px] font-RobotoMedium hover:text-red"
                                    href="/products"
                                  >
                                    Cà Phê Phin
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="text-[20px] font-RobotoMedium hover:text-red"
                                    href="/products"
                                  >
                                    Phindi
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="text-[20px] font-RobotoMedium hover:text-red"
                                    href="/products"
                                  >
                                    Cà Phê Espresso
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-[35%]">
                              <a
                                className="font-RobotoMedium text-[30px] hover:text-red"
                                href="/products"
                              >
                                FREEZE
                              </a>
                              <ul>
                                <li>
                                  <a
                                    className="text-[20px] font-RobotoMedium hover:text-red"
                                    href="/products"
                                  >
                                    Freeze Cà Phê Phin
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="text-[20px] font-RobotoMedium hover:text-red"
                                    href="/products"
                                  >
                                    Freeze Không Cà Phê
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-[30%]">
                              <a
                                className="font-RobotoMedium text-[30px] hover:text-red"
                                href="/products"
                              >
                                Trà
                              </a>
                              <ul>
                                <li>
                                  <a
                                    className="text-[20px] font-RobotoMedium hover:text-red"
                                    href="/products"
                                  >
                                    Trà Sen Vàng Mới
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="text-[20px] font-RobotoMedium hover:text-red"
                                    href="/products"
                                  >
                                    Trà Thanh Đào
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </li>

              <li className="hidden sm:block w-full text-left md:w-fit">
                <div className="border-white hover:border-b-2 hover:border-white">
                  <p className="font-RobotoMedium uppercase text-[20px] md:text-[17px] xl:text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-white border-none sm:border-b border-gray-100 hover:bg-transparent lg:hover:bg-transparent lg:border-0 lg:hover:text-white md:py-4 lg:py-6 flex justify-center items-center cursor-pointer">
                    <a href="/news">Tin Tức</a>
                  </p>
                </div>
              </li>

              <li className="hidden sm:block w-full text-left md:w-fit border-white hover:border-b-2 hover:border-white">
                <a
                  className="font-RobotoMedium uppercase block text-white text-[20px] md:text-[17px] xl:text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-10 border-none sm:border-b border-b border-gray-100 hover:bg-transparent lg:hover:bg-transparent lg:border-0 lg:hover:text-white md:py-4 lg:py-6"
                  href="/contact"
                >
                  Liên Hệ
                </a>
              </li>

              <li className="hidden sm:block w-full text-left md:w-fit">
                <div className="text-white">
                  <a href="/cart">
                    <FaShoppingCart fontSize={25} />
                    <span className="bg-white text-main w-5 h-5 flex items-center justify-center rounded-full absolute top-[18px] right-[88px]">
                      {cartQuantity}
                    </span>
                  </a>
                </div>
              </li>

              <li className="hidden sm:block w-full pr-5 text-left md:w-fit">
                <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="inline-flex rounded-full focus:ring-2 focus:outline-none focus:ring-neutral-300">
                      <span className="sr-only">Open</span>
                      <div
                        className="w-12 h-12 rounded-full bg-gray-200 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url("https://png.pngtree.com/png-clipart/20230914/original/pngtree-christmas-corgi-vector-png-image_12160999.png")' }}
                      >
                        <span className="sr-only">ttv</span>
                      </div>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-left z-10 absolute right-3 mt-2 w-40 rounded-md bg-white shadow-md p-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`${active && "text-white bg-primary font-normal"} block text-primary focus:bg-hoverPrimary cursor-pointer px-4 py-2 rounded-md`}
                            onClick={() => navigate("/profile")}
                          >
                            Your Profile
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`${active && "text-white bg-primary font-normal"} block text-primary focus:bg-hoverPrimary cursor-pointer px-4 py-2 rounded-md`}
                            onClick={() => navigate("/orders-history")}
                          >
                            Orders History
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            onClick={() => handleLogout()}
                            className={`${active && "text-white bg-primary font-normal"} block text-primary focus:bg-hoverPrimary cursor-pointer px-4 py-2 rounded-md`}
                          >
                            Logout
                          </div>
                        )}
                      </Menu.Item>

                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>

            </ul>
          </div>
        </div>

      </nav>

      {/* for media < md */}
      <nav className="md:hidden md:p-0 fixed w-full bg-main border-gray-200 z-[100] shadow-sm">
        <div className="flex justify-between items-center mx-auto md:px-5 md:pr-0 lg:px-16 lg:pr-0 flex-wrap md:flex-nowrap">
          <a
            className="flex items-center py-[15px] px-[20px] md:py-0 md:px-0"
            href="/"
          >
            <img
              className="object-contain w-[50px] sm:w-[70px] lg:w-[100px] object-center"
              src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/White_logo800.png"
              alt="logo"
            />
          </a>
          <button
            onClick={handleToggle}
            className="inline-flex items-center bg-main md:bg-transparent py-[15px] px-[10px] md:py-2 md:px-2 ml-1 text-sm text-white md:hidden focus:outline-none transition duration-300 transform hover:translate-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              ></path>
            </svg>
          </button>

          {isOpen && (
            <div className="items-center justify-between relative h-[100vh] w-full md:flex md:w-auto md:order-1 bg-[#FFF] md:bg-transparent py-[10px] px-[30px] md:py-0 md:px-0">
              {!showAboutMenu &&
                !showMenu && (
                  <ul className="flex flex-col items-center mt-0 md:flex-row md:space-x-2 lg:space-x-8 md:mt-0">
                    <li className="w-full text-left md:w-fit">
                      <a
                        href="/discover"
                        className="flex text-left items-center font-RobotoMedium uppercase text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-black w-full hover:text-red-600"
                      >
                        Khám Phá
                      </a>
                    </li>
                    <li className="w-full text-left md:w-fit">
                      <button
                        onClick={toggleAboutMenu}
                        className="flex text-left items-center font-RobotoMedium uppercase text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-black hover:text-red-600"
                      >
                        Về Chúng Tôi
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 ml-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          ></path>
                        </svg>
                      </button>
                    </li>
                    <li className="w-full text-left md:w-fit">
                      <button
                        onClick={toggleMenu}
                        className="flex text-left items-center font-RobotoMedium uppercase text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-black w-full hover:text-red-600"
                      >
                        Thực Đơn
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 ml-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          ></path>
                        </svg>
                      </button>
                    </li>
                    <li className="w-full text-left md:w-fit">
                      <a
                        href="/news"
                        className="flex text-left items-center font-RobotoMedium uppercase text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-black w-full hover:text-red-600"
                      >
                        Tin Tức
                      </a>
                    </li>
                    <li className="w-full text-left md:w-fit">
                      <a
                        href="/contact"
                        className="flex text-left items-center font-RobotoMedium uppercase text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-black w-full hover:text-red-600"
                      >
                        Liên Hệ
                      </a>
                    </li>
                  </ul>
                )}
              {showMenu && (
                <ul className="flex flex-col items-center mt-0 md:flex-row md:space-x-2 lg:space-x-8 md:mt-0">
                  <li className="w-full text-left md:w-fit">
                    <button
                      onClick={toggleMenu}
                      className="uppercase flex items-center font-RobotoMedium text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-black text-left w-full hover:text-red-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 mr-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        ></path>
                      </svg>
                      Back
                    </button>
                  </li>
                  <li className="w-full text-left md:w-fit">
                    <a
                      className="uppercase font-RobotoMedium text-black block text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 hover:text-red-600"
                      href="#"
                    >
                      Cà Phê
                    </a>
                  </li>

                  <li className="w-full text-left md:w-fit">
                    <a
                      className="uppercase font-RobotoMedium text-black block text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 hover:text-red-600"
                      href="#"
                    >
                      Freeze
                    </a>
                  </li>

                  <li className="w-full text-left md:w-fit">
                    <a
                      className="uppercase font-RobotoMedium text-black block text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 hover:text-red-600"
                      href="#"
                    >
                      Trà
                    </a>
                  </li>
                </ul>
              )}
              {showAboutMenu && (
                <ul className="flex flex-col items-center mt-0 md:flex-row md:space-x-2 lg:space-x-8 md:mt-0">
                  <li className="w-full text-left md:w-fit">
                    <button
                      onClick={toggleAboutMenu}
                      className="uppercase flex items-center font-RobotoMedium text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-black text-left w-full hover:text-red-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 mr-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        ></path>
                      </svg>
                      Back
                    </button>
                  </li>
                  <li className="w-full text-left md:w-fit">
                    <a
                      className="uppercase font-RobotoMedium text-black block text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 hover:text-red-600"
                      href="/about"
                    >
                      Giới Thiệu
                    </a>
                  </li>

                  <li className="w-full text-left md:w-fit">
                    <a
                      className="uppercase font-RobotoMedium text-black block text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 hover:text-red-600"
                      href="/services"
                    >
                      Dịch Vụ
                    </a>
                  </li>

                  <li className="w-full text-left md:w-fit">
                    <a
                      className="uppercase font-RobotoMedium text-black block text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 hover:text-red-600"
                      href="/origin"
                    >
                      Nguồn Gốc
                    </a>
                  </li>

                  <li className="w-full text-left md:w-fit">
                    <a
                      className="uppercase font-RobotoMedium text-black block text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 hover:text-red-600"
                      href="/jobs"
                    >
                      Nghề Nghiệp
                    </a>
                  </li>
                </ul>
              )}

              <hr className="mt-10" />
              <div className="text-left mt-3">
                <a
                  className="text-black hover:text-red ease-out duration-300 mr-3 text-[12.5px]"
                  href="/disclaimer"
                >
                  Disclaimer
                </a>
                <a
                  className="border-l border-black pl-3 text-black hover:text-red ease-out duration-300 text-[12.5px]"
                  href="/privacy-notice"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
