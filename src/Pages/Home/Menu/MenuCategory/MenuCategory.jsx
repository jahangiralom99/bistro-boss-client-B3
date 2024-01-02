import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuCard from "../../../Shared/MenuCard/MenuCard";
import PropTypes from "prop-types";

const MenuCategory = ({ items, img, heading }) => {
  return (
    <div>
      {heading && <Cover img={img} heading={heading}></Cover>}
      <div className="grid md:grid-cols-2 gap-6 p-2 place-items-center mt-6 mb-6">
        {items?.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
      <div className="text-center mt-4 mb-6">
        <Link to={`/order/${heading}`}>
        <button className="btn btn-outline border-t-0 border-l-0 border-r-0 border-b-4 uppercase font-bold">
          ORDER YOUR FAVOURITE FOOD
        </button>
        </Link>
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array.isRequired,
  img: PropTypes.node,
  heading: PropTypes.node,
};

export default MenuCategory;
