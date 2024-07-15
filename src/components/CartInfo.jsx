import { getUniqueValue } from '../custom/baseUrl';
import { cartInfoData } from '../custom/data';
import { useSelector } from 'react-redux';
const CartInfo = () => {
  const { cartItems, cartTotal } = useSelector((store) => store.cart);

  const desc = getUniqueValue(cartItems, 'description');
  const price = getUniqueValue(cartItems, 'price');
  const amount = getUniqueValue(cartItems, 'amount');
  return (
    <div className="w-[30%] bg-[#194E6A] px-7 pt-12 hidden lg:block h-fit py-14 rounded-md">
      <h4 className="text-white capitalize text-2xl font-[500]">
        Shopping Cart
      </h4>

      <div className="mt-12">
        {/* {cartInfoData.map((item, index) => {
          const { id, text, price } = item;
          return ( */}
        <div className="w-full flex justify-between mb-6 text-white font-bold">
          <p className="">Description</p>
          <p className="">Amount</p>
          <p className="">Quantity</p>
        </div>
        <article className=" flex gap-x-16 justify-between  ">
          <p
            className={`text-[#00A6FF] text-sm truncate
            `}
          >
            {desc}
          </p>
          <p className={`text-white text-[.8rem]`}>₦{price}</p>
          <p className={`text-white text-[.8rem]`}>{amount}</p>
        </article>
        <div className="flex gap-x-16 justify-between mt-12">
          <p className="text-white text-2xl mt-8 font-[500] truncate">Total </p>
          <p className="text-white text-xl mt-8 font-[500]">{cartTotal}</p>
        </div>
        {/* );
        })} */}
      </div>
      {/* ? 'text-white text-2xl mt-8 font-[500]'  text-white text-xl mt-8 font-[500]*/}
    </div>
  );
};
export default CartInfo;
