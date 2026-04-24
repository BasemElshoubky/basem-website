import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

function Contact() {

  // State to store form data
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form); // temporary output

    alert("Message sent successfully!");

    // Reset form fields
    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact">

      <h2>Contact</h2>

      {/* ===== Contact Info Card ===== */}
      <div className="contact-card">

        <div className="contact-item">
          <FaEnvelope />
          <span>basem@live.dk</span>
        </div>

        <div className="contact-item">
          <FaPhone />
          <span>+46 737545430</span>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt />
          <span>Malmö, Sweden</span>
        </div>

        <div className="contact-item">
          <FaLinkedin />
          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn Profile
          </a>
        </div>

      </div>

      {/* ===== Contact Form ===== */}
      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>

      </form>

    </div>
  );
}

export default Contact; 