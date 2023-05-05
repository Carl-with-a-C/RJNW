import React from "react";

const Contacts = () => {
  return (
    <div id="contact">
      <section className="contacts-main">
        <div className="contacts-splash-section">
          <div className="contacts-img-container">
            <img
              src="https://roofclaim.com/wp-content/uploads/2021/10/parts-of-a-roof.jpeg"
              alt="close up of roof interior"
            />
          </div>
        </div>
        <div className="contacts-info-section">
          <h2>Get in touch</h2>
          <div className="contacts-details">
            <h4>hello@rjnw.com</h4>
            <h4>0800 800 800</h4>
          </div>
        </div>
      </section>
      <div className="contacts-spacer-container">
        <div className="contacts-spacer-left"></div>
        <div className="contacts-spacer-right"></div>
      </div>
    </div>
  );
};

export default Contacts;
