import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import { BsQuote } from "react-icons/bs";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="mt-8 mb-8">
      <SectionTitle
        heading="---What Our Clients Say---"
        subHeading="TESTIMONIALS"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div
              className="flex flex-col items-center justify-center
                       text-center px-12"
            >
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <BsQuote className="text-7xl " />
              <p>{review.details}</p>
              <h2 className="text-3xl text-orange-500 ">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
