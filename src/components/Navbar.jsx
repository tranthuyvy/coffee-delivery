import { useState } from "react";

const Navbar = () => {
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAboutMenu = () => {
    setShowAboutMenu(!showAboutMenu);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="hidden md:block md:p-0 fixed w-full bg-[#b22830] border-gray-200 z-[100] shadow-md">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center mx-auto md:px-5 md:pr-0 lg:px-14 lg:py-2 lg:pr-0">
          <a
            className="flex items-center py-[10px] px-[20px] md:py-0 md:px-0"
            href="/"
          >
            <img
              className="object-contain w-[50px] sm:w-[70px] lg:w-[90px] object-center"
              src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/White_logo800.png"
              alt="logo"
            />
          </a>
          <button className="inline-flex items-center bg-[#0D182B] md:bg-transparent py-[15px] px-[10px] md:py-2 md:px-2 ml-1 text-sm text-white md:hidden focus:outline-none focus:text-[#fff]">
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
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-[#0D182B] md:bg-transparent py-[10px] px-[30px] md:py-0 md:px-0">
            <ul className="flex flex-col mt-0 md:flex-row md:space-x-2 lg:space-x-8 md:mt-0 items-center">
              <li className="hidden sm:block w-full text-left md:w-fit">
                <div className="border-b-2 border-[#b22830] hover:border-b-2 hover:border-[#fff]">
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
                    <div className="hidden sm:block w-[90%] lg:w-[70%] left-[15%] absolute mx-auto bg-[#53382c] mt-[10px]">
                      <div className="flex">
                        <div className="w-[50%] text-white p-[60px]">
                          <h1 className="font-RobotoMedium text-4xl mb-3">
                            About
                          </h1>
                          <p className="font-TitilliumRegular text-white">
                            Highland ...
                          </p>
                        </div>
                        <div className="w-[50%] bg-white p-[60px]">
                          <div className="flex">
                            <div className="w-[50%]">
                              <ul className="font-TitilliumRegular">
                                <li className="mb-5 p-3">
                                  <a
                                    className="font-RobotoMedium text-[22px] hover:text-[#E32526]"
                                    href="/about"
                                  >
                                    Giới Thiệu
                                  </a>
                                </li>
                                <li className="p-3">
                                  <a
                                    className="font-RobotoMedium text-[22px] hover:text-[#E32526]"
                                    href="#"
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
                                    className="font-RobotoMedium text-[22px] hover:text-[#E32526]"
                                    href="#"
                                  >
                                    Dịch Vụ
                                  </a>
                                </li>
                                <li className="p-3">
                                  <a
                                    className="font-RobotoMedium text-[22px] hover:text-[#E32526]"
                                    href="#"
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
                <div className="border-b-2 border-[#b22830] hover:border-b-2 hover:border-[#fff]">
                  <p className="font-RobotoMedium uppercase text-[20px] md:text-[17px] xl:text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-white border-none sm:border-b border-gray-100 hover:bg-transparent lg:hover:bg-transparent lg:border-0 lg:hover:text-[#fff] md:py-4 lg:py-6 flex justify-center items-center cursor-pointer">
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
                    <div className="hidden sm:block w-[90%] left-[5%] absolute mx-auto bg-[#53382c] mt-[10px]">
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
                                className="font-RobotoMedium text-[30px] hover:text-[#E32526]"
                                href="/menu/coffee"
                              >
                                Cà Phê
                              </a>
                              <ul>
                                <li>
                                  <a
                                    className="text-[20px] font-RobotoMedium hover:text-[#E32526]"
                                    href="#"
                                  >
                                    Cà Phê Phin
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="text-[20px] font-RobotoMedium hover:text-[#E32526]"
                                    href="#"
                                  >
                                    Phindi
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="text-[20px] font-RobotoMedium hover:text-[#E32526]"
                                    href="#"
                                  >
                                    Cà Phê Espresso
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-[35%]">
                              <a
                                className="font-RobotoMedium text-[30px] hover:text-[#E32526]"
                                href="/menu/freeze"
                              >
                                FREEZE
                              </a>
                              <ul>
                                <li>
                                  <a
                                    className="text-[20px] font-RobotoMedium hover:text-[#E32526]"
                                    href="#"
                                  >
                                    Freeze Cà Phê Phin
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="text-[20px] font-RobotoMedium hover:text-[#E32526]"
                                    href="#"
                                  >
                                    Freeze Không Cà Phê
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="w-[30%]">
                              <a
                                className="font-RobotoMedium text-[30px] hover:text-[#E32526]"
                                href="/menu/teas"
                              >
                                Trà
                              </a>
                              <ul>
                                <li>
                                  <a
                                    className="text-[20px] font-RobotoMedium hover:text-[#E32526]"
                                    href="#"
                                  >
                                    Trà Sen Vàng Mới
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="text-[20px] font-RobotoMedium hover:text-[#E32526]"
                                    href="#"
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
                <div className="border-[#fff] hover:border-b-2 hover:border-[#fff]">
                  <p className="font-RobotoMedium uppercase text-[20px] md:text-[17px] xl:text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-white border-none sm:border-b border-gray-100 hover:bg-transparent lg:hover:bg-transparent lg:border-0 lg:hover:text-[#fff] md:py-4 lg:py-6 flex justify-center items-center cursor-pointer">
                    <a href="/news">Tin Tức</a>
                  </p>
                </div>
              </li>

              <li className="hidden sm:block w-full text-left md:w-fit border-[#fff] hover:border-b-2 hover:border-[#fff]">
                <a
                  className="font-RobotoMedium uppercase block text-white text-[20px] md:text-[17px] xl:text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-10 border-none sm:border-b border-b border-gray-100 hover:bg-transparent lg:hover:bg-transparent lg:border-0 lg:hover:text-[#fff] md:py-4 lg:py-6"
                  href="/jobs"
                >
                  Nghề Nghiệp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* for media < md */}
      <nav className="md:hidden md:p-0 fixed w-full bg-[#b22830] border-gray-200 z-[100] shadow-sm">
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
            className="inline-flex items-center bg-[#b22830] md:bg-transparent py-[15px] px-[10px] md:py-2 md:px-2 ml-1 text-sm text-white md:hidden focus:outline-none transition duration-300 transform hover:translate-x-1"
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
                        News
                      </a>
                    </li>
                    <li className="w-full text-left md:w-fit">
                      <a
                        href="/gl-friends"
                        className="flex text-left items-center font-RobotoMedium uppercase text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-black w-full hover:text-red-600"
                      >
                        Nghề Nghiệp
                      </a>
                    </li>
                    <li className="w-full text-left md:w-fit">
                      <a
                        href="/contact"
                        className="flex text-left items-center font-RobotoMedium uppercase text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 text-black w-full hover:text-red-600"
                      >
                        Contact Us
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
                      href="#"
                    >
                      Dịch Vụ
                    </a>
                  </li>

                  <li className="w-full text-left md:w-fit">
                    <a
                      className="uppercase font-RobotoMedium text-black block text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 hover:text-red-600"
                      href="#"
                    >
                      Nguồn Gốc
                    </a>
                  </li>

                  <li className="w-full text-left md:w-fit">
                    <a
                      className="uppercase font-RobotoMedium text-black block text-[18px] py-[15px] px-0 sm:py-2 sm:pl-3 sm:pr-4 hover:text-red-600"
                      href="#"
                    >
                      Nghề Nghiệp
                    </a>
                  </li>
                </ul>
              )}

              <hr className="mt-10" />
              <div className="text-left mt-3">
                <a
                  className="text-black hover:text-[#e32426] ease-out duration-300 mr-3 text-[12.5px]"
                  href="/disclaimer"
                >
                  Disclaimer
                </a>
                <a
                  className="border-l border-[#000] pl-3 text-black hover:text-[#e32426] ease-out duration-300 text-[12.5px]"
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
