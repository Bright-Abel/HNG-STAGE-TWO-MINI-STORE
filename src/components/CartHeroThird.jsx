import styled from 'styled-components';
import { cartThird } from '../custom/data';
import { IoIosArrowForward } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CartHeroThird = () => {
  const { items } = useLoaderData();
  const [myArr, setMyArr] = useState([]);
  useEffect(() => {
    if (items && items.length > 0) {
      const newArr = items.filter(
        (product) => product.unique_id >= 20 && product.unique_id <= 30
      );

      setMyArr(newArr);
    }
  }, [items]);
  return (
    <Wrapper className="w-full mt-10">
      <div className="w-full bg-[#FEF0E9] p-3  mb-2 rounded-t-lg ">
        <div className=" w-full flex justify-between mx-auto items-center text-[#565D64] ">
          <h3 className=" text-lg text-[#662B0E]">Recommended for you</h3>
          <p className="flex items-center text-[.8rem] gap-1 text-[#F5854E]">
            <Link to="/product" className="hover:font-bold duration-300">
              SEE MORE
            </Link>

            <span>
              <IoIosArrowForward className="cursor-pointer" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap w-full gap-6">
        {myArr.map((item, index) => {
          const { unique_id, description, name, photos, current_price, id } =
            item;
          return (
            <Link
              to={`/product/${id}`}
              key={unique_id}
              className="bg-[#FEF0E9] px-2 md:px-5 py-3 shadow-lg relative rounded-lg flex flex-col items-center  gap-6 cursor-pointer w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-20px)] hover:scale-[1.02] duration-500"
            >
              <div className="absolute bg-[#F6996B] top-2 right-2 rounded-md">
                <p className="text-[10px] md:text-[13px] lg:text-[1rem] px-2 py-1 text-white">
                  -{(index + 1) * 4}%
                </p>
              </div>
              <div className="flex flex-col text-center">
                <h3 className="font-bold text-[#565D64] text-lg sm:text-xl ">
                  ₦{current_price[0]?.NGN[0]}
                </h3>
                <div>
                  <h1 className=" capitalize font-bold text-[#194E6A] textStyle text-lg sm:text-xl lg:text-xl">
                    {name}
                  </h1>
                  <p className=" mt-[-4px] text-[#194E6A] textStyle overflow-hidden text-[.5rem] sm:text-sm">
                    {description}
                  </p>
                </div>
              </div>

              <div className="">
                <img
                  src={`https://api.timbu.cloud/images/${photos[0]?.url}`}
                  alt={name}
                  className=" lg:hover:scale-[1.05] duration-500 w-60 h-40 object-cover "
                />
              </div>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default CartHeroThird;

const Wrapper = styled.div`
 .textStyle {
    display: -webkit-box;
    white-space: normal;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .card {
    margin: 0 0rem 1rem 1rem;
    /* padding: 0; */
    /* margin-bottom: 10px; */
    text-align: center;
    flex: 1 1 20%;
    max-width: 20%;
    box-sizing: border-box;
  }

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

  @media (max-width: 768px) {
    .card {
      flex: 1 1 calc(33.33333% - 8px);
      max-width: calc(33.33333% - 8px);
    }
  }
  @media (max-width: 1024px) {
    .card {
      flex: 1 1 25%;
      max-width: 25%;
    }
  }

   @media (max-width: 480px) {
    .card {
      flex: 1 1 calc(50%  - 1rem);
      max-width: calc(50%  - 1rem);
  }
`;
