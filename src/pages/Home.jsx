import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { menu } from "../apis/mock-data";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3 w-full h-full items-center pt-[100px] px-[50px]">
        <div className="flex flex-col gap-2 w-full h-full">
          <Slider {...settings} className="h-full">
            <img
              src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg"
              alt="img-01"
              className="w-full h-full object-contain"
            />
            <img
              src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg"
              alt="img-02"
              className="w-full h-full object-contain"
            />
          </Slider>
        </div>

        <div className="flex flex-col gap-2">
          <img
            src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg"
            alt="banner"
            className="h-[50%] w-[50%] object-contain"
          />
          <img
            src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg"
            alt="banner"
            className="h-[50%] w-[50%] object-contain"
          />
        </div>
      </div>

      <div className="bg-white flex justify-around p-6 my-6">
        {menu.map((item) => (
          <div className="flex flex-col items-center" key={item.id}>
            <div className="w-14 h-14 flex justify-center items-center shadow-md rounded-md border border-neutral-100">
              <a href={`${item.path}`}>
                <img
                  src={item.image || ""}
                  alt="image"
                  className="w-10 h-10 object-contain cursor-pointer"
                />
              </a>
            </div>
            <p className="mt-2">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5 m-10">
        <div>
          Col 1
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/wed-invitation-790a1.appspot.com/o/about.png?alt=media&token=260fb081-c40a-4264-9115-ab40dda7cb69"
          alt="coffee"
          className=""
        />
        <div>
          Col 3
        </div>
      </div>
    </>
  )
}

export default Home
