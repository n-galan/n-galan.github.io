import React from 'react';
import '../../styles/Engineering.css'; // Ensure the path to your CSS file is correct
import STEM from '../../assets/img/STEM.png'; // Replace with the path to your engineering image
import kide from '../../assets/img/kide.png'; 
import techboy from '../../assets/img/Techboy.png'

const Engineering = () => {
  return (
    <div className="engineering-page">
      <header className="engineering-header">
        <h1>Unbound Engineering</h1>
        <p>STEM Engineering - Unleash Your Inner Inventor!</p>
      </header>

      <section className="engineering-program-details">
        <div className="engineering-program-section">
          <h2>Engineering Adventures: Unleash Your Inner Inventor!</h2>
          <p>
            Get ready for an epic journey into the world of engineering! Crunch Labs' program is like a thrilling
            adventure where you become the hero of your own invention. You'll dive into exciting challenges
            and explore the wonders of engineering through hands-on activities. From building bridges that can
            withstand mighty forces to designing cool gadgets, you’ll unleash your inner inventor and
            bring your wildest ideas to life!
          </p>
        </div>

        <div className="engineering-program-section">
          <h2>Tech-Tastic Workshops: Where Creativity Meets Technology!</h2>
          <p>
            Step into the Tech-Tastic Workshops and prepare to be amazed! Crunch Labs combines creativity and
            technology in the most mind-blowing way. You'll get to tinker with cutting-edge tools and learn how to
            use them to create awesome projects. Whether it's coding your own video game, constructing a robotic
            masterpiece, or designing a futuristic city, these workshops will ignite your imagination and show you
            just how cool engineering can be!
          </p>
        </div>

        <div className="engineering-program-section">
          <h2>Let Your Imagination Soar!</h2>
          <p>
            Welcome to the Engineering Extravaganza, where your imagination takes flight! Get ready to dream big and push
            the boundaries of what’s possible. Crunch Labs' program encourages you to think outside the box and come up with
            innovative solutions to real-world problems. Whether you’re designing a sustainable energy system or inventing a new mode
            of transportation, this extravaganza will empower you to make a positive impact on the world through engineering.
          </p>
        </div>

        <div className="engineering-program-section">
          <h2>Inventors Showcase: Shine Bright with Your Ingenious Creations!</h2>
          <p>
            It's time to shine at the Inventor's Showcase! This is your chance to showcase your ingenious creations to an audience
            of fellow inventors, engineers, and enthusiasts. Crunch Labs' program culminates in this exciting event where you’ll present
            your projects and share the story behind your inventions. From dazzling displays to captivating presentations, the Inventor's
            Showcase celebrates your hard work, creativity, and dedication. Get ready to inspire others with your engineering brilliance!
          </p>
        </div>
      </section>

      <div className="image-and-text">
        <img src={STEM} alt="Engineering Concepts" className="engineering-image" />
        <img src={kide} alt="Engineering Concepts" className="kide-image" />
        <img src={techboy} alt="Engineering Concepts" className="techboy-image" />
      </div>

      <section className="engineering-contact-info">
        <h2>Follow & Contact Us</h2>
        <p>Website: www.projectunbound.org</p>
        <p>Email: info@projectunbound.org</p>
        <p>Follow us on social media: @ProjectUnbound</p>
      </section>
    </div>
  );
};

export default Engineering;
