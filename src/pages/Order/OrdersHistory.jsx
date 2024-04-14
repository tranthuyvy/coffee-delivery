import { useEffect } from "react"
import OrderItem from "../../components/Order/OrderItem"
import { getCustomerOrdersRequest } from "../../redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"

const OrdersHistory = () => {
  const dispatch = useDispatch()
  const customerOrders = useSelector(state => state.customerOrders.customerOrders)

  useEffect(() => {
    dispatch(getCustomerOrdersRequest())
  }, [dispatch])

  return (
    <>
      <section className="relative flex flex-col-reverse md:flex-row items-center bg-[url('https://www.highlandscoffee.com.vn/vnt_upload/cake/SPECIALTYCOFFEE/Untitled-1-01.png')]">
        <div className="relative md:w-full pt-[80px]">
          <div className="py-[40px] px-7 lg:px-14 md:py-14 w-full">
            <h1 className="uppercase text-center sm:text-left font-RobotoSemibold text-main text-3xl md:text-3xl xl:text-[3rem] mb-5 mt-0 sm:mt-5 md:leading-tight">
              Lịch Sử Đơn Hàng
            </h1>
          </div>
        </div>
      </section>

      <div className="w-full lg:px-32 relative my-10">

        <div className="space-y-3">
          {customerOrders?.data && customerOrders?.data.length > 0 ? (
            customerOrders.data.map((order, index) => (
              <OrderItem key={index} order={order} />
            ))
          ) : (
            <p
              style={{
                color: "red",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "50px",
              }}
            >
              BẠN CHƯA ĐẶT ĐƠN HÀNG NÀO.
            </p>
          )}

        </div>
      </div>
    </>
  )
}

export default OrdersHistory
