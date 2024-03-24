import { useParams } from "react-router-dom";
import { coffee } from "../../apis/mock-data";
import CardProductSimilar from "../../components/Products/CardProductSimilar";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const ProductDetail = () => {
  const { id } = useParams();
  const selectedProduct = coffee.find((item) => item.id === parseInt(id));
  const currentProduct = coffee.filter((item) => item.id !== parseInt(id));

  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   centerMode: true,
  //   centerPadding: "12%",
  // };

  return (
    <>
      {/* <section className="relative flex flex-col-reverse md:flex-row items-center bg-white">
        <div className="relative md:w-[50%]">
          <img
            src={selectedProduct?.images[0]}
            alt="coffee-img"
            className="w-[300px] h-[300px] object-cover object-bottom mt-[150px]"
          />
        </div>
        <div className="relative md:w-[50%]">
          <div className="py-[40px] px-7 lg:px-14 md:py-14 w-full">
            <div className="relative">
              <div className="w-1/2 border-b-[0px] sm:border-b-[1px] sm:border border-[#53382c]"></div>
              <div className="absolute top-[-1px] w-[15%] border-b-[0px] sm:border-b-[2px] sm:border-main"></div>
            </div>
            <h1 className="uppercase text-center sm:text-left font-RobotoMedium text-[#faebd7] hover:text-main text-3xl md:text-3xl xl:text-[3rem] mb-5 mt-0 sm:mt-5 md:leading-tight cursor-pointer">
              Cà Phê
            </h1>
            <p className="font-normal text-center sm:text-left text-[#faebd7] text-[16px] lg:text-[18px] lg:w-[100%]">
              Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.
            </p>
          </div>
        </div>

      </section> */}

      <section className="pt-[0] pb-[30px] w-full">
        <div className="border border-grey mx-auto flex flex-wrap rounded-lg shadow-xl bg-white items-center relative max-w-[70%] h-fit">
          <div className="w-full lg:w-[50%] xl:w-[60%] h-[50%]">
            <div className="w-[500px] h-[500px] mt-[100px]">
              <img
                className="w-full object-cover object-center h-[270px] sm:h-[350px] lg:h-full p-0 sm:p-5 pr-0"
                src={selectedProduct?.images[0]}
                alt="image-product"
              />
            </div>
          </div>
          <div className="w-full lg:w-[50%] xl:w-[40%] h-full flex">
            <div className="flex flex-col justify-between 3xl:justify-center items-start p-5 lg:p-10 w-full">
              <h1 className="leading-tight font-RobotoMedium text-black text-3xl md:text-4xl lg:text-[26px] 3xl:text-[35px] mb-[10px] 3xl:mb-3">
                {selectedProduct?.name}
              </h1>
              <p className="font-normal text-[16px] lg:text-[16px] 3xl:text-[20px] mb-5 flex">
                <img
                  className="object-contain object-center w-[18px] h-auto mr-3"
                  src="https://www.gamudaland.com.my/_next/image?url=%2Fimages%2Flanding%2Flocation.png&w=48&q=75"
                  alt="locate-icon"
                />
                {selectedProduct?.location}
              </p>
              <hr className="mb-5 w-full" />
              <div className="grid grid-cols-12 items-center justify-between w-full mb-5">
                <div className="col-span-12 sm:col-span-6 mb-2 sm:mb-0 pr-[10px] mr-[10px]">
                  <p className="font-serif text-sub text-[18px] 3xl:text-[17px]">
                    Giá
                  </p>
                  <p className="text-main font-RobotoMedium text-[18px] lg:text-[17px] 3xl:text-[20px]">
                    {selectedProduct.price.toLocaleString("en")} VNĐ
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-6 mb-2 sm:mb-0 pr-[10px] mr-[10px]">
                  <p className="font-serif text-sub text-[18px] 3xl:text-[17px]">
                    Loại
                  </p>
                  <p className="text-main font-RobotoMedium text-[18px] lg:text-[17px] 3xl:text-[20px]">
                    {selectedProduct?.category}
                  </p>
                </div>
              </div>
              <hr className="mb-5 w-full" />
              <div className="grid sm:grid-cols-2 gap-4 items-center sm:justify-between w-full">
                <div className="w-full">
                  <a className="block" href="#addcart" target="_blank">
                    <div className="flex justify-center items-center p-3 text-center border border-grey hover:text-main rounded-lg">
                      <p className="font-serif text-[16px] lg:text-[17px] sm:text-lg text-inherit 3xl:text-[20px]">
                        Thêm Vào Giỏ
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`ml-1 w-4 h-4 sm:ml-2 sm:w-5 sm:h-5`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="w-full">
                  <a
                    href="#buynow"
                    className="block"
                  >
                    <div className="font-serif rounded-lg p-3 text-center border border-grey bg-primary text-white hover:bg-[#271A15] hover:text-white">
                      <p className="text-[16px] lg:text-[17px] sm:text-lg text-inherit 3xl:text-[20px]">
                        Mua Ngay
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-[50px] md:py-[80px]">
        <div className="container mx-auto">
          <div className="w-full mb-10">
            <h1 className="leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-[3rem] 3xl:text-[3.2rem] text-primary text-center font-RobotoMedium title relative pb-6 w-full md:w-2/3 mx-auto">
              Sản Phẩm Tương Tự
            </h1>
          </div>
          <div className="w-full md:w-[80%] lg:w-[90%] 3xl:w-[85%] max-w-[90%] mx-auto md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {currentProduct.slice(0, 3).map((item) => (
              <CardProductSimilar key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetail
