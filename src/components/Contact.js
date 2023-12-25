import React from 'react';
import '../styles/ContactUs.css'; // Make sure the CSS path is correct
import emailIcon from '../assets/img/email-icon.png'; // Path to your email icon image
import instagramIcon from '../assets/img/instagram.png'; // Path to your Instagram icon image

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <div className="contact-options">
        <a href="mailto:info@yourdomain.com" className="contact-option">
          <img src={emailIcon} alt="Email" />
          <span>info@ProjectUnbound.org</span>
        </a>
        <a href="https://www.instagram.com/Project_Unbound" target="_blank" rel="noopener noreferrer" className="contact-option">
          <img src={instagramIcon} alt="Instagram" />
          <span>@Project_Unbound</span>
        </a>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
