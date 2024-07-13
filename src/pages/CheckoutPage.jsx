import { useEffect, useState } from 'react';
import { CheckOutFrstHero, CheckOutSecondHero, NavBar } from '../components';

import authFetch from '../custom/baseUrl';

const params = {
  organization_id: import.meta.env.VITE_ORG_ID,
  Apikey: import.meta.env.VITE_API_KEY,
  Appid: import.meta.env.VITE_APP_ID,
};

export const loader = async () => {
  const {
    data: { items },
  } = await authFetch.get('products', { params });

  return { items };
};
const CheckoutPage = () => {
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
        <CheckOutFrstHero />
        <CheckOutSecondHero />
      </div>
    </section>
  );
};
export default CheckoutPage;
