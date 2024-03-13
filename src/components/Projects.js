import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./button.css";
function Projects() {
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
            <Link to="/">Projects</Link>
          </div>
          <input type="checkbox" id="click" />

          <label htmlFor="click" className="mainicon">
            <div className="menu">
              <i className={isDarkMode ? "bx bxs-sun" : "bx bx-menu"}></i>
            </div>
          </label>
          <ul>
            <li key="home">
              <Link to="/">Home</Link>
            </li>
            <li key="projects">
              <Link to="/Projects" className="active">
                Projects
              </Link>
            </li>
            <li key="skills">
              <Link to="/Skills">Skills</Link>
            </li>
            <li key="contact">
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
            <div className="projects-container">
              <div className="project-column">
                <div className="project-card">
                  <img
                    src="project-image-1.jpg" // Replace with your project image
                    alt=""
                    className="project-image"
                  />
                  <h3>Tecca</h3>
                  <p>
                    "Tecca" is a Next.js project featuring API data fetching for
                    comprehensive Netflix series information. Additionally, it
                    includes a contact form for users to submit inquiries, with
                    data seamlessly stored in a database. This integration of
                    Next.js offers users a seamless experience, combining
                    real-time updates with interactive engagement.
                  </p>
                  <button
                    className="cssbuttons-io-button"
                    onClick={() =>
                      (window.location.href = "https://tecca.vercel.app/")
                    }
                  >
                    View Project
                    <div class="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>

              <div className="project-column">
                <div className="project-card">
                  <img
                    src="project-image-2.jpg" // Replace with your project image
                    alt=""
                    className="project-image"
                  />
                  <h3>News-App</h3>
                  <p>
                    React.js-based news app that delivers real-time updates,
                    personalized content, and user-friendly features for
                    seamless news consumption and engagement.
                  </p>
                  <button className="cssbuttons-io-button">
                    <a
                      href="https://github.com/akshay124-pixel/News-App"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      View Project
                    </a>
                    <div class="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="project-column">
                <div className="project-card">
                  <img
                    src="project-image-2.jpg" // Replace with your project image
                    alt=""
                    className="project-image"
                  />
                  <h3>Porfolio</h3>
                  <p>
                    Create a stunning personal portfolio with React.js,
                    showcasing our skills and achievements in a dynamic and
                    interactive way. Impress visitors with a modern and
                    responsive design that reflects your unique professional
                    identity.
                  </p>{" "}
                  <button className="cssbuttons-io-button">
                    <a
                      href="https://github.com/akshay124-pixel/Portfolio"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      View Project
                    </a>
                    <div class="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="img-sec">
            <div className="images">
              <img
                src="https://cdn.pixabay.com/photo/2017/01/27/13/17/sports-2013045_640.png"
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

export default Projects;
