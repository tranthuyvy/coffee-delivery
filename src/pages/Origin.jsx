
const Origin = () => {
  return (
    <>
      <section className="">
        <img
          src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="w-[90%] lg:w-[70%] left-[15%] mx-auto bg-white mt-[10px]">
          <div className="flex">
            <div className="w-[50%] text-[#53382c] p-[60px]">
              <h1 className="uppercase font-RobotoMedium text-4xl mb-3">
                Nguồn gốc
              </h1>
              <p className="font-normal text-[#53382c]">
                CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH
              </p>
            </div>
            <div className="w-[50%] bg-white p-[60px]">
              <div className="flex">
                <div className="w-full">
                  <ul className="font-TitilliumRegular">
                    <li className="mb-5 p-3">
                      <a
                        className="font-RobotoMedium text-[22px] hover:text-[#E32526]"
                        href="/services"
                      >
                        <img
                          src="https://www.highlandscoffee.com.vn/vnt_upload/about/thumbs/370_crop_Highlands_4577_R3_-_Copy.jpg"
                          alt="img-services"
                        />
                      </a>
                    </li>
                    <li className="p-3">
                      <a
                        className="font-RobotoMedium text-[22px] hover:text-[#E32526]"
                        href="/jobs"
                      >
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/thumbs/370_crop_Highlands_5557_R3_-_Copy.jpg" alt="img-jobs" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Origin
