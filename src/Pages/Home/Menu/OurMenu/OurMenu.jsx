import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import imageBg from "../../../../assets/menu/banner3.jpg"
import useMenu from "../../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const OurMenu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const offered = menu.filter((item) => item.category === "offered");

    // const 

    return (
        <section>
            <Helmet>
            <title>Bistro Boss || Our Menu</title>
            </Helmet>
            <Cover img={imageBg} heading='OUR MENU'></Cover>
            <SectionTitle heading="---Don't miss---" subHeading="Todays Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} img={imageBg} heading="dessert"></MenuCategory>
            <MenuCategory items={soup} img={imageBg} heading="soup"></MenuCategory>
            <MenuCategory items={salad} img={imageBg} heading="salad"></MenuCategory>
            <MenuCategory items={pizza} img={imageBg} heading="pizza"></MenuCategory>
        </section>
    );
};

export default OurMenu;