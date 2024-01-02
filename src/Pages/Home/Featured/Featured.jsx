import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section className="bg-[url('https://i.postimg.cc/kXWKK9fw/featured.jpg')] bg-cover bg-no-repeat bg-fixed object-cover text-white pt-6">
          <div className="bg-slate-600 bg-opacity-40 ">
          <SectionTitle heading="Featured check it out" subHeading="From Our Menu">
        {" "}
      </SectionTitle>
      <div className="md:flex gap-8 py-20 px-32 items-center justify-center">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="space-y-2">
          <h4>March 20, 2023</h4>
          <h3>WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Featured;
