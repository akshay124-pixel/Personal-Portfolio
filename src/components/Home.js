import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
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
            <h3>Hi, It's Me</h3>
            <h1>
              I'm <span style={{ color: "#f9532d" }}>Akshay</span>
            </h1>
            <p>
              I'm a professional Web Developer. Our main goal is to help &
              satisfy the local & global clients with web development solutions.
            </p>
            <div className="social">
              <a href="https://www.linkedin.com">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://github.com">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi5-Yj995aCAxUPPysKHS_uCe8YABAAGgJzZg&ase=2&gclid=CjwKCAjwv-2pBhB-EiwAtsQZFEb_d31jK_e1VyT3Zjf6eb-NjbOkafye3M-9Wbj488kxS0yODaywKxoCO5sQAvD_BwE&ohost=www.google.com&cid=CAESVuD2uoQ4nO3RnKvGH2VVfaNG1DV91zwTuz-1_tgYybzyz-gZ5jSU14IGdlVWTIX7kDVjqvlXsUynUbOWECRHcIU942wn6GYlAiuTdAiia-Z012WgHWr5&sig=AOD64_0lU-96BFM29yP3zis8asYNB9P6UQ&q&nis=4&adurl&ved=2ahUKEwiRsoT995aCAxXxcmwGHaZ0BVwQ0Qx6BAgOEAE">
                <i className="bx bxl-facebook-circle"></i>
              </a>
            </div>
          </div>
          <div className="img-sec">
            <div className="images">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/20/01/35/men-2421449_1280.png"
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

export default Home;
