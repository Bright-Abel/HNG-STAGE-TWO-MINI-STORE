import FormReusable from './FormReusable';
import { RxSlash } from 'react-icons/rx';

const PaymentInfoReusable = ({ header, para, dynamic }) => {
  return (
    <div>
      {dynamic ? (
        <div className="flex gap-10">
          <div>
            <h4 className="text-[#565D64] text-lg md:text-2xl">{header}</h4>
            <p className="text-[#A6AAAE] text-[.7rem] md:text-[.8rem] whitespace-nowrap">
              {para}
            </p>
          </div>
          <input
            type="text"
            name="name"
            id="input-1"
            className="border-[#FBD0BA] border bg-[#FEF0E9] py-2 rounded-lg mt-1 w-full outline-none"
          />
        </div>
      ) : (
        <div className="flex gap-4 lg:gap-10">
          <div>
            <h4 className="text-[#565D64] text-lg md:text-2xl">{header}</h4>
            <p className="text-[#A6AAAE] text-[.7rem] md:text-[.8rem] whitespace-nowrap">
              {para}
            </p>
          </div>
          <div className="flex gap-1 lg:gap-7 items-center ">
            <input
              type="text"
              name="name"
              id="input-2"
              className="border-[#FBD0BA] border bg-[#FEF0E9] py-2 w-16 md:w-full rounded-lg mt-1 outline-none"
            />
            <RxSlash className="text-[#FBD0BA] text-4xl lg:text-5xl font-extrabold" />
            <input
              type="text"
              name="name"
              id="input-3"
              className="border-[#FBD0BA] border bg-[#FEF0E9] w-16 md:w-full  py-2 rounded-lg mt-1 outline-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default PaymentInfoReusable;
