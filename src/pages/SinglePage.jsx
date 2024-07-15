import { Link, useLoaderData } from 'react-router-dom';
import authFetch from '../custom/baseUrl';
import { useDispatch } from 'react-redux';
import { addItem } from '../project__features/cartSlice';
import { useState, useEffect } from 'react';
import { NavBar } from '../components';
import { generateAmountOptions } from '../custom/baseUrl';
import Stars from '../components/Stars';
import { toast } from 'react-toastify';

const params = {
  organization_id: import.meta.env.VITE_ORG_ID,
  Apikey: import.meta.env.VITE_API_KEY,
  Appid: import.meta.env.VITE_APP_ID,
};

// export const loader = async (data) => {
//   const id = data.params.id;
//   console.log(data);
//   // Ensure you have the correct id
//   try {
//     const response = await authFetch.get(`/products/${id}`, { params });
//     // const { items } = response.data;
//     console.log(response);

//     return { response };
//   } catch (error) {
//     console.error('Error fetching products:', error);

//     // Check if the error response exists
//     if (error.response) {
//       console.error('Error response data:', error.response.data);
//     } else {
//       console.error('Error message:', error.message);
//     }

//     // Return an error message or an empty array
//     return { response: [], error: 'There was an error fetching the products' };
//   }
// };

export const loader = async (fetchId) => {
  const id = fetchId.params.id;
  //   console.log(id);
  const { data } = await authFetch.get(`products/${id}`, { params });
  //   console.log(data);

  return { data };
};

const SinglePage = () => {
  const { data } = useLoaderData();
  console.log(data);

  const { photos, unique_id, description, current_price, name, extra_infos } =
    data;

  const [amount, setAmount] = useState(1);
  const image = photos[0].url;
  const price = current_price;
  const rating = extra_infos[0]?.value || 2.4;

  const dispatch = useDispatch();
  const cartProduct = {
    cartID: data.id + unique_id,
    productID: data.id,
    images: image,
    name,
    price,
    amount,
    description,
  };

  const addToCart = () => {
    dispatch(addItem(cartProduct));
    toast.success('Item added to cart.', {
      className:
        'border border-teal-200 bg-teal-50 text-sm px-1 py-4 rounded-lg mx-[4rem] my-[1rem] sm:mx-0',
      hideProgressBar: true,
    });
  };
  const [screenWidth, setScreenWidth] = useState(false);

  useEffect(() => {
    const displayWidth = window.innerWidth;
    if (displayWidth >= 1280) {
      setScreenWidth(true);
    } else {
      setScreenWidth(false);
    }
  }, []);

  return (
    <main>
      <NavBar searchDisplay={screenWidth} />
      <div className="align-el mt-40">
        <div className="grid lg:grid-cols-2 gap-y-8 mt-6 lg:gap-x-16">
          <img
            src={`https://api.timbu.cloud/images/${image}`}
            alt={name}
            className="w-[24rem] rounded-lg h-[29rem] object-cover lg:w-full "
          />

          <div>
            <h1 className="capitalize text-3xl font-bold">{name}</h1>

            {/* <h4 className="capitalize text-xl text-neutral-content font-semibold">
                {dollarVal}
              </h4> */}
            <p className="mt-6 leading-8">{description}</p>
            <h4 className="capitalize text-xl text-neutral-content font-bold mt-2">
              ₦{price}
            </h4>
            <Stars stars={rating} />
            <div className="form-control mt-6 w-full max-w-xs">
              <h4 className="text-md font-medium -tracking-wider capitalize">
                Amount
              </h4>
              <select
                className="select select-bordered select-secondary select-md mt-2"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => {
                  setAmount(parseInt(e.target.value));
                }}
              >
                {generateAmountOptions(20)}
              </select>
            </div>
            <button
              className="bg-[#F26722] text-white py-2 px-3 hover:shadow-lg hover:scale-[1.02] duration-300 rounded-md uppercase btn-md font-bold mt-4"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SinglePage;
