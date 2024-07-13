import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  CartPage,
  HomeLayout,
  Landing,
  CheckoutPage,
  Success,
  ErrorPage,
  PaymentPage,
  ProductPage,
  SinglePage,
} from './pages';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// LOADERS
// import { loader as HomeLoader } from './pages/HomeLayout';
import { loader as landingLoader } from './pages/Landing';
import { loader as productLoader } from './pages/ProductPage';
import { loader as cartLoader } from './pages/CartPage';
import { loader as checkoutLoader } from './pages/CheckoutPage';
import { loader as singleLoader } from './pages/SinglePage';

// import ScrollToTop from './pages/ScrollToTop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: 'cart',
        element: <CartPage />,
        loader: cartLoader,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
        loader: checkoutLoader,
      },
      {
        path: 'success',
        element: <Success />,
      },
      {
        path: 'payment',
        element: <PaymentPage />,
      },
      {
        path: 'product',
        element: <ProductPage />,
        loader: productLoader,
      },
      {
        path: 'product/:id',
        element: <SinglePage />,
        loader: singleLoader,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
};
export default App;
