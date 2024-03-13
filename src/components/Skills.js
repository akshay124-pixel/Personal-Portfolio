import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Skills() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <header className="container">
        <div className="page-header">
          <div className="logo">
            <Link to="/">Portfolio</Link>
          </div>
          <input type="checkbox" id="click" />

          <label htmlFor="click" className="mainicon">
            <div className="menu">
              <i className={isDarkMode ? "bx bxs-sun" : "bx bx-menu"}></i>
            </div>
          </label>
          <ul>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <label className="mode">
            <input
              type="checkbox"
              id="darkModeToggle"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <i className={isDarkMode ? "bx bxs-sun" : "bx bxs-moon"}></i>
          </label>
        </div>
      </header>

      <section className="container">
        <div className="main">
          <div className="detail">
            <h3>Skills</h3>
            <div className="skill-list">
              <div className="skill">
                <h3>Web Development</h3>
                <p>
                  Proficient in HTML, CSS, JavaScript, and various web
                  development libraries and frameworks.
                </p>
              </div>
              <div className="skill">
                <h3>React</h3>
                <p>
                  Experience in building interactive and responsive web
                  applications using React.js.
                </p>
              </div>
              <div className="skill">
                <h3>Front-End Design</h3>
                <p>
                  Skilled in creating visually appealing and user-friendly
                  interfaces.
                </p>
              </div>
              <div className="skill">
                <h3>Back-End Development</h3>
                <p>
                  Knowledge of server-side technologies and database management.
                </p>
              </div>
            </div>
          </div>
          <div className="img-sec">
            <div className="images">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/21/18/44/exam-2428208_1280.png"
                alt=""
                className="img-w"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
