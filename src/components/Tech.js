import React from 'react';
import '../styles/Tech.css';
import PUcomputer from '../img/PU Computer.png';

function Tech() {
  return (
    <div className="tech-container">
      {/* Pair 1: First tech-card and description-card for Grades K - 5 */}
      <div className="tech-description-pair">
        <div className="tech-card">
          <h1>Discover Coding!</h1>
          <p>Fun & Games with Code for Grades K - 5</p>
          <img src={PUcomputer} alt="Coding" />
        </div>
        <div className="description-card">
          <p>Dive into a universe where coding meets storytelling and fun reigns supreme! Our K-5 coding curriculum blends interactive narratives with engaging activities, fostering creative thinking and problem-solving in every lesson. As kids craft their own games using Scratch, they'll be so immersed in creativity they won't even notice they're mastering new skills. Plus, our approach champions mental well-being, providing a colorful playground that encourages expression and growth, proving that the art of programming is a canvas for innovation and a healthy mind.</p>
          <button className="info-button">Press Here To Learn More About This Coding Program</button>
        </div>
      </div>


      {/* Pair 2: Second tech-card and description-card for Grades 6 - 8 */}
      <div className="tech-description-pair">
        <div className="tech-card">
          <h1>Code Your World!</h1>
          <p>Challenging Projects for Grades 6 - 8</p>
          <img src={PUcomputer} alt="Coding" />
        </div>
        <div className="description-card">
          <p>For middle schoolers ready to create their own apps, games, and websites, our courses sharpen their logic and elevate their coding skills to the next level. Your code can change the world, and it starts here!</p>
          <button className="info-button">Press Here To Learn More About This Coding Program</button>
        </div>
      </div>

      {/* Pair 3: Third tech-card and description-card for Grades 9 - 12 */}
      <div className="tech-description-pair">
        <div className="tech-card">
          <h1>Master Coding!</h1>
          <p>Advanced Concepts for Grades 9 - 12</p>
          <img src={PUcomputer} alt="Coding" />
        </div>
        <div className="description-card">
          <p>High school students, it's time to build your future! Dive into advanced programming languages, tackle real-world projects, and prepare for a career in tech. Gain the competitive edge for college and beyond.</p>
          <button className="info-button">Press Here To Learn More About This Coding Program</button>
        </div>
      </div>
    </div>
  );
}   

export default Tech;
