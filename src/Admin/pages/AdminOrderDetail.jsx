import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetailRequest } from "../../redux/actions/actions";
import { getOrderStatus } from "../../constants/Status";

const AdminOrderDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const orderDetail = useSelector(state => state.orderDetail.orderDetail);

  useEffect(() => {
    try {
      dispatch(getOrderDetailRequest(id));
    } catch (error) {
      console.error("Error dispatch", error);
    }
  }, [dispatch, id]);

  return (
    <>
      <div className="flex">
        <div className="flex flex-[0.6] gap-4 w-[80%] ml-[18%] rounded-md shadow-md bg-white mt-2">
          <div className="w-full ml-5">
            <h5 className="text-left text-lg font-RobotoSemibold text-primary py-3">Thông Tin Nhận Hàng</h5>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Họ Và Tên:</span>
              <span className="text-primary font-RobotoSemibold">{orderDetail?.customer?.firstname} {orderDetail?.customer?.lastname}</span>
            </p>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Địa Chỉ Nhận Hàng:</span>
              <span className="text-primary font-RobotoSemibold">{orderDetail?.customer.address}</span>
            </p>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Email:</span>
              <span className="text-primary font-RobotoSemibold">{orderDetail?.customer.email}</span>
            </p>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Số Điện Thoại:</span>
              <span className="text-primary font-RobotoSemibold">{orderDetail?.customer.user.username}</span>
            </p>
          </div>

        </div>
        <div className="flex-[0.4] w-[80%] ml-[20px] mr-[30px] rounded-md shadow-md bg-white mt-2">
          <div className="ml-5">
            <h5 className="text-left text-lg font-RobotoSemibold text-primary py-3">Chi Tiết Hóa Đơn</h5>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Tổng số lượng:</span>
              <span className="text-primary font-RobotoSemibold">{orderDetail?.total_quantity}</span>
            </p>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Tổng tiền:</span>
              {orderDetail?.total_price && <span className="text-primary font-RobotoSemibold">{(orderDetail.total_price).toLocaleString('en')} VNĐ</span>}
            </p>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Phí vận chuyển:</span>
              <span className="text-primary font-RobotoSemibold">{(20000).toLocaleString('en')} VNĐ</span>
            </p>
            <p className="p-5">
              <span className="text-primary font-RobotoMedium mr-2">Thanh toán:</span>
              {orderDetail?.total_price && <span className="text-primary font-RobotoSemibold">{(orderDetail.total_price + 20000).toLocaleString('en')} VNĐ</span>}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-[80%] ml-[18%] rounded-md shadow-md bg-white mt-5">
        <table className="w-full text-gray-700">
          <thead className="text-white font-RobotoSemibold text-[18px] ">
            <tr className="bg-primary">
              <td className="rounded-s-md">STT</td>
              <td>Hình Ảnh</td>
              <td>Sản Phẩm</td>
              <td>Size</td>
              <td>Số Lượng</td>
              <td>Đơn Giá</td>
              <td>Ngày Đặt</td>
              <td className="rounded-e-md">Trạng Thái</td>
            </tr>
          </thead>
          <tbody>
            {orderDetail?.order_detail && orderDetail.order_detail.map((orderItem, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="flex items-center">
                  <img
                    className="w-[60px] mt-[2px] rounded-full shadow-md mr-2"
                    src={orderItem?.product.image}
                    alt={orderItem?.product.product_name}
                  />
                </td>

                <td>
                  <p>{orderItem?.product.product_name}</p>
                  <span className="text-[12px]">{orderItem?.product.category.category_name}</span>
                </td>
                <td>{orderItem?.size}</td>

                <td>{orderItem?.quantity}</td>
                <td>{(orderItem.product.price_update_detail[0].price_new).toLocaleString('en')} VNĐ</td>
                <td>{new Date(orderDetail.create_at).toLocaleDateString()}</td>
                <td>{getOrderStatus(orderDetail.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminOrderDetail
