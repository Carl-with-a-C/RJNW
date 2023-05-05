import ServiceNav from "./ServiceNav.jsx";

const Conversions = () => {
  return (
    <div>
      <ServiceNav />
      <section className="conversion-main">
        <div className="conversion-upper-section">
          <div className="conversion-header-section">
            <div className="conversion-header-container">
              <p>Our Services</p>
              <h1>CONVERSIONS</h1>
            </div>
          </div>
          <div className="conversion-upper-space">
            {" "}
            <button className="service-btn cta">GET A QUOTE</button>
          </div>
        </div>
        <div className="conversion-lower-section">
          <div className="conversion-carousel-section">
            <div className="conversion-img-container">
              <img
                src="https://cdn.mos.cms.futurecdn.net/ciamELhqGyCeeM8Fkd54KA-1920-80.jpg.webp"
                alt="old roof tiles"
              />
            </div>
          </div>
          <div className="conversion-info-section">
            <div className="conversion-info-upper-section">
              <h3>
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              </h3>
              <button className="service-btn cta">GET A QUOTE</button>
            </div>
            <div className="conversion-info-lower-section">
              <div className="conversion-info-top">
                <p>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod
                </p>
              </div>
              <div className="conversion-info-bottom">
                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conversions;
