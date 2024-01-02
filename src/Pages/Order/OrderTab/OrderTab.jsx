import OrderCard from "../../../components/OrderCard/OrderCard";

const OrderTab = ({items}) => {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {items.map((item) => (
        <OrderCard key={item._id} item={item}></OrderCard>
      ))}
    </div>
  );
};

export default OrderTab;
