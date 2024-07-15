import { FirstHero, FirstImgCont, NavBar, SecondImgCont } from '../components';
import authFetch from '../custom/baseUrl';
import { useLoaderData } from 'react-router-dom';
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

const Landing = () => {
  const { items } = useLoaderData();

  return (
    <section>
      <NavBar searchDisplay={true} />

      <div className="align-el flex flex-col gap-8">
        <FirstHero items={items} />
        <FirstImgCont items={items} />
        <SecondImgCont items={items} />
      </div>
    </section>
  );
};
export default Landing;
