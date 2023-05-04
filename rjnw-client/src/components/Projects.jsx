import React from "react";

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
          </div>
        </div>
        <div className="projects-info-container">
          <div className="projects-header-container">
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </h3>
          </div>
          <div className="projects-blurb-container">
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
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
