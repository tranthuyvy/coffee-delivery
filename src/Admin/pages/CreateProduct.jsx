import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addProductRequest } from "../../redux/actions/actions"

const CreateProduct = () => {
  const dispatch = useDispatch()
  const message = useSelector((state) => state.addProduct);
  const [formData, setFormData] = useState({
    file: '',
    data: {
      product_name: '',
      price: 0,
      description: '',
      status: 'Active',
      category_name: '',
    },
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, data: { ...formData.data, [e.target.name]: e.target.value } });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('file', formData.file);
    formDataToSend.append('data', JSON.stringify(formData.data));
    dispatch(addProductRequest(formDataToSend));

  };

  useEffect(() => {
    if (message.code === 201) {
      setFormData({
        file: '',
        data: {
          product_name: '',
          price: 0,
          description: '',
          status: 'Active',
          category_name: '',
        },
      });
      navigate("/admin/products")
    }
  }, [message, navigate])

  console.log("message", message)

  return (
    <>
      <div className="flex flex-col justify-center items-center ml-[18%]">
        <div className="flex mt-2 justify-center items-center">
          <h2 className="text-main font-RobotoSemibold text-[20px] uppercase">Create Product</h2>
        </div>
        <div className="w-[50%] p-2 rounded-md shadow-md bg-white text-primary mt-5">
          <form
            className="flex flex-col p-5 text-primary gap-5"
            onSubmit={handleSubmit}
          >
            <input
              className="p-2 cursor-pointer"
              type="file"
              name="file"
              onChange={handleChange}
            />
            {formData.file && (
              <img
                src={URL.createObjectURL(formData.file)}
                alt="Selected file"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            )}
            <input className="border-b-2" type="text" name="product_name" onChange={handleChange} />
            <input className="border-b-2" type="number" name="price" onChange={handleChange} />
            <textarea className="border-b-2" name="description" onChange={handleChange} />
            <input className="border-b-2" type="text" name="category_name" onChange={handleChange} />
            <div className="flex justify-center">
              <button
                className="w-[40%] bg-primary text-white rounded-md shadow-md py-3 uppercase font-RobotoMedium"
                type="submit"
              >
                Thêm sản phẩm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProduct
