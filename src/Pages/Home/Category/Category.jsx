
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import slid1 from "../../../assets/home/slide1.jpg";
import slid2 from "../../../assets/home/slide2.jpg";
import slid3 from "../../../assets/home/slide3.jpg";
import slid4 from "../../../assets/home/slide4.jpg";
import slid5 from "../../../assets/home/slide5.jpg";

import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return ( 
      <section className="mt-12">
          <SectionTitle className="text-center"
              heading="---From 11:00am to 10:00pm---"
              subHeading="ORDER ONLINE"
          >  
          </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-8"
      >
        <SwiperSlide>
          <img src={slid1} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-16 text-white italic drop-shadow-md	">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slid2} alt="" />
          <h1 className="text-4xl uppercase text-center -mt-16 text-white italic drop-shadow-md	">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
                  <img src={slid3} alt="" />
                  <h1 className="text-4xl uppercase text-center -mt-16 text-white italic drop-shadow-md	">
            Pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
                  <img src={slid4} alt="" />
                  <h1 className="text-4xl uppercase text-center -mt-16 text-white italic drop-shadow-md	">
                  desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
                  <img src={slid5} alt="" />
                  <h1 className="text-4xl uppercase text-center -mt-16 text-white italic drop-shadow-md	">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
