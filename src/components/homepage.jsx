import React, { Suspense } from "react";
import Navbar from "./navbar";
import Socialhandle from "./Socialhandle";
import useScrollAnimation from "../hooks/useScrollAnimation";
import ThreeDViewer from "./ThreeDViewer";
import LoadingScreen from "./LoadingScreen";





const Homepage = () => {
  const homeRef = useScrollAnimation();
  const pRef = useScrollAnimation();

  return (
    <>
        <LoadingScreen/>
      <div id="home" className="home" >
        <Navbar />
        <Socialhandle />
        <div className="row-cols-1">
          <div className="row">
            <div className="col hscontent">
              <h1>WELCOME</h1>
              <p className="mx-5">
                Hi, I'm a Full Stack Developer passionate about creating
                end-to-end web solutions. I specialize in building robust
                applications from front-end to back-end, combining creative
                design with efficient functionality.
              </p>
              <div className="cta-buttons m-5 hsbuttons">
                <button
                  className="btn"
                  onClick={() => {
                    window.location.href = "#about";
                  }}
                >
                  View Projects
                </button>
                <button
                  className="btn"
                  onClick={() => (window.location.href = "#contact")}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="hsimage" loading="lazy">
              <Suspense fallback={<div>Loading...</div>}>
                <ThreeDViewer />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
