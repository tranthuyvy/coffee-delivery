
const OrderItem = () => {
  return (
    <>
      <div className="p-3 shadow-lg rounded-md border-neutral-200 border-2">
        <div className="flex items-center mt-2">
          <div className="py-8 ml-1.5 flex justify-center items-center">
            <img
              className="w-[100px] rounded-full shadow-md bg-whiteYellow object-cover object-top"
              src="https://www.highlandscoffee.com.vn/vnt_upload/product/04_2023/New_product/thumbs/270_crop_HLC_New_logo_5.1_Products__PHIN_SUADA.jpg"
              alt="Product image"
              loading="lazy"
            />
            <img
              className="w-[100px] rounded-full shadow-md bg-whiteYellow object-cover object-top"
              src="https://www.highlandscoffee.com.vn/vnt_upload/product/04_2023/New_product/thumbs/270_crop_HLC_New_logo_5.1_Products__PHIN_SUADA.jpg"
              alt="Product image"
              loading="lazy"
            />
            <img
              className="w-[100px] rounded-full shadow-md bg-whiteYellow object-cover object-top"
              src="https://www.highlandscoffee.com.vn/vnt_upload/product/04_2023/New_product/thumbs/270_crop_HLC_New_logo_5.1_Products__PHIN_SUADA.jpg"
              alt="Product image"
              loading="lazy"
            />
          </div>
          <div className="ml-8 space-y-1">
            <p className="text-lg">
              Phin sữa đá (M)
            </p>
            <p className="text-lg">
              Phin sữa đá (L)
            </p>

          </div>
          <div className="lg:flex items-center lg:space-x-5 pt-2 ml-5">
            <div className="flex text-sm lg:text-base">
              <p>Tổng Số Lượng: 6</p>
            </div>
            <div className="flex text-sm lg:text-base">
              <p className="text-main ">Thanh Toán: 225,000 VNĐ</p>
            </div>
            <div className="flex text-sm lg:text-base">
              <p className="">Ngày Đặt: 2021-09-21</p>
            </div>
            <div className="flex text-sm lg:text-base">
              <p className="">Status: Chờ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderItem
