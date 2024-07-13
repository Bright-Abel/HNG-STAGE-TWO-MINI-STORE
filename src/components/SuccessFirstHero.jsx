import { Link } from 'react-router-dom';
import checked from '../assets/Checked.svg';
const SuccessFirstHero = () => {
  return (
    <div className="mt-10">
      <div className="w-full bg-[#FCF4E6] border border-solid border-[#F6996B] rounded-xl flex justify-center items-center flex-col gap-5 py-12 xl:h-[60vh]">
        <img src={checked} alt="Success" className="w-20 sm:w-40 lg:w-50" />
        <h2 className="text-[#6C6C6C] font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
          Your order is on its way
        </h2>
      </div>

      <div className="w-full flex gap-6 flex-col items-center  text-white mt-6">
        <Link
          to="*"
          type="button"
          className="w-full flex items-center justify-center bg-[#F26722] py-4 rounded-sm gap-2 hover:shadow-custom-new duration-500 hover:scale-[.98] text-lg xl:text-2xl font-[500]"
        >
          <span>Track order</span>
        </Link>
        <Link
          to="/"
          type="button"
          className="w-full flex items-center justify-center bg-[#FCFAF7] py-4 rounded-sm gap-2 hover:shadow-xl duration-500 hover:scale-[.98] text-lg xl:text-2xl border border-[#262626] font-[500]"
        >
          <span className="text-[#3C3C3C]">Back to homepage</span>
        </Link>
      </div>
    </div>
  );
};
export default SuccessFirstHero;
