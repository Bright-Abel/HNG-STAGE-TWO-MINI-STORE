import styled from 'styled-components';
import cart from '../assets/cartCart.svg';
import search from '../assets/searchCart.png';
import { useSelector } from 'react-redux';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import CartReusableComponent from './CartReusableComponent';
const CartHeroFirst = () => {
  const { cartItems, numItemsInCart } = useSelector((store) => store.cart);
  const navigate = useNavigate();

  return (
    <Wrapper className="mt-10">
      <div className=" flex justify-center items-center gap-4">
        <img src={cart} alt="Cart Logo" className="w-6 sm:w-8 md:w-10" />
        <h2 className="text-[#6C6C6C] capitalize font-bold text-2xl sm:text-3xl md:text-5xl">
          Here’s your cart
        </h2>
      </div>
      {/* <h3 className="text-lg sm:text-xl md:text-3xl text-center mt-10 font-semibold text-[#6C6C6C]">
        You have <span className="text-[#F26722]">{numItemsInCart}</span>{' '}
        {numItemsInCart > 1 ? 'items' : 'item'} in your cart
      </h3> */}
      <CartReusableComponent items={cartItems} />
      <div className="w-full flex gap-6 flex-col lg:flex-row lg:items-start items-center  text-white mt-6">
        <Link
          to="/product"
          type="button"
          className="lg:w-1/2 w-[80%] flex font-[700] items-center justify-center bg-[#37A8E5] py-4 rounded-sm gap-2 hover:shadow-custom-light duration-500 hover:scale-[.98] text-lg xl:text-2xl"
        >
          {cartItems.length < 1 ? (
            <span className="text-sm mg:text-lg lg:text-xl">Fill Cart</span>
          ) : (
            <>
              <span className="text-sm mg:text-lg lg:text-xl">
                Add more items
              </span>
              <IoSearch className="text-lg xl:text-2xl" />
            </>
          )}
        </Link>
        <button
          onClick={() => navigate('/checkout')}
          type="button"
          className={`lg:w-1/2 w-[80%] flex font-[700] items-center justify-center bg-[#F26722] py-4 rounded-sm gap-2 hover:shadow-xl duration-500 hover:scale-[.98] text-lg xl:text-2xl ${
            cartItems.length < 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={cartItems.length < 1}
        >
          <span className="text-sm mg:text-lg lg:text-xl">
            {cartItems.length < 1
              ? 'Please fill your cart before checking out'
              : 'Check out'}
          </span>
          <MdOutlineShoppingCartCheckout className="text-lg xl:text-2xl" />
        </button>
      </div>
    </Wrapper>
  );
};
export default CartHeroFirst;

const Wrapper = styled.div`
  .card {
    margin: 4px;
    /* padding: 0; */
    margin-bottom: 10px;
    text-align: center;
    flex: 1 1 calc(100% - 8px);
    max-width: calc(100% - 8px);
    box-sizing: border-box;


  .image-container {
    position: relative;
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* border-radius: 4px; */
    overflow-clip-margin: content-box;
  }

  @media (min-width: 768px) {
    .card {
      flex: 1 1 calc(50% - 8px);
      max-width: calc(50% - 8px);
    }
  }
`;
