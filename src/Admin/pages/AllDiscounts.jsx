import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCouponRequest } from "../../redux/actions/actions";
import { getStatus } from "../../constants/Status";
import { IoIosAddCircle } from "react-icons/io";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

const AllDiscounts = () => {
  const dispatch = useDispatch();
  const coupons = useSelector((state) => state.coupons);
  // const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    try {
      dispatch(getAllCouponRequest());
    } catch (error) {
      console.error("Error dispatch", error);
    }
  }, [dispatch])

  console.log("coupons", coupons)

  // const handleShowDialog = () => {
  //   setShowDialog(true);
  // }

  // const handleCloseDialog = () => {
  //   setShowDialog(false);
  // }

  // const handleAddCoupon = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await axios.post('http://localhost:9999/admin/coupon/add', {
  //       category_name: newCategoryName
  //     }, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     console.log(response.data);

  //     handleCloseDialog();
  //     dispatch(getAllCouponRequest());
  //   } catch (error) {
  //     console.error("Error adding category", error);
  //   }
  // }

  // const handleDeleteCategory = async (couponId) => {
  //   const confirmDelete = window.confirm(
  //     "Bạn có chắc chắn muốn xóa loại này không?"
  //   );

  //   const token = localStorage.getItem("token");

  //   if (confirmDelete) {
  //     try {

  //       await axios.put(`http://localhost:9999/api/admin/coupon/${couponId}/delete`, null, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       setDeletedCategoryId(couponId);
  //     } catch (error) {
  //       console.error("Error deleting category:", error);
  //     }
  //   }
  // };

  return (
    <>
      <div className="flex flex-col gap-4 w-[80%] ml-[18%] rounded-md shadow-md bg-white mt-5">
        <table className="w-full text-gray-700">
          <thead className="text-white font-RobotoSemibold text-[18px] ">
            <tr className="bg-primary">
              <td className="rounded-s-md">ID</td>
              <td>Hình Ảnh</td>
              <td>Tên Loại</td>
              <td>Ngày Tạo</td>
              <td>Người Tạo</td>
              <td>Trạng Thái</td>
              <td className="rounded-e-md">Hành Động</td>
            </tr>
          </thead>
          <tbody>
            {coupons.data && coupons?.data.map((coupon, index) => (
              <tr key={coupons.id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  <img
                    src={coupon?.image || "https://www.highlandscoffee.com.vn/vnt_upload/weblink/White_logo800.png"}
                    alt={coupon?.coupon_name}
                    className="w-[68px] h-[50px] object-contain rounded-md bg-primary"
                  />
                </td>
                <td>{coupon?.coupon_name}</td>
                <td>{new Date(coupon?.created_at).toLocaleDateString()}</td>
                <td>Tui Nè</td>
                <td>{getStatus(coupon?.status)}</td>
                <td>
                  <span>
                    <MdModeEditOutline className="cursor-pointer text-primary" fontSize={25} />
                  </span>
                  <span>
                    <MdDelete className="cursor-pointer text-primary" fontSize={25} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="fixed right-6 bottom-3">
        <IoIosAddCircle fontSize={50} className="cursor-pointer text-primary" />
      </div>
    </>
  )
}

export default AllDiscounts
