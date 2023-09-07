import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Cutomers = () => {
  const [customer, setCustomers] = useState([
    {
      name: "Albus Dumbledore",
      jop: "Manager @ Howarts",
      text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      img: "customer.png",
    },
    {
      name: "Albus Dumbledore",
      jop: "Manager @ Howarts",
      text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      img: "customer.png",
    },
    {
      name: "Albus Dumbledore",
      jop: "Manager @ Howarts",
      text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      img: "customer.png",
    },
    {
      name: "Albus Dumbledore",
      jop: "Manager @ Howarts",
      text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      img: "customer.png",
    },
    {
      name: "Albus Dumbledore",
      jop: "Manager @ Howarts",
      text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      img: "customer.png",
    },
    {
      name: "Albus Dumbledore",
      jop: "Manager @ Howarts",
      text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      img: "customer.png",
    },
  ]);

  return (
    <section className="customer-say yellow pb170">
      <div className="container">
        <div className="cus-say">
          <h1 className="js-scroll fade-btm">What our customers say?</h1>
        </div>
        <div className="swiperInner">
          <Swiper
            spaceBetween={20}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            breakpoints={{
              1024: {
                width: 1024,
                slidesPerView: 3,
              },
              991: {
                width: 991,
                slidesPerView: 2,
              },
              300: {
                width: 300,
                slidesPerView: 1,
              },
            }}
          >
            {customer.map((e, i) => (
              <SwiperSlide key={i}>
                <div className="bw">
                  <p>{e.text}</p>
                  <div className="cust-info">
                    <img src={require(`../media/${e.img}`)} alt="" />
                    <div className="cust-text">
                      <h6>{e.name}</h6>
                      <span>{e.jop}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="prev">
            <i className="fa-solid fa-arrow-left-long"></i>
          </div>
          <div className="next">
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cutomers;
