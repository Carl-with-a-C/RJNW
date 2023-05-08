import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";

const Landing = () => {
  return (
    <div id="home">
      <main className="landing-main">
        <div className="landing-header-section">
          <div className="upper-header-container">
            <div className="upper-header-img">
              <div className="upper-header-img-container">
                <img
                  src="https://images.pexels.com/photos/11767927/pexels-photo-11767927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </div>
            </div>
            <div className="upper-header-text">
              <h4>MASTER ROOFERS, 20 YEARS OF EXPERIENCE</h4>
              <div className="upper-text-cover"></div>
            </div>
          </div>
          <div className="lower-header-container">
            <h1>ROOFING & JOINERY NORTHWEST. EXPERTISE BEYOND EXPECTATION</h1>
            <p>
              Roofing and Joinery Northwest Ltd is a leading provider of
              roofing, joinery, facia and soffits services in the North West of
              England, we pride ourselves on offering exceptional projects
              throughout the region.
            </p>
          </div>
        </div>
        <div className="landing-splash-section">
          <div className="splash-carousel-container">
            <div className="splash-carousel-img-container">
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade, Autoplay, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://images.pexels.com/photos/7082446/pexels-photo-7082446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://images.pexels.com/photos/4947284/pexels-photo-4947284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://static.wixstatic.com/media/11062b_7dcce54a95fe450290996d862e60cbf4~mv2.jpg/v1/fill/w_640,h_1034,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_7dcce54a95fe450290996d862e60cbf4~mv2.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="splash-cta-container">
            <h4>find out more {">"}</h4>
            <a href="#contact">
              <button className="get-quote-btn cta">CONTACT US</button>
            </a>
          </div>
        </div>
        <div className="landing-reveal-block-left"></div>
        <div className="landing-reveal-block-right"></div>
      </main>
      <div id="about" className="spacer-container">
        <div className="spacer-left"></div>
        <div className="spacer-right"></div>
      </div>
    </div>
  );
};

export default Landing;
