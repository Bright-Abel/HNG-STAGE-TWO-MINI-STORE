import axios from 'axios';

const authFetch = axios.create({
  baseURL: '/api/',
  headers: {
    Accept: 'application/json',
  },
});

export const getUniqueValue = (data, type) => {
  let unique = data.map((val) => val[type]);
  // if (type === 'colors') {
  //   unique = unique.flat();
  // }
  return ['all', ...new Set(unique)];
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
export default authFetch;
