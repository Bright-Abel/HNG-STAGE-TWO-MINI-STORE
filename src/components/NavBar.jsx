import person from '../assets/Ellipse26.png';
import love from '../assets/love.png';
import search from '../assets/Vector.png';
import menu from '../assets/vec.svg';
import { useSelector } from 'react-redux';
import { navBarLogo } from '../custom/data';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';
const NavBar = ({ searchDisplay }) => {
  const { numItemsInCart } = useSelector((store) => store.cart);
  return (
    <nav className="align-el">
      <div className="flex flex-wrap justify-between items-center pt-4">
        {/* NAV FIRST AND THIRD ELEMENTS */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="flex items-center gap-1 md:gap-3">
            <img src={person} alt="Person pic" className="w-[15%]" />
            <div className="flex items-center gap-1 md:gap-3">
              <img src={love} alt="love" />
              <p className="text-sm leading-5">
                It’s time to discover <br /> your next obsession
              </p>
            </div>
          </div>
          <div className="lg:hidden items-center gap-8 flex">
            {navBarLogo.map((item) => {
              const { id, url, text, img } = item;
              return (
                <>
                  <Link
                    key={id}
                    to={url}
                    data-tooltip-id={id}
                    className="relative"
                  >
                    <img src={img} alt={text} className="w-5" />
                    {text === 'cart' && (
                      <p className="bg-[#F6996B] text-sm absolute top-[-15px] right-[-15px] px-2 rounded-md text-white ">
                        {numItemsInCart}
                      </p>
                    )}
                  </Link>
                  <ReactTooltip
                    id={id}
                    place="top"
                    content={text}
                    className="skills-tooltip"
                  />
                </>
              );
            })}
          </div>
        </div>

        {/* SEARCH BAR */}
        {searchDisplay && (
          <div className="flex items-center gap-3 w-full lg:w-auto lg:flex-1 lg:px-14 mt-4 lg:mt-0 ">
            <div className="flex gap-3 items-center px-2 w-full lg:w-[80%] border-[0.85px] border-solid border-[#000000] py-1 lg:px-3 rounded-[106.76px]">
              <img src={search} alt="search icon" className="" />
              <input
                type="text"
                placeholder="Search products, brands and categories"
                className="w-[90%] outline-none rounded-[106.76px]"
              />
            </div>
            <img src={menu} alt="Menu bar" className="w-6" />
          </div>
        )}
        <div className="lg:flex items-center gap-8 hidden">
          {navBarLogo.map((item) => {
            const { id, url, text, img } = item;
            return (
              <>
                <Link
                  key={id}
                  to={url}
                  data-tooltip-id={id}
                  className="relative"
                >
                  <img src={img} alt={text} className="w-5" />
                  {text === 'cart' && (
                    <p className="bg-[#F6996B] text-sm absolute top-[-15px] right-[-15px] px-2 rounded-md text-white ">
                      {numItemsInCart}
                    </p>
                  )}
                </Link>
                <ReactTooltip
                  id={id}
                  place="top"
                  content={text}
                  className="skills-tooltip"
                />
              </>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
