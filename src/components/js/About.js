import React from "react";
import { FaMedal, FaFolderPlus } from "react-icons/fa";
import Me from "../../assets/fal.jpg";
import "../css/about.css";
import "../../index.css";

const About = () => {
  return (
    <div className="about" id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container-md container-about">
        {/* Image Me */}
        <div className="me">
          <div className="me-image">
            <img src={Me} alt="Me" />
          </div>
        </div>
        {/* About Me */}
        <div className="content">
          <div className="cards">
            <article className="card">
              <FaMedal className="icon" />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>
            <article className="card">
              <FaFolderPlus className="icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
            I`ve spent the last several months in a remote environment, working
            with HTML, CSS, JavaScript, building everything from landing pages
            to APIs. My experience as a teacher in an international school
            helped me collaborate with fellow developers from all over the
            world. Additionally, working with kids isn`t an easy task, however,
            it has helped me become efficient, productive, and fast even in a
            very stressful environment, which is an important skill in the tech
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
