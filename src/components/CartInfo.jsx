import { cartInfoData } from '../custom/data';
const CartInfo = () => {
  return (
    <div className="w-[30%] bg-[#194E6A] px-7 pt-12 hidden lg:block">
      <h4 className="text-white capitalize text-2xl font-[500]">
        Shopping Cart
      </h4>
      <div className="">
        {cartInfoData.map((item, index) => {
          const { id, text, price } = item;
          return (
            <article key={id} className=" flex gap-x-16 justify-between mt-12 ">
              <p
                className={` ${
                  index === 5
                    ? 'text-white text-2xl mt-8 font-[500]'
                    : 'text-[#00A6FF] text-sm '
                }`}
              >
                {text}
              </p>
              <p
                className={`${
                  index === 5
                    ? 'text-white text-xl mt-8 font-[500]'
                    : 'text-white text-[.8rem]  '
                }`}
              >
                ₦{price}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};
export default CartInfo;
