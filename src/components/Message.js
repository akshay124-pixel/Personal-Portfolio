import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
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
            marginTop: "80px",
            fontFamily: "Arial, sans-serif",
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
          <input
            type="submit"
            value="Send"
            style={{
              backgroundColor: "#f9532d",
              color: "white",
              padding: "14px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          />
        </form>
      </div>
    </>
  );
};
export default Message;
