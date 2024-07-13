import CardInfo from './CardInfo';
import CartInfo from './CartInfo';

const PaymentFirstHero = () => {
  return (
    <div className="w-full flex gap-12">
      <CardInfo />
      <CartInfo />
    </div>
  );
};
export default PaymentFirstHero;
