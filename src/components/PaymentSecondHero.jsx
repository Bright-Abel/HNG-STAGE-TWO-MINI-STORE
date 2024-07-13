import CartReusableComponent from './CartReusableComponent';

const PaymentSecondHero = () => {
  return (
    <div className="mt-14">
      <div className=" flex justify-center items-center gap-4">
        <h2 className="text-[#6C6C6C] capitalize font-bold text-3xl md:text-5xl">
          Browse other items
        </h2>
      </div>
      <CartReusableComponent />
    </div>
  );
};
export default PaymentSecondHero;
