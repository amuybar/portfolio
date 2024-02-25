// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the logic for sending the email here
    // For now, let's just log the form data
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log('Form Data:', formDataObj);
  };

  return (
    <div className="contact-container">
      <div className="contact-column">
        <h2 className="contact-title">Contact Information</h2>
        <p className="contact-info">
          Feel free to reach out to me through the following channels. I'm excited to connect and collaborate!
        </p>
      </div>
      <div className="contact-column">
        <h2 className="contact-title">Send me a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>

      </div>
      <div className="contact-column">
       
        <h2 className="contact-title">Connect with Me</h2>
        <p className="contact-info">
          Email: your.email@example.com<br />
          LinkedIn: linkedin.com/in/your-profile<br />
          Twitter: @yourTwitterHandle
        </p>
      </div>
    </div>
  );
};

export default Contact;
