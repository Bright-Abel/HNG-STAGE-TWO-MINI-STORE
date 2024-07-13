import bag1 from '../assets/bag1.png';
import bag2 from '../assets/bag2.png';
import bag3 from '../assets/bag3.png';
import bag4 from '../assets/bag4.png';

import img1 from '../assets/bag1.jpg';
import img2 from '../assets/bag2.jpg';
import img3 from '../assets/bag8.jpg';
import img4 from '../assets/bag4.jpg';
import img5 from '../assets/bag5.jpg';
import img6 from '../assets/bag6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import pink from '../assets/Pink bag.svg';

import yellow1 from '../assets/yellow.png';
import red1 from '../assets/pink.png';
import green1 from '../assets/green.png';
import black1 from '../assets/black.png';
import puffy from '../assets/puffy.png';

import orange from '../assets/orange.png';
import deepRed from '../assets/deepRed.png';
import deepBlack from '../assets/deepBlack.png';
import gray from '../assets/gray.png';

import telegram from '../assets/telegram.svg';
import twitter from '../assets/twitter.svg';
import fb from '../assets/fb.svg';

import checkout1 from '../assets/checkout.png';
import checkout2 from '../assets/checkout1.png';
import checkout4 from '../assets/checkout2.png';

import profile from '../assets/person.svg';
import cart from '../assets/cart.svg';
import bar from '../assets/menuIcon.svg';

import { nanoid } from 'nanoid';

export const navBarLogo = [
  {
    id: nanoid(),
    img: profile,
    text: 'profile',
    url: '*',
  },
  {
    id: nanoid(),
    img: cart,
    text: 'cart',
    url: '/cart',
  },
  {
    id: nanoid(),
    img: bar,
    text: 'menu',
    url: '*',
  },
];

const firstContainer = [
  {
    id: nanoid(),
    desc: 'Red leather bag ',
    text: 'Most popular among it’s set',
    img: red1,
    price: 2500,
  },
  {
    id: nanoid(),
    desc: 'Yellow puffy bag',
    text: 'Most popular among it’s set',
    img: yellow1,
    price: 3500,
  },
  {
    id: nanoid(),
    desc: 'Green premium Leather bag',
    text: 'Most popular among it’s set',
    img: green1,
    price: 1500,
  },
  {
    id: nanoid(),
    desc: 'Pink Bag',
    text: 'Most popular among it’s set',
    img: orange,
    price: 4500,
  },
  {
    id: nanoid(),
    desc: 'black bag',
    text: 'Most popular among it’s set',
    img: deepBlack,
    price: 7500,
  },
  {
    id: nanoid(),
    desc: 'gym bag',
    text: 'Most popular among it’s set',
    img: gray,
    price: 8500,
  },
];
export const secondCont = [
  {
    id: nanoid(),
    img: img1,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img2,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img4,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img3,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img6,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img5,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img10,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img11,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
];

export const cartFirst = [
  {
    id: nanoid(),
    text: 'Puffy Clouds Premium Bag - Pink ',
    img: img3,
    price: '5,999.99',
    rating: '-34%',
    smallText: 'Most popular among it’s set',
    status: 'in stock',
  },
  {
    id: nanoid(),
    text: 'Puffy Clouds Premium Bag - Pink ',
    img: puffy,
    price: '5,999.99',
    rating: '-34%',
    smallText: 'Most popular among it’s set',
    status: 'in stock',
  },
  {
    id: nanoid(),
    text: 'Puffy Clouds Premium Bag - Pink ',
    img: yellow1,
    price: '5,999.99',
    rating: '-34%',
    smallText: 'Most popular among it’s set',
    status: 'in stock',
  },
  {
    id: nanoid(),
    text: 'Puffy Clouds Premium Bag - Pink ',
    img: img2,
    price: '5,999.99',
    rating: '-34%',
    smallText: 'Most popular among it’s set',
    status: 'in stock',
  },
];

export const cartSecond = [
  {
    id: nanoid(),
    img: yellow1,
    text: 'Most popular among it’s set',
    desc: 'red leather',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: red1,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: green1,
    text: 'Most popular among it’s set',
    desc: 'green small bag',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: black1,
    text: 'Most popular among it’s set',
    desc: 'black hand bag',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: orange,
    text: 'Most popular among it’s set',
    desc: 'ladies pink bag',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: deepRed,
    text: 'Most popular among it’s set',
    desc: 'leather bag',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: deepBlack,
    text: 'Most popular among it’s set',
    desc: 'black small bag',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: gray,
    text: 'Most popular among it’s set',
    desc: 'gym bag',
    rating: '-34%',
    price: 1500,
  },
];

export const cartThird = [
  {
    id: nanoid(),
    img: img1,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img2,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img3,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img4,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img5,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img6,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img7,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img8,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img9,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
  {
    id: nanoid(),
    img: img8,
    text: 'Most popular among it’s set',
    desc: 'puffy clouds',
    rating: '-34%',
    price: 1500,
  },
];

export const list = [
  {
    id: nanoid(),
    title: 'company',
    text: [
      'Home',
      'Products',
      'Customers',
      "T & C's",
      'Pricing',
      // {
      //   id: nanoid(),
      //   listTxt: 'Home',
      // },
      // {
      //   id: nanoid(),
      //   listTxt: 'Products',
      // },
      // {
      //   id: nanoid(),
      //   listTxt: 'Customers',
      // },
      // {
      //   id: nanoid(),
      //   listTxt: "T & C's",
      // },
      // {
      //   id: nanoid(),
      //   listTxt: 'Pricing',
      // },
    ],
  },
  {
    id: nanoid(),
    title: 'customers',
    text: [
      'Report a product',
      'Become a seller',
      'Privacy notice',
      // {
      //   id: nanoid(),
      //   listTxt: 'Report a product',
      // },
      // {
      //   id: nanoid(),
      //   listTxt: 'Become a seller',
      // },
      // {
      //   id: nanoid(),
      //   listTxt: 'Privacy notice',
      // },
    ],
  },
  {
    id: nanoid(),
    title: 'Contact',
    text: [
      'Help center',
      'Chat with us',
      'contact us',
      // {
      //   id: nanoid(),
      //   listTxt: 'Help center',
      // },
      // {
      //   id: nanoid(),
      //   listTxt: 'Chat with us',
      // },
      // {
      //   id: nanoid(),
      //   listTxt: 'contact us',
      // },
    ],
  },
  {
    id: nanoid(),
    title: 'Follow us',
    title2: 'Subscribe',
    image: [
      fb,
      telegram,
      twitter,
      // {
      //   id: nanoid(),
      //   img: fb,
      // },
      // {
      //   id: nanoid(),
      //   img: telegram,
      // },
      // {
      //   id: nanoid(),
      //   img: twitter,
      // },
    ],
  },
];

export const checkoutData = [
  {
    id: nanoid(),
    tittle: 'Totes bag Premium Bag Beige color',
    price: '5,999.99',
    percent: '34% off',
    percentVal: '2,000',
    // img: img2,
    img: checkout1,
  },
  {
    id: nanoid(),
    tittle: 'Puffy Clouds Pink  Bag - premium design ',
    price: '6,300.00',
    percent: '34% off',
    percentVal: '2,000',
    // img: yellow1,
    img: checkout2,
  },
  {
    id: nanoid(),
    tittle: 'Alternate red leather bag, pink colour',
    price: '13,500.99',
    percent: '34% off',
    percentVal: '6,000',
    // img: red1,
    img: checkout4,
  },
];

export const cartInfoData = [
  {
    id: nanoid(),
    text: 'Totes bag Premium Bag Beige color',
    price: '6,388.99',
  },
  {
    id: nanoid(),
    text: 'Puffy Clouds Premium  ',
    price: '1,999.99',
  },
  {
    id: nanoid(),
    text: 'Black Leather Bag',
    price: '2,999.99',
  },
  {
    id: nanoid(),
    text: 'Totes Green bag Premium Bag ',
    price: '3,999.99',
  },
  {
    id: nanoid(),
    text: 'Travel Bag',
    price: '5,999.99',
  },
  {
    id: nanoid(),
    text: 'Total',
    price: '35,999.00',
  },
];
export default firstContainer;
