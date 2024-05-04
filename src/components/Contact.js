import React from "react";
import "./Home.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Contact() {
  return (
    <div>
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
                <ol style={{ listStyleType: "none", padding: 0, margin: 0 }}>
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

                  {/* Button */}
                  <div className="style-btn" style={{ marginTop: "8px" }}>
                    <Link to="/message" style={{ textDecoration: "none" }}>
                      <button className="cssbuttons-io-button">
                        Message
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
                    </Link>
                  </div>

                  {/* Button End */}
                </ol>
              </div>
            </div>

            <div className="img-sec">
              <div className="images1">
                <img src="location.svg" alt="" className="img-w" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
