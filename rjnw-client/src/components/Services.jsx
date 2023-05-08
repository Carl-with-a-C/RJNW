import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="services">
      <section className="services-main">
        <div className="services-sideinfo-container">
          <h2>ROOFIMG AND JOINERY SPECIALISTS</h2>
          <p>
            We provide free expert advice and will help you to find the best
            solutions for you and your property.
          </p>
        </div>
        <div className="services-services-container">
          <div className="services-upper-container">
            <div className="service upper-left-service">
              <Link to="/facias">
                <div className="upper-left-img-container">
                  <img
                    src="https://fascias.com/image/cache/wp/lj/fascias-and-soffits/grey-fascia-board.webp"
                    alt="roof facia"
                  />
                  <h2 className="service-img-text">Facia & Soffits</h2>
                </div>
              </Link>
            </div>
            <div className="service upper-right-service">
              <Link to="/re-roof">
                <div className="upper-right-img-container">
                  <img
                    src="https://images.pexels.com/photos/1453799/pexels-photo-1453799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="old roof"
                  />
                  <h2 className="service-img-text">Re-roof</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="services-lower-container">
            <div className="service lower-left-service">
              <Link to="/conversions">
                <div className="lower-left-img-container">
                  <img
                    src="https://cdn.mos.cms.futurecdn.net/ciamELhqGyCeeM8Fkd54KA-1920-80.jpg.webp"
                    alt="loft conversion pictured from outside"
                  />
                  <h2 className="service-img-text">Dorma Conversions</h2>
                </div>
              </Link>
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
