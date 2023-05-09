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
                  <img src="https://images.unsplash.com/photo-1571513117173-8cdb322b553b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://images.unsplash.com/photo-1469964062538-06fad433a132?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://images.unsplash.com/photo-1577920231835-c232d76c4662?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://lh3.googleusercontent.com/poktdfyggkN8yslZe66rneqcgvh00ROQp1yU4hOBSW7G5EZrQvgNwWHXlMBGko-R2lO0n96KgXG7P5-dDIlK_GAbFXHYNtMEl-xJtnhIn0K_SOxjDXHnm33KCUaA=w1536-rw-v1-e365" />
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
