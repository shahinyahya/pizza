import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({});

  const handleClick = (e) => {
    let inputChange = { [e.target.name]: e.target.value };

    setData({ ...data, ...inputChange });
  };

  return (
    <div className="contact">
      <div className="left-container"></div>
      <div className="right-container">
        <h1>Contact Us</h1>
        <div className="form">
          <label htmlFor="name">
            Full Name
            <input
              placeholder="Name.."
              type="text"
              name="name"
              onChange={handleClick}
            />
          </label>
          <label htmlFor="email..">
            Email
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleClick}
            />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              placeholder="Message.."
              name="message"
              cols="60"
              rows="10"
              onChange={handleClick}
            ></textarea>
          </label>
          <button>Send Message </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
