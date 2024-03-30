import { useEffect, useRef } from "react";
import CartItem from "../components/Cart/CartItem"


const Cart = () => {
  const cartDetailRef = useRef(null);

  useEffect(() => {
    const footerHeight = document.querySelector('footer').offsetHeight;
    const cartDetailHeight = cartDetailRef.current.offsetHeight;
    const paddingTop = footerHeight > cartDetailHeight ? footerHeight - cartDetailHeight + 20 : 20;

    cartDetailRef.current.style.paddingBottom = `${footerHeight}px`;
    cartDetailRef.current.style.paddingTop = `${paddingTop}px`;
  }, []);
  return (
    <>
      <section className="relative flex flex-col-reverse md:flex-row items-center bg-[url('https://www.highlandscoffee.com.vn/vnt_upload/cake/SPECIALTYCOFFEE/Untitled-1-01.png')]">
        <div className="relative md:w-full pt-[80px]">
          <div className="py-[40px] px-7 lg:px-14 md:py-14 w-full">
            <h1 className="uppercase text-center sm:text-left font-RobotoSemibold text-main text-3xl md:text-3xl xl:text-[3rem] mb-5 mt-0 sm:mt-5 md:leading-tight">
              Giỏ Hàng
            </h1>
          </div>
        </div>
      </section>

      <div className="lg:grid grid-cols-3 lg:px-16 relative my-10">
        <div className="lg:col-span-2 lg:px-5 ">
          <div className="space-y-3">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            {/* {cart.length > 0 && listCart.length > 0 ? (
            listCart.map((item, index) =>
              findQuantity(item.id) > 0 ? (
                <CartItem key={index} detail={item} showButton={true} />
              ) : null
            )
          ) : (
            <p
              style={{
                color: "red",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "50px",
              }}
            >
              YOUR CART EMPTY.
            </p>
          )} */}
          </div>
        </div>
        <div className="fixed px-4 lg:col-span-1 right-[60px] w-[30%] top-[330px]" ref={cartDetailRef}>
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4 uppercase">Chi Tiết Hóa Đơn</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black ">
                <span>Tổng</span>
                <span style={{ justifyContent: "flex-end" }}>68.888VNĐ</span>
              </div>

              <div className="flex justify-between">
                <span>Giảm Giá</span>
                <span className="text-green-700">0 VNĐ</span>
              </div>
              <div className="flex justify-between">
                <span>Phí Vận Chuyển</span>
                <span className="text-green-700">20.000 VNĐ</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Thanh Toán</span>
                <span className="text-green-700">88.888 VNĐ</span>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5">
              <button
                className="w-[50%] bg-green-500 bg-primary text-white p-2 rounded-md mt-5 shadow-md hover:bg-main transition duration-300 ease-in-out"
              >
                Đặt Hàng
              </button>
              <button
                className="w-[50%] bg-green-500 bg-primary text-white p-2 rounded-md mt-5 shadow-md hover:bg-main transition duration-300 ease-in-out"
              >
                Thanh Toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
