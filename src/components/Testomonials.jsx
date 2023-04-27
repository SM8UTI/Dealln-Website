import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

import { EffectCoverflow, Autoplay } from "swiper";
import TestomonialsCard from "./TestomonialsCard";

const data = [
  {
    name: "Full Name",
    position: "Position Name",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non blanditiis doloribus nostrum dolores ratione, accusantium dolor earum voluptatem distinctio neque!",
    Image:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1366&q=80",
  },
  {
    name: "Full Name",
    position: "Position Name",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non blanditiis doloribus nostrum dolores ratione, accusantium dolor earum voluptatem distinctio neque!",
    Image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
  },
  {
    name: "Full Name",
    position: "Position Name",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non blanditiis doloribus nostrum dolores ratione, accusantium dolor earum voluptatem distinctio neque!",
    Image:
      "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430&q=80",
  },
  {
    name: "Full Name",
    position: "Position Name",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non blanditiis doloribus nostrum dolores ratione, accusantium dolor earum voluptatem distinctio neque!",
    Image:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1366&q=80",
  },
  {
    name: "Full Name",
    position: "Position Name",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non blanditiis doloribus nostrum dolores ratione, accusantium dolor earum voluptatem distinctio neque!",
    Image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
  },
  {
    name: "Full Name",
    position: "Position Name",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non blanditiis doloribus nostrum dolores ratione, accusantium dolor earum voluptatem distinctio neque!",
    Image:
      "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=430&q=80",
  },
];

const Testomonials = () => {
  return (
    <section className="Testomonials">
      <div className="top max">
        <span className="sub-text">Testimonial</span>
        <div className="main-section">
          <h2>
            What
            <span> Clients </span>
            Say
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            blanditiis doloribus nostrum dolores ratione, accusantium dolor
            earum voluptatem distinctio neque!
          </p>
        </div>
      </div>
      <div className="container max">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="swiper_container"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
        >
          {data.map((elem, index) => (
            <SwiperSlide key={index}>
              <TestomonialsCard data={elem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testomonials;
