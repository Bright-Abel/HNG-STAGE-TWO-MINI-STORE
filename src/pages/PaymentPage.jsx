import { PaymentFirstHero, PaymentSecondHero, NavBar } from '../components';
import { useEffect, useState } from 'react';

const PaymentPage = () => {
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
    <section className="">
      <NavBar searchDisplay={screenWidth} />;
      <div className="align-el mt-5">
        <PaymentFirstHero />
        <PaymentSecondHero />
      </div>
    </section>
  );
};
export default PaymentPage;
