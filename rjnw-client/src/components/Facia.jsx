import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination } from "swiper";

import ServiceNav from "./ServiceNav.jsx";

const Facia = () => {
  return (
    <div>
      <ServiceNav />
      <section className="service-main">
        <div className="service-upper-section">
          <div className="service-header-section">
            <div className="service-header-container">
              <p>Our Services</p>
              <h1>FACIA AND SOFFITS</h1>
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
                      "url(https://images.unsplash.com/photo-1524568292009-5c8f3fe5dcc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
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
                      Our facia and soffit services are designed to provide our
                      clients with high-quality solutions that will help protect
                      their homes against the elements.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="title" data-swiper-parallax="-300">
                    <h1>2</h1>
                  </div>
                  <div className="subtitle" data-swiper-parallax="-300">
                    <h4>Materials</h4>
                  </div>
                  <div className="text" data-swiper-parallax="-300">
                    <p>
                      We use only the best materials and techniques to ensure
                      that your home is well-protected and looks great.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="service-swiper-wrapper">
                  <div className="title" data-swiper-parallax="-300">
                    <h1>3</h1>
                  </div>
                  <div className="subtitle" data-swiper-parallax="-300">
                    <h4>Experience</h4>
                  </div>
                  <div className="text" data-swiper-parallax="-300">
                    <p>
                      Our skilled team of tradespeople has extensive experience
                      in this area and will work with you to ensure that your
                      project is completed to your satisfaction.
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

export default Facia;
