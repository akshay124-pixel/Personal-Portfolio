import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
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
              <a href="https://www.linkedin.com/in/akshay-pratap-singh-25112a234/">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/___akshaayy___/">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://github.com/akshay124-pixel">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100047016852419&mibextid=ZbWKwL">
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
