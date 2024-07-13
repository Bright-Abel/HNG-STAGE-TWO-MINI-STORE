import CartReusableComponent from './CartReusableComponent';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../project__features/cartSlice';
import { Link, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

const CheckOutSecondHero = () => {
  const { items } = useLoaderData();
  const dispatch = useDispatch();
  const [myArr, setMyArr] = useState([]);

  useEffect(() => {
    if (items && items.length > 0) {
      const newArr = items.filter((product) => product.unique_id <= 12);
      setMyArr(newArr);
    }
  }, [items]);
  const [amount, setAmount] = useState(1);

  const handleClick = (id) => {
    let myData = myArr.filter((item) => item.unique_id === id);
    const { description, name, photos, current_price, unique_id } = myData[0];
    const images = photos[0].url;
    const price = current_price[0]?.NGN[0];

    const cartProduct = {
      cartID: myArr.id + unique_id,
      productID: myArr.id,
      images,
      description,
      price,
      name,
      amount,
    };
    dispatch(addItem(cartProduct));
    let newNumb = amount + 1;
    setAmount(newNumb);

    toast.success('Item has been added to cart.', {
      className:
        'border border-teal-200 bg-teal-50 text-sm px-1 py-4 rounded-lg mx-[4rem] my-[1rem] sm:mx-0',
      hideProgressBar: true,
      // closeButton: false,
    });
  };
  return (
    <Wrapper className="mt-14">
      <div className=" flex justify-center items-center gap-4">
        <h2 className="text-[#6C6C6C] capitalize font-bold text-3xl md:text-5xl">
          Your recent searches
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {myArr.map((item) => {
          const { unique_id, description, name, current_price, photos, id } =
            item;
          return (
            <Link
              to={`/product/${id}`}
              key={unique_id}
              className="relative flex items-center hover:scale-[1.02] duration-500 cursor-pointer bg-[#FCFAF7] shadow-xl justify-between gap-8  py-8 px-4 rounded-lg"
            >
              <button
                type="button"
                onClick={() => handleClick(unique_id)}
                className="px-7 py-2 bg-[#37A8E5]  absolute text-white top-0 right-0 rounded-tr-lg shadow-custom-light2 hover:shadow-custom-light duration-500 hover:opacity-[.85]"
              >
                Add to cart
              </button>
              <div className=" flex flex-col  gap-4  text-center w-1/2 ">
                <h3 className="font-bold text-xl text-[#565D64] ">
                  ₦{current_price[0]?.NGN[0]}
                </h3>
                <div className=" ">
                  <h1 className=" capitalize text-[1.2rem] leading-8 md:text-2xl font-bold text-[#194E6A]">
                    {name}
                  </h1>
                  <p className="textStyle text-[#194E6A] text-[7px] text-left md:text-[12px]">
                    {description}
                  </p>
                </div>
              </div>

              {/* image div */}
              <div className="w-[40%]">
                <img
                  src={`https://api.timbu.cloud/images/${photos[0].url}`}
                  alt={description}
                  className="h-40 object-cover"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default CheckOutSecondHero;

const Wrapper = styled.div`
  .textStyle {
    display: -webkit-box;
    white-space: normal;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
  }
`;
