/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosSe from "../../Hooks/useAxiosSe";
import useCart from "../../Hooks/useCart";


const OrderCard = ({ item }) => {
  const navigate = useNavigate();
  const { name, recipe, image, price, _id } = item || {};
  const { user } = useAuth();
  const axios = useAxiosSe()

  const [cart, refetch] = useCart();
  
  const handleAddToCart =async() => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        price,
        image
      };     
      // send Cart items;
      try {
       axios.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.acknowledged) {
            toast.success("Cart added successfully");
            refetch()
          }
      })
      } catch (err) {
        console.log(err);
     }
    } else {
      toast.error("Please login first");
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="card lg:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
          <p className="absolute rounded-md top-12 right-14 bg-black text-white p-2 font-bold">
            {price} $
          </p>
        </figure>
        <div className="card-body items-center text-center place-items-center justify-items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions mt-3">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-t-0 border-l-0 border-r-0 border-b-4 uppercase bg-slate-200 text-[#BB8506] border-[#BB8506] font-bold "
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default OrderCard;
