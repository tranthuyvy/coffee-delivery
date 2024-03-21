import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div>

      <Slider {...settings}>
        <img
          src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/KEMDI/HCO_7720_KEMDI-Banner_2000x8782x.png"
          alt="img-01"
        />
        <img
          src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg"
          alt="img-02"
        />
      </Slider>
    </div>
  )
}

export default Home
