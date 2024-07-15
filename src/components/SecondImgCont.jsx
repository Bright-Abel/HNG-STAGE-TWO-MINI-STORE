import styled from 'styled-components';
import { secondCont } from '../custom/data';
import { IoIosArrowForward } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SecondImgCont = ({ items }) => {
  const [myArr, setMyArr] = useState([]);
  useEffect(() => {
    if (items && items.length > 0) {
      const newArr = items.filter(
        (product) => product.unique_id >= 10 && product.unique_id <= 17
      );
      setMyArr(newArr);
    }
  }, [items]);
  // console.log(myArr);

  return (
    <Wrapper className="w-full">
      <div className="w-full bg-[#ECF8FF] p-3  mb-2 rounded-t-lg ">
        <div className="lg:w-[70%] w-full flex justify-between mx-auto items-center text-[#565D64] ">
          <h3 className="capitalize text-lg">top beauty bags</h3>
          <p className="flex items-center text-[.8rem] md:lg gap-1 hover:text-[#F26722] duration-300 font-bold">
            <Link to="/product">VIEW PRODUCTS</Link>
            <span>
              <IoIosArrowForward className="cursor-pointer" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap w-full gap-x-8 md:gap-x-5 gap-y-3">
        {myArr.map((item, index) => {
          const { unique_id, description, name, photos, current_price, id } =
            item;
          return (
            <Link
              to={`/product/${id}`}
              key={unique_id}
              className="bg-[#FEF0E9] px-2 md:px-5 py-3 hover:scale-[1.02] duration-500 shadow-lg card relative rounded-lg flex flex-col gap-6  cursor-pointer"
            >
              <div className="absolute bg-[#F6996B]  top-2 right-2 rounded-md">
                {/* rounded-tr-lg */}
                <p className="text-[10px] md:text-[13px] lg:text-[1rem] px-2 py-1 text-white">
                  -{(index + 1) * 4}%
                </p>
              </div>
              <div className=" flex flex-col">
                <h3 className="font-bold  text-[#565D64] text-sm sm:text-lg">
                  ₦{current_price[0]?.NGN[0]}
                </h3>
                <div className=" ">
                  <h1 className="whitespace-nowrap capitalize  font-bold text-[#194E6A] truncate text-sm sm:text-lg">
                    {name}
                  </h1>
                  <p className="whitespace-nowrap truncate mt-[-4px] text-[#194E6A] text-[.4rem] sm:text-sm">
                    {description}
                  </p>
                </div>
              </div>

              <div className="image-container">
                <img
                  src={`https://api.timbu.cloud/images/${photos[0]?.url}`}
                  alt={name}
                  className="image lg:hover:scale-[1.05] duration-500"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default SecondImgCont;

const Wrapper = styled.section`
  .card {
    /* margin-right: 1rem; */
    /* padding: 0; */
    margin-bottom: 10px;
    text-align: center;
    flex: 1 1 calc(25% - 1rem);
    max-width: calc(25% - 1rem);
    /* flex: 1 1 22%;
    max-width: 22%; */
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
      flex: 1 1 calc(33.33333% - 1rem);
      max-width: calc(33.33333% - 1rem);
    }
  }

  @media (max-width: 480px) {
    .card {

      flex: 1 1 calc(50%  - 1rem);
      max-width: calc(50%  - 1rem);
  }
`;
