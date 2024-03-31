import { Link } from "react-router-dom"
import { orders } from "../../apis/mock-data"
import { getOrderStatus } from "../../constants/OrderStatus"

const RecentOrder = () => {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-md border border-gray-200 flex-1">
      <strong className="text-sub font-semibold">RecentOrder</strong>
      <div className="mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <td>ID</td>
              <td>Product ID</td>
              <td>Name</td>
              <td>Address</td>
              <td>Total</td>
              <td>Date</td>
              <td>Status</td>
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
                <td>
                  <Link to={`/products/${order.product_id}`}>
                    {order.product_id}
                  </Link>
                </td>
                <td>{order.customer_name}</td>
                <td>{order.address}</td>
                <td>{order.order_total}</td>
                <td>{new Date(order.order_date).toLocaleDateString()}</td>
                <td>{getOrderStatus(order.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default RecentOrder
