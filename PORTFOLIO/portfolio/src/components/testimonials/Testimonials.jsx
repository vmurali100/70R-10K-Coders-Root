import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        
        pagination={{ clickable: true }}
       
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            eveniet blanditiis veniam saepe soluta voluptate asperiores
            consequatur minus quas, fugit enim porro unde, illum quisquam totam
            accusantium nemo ducimus deleniti.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar Two" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            eveniet blanditiis veniam saepe soluta voluptate asperiores
            consequatur minus quas, fugit enim porro unde, illum quisquam totam
            accusantium nemo ducimus deleniti.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar Three" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            eveniet blanditiis veniam saepe soluta voluptate asperiores
            consequatur minus quas, fugit enim porro unde, illum quisquam totam
            accusantium nemo ducimus deleniti.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar Four" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            eveniet blanditiis veniam saepe soluta voluptate asperiores
            consequatur minus quas, fugit enim porro unde, illum quisquam totam
            accusantium nemo ducimus deleniti.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
