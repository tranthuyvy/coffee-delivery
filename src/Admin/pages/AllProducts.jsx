import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsRequest } from "../../redux/actions/actions";
import { getProductStatus } from "../../constants/Status";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    try {
      dispatch(getAllProductsRequest());
    } catch (error) {
      console.error("Error dispatch", error);
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-4 w-[80%] ml-[18%] rounded-md shadow-md bg-white mt-5">
      <table className="w-full text-gray-700">
        <thead className="text-white font-RobotoSemibold text-[18px] ">
          <tr className="bg-primary">
            <td className="rounded-s-md">ID</td>
            <td>Ảnh</td>
            <td>Tên</td>
            <td>Loai San Pham</td>
            <td>Giá San Pham</td>
            <td>Mô Tả</td>
            <td className="rounded-e-md">Trạng Thái</td>
          </tr>
        </thead>
        <tbody>
          {products?.data && products.data.map((product) => (
            <tr key={product.product_id}>
              <td>
                <Link to={`/products/${product.product_id}`}>
                  {product?.product_id}
                </Link>
              </td>
              <td>
                <img
                  src={product?.image}
                  alt={product?.product_name}
                  className="w-[88px] object-cover rounded-md"
                />
              </td>
              <td>{product?.product_name}</td>
              <td>{product?.category?.category_name}</td>
              <td>{product?.price_update_detail[0]?.price_new.toLocaleString('en')}</td>
              <td>{product?.description && product.description.length > 50 ? `${product?.description.substring(0, 50)}...` : product.description}</td>
              <td>{getProductStatus(product?.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
