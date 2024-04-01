import { Link } from "react-router-dom"
import { orders } from "../../apis/mock-data"
import { getOrderStatus } from "../../constants/OrderStatus"

const AllOrder = () => {
  return (
    <div className="flex flex-col gap-4 w-[80%] ml-[18%] rounded-md shadow-md bg-white mt-5">
      <table className="w-full text-gray-700">
        <thead className="text-white font-RobotoSemibold text-[18px] ">
          <tr className="bg-primary">
            <td className="rounded-s-md">ID</td>
            <td>Name</td>
            <td>Address</td>
            <td>Total</td>
            <td>Date</td>
            <td className="rounded-e-md">Status</td>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>
                <Link to={`/orders/${order.id}`}>
                  {order.id}
                </Link>
              </td>
              <td>{order.customer_name}</td>
              <td>{order.address}</td>
              <td>{(order.order_total).toLocaleString('en')}</td>
              <td>{new Date(order.order_date).toLocaleDateString()}</td>
              <td>{getOrderStatus(order.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllOrder
