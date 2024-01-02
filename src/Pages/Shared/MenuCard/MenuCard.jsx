import PropTypes from "prop-types";

const MenuCard = ({ item }) => {
    const { name, recipe, image,  price } = item || {};
    
    return (
        <div className="flex gap-6">
            <img style={{borderRadius: "0px 200px 200px 200px"}} className="w-[104px]" src={image} alt="" />
            <div>
                <h1 className="text-xl font-bold">{name}------------</h1>
                <p>{ recipe}</p>
            </div>
            <h4 className="font-bold text-yellow-500">${price}</h4>
        </div>
    );
};

MenuCard.propTypes = {
    item: PropTypes.object.isRequired,
  };

export default MenuCard;