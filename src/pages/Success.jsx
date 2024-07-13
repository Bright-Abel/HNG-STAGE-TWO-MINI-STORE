import { useEffect, useState } from 'react';
import { NavBar, SuccessFirstHero, SuccessSecondHero } from '../components';
const Success = () => {
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
    <section>
      <NavBar searchDisplay={screenWidth} />
      <div className="align-el">
        <SuccessFirstHero />
        <SuccessSecondHero />
      </div>
    </section>
  );
};
export default Success;
