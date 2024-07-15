import firstContainer from '../custom/data';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../project__features/cartSlice';
import { Link } from 'react-router-dom';

const FirstImgCont = ({ items }) => {
  const dispatch = useDispatch();
  const [myArr, setMyArr] = useState([]);

  useEffect(() => {
    if (items && items.length > 0) {
      const newArr = items.filter((product) => product.unique_id <= 6);
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

    toast.success('Item has been added to cart.', {
      className:
        'border border-teal-200 bg-teal-50 text-sm px-1 py-4 rounded-lg mx-[4rem] my-[1rem] sm:mx-0',
      hideProgressBar: true,
      // closeButton: false,
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {myArr.map((item) => {
        const { unique_id, description, name, current_price, photos, id } =
          item;
        return (
          <div className="relative">
            <Link
              to={`/product/${id}`}
              key={unique_id}
              className="relative flex items-center hover:scale-[1.02] duration-500 cursor-pointer bg-[#FCFAF7] shadow-xl justify-between gap-8  py-8 px-4 rounded-lg"
            >
              <div className=" flex flex-col  gap-4  text-center ">
                <h3 className="font-bold text-xl text-[#565D64] ">
                  ₦{current_price[0]?.NGN[0]}
                </h3>
                <div className=" ">
                  <h1 className=" capitalize text-[1.2rem] leading-8 md:text-3xl font-bold text-[#194E6A]">
                    {name}
                  </h1>
                  <p className="whitespace-nowrap text-[#194E6A] text-[9px] md:text-[12px]">
                    {description}
                  </p>
                </div>
              </div>

              {/* image div */}
              <div className="w-[40%]">
                <img
                  src={`https://api.timbu.cloud/images/${photos[0].url}`}
                  alt={description}
                  className="w-40 h-40 object-contain"
                />
              </div>
            </Link>
            <button
              type="button"
              onClick={() => handleClick(unique_id)}
              className="px-7 py-2 bg-[#37A8E5]  absolute text-white top-0 right-0 rounded-tr-lg shadow-custom-light2 hover:shadow-custom-light duration-500 hover:opacity-[.85]"
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default FirstImgCont;
