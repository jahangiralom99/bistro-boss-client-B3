import OrderCard from "../../../components/OrderCard/OrderCard";
import PropTypes from 'prop-types';

const OrderTab = ({items}) => {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {items.map((item) => (
        <OrderCard key={item._id} item={item}></OrderCard>
      ))}
    </div>
  );
};

OrderTab.propTypes = {
  items: PropTypes.array.isRequired,
}
export default OrderTab;
