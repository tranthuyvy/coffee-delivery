
const About = () => {
  return (
    <>
      <section className="relative flex flex-col-reverse md:flex-row items-center bg-white">
        <div className="relative md:w-[35%]">
          <div className="py-[40px] px-7 lg:px-14 md:py-14 w-full">
            <div className="relative">
              <div className="w-1/2 border-b-[0px] sm:border-b-[1px] sm:border border-[#53382c]"></div>
              <div className="absolute top-[-1px] w-[15%] border-b-[0px] sm:border-b-[2px] sm:border-[#b22830]"></div>
            </div>
            <h1 className="uppercase text-center sm:text-left font-RobotoMedium text-[#53382c] hover:text-[#f1bc7a] text-3xl md:text-3xl xl:text-[3rem] mb-5 mt-0 sm:mt-5 md:leading-tight cursor-pointer">
              Nguồn gốc
            </h1>
            <p className="font-normal text-center sm:text-left text-black text-[16px] lg:text-[18px] lg:w-[100%]">
              Highlands Coffee® được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây.
            </p>
            <button
              className="uppercase rounded-md shadow-md text-[#b22830] border-[1px] border-[#b22830] py-3 px-10 mt-5 hover:bg-[#b22830] hover:text-white hover:shadow-lg ease-out duration-300"
            >
              Xem Chi Tiết
            </button>
          </div>
        </div>
        <div className="relative md:w-[65%]">
          <img
            src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg"
            alt="banner"
            className="w-full object-cover object-bottom h-full lg:h-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
        </div>
      </section>

      <section className="relative flex flex-col-reverse md:flex-row items-center bg-[#bd945d]">
        <div className="relative md:w-[65%]">
          <img
            src="https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_4577_R3_-_Copy.jpg"
            alt="banner"
            className="w-full object-cover object-bottom h-full lg:h-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#bd945d]"></div>
        </div>
        <div className="relative md:w-[35%]">
          <div className="py-[40px] px-7 lg:px-14 md:py-14 w-full">
            <div className="relative">
              <div className="w-1/2 border-b-[0px] sm:border-b-[1px] sm:border border-[#53382c]"></div>
              <div className="absolute top-[-1px] w-[15%] border-b-[0px] sm:border-b-[2px] sm:border-[#b22830]"></div>
            </div>
            <h1 className="uppercase text-center sm:text-left font-RobotoMedium text-white hover:text-[#53382c] text-3xl md:text-3xl xl:text-[3rem] mb-5 mt-0 sm:mt-5 md:leading-tight cursor-pointer">
              Dịch Vụ
            </h1>
            <p className="font-normal text-center sm:text-left text-black text-[16px] lg:text-[18px] lg:w-[100%]">
              Highlands Coffee® là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình
            </p>
            <button
              className="uppercase rounded-md shadow-md text-white border-[1px] border-white py-3 px-10 mt-5 hover:bg-white hover:text-[#b22830] hover:shadow-lg ease-out duration-300"
            >
              Xem Chi Tiết
            </button>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col-reverse md:flex-row items-center bg-white">
        <div className="relative md:w-[35%]">
          <div className="py-[40px] px-7 lg:px-14 md:py-14 w-full">
            <div className="relative">
              <div className="w-1/2 border-b-[0px] sm:border-b-[1px] sm:border border-[#53382c]"></div>
              <div className="absolute top-[-1px] w-[15%] border-b-[0px] sm:border-b-[2px] sm:border-[#b22830]"></div>
            </div>
            <h1 className="uppercase text-center sm:text-left font-RobotoMedium text-[#53382c] hover:text-[#f1bc7a] text-3xl md:text-3xl xl:text-[3rem] mb-5 mt-0 sm:mt-5 md:leading-tight cursor-pointer">
              Nghề Nghiệp
            </h1>
            <p className="font-normal text-center sm:text-left text-black text-[16px] lg:text-[18px] lg:w-[100%]">
              Là điểm hội tụ của cộng đồng, Highlands Coffee® luôn tìm kiếm những thành viên mới với mong muốn không ngừng hoàn thiện một không gian dành cho tất cả mọi người
            </p>
            <button
              className="uppercase rounded-md shadow-md text-[#b22830] border-[1px] border-[#b22830] py-3 px-10 mt-5 hover:bg-[#b22830] hover:text-white hover:shadow-lg ease-out duration-300"
            >
              Xem Chi Tiết
            </button>
          </div>
        </div>
        <div className="relative md:w-[65%]">
          <img
            src="https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_5557_R3_-_Copy.jpg"
            alt="banner"
            className="w-full object-cover object-bottom h-full lg:h-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
        </div>
      </section>
    </>
  )
}

export default About
