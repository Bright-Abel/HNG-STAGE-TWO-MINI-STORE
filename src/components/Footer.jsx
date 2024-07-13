import { list } from '../custom/data';
import telegram from '../assets/newTel.svg';
const Footer = () => {
  return (
    <div className="bg-[#194E6A] w-full flex mt-10  items-center py-8 align-el">
      <div className="w-full my-0 px-4 justify-center ">
        <div className="flex flex-wrap  gap-y-4 gap-x-10 md:gap-x-24 lg:gap-x-40 text-[#EAEBEC] ">
          {list.map((item) => {
            const { id, text, title, image, title2 } = item;
            return (
              <div key={id} className="">
                <h2 className="capitalize text-lg xl:text-2xl">{title}</h2>
                {text && (
                  <ul className="">
                    {text.map((smallText, i) => {
                      // const { id, listTxt } = smallText;
                      return (
                        <li key={i} className="">
                          <a href="" className="text-[.7rem]  md:text-sm ">
                            {smallText}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {image && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center  gap-3">
                      {image.map((social, i) => {
                        // const { id, img } = social;
                        return (
                          <img key={i} src={social} alt="" className="w-2" />
                        );
                      })}
                    </div>
                    {title2 && (
                      <div className="">
                        <h2 className="capitalize text-lg xl:text-2xl">
                          {title2}
                        </h2>

                        <div className="rounded-full flex items-center gap-2  bg-[#FEF0E9] pl-3">
                          <input
                            type="email"
                            placeholder="Your Email"
                            name=""
                            id=""
                            className="w-full py-2 rounded-full bg-[#FEF0E9] outline-none truncate text-[#194E6A]"
                          />
                          <span className="bg-[#F9B999] h-[2.5rem] w-10 rounded-r-full flex justify-center items-center">
                            <img
                              src={telegram}
                              alt="telegram"
                              className="w-5"
                            />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Footer;
