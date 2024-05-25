import { useState } from 'react';
import OrderTracker from '../components/Order/OrderTraker';

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>

      <section className="relative flex flex-col-reverse md:flex-row items-center bg-[url('https://www.highlandscoffee.com.vn/vnt_upload/cake/SPECIALTYCOFFEE/Untitled-1-01.png')]">
        <div className="relative md:w-full pt-[80px]">
          <div className="py-[40px] px-7 lg:px-14 md:py-14 w-full">
            <h1 className="uppercase text-center sm:text-left font-RobotoSemibold text-main text-3xl md:text-3xl xl:text-[3rem] mb-5 mt-0 sm:mt-5 md:leading-tight">
              Checkout
            </h1>
          </div>
        </div>
      </section>
      <OrderTracker activeStep={activeStep} />
      <button onClick={() => setActiveStep((prevStep) => Math.min(prevStep + 1, 4))}>
        Next Step
      </button>
      <button onClick={() => setActiveStep((prevStep) => Math.max(prevStep - 1, 0))}>
        Previous Step
      </button>
    </>
  );
};

export default Checkout;
