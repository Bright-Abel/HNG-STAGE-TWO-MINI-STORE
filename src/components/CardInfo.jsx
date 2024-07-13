import { useState } from 'react';
import FormReusable from './FormReusable';
import CustomCheckbox from './CustomCheckbox';
import { toast } from 'react-toastify';

import PaymentInfoReusable from './PaymentInfoReusable';
import { Link } from 'react-router-dom';

const CardInfo = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleClick = () => {
    toast.success('Payment has been successfully made.', {
      className:
        'border border-teal-200 bg-teal-50 text-sm px-1 py-4 rounded-lg mx-[4rem] my-[2rem] sm:mx-0',
      hideProgressBar: true,
      // closeButton: false,
    });
  };
  return (
    <div className="w-full lg:w-[70%]  flex flex-col gap-5">
      <h1 className="text-[#F26722] md:text-[#2A3038] font-[500]  text-3xl lg:text-4xl">
        Shipping Address
      </h1>
      <form action="" className=" flex flex-col gap-8 lg:gap-14">
        <div className=" flex gap-4 md:gap-0 md:justify-between">
          {/* First NAME */}
          <FormReusable label="First name" labelFor="firstName" type="text" />
          {/* LAST NAME */}
          <FormReusable label="last name" labelFor="lastName" type="text" />
          <FormReusable label="Email address" labelFor="email" type="email" />
        </div>

        <div className="">
          <FormReusable label="Company" labelFor="lastName" type="text" />
          <FormReusable label="address" labelFor="lastName" type="text" />
        </div>
        <div className="flex flex-col gap-4">
          <div className=" flex gap-4 md:gap-0 md:justify-between ">
            {/* First NAME */}
            <FormReusable label="country" labelFor="firstName" type="text" />
            {/* LAST NAME */}
            <FormReusable label="city" labelFor="lastName" type="text" />
            <FormReusable label="zip code" labelFor="email" type="email" />
          </div>
          <CustomCheckbox />
        </div>
      </form>
      <div className=" flex flex-col gap-10">
        <h1 className="font-[500] mt-8 text-[#F26722] md:text-[#2A3038] text-3xl lg:text-4xl">
          Card details
        </h1>
        <PaymentInfoReusable
          header="Card number"
          para="Enter the 16 digit number on the card"
          dynamic={true}
        />
        <PaymentInfoReusable
          header="CVV number"
          para="Enter the 3-digit number on the card"
          dynamic={true}
        />
        <PaymentInfoReusable
          header="Expiry date"
          para="Enter the expiry date linked to the card"
          dynamic={false}
        />

        <PaymentInfoReusable
          header="Password"
          para="Enter your dynamic password"
          dynamic={true}
        />
      </div>

      {/* button */}
      <div className=" flex gap-6 lg:gap-0 items-center lg:justify-between text-white mt-6 w-full lg:w-[70%]">
        <Link
          to="/success"
          type="button"
          onClick={() => handleClick()}
          className="flex w-1/2 items-center lg:py-2 lg:w-40  justify-center bg-[#F26722] py-3 rounded-sm gap-2 hover:shadow-custom-new duration-500 hover:scale-[.95] text-lg xl:text-xl font-[400]"
        >
          <span>Continue</span>
        </Link>
        <Link
          to="/"
          type="button"
          className=" flex items-center w-1/2 lg:w-40 py-3 lg:py-2 justify-center bg-[#FCFAF7]  rounded-sm gap-2 hover:shadow-xl duration-500 hover:scale-[.95] text-lg xl:text-xl border border-[#262626] font-[400]"
        >
          <span className="text-[#3C3C3C]">Back To Store</span>
        </Link>
      </div>
    </div>
  );
};
export default CardInfo;
