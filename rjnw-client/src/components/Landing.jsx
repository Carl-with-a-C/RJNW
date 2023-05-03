import React from "react";

const Landing = () => {
  return (
    <div>
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
              <h4>MASTERS OF ROOFING, JOINERY AND CONVERSIONS</h4>
            </div>
          </div>
          <div className="lower-header-container">
            <h1>ROOFING & JOINERY NORTHWEST. EXPERTISE BEYOND EXPECTATION</h1>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="landing-splash-section">
          <div className="splash-carousel-container">
            <div className="splash-carousel-img-container">
              <img
                src="https://images.pexels.com/photos/7082446/pexels-photo-7082446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </div>
          <div className="splash-cta-container">
            <h4>find out more {">"}</h4>
            <button className="get-quote-btn cta">CONTACT US</button>
          </div>
        </div>
      </main>
      <div className="spacer-container">
        <div className="spacer-left"></div>
        <div className="spacer-right"></div>
      </div>
    </div>
  );
};

export default Landing;
