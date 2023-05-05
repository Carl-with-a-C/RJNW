import ServiceNav from "./ServiceNav.jsx";

const ReRoof = () => {
  return (
    <div>
      <ServiceNav />
      <section className="re-roof-main">
        <div className="re-roof-upper-section">
          <div className="re-roof-header-section">
            <div className="re-roof-header-container">
              <p>Our Services</p>
              <h1>RE-ROOF</h1>
            </div>
          </div>
          <div className="re-roof-upper-space">
            <button className="service-btn cta">GET A QUOTE</button>
          </div>
        </div>
        <div className="re-roof-lower-section">
          <div className="re-roof-carousel-section">
            <div className="re-roof-img-container">
              <img
                src="https://images.pexels.com/photos/1453799/pexels-photo-1453799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="old roof tiles"
              />
            </div>
          </div>
          <div className="re-roof-info-section">
            <div className="re-roof-info-upper-section">
              <h3>
                Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              </h3>
              <button className="service-btn cta">GET A QUOTE</button>
            </div>
            <div className="re-roof-info-lower-section">
              <div className="re-roof-info-top">
                <p>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod
                </p>
              </div>
              <div className="re-roof-info-bottom">
                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReRoof;
