import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Projects = () => {
  return (
    <div id="projects">
      <main className="projects-main">
        <div className="projects-splash-container">
          <div className="projects-splash-img-container">
            <img
              src="https://images.pexels.com/photos/1483105/pexels-photo-1483105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="roofers fitting a roof"
            />
            <div className="testimonial-container">
              <h4>
                8.97 Overall Rating on{" "}
                <a
                  href="https://www.checkatrade.com/trades/RoofingAndJoineryNorthwest"
                  target="blank"
                >
                  Checkatrade.com
                </a>
              </h4>
              <Swiper
                spaceBetween={30}
                grabCursor={true}
                slidesPerView={"auto"}
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="testimony">
                    <p>New Gutters Facia & Soffits</p>
                    <h1>
                      Paul and his team were absolutely fantastic! Would happily
                      go back to them
                    </h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimony">
                    <p>Complete New Roof</p>
                    <h1>
                      Paul and his team were very professional and left
                      everywhere clean and tidy.
                    </h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimony">
                    <p>New Roof Gutters Soffits & Facias</p>
                    <h1>
                      They did a fantastic job and the work carried out was to a
                      very high standard
                    </h1>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="projects-info-container">
          <div className="projects-header-container">
            <h3>
              Committed to delivering exceptional service from start to finish.
            </h3>
          </div>
          <div className="projects-blurb-container">
            <p>
              Don't just take our word for it - our satisfied customers speak
              for themselves. See what they have to say by checking out our
              customer testimonials.
            </p>
          </div>
        </div>
      </main>
      <div id="services" className="projects-spacer-container">
        <div className="projects-spacer-left"></div>
        <div className="projects-spacer-right"></div>
      </div>
    </div>
  );
};

export default Projects;
