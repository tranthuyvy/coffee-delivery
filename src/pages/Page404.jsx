

const Page404 = () => {
  return (
    <>
      <section className="relative bg-[url('https://www.gamudaland.com.my/images/layout/tq-bg.jpg')] bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded flex flex-column items-start sm:items-center justify-center w-3/4 lg:w-2/4 p-3 sm:p-6">
          <div>
            <div className="w-full md:px-8 px-4 sm:mt-0 text-center">
              <h1 className="leading-tight text-4xl md:text-4xl xl:text-[3rem] text-[#FF5156] font-EBSemiBold">
                404 Page
              </h1>
              <p className="text-base sm: lg:text-xl text-black my-10 mx-auto">
                Page Not Found
              </p>
              <div>
                <a
                  className="flex items-center justify-center w-2/4 mx-auto font-EBSemiBold rounded-md uppercase py-3 px-6 text-white border-[1px] border-[#0d182b bg-[#0d182b] hover:bg-red-600"
                  href="/"
                >
                  Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page404
