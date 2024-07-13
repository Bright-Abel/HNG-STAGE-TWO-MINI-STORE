import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigation,
} from 'react-router-dom';
import { NavBar, Footer, Loading } from '../components';

const HomeLayout = () => {
  const location = useLocation();
  const { state } = useNavigation();

  const currentState = state === 'loading';
  return (
    <div>
      <main className="">
        {currentState ? <Loading /> : <Outlet location={location} />}
      </main>
      <Footer />
    </div>
  );
};
export default HomeLayout;
