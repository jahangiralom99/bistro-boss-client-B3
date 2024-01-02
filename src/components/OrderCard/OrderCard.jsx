import PropTypes from "prop-types";

const OrderCard = ({ item }) => {
  const { name, recipe, image, price } = item || {};
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
            <button className="btn btn-outline border-t-0 border-l-0 border-r-0 border-b-4 uppercase bg-slate-200 text-[#BB8506] border-[#BB8506] font-bold ">
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
