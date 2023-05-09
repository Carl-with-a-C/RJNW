import "swiper/css/bundle";
import "./sass/main.scss";
import gsap from "gsap";

import Home from "./components/Home";
import Facia from "./components/Facia";
import ReRoof from "./components/ReRoof";
import Conversions from "./components/Conversions";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  //landing animation
  useEffect(() => {
    const tl = gsap.timeline();
    let smx = gsap.context(() => {
      tl.to(".landing-reveal-block-left", 2, {
        translateX: "-100%",
        ease: "power1.in",
      })
        .to(
          ".landing-reveal-block-right",
          2,
          {
            translateX: "100%",
            ease: "power1.in",
          },
          "-=2"
        )
        .to(
          ".lower-header-container > h1",
          2.2,
          {
            translateX: 0,
            ease: "power1.out",
          },
          "-=1.1"
        )
        .to(
          ".upper-header-img-container, .upper-header-text, .splash-cta-container",
          1.5,
          {
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            ease: "power1.out",
            stagger: {
              amount: 0.2,
            },
          },
          "-=1.8"
        )
        .to(
          ".nav-logo, .nav-links > li, .nav-socials > li",
          1,
          {
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            ease: "power1.out",
            stagger: {
              amount: 0.5,
            },
          },
          "-=1.2"
        )
        .to(
          ".splash-carousel-img-container",
          1.7,
          {
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            ease: "power3.inOut",
          },
          "-=1.8"
        )
        .to(
          ".lower-header-container > p, .splash-cta-container > h4, .get-quote-btn",
          0.9,
          {
            scaleY: 1,
            scaleX: 1,
            opacity: 1,
            translateX: 0,
            ease: "power1.in",
            stagger: {
              amount: 0.2,
            },
          },
          "-=1.3"
        )
        .to(
          ".upper-header-text > h4",
          0.8,
          {
            translateY: 0,
            opacity: 1,
          },
          "-=0.7"
        )
        .to(
          ".landing-reveal-block-right, .landing-reveal-block-leftt",
          0,
          {
            display: "none",
          },
          "-=2"
        );

      return () => {
        smx.revert();
      };
    });
  });

  //nav-menu animation
  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   let smx = gsap.context(() => {
  //     if (navOpen) {
  //       tl.to(".overlay-link > a > h1", {
  //         translateY: "-100%",
  //         ease: "power1.in",

  //       });

  //       return () => {
  //         smx.revert();
  //       };
  //     }
  //   });
  // });

  return (
    <div id="smooth-content" className="App">
      <Routes>
        <Route
          index
          path="/"
          element={<Home navOpen={navOpen} setNavOpen={setNavOpen} />}
        />
        <Route path="facias" element={<Facia />} />
        <Route path="re-roof" element={<ReRoof />} />
        <Route path="conversions" element={<Conversions />} />
      </Routes>
    </div>
  );
}

export default App;
