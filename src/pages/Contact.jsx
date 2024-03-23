
const Contact = () => {
  return (
    <>
      <section className="relative flex flex-col-reverse md:flex-row items-center bg-[#0D182B]">
        <div className="relative md:w-[35%]">
          <div className="py-[30px] px-7 lg:px-14 md:py-14 w-full">
            <div className="relative">
              <div className="w-1/2 border-b-[0px] sm:border-b-[1px] sm:border border-[#6A717C]"></div>
              <div className="absolute top-[-1px] w-[15%] border-b-[0px] sm:border-b-[2px] sm:border-[#FF5256]"></div>
            </div>
            <h1 className="text-center sm:text-left font-primaryRegular text-white text-3xl md:text-3xl xl:text-[3rem] mb-5 mt-0 sm:mt-5 md:leading-tight">
              Contact Us
            </h1>
            <p className="font-TitilliumRegular text-center sm:text-left text-white text-[16px] lg:text-[18px] lg:w-[100%]">
              Drop us an enquiry if you wish to learn more.
            </p>
          </div>
        </div>
        <div className="md:w-[65%]">
          <img
            src="https://www.gamudaland.com.my/_next/image?url=%2Fimages%2Fcontact%2Fcontact.png&w=1920&q=75"
            alt="image"
            className="w-full object-cover object-bottom h-[300px] lg:h-[500px]"
          />
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-white to-[#e8e1d3] py-[50px] md:py-[100px] px-4 md:px-8">
        <div className="w-full xl:w-10/12 mx-auto">
          <div className="grid grid-cols-12 gap-0 relative z-10">
            <div className="col-span-12 lg:col-span-7 relative z-10">
              <iframe
                src="https://snazzymaps.com/embed/493885"
                className="w-full min-h-[400px] h-full"
              ></iframe>
            </div>
            <div className="col-span-12 lg:col-span-5 bg-[#0D182B] p-5 sm:p-10 lg:p-12 relative z-10">
              <h1 className="leading-tight text-[#FFF] text-3xl md:text-3xl xl:text-[3rem] font-EBSemiBold relative">
                Head Office
              </h1>
              <p className="text-[14px] text-md font-bold text-[#FFF] my-6 font-TitilliumRegular">
                Address
              </p>
              <p className="text-sm sm:text-base text-[#FFF] font-TitilliumRegular">
                Menara Gamuda, PJ Trade Centre, No. 8, Jalan PJU 8/8A, Bandar
                Damansara Perdana, 47820 Petaling Jaya, Selangor Darul Ehsan,
                Malaysia.
              </p>
              <div className="my-10">
                <p className="text-[14px] text-md font-bold text-[#FFF] mb-3 font-TitilliumRegular">
                  Get Direction
                </p>
                <div className="grid grid-cols-2 w-[20%] items-center">
                  <a href="#" target="_blank">
                    <img
                      className="max-h-[20px] w-fit object-contain"
                      src="https://www.gamudaland.com.my/images/contact/waze.svg"
                      alt=""
                    />
                  </a>
                  <a href="#" target="_blank">
                    <img
                      className="max-h-[20px] w-fit object-contain"
                      src="https://www.gamudaland.com.my/images/contact/location.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="my-6">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[14px] text-md font-bold text-[#FFF] mb-3 font-TitilliumRegular">
                      Contact Number
                    </p>
                    <div className="flex flex-row items-center mb-3">
                      <img
                        className="w-[20px] h-[20px] mr-2"
                        src="https://www.gamudaland.com.my/images/contact/phone.svg"
                        alt=""
                      />
                      <a
                        className="text-[#FFF] font-TitilliumRegular text-sm sm:text-base"
                        href="#"
                      >
                        +603 7491 3200
                      </a>
                    </div>
                    <div className="flex flex-row items-center">
                      <img
                        className="w-[20px] h-[20px] mr-2"
                        src="https://www.gamudaland.com.my/images/contact/fax.svg"
                        alt=""
                      />
                      <a
                        href="#"
                        className="text-[#FFF] font-TitilliumRegular text-sm sm:text-base"
                      >
                        +603 7726 7646
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] text-md font-bold text-[#FFF] mb-3 font-TitilliumRegular">
                      Working Hours
                    </p>
                    <div className="flex flex-row items-center mb-3">
                      <img
                        className="w-[20px] h-[20px] mr-2"
                        src="https://www.gamudaland.com.my/_next/image?url=%2Fimages%2Fcontact%2Fdatetime.png&w=32&q=75"
                        alt="#"
                      />
                      <p className="text-sm sm:text-base text-[#FFF] font-TitilliumRegular">
                        Mon - Fri 10am - 7pm
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <img
                        className="w-[20px] h-[20px] mr-2"
                        src="https://www.gamudaland.com.my/_next/image?url=%2Fimages%2Fcontact%2Fdatetime.png&w=32&q=75"
                        alt="#"
                      />
                      <p className="text-sm sm:text-base text-[#FFF] font-TitilliumRegular">
                        Sat - Sun 10am - 5pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#FFF] pt-[50px] lg:pt-[15rem] pb-[50px] lg:pb-[12rem] px-4 md:px-8 lg:-mt-44">
        <div className="mb-5">
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3rem] text-[#091C34] text-center font-EBSemiBold w-full mx-auto title relative pb-5">
              Enquiry
            </h1>
          </div>
        </div>
        <div className="w-full sm:w-3/4 xl:w-2/4 mx-auto">
          <form>
            <input
              type="text"
              className="outline-none font-TitilliumRegular p-0 py-3 md:py-2 lg:py-4 w-full border-b-[1px] border-black text-black mb-5"
              placeholder="Full Name"
              required
              maxLength={100}
            />
            <input
              type="email"
              className="outline-none font-TitilliumRegular p-0 py-3 md:py-2 lg:py-4 w-full border-b-[1px] border-black text-black mb-5"
              placeholder="Email"
              required
              maxLength={100}
            />
            <textarea
              type="text"
              placeholder="Message"
              className="outline-none font-TitilliumRegular p-0 py-3 md:py-2 lg:py-4 w-full border-b-[1px] border-black text-black mb-5"
              rows="4"
            ></textarea>
            <div className="mb-5 flex min-h-[1.5rem] items-center">
              <input className="w-5 h-4" type="checkbox" />
              <label className="text-black text-sm inline-block pl-[0.15rem] hover:cursor-pointer font-TitilliumRegular">
                I have read, agreed and accepted the
                <a
                  href="/disclaimer"
                  target="_blank"
                  className="text-[#E32326]"
                >
                  {" "}
                  disclaimer{" "}
                </a>
                and
                <a
                  href="/privacy-notice"
                  target="_blank"
                  className="text-[#E32326]"
                >
                  {" "}
                  disclaimer{" "}
                </a>
              </label>
            </div>
            <button className="flex justify-center mx-auto items-center">
              <div className="rounded-lg p-5 py-3 w-full text-white bg-[#E32426] hover:bg-[#000] flex justify-center items-center transition ease-in delay-100">
                Submit Now
              </div>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;