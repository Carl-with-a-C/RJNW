import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination } from "swiper";

import ServiceNav from "./ServiceNav.jsx";

const ReRoof = () => {
  return (
    <div>
      <ServiceNav />
      <section className="service-main">
        <div className="service-upper-section">
          <div className="service-header-section">
            <div className="service-header-container">
              <p>Our Services</p>
              <h1>RE-ROOFS</h1>
            </div>
          </div>
          <div className="service-upper-space">
            <h4>
              CALL US NOW
              <br /> 0800 800 800
            </h4>
          </div>
        </div>
        <div className="service-lower-section">
          <div className="service-carousel-section">
            <div className="service-img-container">
              <Swiper
                speed={600}
                parallax={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Parallax, Pagination]}
                className="mySwiper"
              >
                <div
                  slot="container-start"
                  className="parallax-bg"
                  style={{
                    "background-image":
                      "url(https://images.unsplash.com/photo-1587061633437-187ac80e8e7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
                  }}
                  data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                  <div className="title" data-swiper-parallax="-300">
                    <h1>1</h1>
                  </div>
                  <div className="subtitle" data-swiper-parallax="-300">
                    <h4>Design</h4>
                  </div>
                  <div className="text" data-swiper-parallax="-300">
                    <p>
                      We will work with you to identify the best materials and
                      techniques for your project, ensuring that your new roof
                      provides you with the protection and aesthetics that you
                      need.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="title" data-swiper-parallax="-300">
                    <h1>2</h1>
                  </div>
                  <div className="subtitle" data-swiper-parallax="-300">
                    <h4>Versatility</h4>
                  </div>
                  <div className="text" data-swiper-parallax="-300">
                    <p>
                      Our team of experts is highly skilled in all types of
                      roofing materials, including traditional slating, concrete
                      and clay tiling, and flat roofing.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="service-swiper-wrapper">
                  <div className="title" data-swiper-parallax="-300">
                    <h1>3</h1>
                  </div>
                  <div className="subtitle" data-swiper-parallax="-300">
                    <h4>Security</h4>
                  </div>
                  <div className="text" data-swiper-parallax="-300">
                    <p>
                      Re-roofing your home can be a significant investment, but
                      with our experience and expertise, we can help you make
                      the most of your investment.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="service-info-section">
            <div className="service-info-upper-section">
              <h3>20 YEARS OF EXPERTISE</h3>
              <button className="service-btn cta">
                <a className="call-btn-text" href="tel:0800800800">
                  CALL US NOW
                </a>
              </button>
            </div>
            <div className="service-info-lower-section">
              <div className="service-info-top">
                <p>
                  At Roofing and Joinery Northwest Ltd, we offer free,
                  non-obligatory quotes and estimates.
                </p>
              </div>
              <div className="service-info-bottom">
                <p>
                  Our surveys come with a detailed description of our findings,
                  so that all potential clients are fully aware of what work is
                  required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReRoof;
