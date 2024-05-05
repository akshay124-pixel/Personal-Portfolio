import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "./Home.css";
const Message = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9o28tfy", "template_onxl74r", form.current, {
        publicKey: "ySL_rncwYXY3oW9H3",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="main">
        <h1
          className="Heading"
          style={{ textAlign: "center", marginTop: "50px" }}
        >
          {" "}
          Message Box
        </h1>

        <form
          className="social"
          ref={form}
          onSubmit={sendEmail}
          style={{
            maxWidth: "400px",
            margin: "0 auto",
            marginTop: "50px",
            padding: "35px",
            borderRadius: "25px",
            fontFamily: "Arial, sans-serif",
            boxShadow: "0px 0px 10px rgba(0, 0, 00, 0.5)",
          }}
        >
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Name
          </label>
          <input
            placeholder="Your Name.."
            type="text"
            name="from_name"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Email
          </label>
          <input
            placeholder="Your Email.."
            type="email"
            name="from_email"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Message
          </label>
          <textarea
            placeholder="Your Message"
            name="message"
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          ></textarea>
          <button type="submit" value="Send">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  />
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </form>
      </div>
    </>
  );
};
export default Message;
