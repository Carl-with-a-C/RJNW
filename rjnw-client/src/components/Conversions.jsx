import ServiceNav from "./ServiceNav.jsx";

const Conversions = () => {
  return (
    <div>
      <ServiceNav />
      <section className="facia-main">
        <div className="facia-upper-section">
          <div className="facia-header-section">
            <div className="facia-header-container">
              <p>Our Services</p>
              <h1>CONVERSIONS</h1>
            </div>
          </div>
          <div className="facia-upper-space"></div>
        </div>
        <div className="facia-lower-section">
          <div className="facia-carousel-section">
            <div className="facia-img-container">
              <img
                src="https://cdn.mos.cms.futurecdn.net/ciamELhqGyCeeM8Fkd54KA-1920-80.jpg.webp"
                alt="old roof tiles"
              />
            </div>
          </div>
          <div className="facia-info-section">
            <div className="facia-info-upper-section">
              <h3>
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              </h3>
              <button className="service-btn cta">GET A QUOTE</button>
            </div>
            <div className="facia-info-lower-section">
              <div className="facia-info-top">
                <p>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod
                </p>
              </div>
              <div className="facia-info-bottom">
                <p>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor
                  sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing
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
