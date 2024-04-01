import { getAllOrdersRequest } from "../../redux/actions/actions"
import { getOrderStatus } from "../../constants/Status"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AllOrder = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const orders = useSelector(state => state.orders.orders)

  useEffect(() => {
    try {
      dispatch(getAllOrdersRequest())
    } catch (error) {
      console.error("Error dispatch", error)
    }
  }, [dispatch])

  return (
    <div className="flex flex-col gap-4 w-[80%] ml-[18%] rounded-md shadow-md bg-white mt-5">
      <table className="w-full text-gray-700">
        <thead className="text-white font-RobotoSemibold text-[18px] ">
          <tr className="bg-primary">
            <td className="rounded-s-md">STT</td>
            <td>Hinh Anh</td>
            <td>Ten San Pham</td>
            <td>Address</td>
            <td>Total Quantity</td>
            <td>Total Price</td>
            <td>Date</td>
            <td className="rounded-e-md">Status</td>
          </tr>
        </thead>
        <tbody>
          {orders?.data && orders.data.map((order, index) => (
            <tr key={index} className="cursor-pointer" onClick={() => navigate(`/order/${order.order_id}`)}>
              <td>{index + 1}</td>
              <td className="flex items-center">
                {order.order_detail.map((item, index) => (
                  <img
                    key={index}
                    className="w-[60px] mt-[2px] rounded-full shadow-md mr-2"
                    src={item.product && item.product.image}
                    alt={item.product && item.product.product_name}
                  />
                ))}
              </td>
              <td>
                {order.order_detail.map((item, index) => (
                  <div key={index}>
                    {item.product && item.product.product_name},
                  </div>
                ))}
              </td>
              <td>{order.customer.address}</td>
              <td>{order.total_quantity}</td>
              <td>{(order.total_price).toLocaleString('en')} VND</td>
              <td>{new Date(order.create_at).toLocaleDateString()}</td>
              <td>{getOrderStatus(order.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllOrder
