import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination } from "swiper";

import ServiceNav from "./ServiceNav.jsx";

const Conversions = () => {
  return (
    <div>
      <ServiceNav />
      <section className="service-main">
        <div className="service-upper-section">
          <div className="service-header-section">
            <div className="service-header-container">
              <p>Our Services</p>
              <h1>CONVERSIONS</h1>
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
                      "url(https://www.absolutelofts.com/wp-content/uploads/2021/01/loft-conversion-dormer-east-london-wanstead-e11-exterior-natural-slates-aluminium-windows.jpg)",
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
                      We will work with you to design a dorma that meets your
                      needs and budget, and our skilled team of tradespeople
                      will ensure that the project is completed to the highest
                      standards.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="title" data-swiper-parallax="-300">
                    <h1>2</h1>
                  </div>
                  <div className="subtitle" data-swiper-parallax="-300">
                    <h4>Experience</h4>
                  </div>
                  <div className="text" data-swiper-parallax="-300">
                    <p>
                      At Roofing and Joinery Northwest Ltd, we have extensive
                      experience in this area and can help you create a stunning
                      new space in your home.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="service-swiper-wrapper">
                  <div className="title" data-swiper-parallax="-300">
                    <h1>3</h1>
                  </div>
                  <div className="subtitle" data-swiper-parallax="-300">
                    <h4>Value</h4>
                  </div>
                  <div className="text" data-swiper-parallax="-300">
                    <p>
                      Dorma conversions are an excellent way to increase the
                      value and functionality of your home.
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

export default Conversions;
