import React from "react";
import IMG1 from "../../assets/rise-wedding.png";
import IMG2 from "../../assets/twp.png";
import IMG3 from "../../assets/twb.png";
import IMG4 from "../../assets/pomodoro.png";
import IMG5 from "../../assets/simon-game.png";
import IMG6 from "../../assets/todo-list.png";
import IMG7 from "../../assets/random-quotes.png";
import IMG8 from "../../assets/wikipedia-api.png";
import "../css/portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Rise Wedding",
      img: IMG1,
      description:
        "The Rise Wedding app is a wedding invitation template and video ordering app.",
      technologies: "HTML, CSS, JavaScript, PHP, Laravel",
      link: "https://github.com/RiseDevTeam/Rise-Wedding",
      github: "https://github.com/RiseDevTeam/Rise-Wedding",
    },
    {
      id: 2,
      title: "Rise Wedding Template Invitation Premium",
      img: IMG2,
      description:
        "The Rise Wedding Template Invitation Premium app is a wedding invitation template for premium template in Rise Wedding app.",
      technologies: "HTML, CSS, JavaScript",
      link: "https://github.com/Fal-hi/Template-Wedding-Premium-1",
      github: "https://github.com/Fal-hi/Template-Wedding-Premium-1",
    },
    {
      id: 3,
      title: "Rise Wedding Template Invitation Basic",
      img: IMG3,
      description:
        "The Rise Wedding Template Invitation Basic app is a wedding invitation template for basic template in Rise Wedding app.",
      technologies: "HTML, CSS, JavaScript",
      link: "https://github.com/Fal-hi/Template-Wedding-Basic-1",
      github: "https://github.com/Fal-hi/Template-Wedding-Basic-1",
    },
    {
      id: 4,
      title: "Pomodoro",
      img: IMG4,
      description:
        "The Pomodoro app is an aplication to help you focus on any task you are working on, such as study, writing, or coding.",
      technologies: "HTML, CSS, JavaScript",
      link: "https://github.com/Fal-hi/pomodoro",
      github: "https://github.com/Fal-hi/pomodoro",
    },
    {
      id: 5,
      title: "Simon Game",
      img: IMG5,
      description:
        "The Simon Game app is a fun and addictive game that tests your memory. Inspired by the popular game of the 80s! Look at the lights and try to repeat the sequence. The sequence becomes longer and faster with each round.",
      technologies: "HTML, CSS, JavaScript",
      link: "https://github.com/Fal-hi/simon-game",
      github: "https://github.com/Fal-hi/simon-game",
    },
  ];
};
