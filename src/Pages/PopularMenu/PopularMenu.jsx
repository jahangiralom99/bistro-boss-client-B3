import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCard from "../Shared/MenuCard/MenuCard";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu()
  const popular = menu.filter((item) => item.category === "popular");

  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const filter = data.filter((item) => item.category === "popular");
  //       setMenu(filter);
  //     });
  // }, []);

  console.log(menu);

  return (
    <section className="mt-8 mb-8">
      <SectionTitle
        heading="---Check it out---"
        subHeading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4 place-items-center">
        {popular.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
      <div className="text-center mt-4 ">
        <button className="btn btn-outline border-t-0 border-l-0 border-r-0 border-b-4 uppercase font-bold">View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
