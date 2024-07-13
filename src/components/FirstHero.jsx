import puffy from '../assets/puffy.png';
import puffy1 from '../assets/newPuf.png';
import new1 from '../assets/new.png';

import Ellipse from '../assets/Ellipse.svg';
import styled from 'styled-components';

const FirstHero = ({ items }) => {
  // console.log(myArr);

  return (
    <Wrapper className="bg-[#ECF8FF] w-full py-12 md:py-0 lg:h-[80vh]  rounded-lg px-8 relative mt-10">
      <div className="bg-[#00A4FC] rounded-[66.46px] md:px-8 md:py-4 left-0 top-[-10px] w-fit sm:py-3 px-5 py-2 absolute lg:w-[30%] flex items-center justify-center">
        <p className="text-white text-sm md:text-[1.2rem] leading-3 whitespace-nowrap">
          Top sales of the week
        </p>
      </div>

      <div className=" flex justify-between w-full  gap-5 sm:gap-0 ">
        {/* HERO CONTENT */}
        <div className="flex flex-col gap-2 justify-center items-center w-[50%]">
          <div className="bg-[#FFDBDB] md:w-80 md:h-40 sm:w-60 sm:h-28 w-40 h-20 flex justify-center items-center rounded-[50%]">
            <p className="text-xl  sm:text-4xl text-[#565D64] text-center font-bold">
              Verified
            </p>
          </div>

          <div className="text-center ">
            <h1 className=" font-bold text-[1.5rem] sm:text-[2.5rem] md:text-[3rem] xl:text-[5rem] text-[#194E6A] whitespace-nowrap">
              Puffy Clouds
            </h1>
            <p className=" text-[#194E6A] whitespace-nowrap text-[10px] sm:text-[1rem] lg:text-2xl mt-[-5px]">
              Most popular among it’s set
            </p>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="w-[50%] ">
          <img
            src={puffy1}
            alt="puffy bag"
            className="xl:w-[86%]  object-cover"
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default FirstHero;

const Wrapper = styled.div`
  .stretch {
    letter-spacing: 0.1em;
  }
`;
