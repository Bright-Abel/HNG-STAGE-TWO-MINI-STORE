import styled from 'styled-components';
import { cartSecond } from '../custom/data';

const CartHeroSec = () => {
  return (
    <div className="mt-16">
      <h2 className="text-[#6C6C6C] capitalize font-bold text-2xl text-center sm:text-3xl md:text-5xl">
        Others are buying...
      </h2>

      <div className="mt-10 flex flex-wrap gap-6 w-full justify-center items-center">
        {cartSecond.map((item) => {
          const { id, img, text, desc, price } = item;
          return (
            <div
              key={id}
              className="bg-[#FEF0E9] p-4 md:p-5 shadow-lg card relative rounded-lg flex flex-col gap-3 lg:gap-6 w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-24px)] cursor-pointer lg:hover:scale-[1.02] duration-500"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <h3 className="font-bold text-[#565D64] text-xl  lg:text-2xl">
                  ${price}
                </h3>
                <div>
                  <h1 className="whitespace-nowrap capitalize font-bold text-[#194E6A] truncate text-xl  lg:text-3xl">
                    {desc}
                  </h1>
                  <p className="whitespace-nowrap text-center truncate mt-[-4px] text-[#194E6A] text-[.5rem] sm:text-sm">
                    {text}
                  </p>
                </div>
              </div>

              <div className="w-full self-end ">
                <img
                  src={img}
                  alt={desc}
                  className={`lg:hover:scale-[1.05] duration-500 w-full h-40 object-contain`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CartHeroSec;
