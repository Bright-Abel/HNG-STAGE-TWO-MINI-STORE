import ReactPaginate from 'react-paginate';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosArrowDown } from 'react-icons/io';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addItem } from '../project__features/cartSlice';
import { toast } from 'react-toastify';
import { getUniqueValue } from '../custom/baseUrl';
import { Link } from 'react-router-dom';

const ProductView = () => {
  const { items } = useLoaderData();
  const [newArray, setNewArray] = useState([]);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const newData = items.filter(
      (item) => item.unique_id >= 7 || item.unique_id === 'AB195931P'
    );
    setNewArray(newData);
  }, [items]);

  // console.log(getUniqueValue(items, 'unique_id'));
  const handleClick = (dat) => {
    let myData = newArray.filter((item) => item.unique_id === dat);
    const { description, name, photos, current_price, unique_id, id } =
      myData[0];
    const images = photos[0].url;
    const price = current_price[0]?.NGN[0];

    const cartProduct = {
      cartID: newArray.id + unique_id,
      productID: newArray.id,
      images,
      description,
      price,
      name,
      amount,
    };

    // let newNumb = amount + 1;
    // setAmount(newNumb);
    // console.log(newNumb);

    dispatch(addItem(cartProduct));
    toast.success('Item has been added to cart.', {
      className:
        'border border-teal-200 bg-teal-50 text-sm px-1 py-4 rounded-lg mx-[4rem] my-[1rem] sm:mx-0',
      hideProgressBar: true,
      // closeButton: false,
    });
  };

  //   PAGINATION BEGINS
  const [pageNumber, setPageNumber] = useState(0);

  const pageVisited = pageNumber * 10;

  const displayInfo = newArray
    .slice(pageVisited, pageVisited + 10)
    .map((item, index) => {
      const { unique_id, description, name, current_price, photos, id } = item;
      return (
        <div
          // to={`/product/${id}`}
          key={unique_id}
          className=" bg-white  hover:shadow-2xl  relative rounded-lg flex flex-col gap-3 lg:gap-6 w-[calc(50%-6px)] md:w-[calc(33.333%-8px)] lg:w-[calc(25%-8px)] cursor-pointer lg:hover:scale-[1.02] duration-500"
        >
          <Link to={`/product/${id}`}>
            <img
              src={`https://api.timbu.cloud/images/${photos[0].url}`}
              alt={name}
              className="rounded-t-lg "
            />
            <span className=" lg:hidden absolute top-3 right-3 block text-[#f68b1e] bg-[#fef3e9]  rounded-sm py-[2px] px-1 font-medium  text-sm lg:text-sm">
              -{(index + 4) * 7}%
            </span>
            <div className="px-2 py-2">
              <span className=" bg-[#276076] text-[.625rem] py-[2px] px-2 font-medium w-fit rounded-[2px] text-white">
                {unique_id} - items in Stock
              </span>
              <span></span>
              <div className="">
                <h3 className="text-[.75rem] leading-tight overflow-hidden textStyle font-[400] ">
                  {description}
                </h3>
                <h5 className="text-[.875rem] font-[500] mt-[4px] ">
                  ₦{current_price[0]?.NGN?.[0] || 2500}
                </h5>
                <div className="flex gap-2">
                  {/* bg-[#fef3e9] */}
                  <span className="hidden lg:block text-[#f68b1e] bg-[#fef3e9]  rounded-sm py-[2px] px-1 font-medium  text-sm lg:text-sm">
                    -{(index + 4) * 7}%
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <div className="px-2 py-2">
            <button
              onClick={() => handleClick(unique_id)}
              type="button"
              className="w-full bg-[#F26722] text-sm md:text-lg  text-white font-medium py-[8px] md:py-[12px] px-[16px] flex items-center justify-center uppercase rounded-[4px] mt-6 shadow-sm"
            >
              Add to cart
            </button>
          </div>
        </div>
      );
    });

  const numberOfPages = Math.ceil(newArray.length / 10);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
  };
  return (
    <Wrapper className="">
      <div className="bg-[#194E6A] px-5 py-4 text-white flex justify-between items-center rounded-t-lg">
        <div className="text-white flex flex-col md:flex-row items-center gap-2">
          <h1 className="text-lg font-medium  truncate ">All Products</h1>
          <p className="text-sm font-(400)">
            ({newArray.length} products found)
          </p>
        </div>

        <div
          onClick={() => dispatch(hideSort())}
          className={`cursor-pointer hover:bg-[#e2e1e173] py-2 px-2 rounded-md flex items-center justify-center gap-5`}
        >
          <span>
            Sort by: <span className="capitalize"></span>
          </span>
          <IoIosArrowDown className="font-bold text-lg" />
        </div>
      </div>
      <div className="mt-2 lg:bg-white bg-[#e4e4e4] rounded-lg flex flex-wrap gap-x-2 gap-y-4 w-full  items-center">
        {displayInfo}
      </div>
      {/* PAGINATION */}
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        pageCount={numberOfPages}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'disabledBttn'}
        activeClassName={'active'}
      />
    </Wrapper>
  );
};
export default ProductView;

const Wrapper = styled.section`
  .textStyle {
    display: -webkit-box;
    white-space: normal;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .paginationBttns {
    /* width: 80%; */
    height: 40px;
    display: flex;
    justify-content: right;
    /* gap: 10px; */
    margin-top: 2rem;
  }
  @media screen and (max-width: 640px) {
    .paginationBttns {
      justify-content: center;
      gap: 10px;
    }
  }
  .previous a,
  .next a {
    margin-right: 1rem;
    margin-left: 1rem;
    border: 1px solid #d1d5db;
    background: transparent !important;
    border-radius: 5px;
  }

  .paginationBttns a {
    padding: 5px 7px;
    margin-top: 8px;
    background: #d1d5db;
  }

  .active a {
    background: #dce3ec;
    color: #f68b1e;
  }
`;
