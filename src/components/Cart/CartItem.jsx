

const CartItem = () => {
  return (
    <>
      <div
        className="p-3 shadow-lg rounded-md border-neutral-200 border-2"
      >
        <div className="flex items-center mt-2">
          <div className="w-[12rem] h-[12rem] ml-5">
            <img
              className="w-full h-full object-cover object-top"
              src="https://www.highlandscoffee.com.vn/vnt_upload/product/04_2023/New_product/thumbs/270_crop_HLC_New_logo_5.1_Products__PHIN_SUADA.jpg"
              alt="Product image"
              loading="lazy"
            />
          </div>
          <div className="ml-8 space-y-1">
            <p className="font-bold text-lg">
              Phin sữa đá
            </p>
            <p className="opacity-80 text-sm mt-3">Size: M</p>
            <p className="opacity-80 mt-3 text-sm">
              Category: Coffee
            </p>
            <p className="text-main font-semibold text-lg">
              51.000 VNĐ
            </p>
          </div>
          <div className="lg:flex items-center lg:space-x-5 pt-2 ml-[30%]">
            <div className="flex items-center justify-center mt-4 h-[42px] px-[10px] rounded-lg shadow-md">
              <button className="text-black text-[35px]">
                <img
                  className="w-3 h-3"
                  src="https://firebasestorage.googleapis.com/v0/b/wed-invitation-790a1.appspot.com/o/minus.png?alt=media&token=e04092d0-e2e9-4b82-a880-8fb8556afa37"
                  alt="minus-icon"
                />
              </button>

              <div className="">
                <input
                  type={"text"}
                  className="input-small w-10 mx-2 text-center"
                  step={null}
                  min={1}
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              </div>
              <button
                className="text-black text-[25px]"
              >
                <img
                  className="w-3 h-3"
                  src="https://firebasestorage.googleapis.com/v0/b/wed-invitation-790a1.appspot.com/o/add.png?alt=media&token=5ad8a104-0a5b-4865-b900-5c810629469d"
                  alt="plus-icon"
                />
              </button>
            </div>
            <div className="flex text-sm lg:text-base mt-4 lg:mt-4">
              <button
                className="text-black mx-10"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/wed-invitation-790a1.appspot.com/o/delete.png?alt=media&token=6dbf5cb5-a5ad-4ec8-afc0-61ce07d6f2f3"
                  alt="delete-icon"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
