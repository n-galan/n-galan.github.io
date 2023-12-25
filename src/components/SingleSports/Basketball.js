import React from 'react';
import '../../styles/Basketball.css'; // Ensure the path to your CSS file is correct
import BasketballImage from '../../img/basketballplayer.png'; // Replace with the path to your basketball player image
import kidbasketball from '../../img/kidbasketball.png';
import basketballnet from '../../img/basketball-net.png';

const Basketball = () => {
  return (
    <div className="basketball-page">
      <header className="basketball-header">
        <h1>Unbound Basketball</h1>
        <p>A Comprehensive Youth Basketball Program with Social Emotional Learning</p>
      </header>

      <section className="basketball-program-details">
        <div className="basketball-program-section">
          <h2>Hoop Skills and Physical Training</h2>
          <p>
            Our program focuses on improving hoop skills and boosting physical abilities. But that's not all! We also provide
            important tools for self-care, self-awareness, and healthy self-affirmation both on and off the court.
          </p>
        </div>

        <div className="basketball-program-section">
          <h2>Ballin' with Mindfulness and Emotional Growth</h2>
          <p>
            We've integrated a Social Emotional Learning Curriculum to help develop new skills while navigating emotions and personal growth.
            Through a combination of physical training and mindful exercises, we aim to unleash the best version of the youth.
          </p>
        </div>

        <div className="basketball-program-section">
          <h2>Teamwork & Communication Skills</h2>
          <p>
            Basketball is a team sport, and we emphasize the importance of teamwork and communication.
            In our program, you'll have opportunities to work collaboratively with your teammates, learning how to
            communicate effectively and support each other on the court.
          </p>
        </div>

        <div className="basketball-program-section">
          <h2>Mastering the Game and Skill Development</h2>
          <p>
            We believe in four key pillars of basketball: awareness, power, creativity, and risk assessment. These pillars
            form the foundation for self-affirming tools such as self-awareness, self-management, decision making,
            and relationship skills. Along with that, you'll learn techniques, game strategy, leadership, endurance, and
            balance and coordination.
          </p>
        </div>

        <div className="basketball-program-section">
          <h2>Fun and Engaging Sessions</h2>
          <p>
            We believe that learning should be fun! Our program is designed to provide enjoyable and engaging
            sessions. We incorporate drills, games, and activities that will keep the youth motivated and excited about
            basketball. Get ready for a program filled with laughter, growth, and unforgettable memories.
          </p>
        </div>

        <div className="basketball-program-section">
          <h2>Building Confidence and Resilience</h2>
          <p>
            We focus on building confidence and resilience both on and off the court. These qualities are essential for success in
            basketball and in life. Through various activities and exercises, we'll help develop a strong mindset and the ability to overcome challenges.
          </p>
        </div>
      </section>

      <div className="image-and-text">
        <img src={BasketballImage} alt="Basketball Player" className="basketball-image" />
        <img src={kidbasketball} alt="Basketball kid" className="kidbasketball-image" />
        <img src={basketballnet} alt="Basketball Net" className="basketballnet-image" />
      </div>

      <section className="basketball-contact-info">
        <h2>Follow Us and Contact Us</h2>
        <p>Email: info@projectunbound.org</p>
        <p>Follow us on social media: @ProjectUnbound</p>
      </section>
    </div>
  );
};

export default Basketball;
