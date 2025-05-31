import React, { useEffect } from 'react';
import gsap from "gsap";

     const removeLoadingScreen=()=>{
      setTimeout(()=>{
          document.querySelector(".overlay").style.display = "none";
          document.querySelector(".counter").style.display = "none";
     });


const LoadingScreen = () => {
  useEffect(() => {
    const startLoader = () => {
      const counter = document.querySelector('.counter');
      let count = 0;
      function updateCounter() {
        count += Math.floor(Math.random() * 10) ;
                if (count > 100) {
          count = 100;
        }
        if (counter) {
          counter.textContent = count+ "%";
        }
        if (count === 100) {
          removeLoadingScreen();
          return;
        }
        console.log(count, counter);
        let randomTime = 100;

        setTimeout(updateCounter, randomTime);
      }

      updateCounter();
    };

    startLoader();


    gsap.to(".counter", 0.25, {
      delay: 3.5,
      opacity: 0,
    });
    gsap.to(".bar", 1.5, {
      delay: 3.5,
      height: 0,
      opacity: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
    gsap.from(".h1", 1.5, {
      delay: 4,
      y: 700,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
    gsap.from(".hero", 2, {
      delay: 4.5,
      y: 400,
      ease: "power4.inOut",
    });
  }

  , []); 

  return (
    <div>
      <h1 className="counter">0</h1>
      <div className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar">W</div>
        <div className="bar">E</div>
        <div className="bar">L</div>
        <div className="bar">C</div>
        <div className="bar">O</div>
        <div className="bar">M</div>
        <div className="bar">E</div>
        <div className="bar"></div>
      </div>
      <div className="hero" ></div>
    </div>
  );
};

export default LoadingScreen;
