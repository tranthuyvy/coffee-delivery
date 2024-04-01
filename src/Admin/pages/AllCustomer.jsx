import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomersRequest } from "../../redux/actions/actions";
import { getStatus } from "../../constants/Status";
import { getRank } from "../../constants/Rank";

const AllCustomers = () => {
  const dispatch = useDispatch();
  const customers = useSelector(state => state.customers.customers);

  useEffect(() => {
    try {
      dispatch(getAllCustomersRequest());
    } catch (error) {
      console.error("Error dispatch", error);
    }
  }, [dispatch]);

  console.log("customers", customers)

  return (
    <div className="flex flex-col gap-4 w-[80%] ml-[18%] rounded-md shadow-md bg-white mt-5">
      <table className="w-full text-gray-700">
        <thead className="text-white font-RobotoSemibold text-[18px] ">
          <tr className="bg-primary">
            <td className="rounded-s-md">ID</td>
            <td>Avatar</td>
            <td>Username</td>
            <td>Ngay Tao</td>
            <td>Diem</td>
            <td>Hang</td>
            <td className="rounded-e-md">Trạng Thái</td>
          </tr>
        </thead>
        <tbody>
          {customers?.data && customers.data.map((customer) => (
            <tr key={customer.user_id}>
              <td>
                {customer?.user_id}
              </td>
              <td>
                {customer?.avatar ? (
                  <img
                    src={customer?.avatar}
                    alt={customer?.username}
                    className="w-[68px] object-cover rounded-md"
                  />
                ) : (
                  <img
                    src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-christmas-corgi-vector-png-image_12160999.png"
                    alt={customer?.username}
                    className="w-[88px] object-cover rounded-md"
                  />
                )}
              </td>
              <td>{customer?.username}</td>
              <td>{new Date(customer.created_at).toLocaleDateString()}</td>
              <td>{customer?.points.toLocaleString('en')}</td>
              <td>{getRank(customer?.points)}</td>
              <td>{getStatus(customer?.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCustomers;
