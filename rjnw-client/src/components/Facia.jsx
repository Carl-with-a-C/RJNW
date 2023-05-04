import ServiceNav from "./ServiceNav.jsx";

const Facia = () => {
  return (
    <div>
      <ServiceNav />
      <section className="facia-main">
        <div className="facia-upper-section">
          <div className="facia-header-section">
            <div className="facia-header-container">
              <p>Our Services</p>
              <h1>FACIA AND SOFFITS</h1>
            </div>
          </div>
          <div className="facia-upper-space"></div>
        </div>
        <div className="facia-lower-section">
          <div className="facia-carousel-section">
            <div className="facia-img-container">
              <img
                src="https://fascias.com/image/cache/wp/lj/fascias-and-soffits/grey-fascia-board.webp"
                alt="roof facia"
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

export default Facia;
