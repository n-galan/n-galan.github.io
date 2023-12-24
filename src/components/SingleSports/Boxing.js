import React from 'react';
import '../../styles/Boxing.css'; // Make sure to include your CSS file for styling
import PersonBImage from '../../img/PersonB.png';
import HangBoxingImage from '../../img/HangBoxing.png'; // Import the new image
import KidBoxingImage from '../../img/KidBoxing.png';
import boxingkids from '../../img/boxingkids.png'


const Boxing = () => {
  return (
    <div className="boxing-page">
      <header className="boxing-header">
        <h1>Unbound Boxing</h1>
        <p>Empowering Youth Through Boxing & Social Emotional Learning</p>
      </header>

      <section className="program-details">
        <div className="program-section">
          <h2>Building Life Skills</h2>
          <ul>
            <li>Youth shadow-boxing fitness</li>
            <li>Focus on self-care and self-awareness</li>
            <li>Safe and non-contact environment</li>
            <li>Engage in physical workouts</li>
            <li>Promote personal well-being</li>
            <li>Build physical strength and stamina</li>
            <li>Foster a positive mindset</li>
          </ul>
        </div>

        <div className="program-section">
          <h2>Four Pillars of Boxing</h2>
          <ul>
            <li>Awareness</li>
            <li>Active listening</li>
            <li>Direction</li>
            <li>Creativity</li>
          </ul>
        </div>

        <div className="program-section">
          <h2>Social and Emotional Learning</h2>
          <ul>
            <li>Increased self-awareness</li>
            <li>Emotion management</li>
            <li>Informed decision making</li>
            <li>Strong interpersonal relationships</li>
          </ul>
        </div>
      </section>

      <section className="image-and-text">
        <div className="person-image-section">
          <img src={PersonBImage} alt="Person B" className="person-image" />
          {/* New HangBoxing image */}
          <img src={HangBoxingImage} alt="Hang Boxing" className="hangboxing-image" />
          <img src={boxingkids} alt="Hang Boxing" className="boxingkids-image" />
        </div>
        <div className="program-details">
          <div className="program-section">
            <h2>Celebrating Progress</h2>
            <p>
              Participants receive a takeaway at the end of the program,
              celebrating their growth and accomplishments. It inspires them to
              continue their personal growth journey.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <h2>Follow Us and Contact Us</h2>
        <p>Email: info@projectunbound.org</p>
        <p>Follow us on social media: @ProjectUnbound</p>
      </section>
    </div>
  );
};

export default Boxing;
