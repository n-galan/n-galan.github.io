import React from 'react';
import '../../styles/Coding-68.css'; // Make sure the path to your CSS file is correct
import Codingclass from '../../img/Codingclass.png'; 
import kidscoding from '../../img/Kidscoding.png';
import coding from '../../img/Coding.png';// Replace with the path to your coding image

const Coding68 = () => {
  return (
    <div className="coding-page">
      <header className="coding-header">
        <h1>Unbound Coding</h1>
        <p>An Introduction to the Field of STEM</p>
      </header>

      <section className="coding-program-details">
        <div className="coding-program-section">
          <h2>Fun and Interactive Learning</h2>
          <p>
            A coding program for kids is a fun and interactive way to introduce them to the world of programming.
            Through activities and games, these programs teach the basics of coding languages like Scratch or Python.
            Kids not only learn to code but also develop problem-solving skills, logical thinking, and creativity.
            They even get to build their own projects, such as games or animations!
          </p>
        </div>

        <div className="coding-program-section">
          <h2>The Importance of STEM Education</h2>
          <p>
            STEM education (Science, Technology, Engineering, and Mathematics) is crucial for the youth. It prepares kids for the future job
            market, where there is a growing demand for individuals with STEM skills. By exposing kids to STEM at an early age, we set them up for
            success in fields like computer science and engineering. STEM empowers them to become innovators and problem solvers in our ever-evolving world.
          </p>
        </div>

        <div className="coding-program-section">
          <h2>Building Skills for the Future</h2>
          <p>
            Through coding programs and STEM education, kids develop essential skills. They learn to think critically, solve complex problems,
            and approach challenges with creativity. These skills are highly valued in today's technology-driven society and will be even more valuable
            in the future. By investing in STEM education, we equip our youth with the tools they need to thrive in the digital age.
          </p>
        </div>

        <div className="coding-program-section">
          <h2>Inspiring the Innovators of Tomorrow</h2>
          <p>
            By introducing kids to coding and STEM, we inspire them to become the innovators of tomorrow. They learn to embrace curiosity,
            explore new ideas, and think outside the box. With these skills, they can drive technological advancements, find solutions to global
            challenges, and shape the future. Let's empower our youth to become the leaders and problem solvers our world needs.
          </p>
        </div>
      </section>

      <div className="image-and-text">
        <img src={Codingclass} alt="Coding Activities" className="codingclass-image" />
        <img src={kidscoding} alt="Coding Activities" className="kidscoding-image" />
        <img src={coding} alt="Coding Activities" className="coding-image" />
      </div>

      <section className="coding-contact-info">
        <h2>Follow & Contact Us</h2>
        <p>Website: www.projectunbound.org</p>
        <p>Email: info@projectunbound.org</p>
        <p>Follow us on social media: @ProjectUnbound</p>
      </section>
    </div>
  );
};

export default Coding68;
