import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://api.timbu.cloud/',
  headers: {
    Accept: 'application/json',
  },
});
//https://api.timbu.cloud/
export const getUniqueValue = (data, type) => {
  let unique = data.map((val) => val[type]);
  // if (type === 'colors') {
  //   unique = unique.flat();
  // }
  return [...new Set(unique)];
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
