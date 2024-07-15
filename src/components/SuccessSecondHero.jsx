import CartReusableComponent from './CartReusableComponent';
import { useLoaderData, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const SuccessSecondHero = () => {
  const { items } = useLoaderData();

  const [myArr, setMyArr] = useState([]);

  useEffect(() => {
    if (items && items.length > 0) {
      const newArr = items.filter(
        (product) => product.unique_id >= 2 && product.unique_id <= 15
      );
      setMyArr(newArr);
    }
  }, [items]);
  return (
    <div className="mt-14">
      <div className=" flex justify-center items-center gap-4">
        <h2 className="text-[#6C6C6C] capitalize font-bold text-3xl md:text-5xl">
          Browse other items
        </h2>
      </div>

      <Wrapper className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {myArr.map((item) => {
          const { unique_id, description, name, current_price, photos, id } =
            item;
          return (
            <div key={id} className="relative ">
              <Link
                to={`/product/${id}`}
                key={unique_id}
                className="relative flex items-center hover:scale-[1.02] duration-500 cursor-pointer bg-[#FCFAF7] shadow-xl justify-between gap-8  py-8 px-4 rounded-lg"
              >
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
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
};
export default SuccessSecondHero;
const Wrapper = styled.div`
  .textStyle {
    display: -webkit-box;
    white-space: normal;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
  }
`;
