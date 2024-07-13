import { cartFirst } from '../custom/data';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleCart,
  editItem,
  clearCart,
} from '../project__features/cartSlice';
import { useEffect, useState } from 'react';

const CartReusableComponent = ({ items }) => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const [newID, setNewId] = useState('');

  // useEffect(() => {
  //   const myId = cartItems.filter((item) => item.cartID === items.cartID);
  //   console.log(myId);
  // }, []);

  const decrease = (id) => {
    const value = 'dec';
    let newNumb = amount - 1;
    setAmount(newNumb);
    dispatch(editItem({ id, amount }));
    // dispatch(toggleCart({ id, value }));
    toast.error('Item has been removed from cart.', {
      className:
        'border border-red-200 bg-red-50 text-sm px-1 py-4 rounded-lg mx-[4rem] my-[1rem] sm:mx-0',
      hideProgressBar: true,
    });
  };

  const increase = (id) => {
    let newNumb = amount + 1;
    setAmount(newNumb);
    dispatch(editItem({ id, amount }));
    // dispatch(toggleCart({ id, value }));
    toast.success('One item has been increased in the cart.', {
      className:
        'border border-teal-200 bg-teal-50 text-sm px-1 py-4 rounded-lg mx-[4rem] my-[1rem] sm:mx-0',
      hideProgressBar: true,
    });
  };
  if (cartItems.length < 1) {
    return (
      <div className="flex justify-center items-center h-[40vh] md:h-[50vh] lg:h-[70vh]">
        <h2 className="text-[#6C6C6C] capitalize font-bold text-2xl sm:text-3xl md:text-5xl">
          Your cart is empty click below to fill cart
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-7 mt-5">
      {items.map((item, index) => {
        const { cartID, images, description, name, price } = item;
        return (
          <div
            key={cartID}
            className="flex gap-4 items-center shadow-lg rounded-lg bg-white cursor-pointer"
          >
            <div className="rounded-tl-lg rounded-bl-lg w-[200px] h-[200px] relative">
              <span className="absolute top-2 right-2 py-1 rounded-md text-[10px] md:text-[13px] lg:text-[.8rem] bg-[#3CB9FC] px-2 md:px-1 text-white">
                -{(index + 5) * 2}%
              </span>
              <img
                src={`https://api.timbu.cloud/images/${images}`}
                alt="product image"
                className=""
              />
            </div>
            <div className="w-[50%] mt-[-1rem] md:mt-[-.5rem] text-[#2A3038] flex flex-col gap-1">
              <p className="font-[500] whitespace-nowrap text-[.6rem] md:text-lg truncate">
                {description}
              </p>
              <h2 className="font-[500] text-sm md:text-xl">₦{price}</h2>
              <p className="bg-[#C3E9FE] whitespace-nowrap text-[#662B0E] md:text-[.6rem] text-[.4rem] w-fit px-2 py-1">
                {name}
              </p>
              <p className="capitalize whitespace-nowrap text-[#F26722] text-[.6rem] md:text-[.8rem] w-fit px-2 py-1">
                In stock
              </p>
              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => increase(cartID)}
                  className="bg-[#3C3C3C] p-2 text-white hover:scale-[.9] hover:bg-[#37A8E5] duration-500"
                >
                  <FaPlus className="text-lg" />
                </button>
                <button
                  type="button"
                  onClick={() => decrease(cartID)}
                  className="bg-[#3C3C3C] p-2 text-white hover:scale-[.9] hover:bg-[#37A8E5] duration-500"
                >
                  <FaMinus className="text-[#C3E9FE]" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartReusableComponent;
