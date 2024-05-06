import React from "react";
import "./Home.css";
import "./button.css";

function Projects() {
  return (
    <div>
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
                  <h3>Novo</h3>
                  <p>
                    Novo is a dynamic web platform built with the MERN stack,
                    comprising MongoDB, Express.js, React.js, and Node.js. It
                    integrates MongoDB for efficient data management, Express.js
                    for server-side operations, React.js for interactive user
                    interfaces, and Node.js for runtime execution. Novo embodies
                    the complete basics of the MERN stack, delivering a seamless
                    and scalable web experience with its robust architecture and
                    comprehensive feature set.
                  </p>
                  <br />
                  <button
                    className="cssbuttons-io-button"
                    onClick={() =>
                      (window.location.href =
                        "https://novo-one-theta.vercel.app/")
                    }
                  >
                    View Project
                    <div className="icon">
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
                  <h3>Tecca</h3>
                  <p>
                    "Tecca" is a Next.js project featuring API data fetching for
                    comprehensive Netflix series information. Additionally, it
                    includes a contact form for users to submit inquiries, with
                    data seamlessly stored in a database. This integration of
                    Next.js offers users a seamless experience, combining
                    real-time updates with interactive engagement.
                  </p>
                  <br />
                  <button
                    className="cssbuttons-io-button"
                    onClick={() =>
                      (window.location.href = "https://tecca.vercel.app/")
                    }
                  >
                    View Project
                    <div className="icon">
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
                    src="project-image-3.jpg" // Replace with your project image
                    alt=""
                    className="project-image"
                  />
                  <h3>Brand Page</h3>
                  <p>
                    Experience seamless brand interaction with our dynamic
                    website crafted using React.js, HTML, CSS, JavaScript, and
                    Bootstrap. Immerse yourself in stunning visuals, intuitive
                    navigation, and responsive design as you explore our latest
                    offerings. Engage with personalized content and discover a
                    new level of brand connection.
                  </p>
                  <br />
                  <button
                    className="cssbuttons-io-button"
                    onClick={() =>
                      (window.location.href =
                        "https://brand-page-nikee.vercel.app/")
                    }
                  >
                    View Project
                    <div className="icon">
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
                    src="project-image-4.jpg" // Replace with your project image
                    alt=""
                    className="project-image"
                  />
                  <h3>Weatherfiy</h3>
                  <p>
                    Weatherify is a sleek weather application crafted with
                    React.js, offering users a seamless and intuitive
                    experience. It provides real-time weather updates with a
                    minimalist design and responsive interface, ensuring
                    effortless navigation. With its React-powered frontend,
                    Weatherify delivers accurate forecasts and an engaging user
                    experience.
                  </p>
                  <br />
                  <button
                    className="cssbuttons-io-button"
                    onClick={() =>
                      (window.location.href = "https://weatherfiy.vercel.app/")
                    }
                  >
                    View Project
                    <div className="icon">
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
                    src="project-image-5.jpg" // Replace with your project image
                    alt=""
                    className="project-image"
                  />
                  <h3>Portfolio Using React</h3>
                  <p>
                    Create a stunning personal portfolio with React.js,
                    showcasing our skills and achievements in a dynamic and
                    interactive way. Impress visitors with a modern and
                    responsive design that reflects your unique professional
                    identity.
                  </p>
                  <br />
                  <button
                    className="cssbuttons-io-button"
                    onClick={() =>
                      (window.location.href =
                        "https://port-folio-using-react.vercel.app/")
                    }
                  >
                    View Project
                    <div className="icon">
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
        </div>
      </section>
    </div>
  );
}

export default Projects;
