import React from "react";

const About = () => {
  return (
    <div>
      <main className="about-main">
        <div className="about-upper-section">
          <div className="about-heading-section">
            <div className="about-heading">
              <h2> Home improvement that will exceed your expectations.</h2>
            </div>
            <div className="about-heading-space"></div>
          </div>
          <div className="about-blurb-section">
            <div className="about-blurb about-blurb-1">
              <p>
                Our expert tradespeople are trained and experienced, and we
                always put our clients' needs first. We strive for customer
                satisfaction, and our clients rate us highly for our quality
                workmanship.
              </p>
            </div>
            <div className="about-blurb about-blurb-2">
              <p>
                We pride ourselves on our attention to detail and will work with
                you to ensure that your project is completed on time and within
                budget.
              </p>
            </div>
          </div>
        </div>
        <div className="about-lower-section">
          <div className="about-main-img-section">
            <div className="about-main-img-container">
              <img
                src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-roof.jpeg.jpg"
                alt="roofers fitting a roof"
              />
            </div>
          </div>
          <div className="about-side-section">
            <div className="about-side-img-section">
              <div className="about-side-img-container">
                <img
                  src="https://images.pexels.com/photos/14818971/pexels-photo-14818971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="carpentry"
                />
              </div>
            </div>
            <div className="about-side-space-section"></div>
          </div>
        </div>
      </main>
      <div id="projects" className="about-spacer-container">
        <div className="about-spacer-left"></div>
        <div className="about-spacer-right"></div>
      </div>
    </div>
  );
};

export default About;
