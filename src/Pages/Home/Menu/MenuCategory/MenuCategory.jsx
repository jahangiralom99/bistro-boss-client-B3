import Cover from "../../../Shared/Cover/Cover";
import MenuCard from "../../../Shared/MenuCard/MenuCard";

const MenuCategory = ({ items, img, heading }) => {
  return (
    <div>
      {heading && <Cover img={img} heading={heading}></Cover>}
      <div className="grid md:grid-cols-2 gap-6 p-2 place-items-center mt-6 mb-6">
        {items?.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
