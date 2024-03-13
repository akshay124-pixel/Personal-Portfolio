import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Contact() {
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
            <Link to="/">Contact</Link>
          </div>
          <input type="checkbox" id="click" />

          <label htmlFor="click" className="mainicon">
            <div className="menu">
              <i className={isDarkMode ? "bx bxs-sun" : "bx bx-menu"}></i>
            </div>
          </label>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/Contact" className="active">
                Contact
              </Link>
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

      <div className="contact">
        <section className="container">
          <div className="main">
            <div className="detail">
              <h1>
                I'm <span style={{ color: "#f9532d" }}>Akshay</span>
              </h1>

              <p className="thank-you-text">
                Thank you for reaching out to us. We're here to assist you with
                any questions, inquiries, or concerns you may have. Please feel
                free to get in touch with Akshay using the contact information
                provided below:
              </p>

              <p className="availability-text">
                Whether you prefer a phone call, email, or a message on
                WhatsApp, Akshay is readily available to help you. Your
                communication is important to us, and we look forward to
                assisting you in the best way possible. Please don't hesitate to
                reach out, and we'll get back to you as soon as possible. Your
                satisfaction is our priority.
              </p>
              <br></br>

              <div className="contact-details">
                <ol>
                  <li>
                    <strong>Name:</strong> Akshay Pratap Singh
                  </li>
                  <br></br>
                  <li>
                    <strong>Mobile Number:</strong> 8755380144
                  </li>
                  <br></br>
                  <li>
                    <strong>WhatsApp:</strong> 8006120310
                  </li>

                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:mrakshaythakur124@gmail.com"
                      style={{ margin: 0 }}
                    >
                      mrakshaythakur124@gmail.com
                    </a>
                  </li>

                  <li>
                    <strong>GitHub:</strong>{" "}
                    <a
                      href="https://github.com/akshay124-pixel"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ margin: 0 }}
                    >
                      akshay124-pixel
                    </a>
                  </li>
                </ol>
              </div>
            </div>
            <div className="img-sec">
              <div className="images">
                <img
                  src="https://cdn.pixabay.com/photo/2023/10/18/22/48/cadillac-8325221_640.png"
                  alt=""
                  className="img-w"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
