import React, { useEffect } from "react";
import "./About.css";
import imgs from "../../assets/Tech/mern.png";
import ScrollReveal from "scrollreveal";
import resume from "../../assets/resume/Resume.pdf";

const About = () => {
  let arr = Array.from("MERN Stack Developer");

  const config1 = {
    origin: "top",
    duration: 1000,
    delay: 150,
    distance: "20px",
    scale: 1,
    easing: "ease",
  };

  const config2 = {
    origin: "bottom",
    duration: 1000,
    delay: 150,
    distance: "20px",
    scale: 1,
    easing: "ease",
  };

  useEffect(() => {
    ScrollReveal().reveal(".about-left-container", config1);
    ScrollReveal().reveal(".about-right-container", config2);
  }, []);

  const animateCircle = (e, i) => {
    return (
      <span key={i} style={{ transform: `rotate(${i * 12}deg)` }}>
        {e}
      </span>
    );
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left-container">
          <div className="about-img-container">
            <div className="about-circle">
              <p>
                {arr.map(animateCircle)}
              </p>
              <img src={imgs} alt="" />
            </div>
          </div>
        </div>
        <div className="about-right-container">
          <h1 className="section-heading">
            About <span>Me</span>
          </h1>
          <h2 className="sub-heading">
            A passionate MERN Stack Developer based in Delhi NCR, India
          </h2>
          <p className="body-text">
            I have serious passion for UI effects, animations and creating
            intuitive and dynamic user experiences and scalable web applications. With a toolbox filled with
            MongoDB, ExpressJs, React, NodeJs and Redux, I thrive on turning design
            concepts into seamless and interactive web experiences.
          </p>
          <a className="section-btn" href={resume} download="Aayush's Resume">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
