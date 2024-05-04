import React from "react";
import "./Home.css";

function Skills() {
  return (
    <div>
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
              <img src="Skills.svg" alt="" className="img-w" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
