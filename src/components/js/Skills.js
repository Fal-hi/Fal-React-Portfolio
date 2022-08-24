import React from "react";
import { GiAirBalloon } from "react-icons/gi";
import { CgFigma } from "react-icons/cg";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import "../css/skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container">
        <div className="skill">
          {/* Kiri */}
          <div className="left">
            <div className="detail">
              <FaHtml5 className="skill-icon" />
              <h4>HTML</h4>
            </div>
            <div className="detail">
              <FaCss3 className="skill-icon" />
              <h4>CSS</h4>
            </div>
            <div className="detail">
              <IoLogoJavascript className="skill-icon" />
              <h4>JavaScript</h4>
            </div>
            <div className="detail">
              <FaBootstrap className="skill-icon" />
              <h4>Bootstrap CSS</h4>
            </div>
          </div>
          {/* Kanan */}
          <div className="right">
            <div className="detail">
              <SiTailwindcss className="skill-icon" />
              <h4>Tailwind CSS</h4>
            </div>
            <div className="detail">
              <FaReact className="skill-icon" />
              <h4>React JS</h4>
            </div>
            <div className="detail">
              <GiAirBalloon className="skill-icon" />
              <h4>Corel Draw</h4>
            </div>
            <div className="detail">
              <CgFigma className="skill-icon" />
              <h4>Figma</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
