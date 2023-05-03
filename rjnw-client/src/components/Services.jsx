import React from "react";

const Services = () => {
  return (
    <div>
      <section className="services-main">
        <div className="services-sideinfo-container">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
            vel elit sc
          </p>
        </div>
        <div className="services-services-container">
          <div className="services-upper-container">
            <div className="service upper-left-service">
              <div className="upper-left-img-container">
                <img
                  src="https://fascias.com/image/cache/wp/lj/fascias-and-soffits/grey-fascia-board.webp"
                  alt="roof facia"
                />
                <h2 className="service-img-text">Facia & Soffits</h2>
              </div>
            </div>
            <div className="service upper-right-service">
              <div className="upper-right-img-container">
                <img
                  src="https://images.pexels.com/photos/1453799/pexels-photo-1453799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="old roof"
                />
                <h2 className="service-img-text">Re-roof</h2>
              </div>
            </div>
          </div>
          <div className="services-lower-container">
            <div className="service lower-left-service">
              <div className="lower-left-img-container">
                <img
                  src="https://cdn.mos.cms.futurecdn.net/ciamELhqGyCeeM8Fkd54KA-1920-80.jpg.webp"
                  alt="loft conversion pictured from outside"
                />
                <h2 className="service-img-text">Dorma Conversions</h2>
              </div>
            </div>
            <div className="service lower-right-service"></div>
          </div>
        </div>
      </section>
      <div className="services-spacer-container">
        <div className="services-spacer-left"></div>
        <div className="services-spacer-right"></div>
      </div>
    </div>
  );
};

export default Services;
