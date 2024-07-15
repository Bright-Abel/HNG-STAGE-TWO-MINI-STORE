import { checkoutData } from '../custom/data';
import { RiDeleteBinLine } from 'react-icons/ri';
import cart from '../assets/cartCart.svg';
import { Link } from 'react-router-dom';
import checkout from '../assets/checkout.svg';
import frame from '../assets/frame.svg';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { removeItem } from '../project__features/cartSlice';
import { useDispatch } from 'react-redux';

const CheckOutFrstHero = () => {
  const { cartTotal, cartItems } = useSelector((store) => store.cart);
  const total = ((34 / 100) * cartTotal).toFixed(2);
  const newTotal = (cartTotal - total).toFixed(2);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (cartID) => {
    // console.log(cartID);
    dispatch(removeItem({ cartID }));
    toast.error('Item has been removed from cart.', {
      className:
        'border border-red-200 bg-red-50 text-sm px-1 py-4 rounded-lg mx-[4rem] my-[1rem] sm:mx-0',
      hideProgressBar: true,
      // closeButton: false,
    });
  };

  return (
    <div className="mt-10 xl:mt-15">
      <div className=" flex justify-center items-center gap-4">
        <img src={cart} alt="Cart Logo" className="w-6 sm:w-8 md:w-10" />
        <h2 className="text-[#6C6C6C] capitalize font-bold text-3xl md:text-5xl">
          Checkout
        </h2>
      </div>
      {cartItems.length < 1 ? (
        <div className="flex justify-center items-center h-[40vh] md:h-[50vh] lg:h-[70vh]">
          <h2 className="text-[#6C6C6C] capitalize font-bold text-2xl sm:text-3xl md:text-4xl">
            Your cart is empty please go back to fill your cart
          </h2>
        </div>
      ) : (
        <div className=" flex   flex-col gap-5 xl:mx-14 mt-5">
          {cartItems.map((item, index) => {
            const { cartID, description, images, price, name } = item;
            return (
              <div
                key={cartID}
                className="relative cursor-pointer  hover:scale-[1.02] hover:shadow-md duration-500 flex gap-3 items-center py-2 md:py-4  pl-1 pr-3 border-[2px] border-solid border-[#EAEBEC] rounded-lg"
              >
                <div className="">
                  <img
                    src={`https://api.timbu.cloud/images/${images}`}
                    alt={name}
                    className="w-32 md:w-[85%]"
                  />
                </div>

                <div className="self-stretch mt-10">
                  <h4 className="text-[#2A3038] font-[500] whitespace-normal lg:whitespace-nowrap text-[.6rem] md:text-lg truncate">
                    {description}
                  </h4>
                  <h2 className="text-[#2A3038] font-[500] text-lg md:text-2xl">
                    ₦{price}
                  </h2>
                  <span className="">
                    <small className="text-[#F5854E] text-[.6rem] md:text-sm mr-1">
                      In stock
                    </small>
                  </span>
                </div>

                <div
                  onClick={() => handleRemoveFromCart(cartID)}
                  className="bg-[#313942] cursor-pointer hover:scale-[.9] hover:opacity-[.9] duration-500 absolute top-0 right-0 lg:top-2 lg:right-2 h-10 w-10 rounded-lg flex justify-center items-center"
                >
                  <RiDeleteBinLine className="text-[1.2rem] text-white" />
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="bg-[#FCF4E6] border border-solid border-[#EAEBEC] mt-8 flex gap-5 md:gap-16 py-8 px-2 justify-center">
        <h2 className="text-[#2A3038] font-[700] text-sm sm:text-lg md:text-2xl">
          Total cost of items
        </h2>
        <div className="">
          <h2 className="text-[#F26722] font-[700] text-sm sm:text-lg md:text-2xl">
            ₦{newTotal}
          </h2>
          <div className="mt-[-.1rem] md:mt-[.5rem]">
            <small className="text-[#F5854E] text-[.6rem] md:text-sm mr-1">
              34% off
            </small>
            <small className="text-[.6rem] font-[700] md:text-sm text-[#2A3038]">
              ₦({total})
            </small>
          </div>
        </div>
      </div>

      {/* button */}
      <div className="w-full flex gap-6 flex-col items-center  text-white mt-6">
        <Link
          to="/payment"
          type="button"
          className="w-full flex items-center justify-center bg-[#F26722] py-4 rounded-sm gap-2 hover:shadow-custom-new duration-500 hover:scale-[.98] text-lg xl:text-2xl font-[500]"
        >
          <span>Check out and pay</span>
          <img src={checkout} alt="checkout icon" className="w-6 " />
        </Link>
        <Link
          to="/cart"
          type="button"
          className="w-full flex items-center justify-center bg-[#FCFAF7] py-4 rounded-sm gap-2 hover:shadow-xl duration-500 hover:scale-[.98] text-lg xl:text-2xl border border-[#262626] font-[500]"
        >
          <span className="text-[#3C3C3C]">Back to cart</span>
          <img src={frame} alt="back arrow" className="w-6 " />
        </Link>
      </div>
    </div>
  );
};
export default CheckOutFrstHero;
