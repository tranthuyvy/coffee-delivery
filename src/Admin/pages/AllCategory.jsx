import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesRequest } from "../../redux/actions/actions";
import { getStatus } from "../../constants/Status";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AllCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories.categories);

  useEffect(() => {
    try {
      dispatch(getAllCategoriesRequest());
    } catch (error) {
      console.error("Error dispatch", error);
    }

  }, [dispatch])

  console.log("categories", categories.data)

  return (
    <>
      <div className="flex flex-col gap-4 w-[80%] ml-[18%] rounded-md shadow-md bg-white mt-5">
        <table className="w-full text-gray-700">
          <thead className="text-white font-RobotoSemibold text-[18px] ">
            <tr className="bg-primary">
              <td className="rounded-s-md">ID</td>
              <td>Hình Ảnh</td>
              <td>Category Name</td>
              <td>Ngày Tạo</td>
              <td>Người Tạo</td>
              <td className="rounded-e-md">Trạng Thái</td>
            </tr>
          </thead>
          <tbody>
            {categories?.data && categories?.data.map((category, index) => (
              <tr key={category.slug}>
                <td>
                  {index + 1}
                </td>
                <td>
                  <img
                    src={category?.image || "https://www.highlandscoffee.com.vn/vnt_upload/weblink/White_logo800.png"}
                    alt={category?.category_name}
                    className="w-[68px] h-[50px] object-contain rounded-md bg-primary"
                  />
                </td>
                <td>{category?.category_name}</td>
                <td>{new Date(category?.created_at).toLocaleDateString()}</td>
                <td>Tui Nè</td>
                <td>{getStatus(category?.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="fixed right-6 bottom-3">
        <IoIosAddCircle fontSize={50} className="cursor-pointer text-primary" onClick={() => navigate("/admin/create-category")} />
      </div>
    </>
  )
}

export default AllCategory
