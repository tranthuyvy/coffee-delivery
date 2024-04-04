import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { updateProductRequest, getProductDetailRequest } from "../../redux/actions/actions";

const UpdateProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const message = useSelector((state) => state.updateProduct);
  const productDetail = useSelector((state) => state.productDetail.productDetail);
  const [formData, setFormData] = useState({
    file: '',
    data: {
      product_name: '',
      price: 0,
      description: '',
      status: '',
      category_name: '',
    },
  });
  const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate()
  const formDataRef = useRef(formData);

  useEffect(() => {
    try {
      dispatch(getProductDetailRequest(id));
    } catch (error) {
      console.error("Error dispatch", error);
    }
  }, [dispatch, id]);

  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  useEffect(() => {
    if (productDetail) {
      setFormData({
        ...formData,
        data: {
          product_name: productDetail?.product_name,
          price: productDetail?.price_update_detail[0]?.price_new,
          description: productDetail?.description,
          status: productDetail?.status,
          category_name: productDetail?.category?.category_name,
        },
      });
      setImageSrc(productDetail?.image);
    }
  }, [productDetail]);

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      setFormData({ ...formData, file: e.target.files[0] });
    } else if (e.target.name === 'status') {
      setFormData({ ...formData, data: { ...formData.data, status: e.target.value } });
    } else {
      setFormData({ ...formData, data: { ...formData.data, [e.target.name]: e.target.value } });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('file', formDataRef.current.file);
    formDataToSend.append('data', JSON.stringify(formDataRef.current.data));
    dispatch(updateProductRequest(id, formDataToSend));
  };

  useEffect(() => {
    if (message.code === 202) {
      console.log("Thành công")
      navigate("/admin/products");
    }
  }, [message, navigate]);

  console.log("message", message)

  return (
    <>
      <div className="flex flex-col justify-center items-center ml-[18%]">
        <div className="flex mt-2 justify-center items-center">
          <h2 className="text-main font-RobotoSemibold text-[20px] uppercase">Update Product</h2>
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
            {imageSrc && !formData.file && (
              <img
                src={imageSrc}
                alt="Selected file"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            )}
            <input
              className="border-b-2"
              type="text"
              name="product_name"
              onChange={handleChange}
              value={formData.data.product_name}
            />
            <input
              className="border-b-2"
              type="number"
              name="price"
              onChange={handleChange}
              value={formData.data.price}
            />
            <textarea
              className="border-b-2"
              name="description"
              onChange={handleChange}
              value={formData.data.description}
            />
            <input
              className="border-b-2"
              type="text"
              name="category_name"
              onChange={handleChange}
              value={formData.data.category_name}
            />

            <div className="flex gap-2">
              <label htmlFor="active">Active</label>
              <input
                type="radio"
                name="status"
                value="Active"
                onChange={handleChange}
                checked={formData.data.status === "Active"}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="unactive">Unactive</label>
              <input
                type="radio"
                name="status"
                value="Unactive"
                onChange={handleChange}
                checked={formData.data.status === "Unactive"}
                className="mt-[2px]"
              />
            </div>

            <div className="flex justify-center">
              <button
                className="w-[40%] bg-primary text-white rounded-md shadow-md py-3 uppercase font-RobotoMedium"
                type="submit"
              >
                Cập Nhật
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct
