import React from 'react';
import '../styles/Tech.css';
import PUcomputer from '../img/PU Computer.png';
import PU6 from '../img/HPC.png'
import High from '../img/Computerpu.png'

function Tech() {
  return (
    <div className="tech-container">


              {/* Introductory Text */}
      <div className="tech-intro">
        <h2>Welcome to Our Coding Programs</h2>
        <p>Embark on a digital adventure with Project Unbound Coding Programs! 🌟<br/>Our coding programs are expertly composed symphonies of logic, creativity, and problem-solving that resonate with the next generation of tech maestros.

👾 For the curious young minds of grades K - 5, we offer a vibrant playground of code where learning resembles an exciting game filled with discovery and triumph.

🚀 As for the bright innovators of grades 6 - 8, our curriculum is designed to sharpen their digital prowess, transforming them from tech enthusiasts to young prodigies, ready to take on the world of programming with gusto and confidence.

🔜 Anticipation is in the air! We're fine-tuning an immersive program for grades 9 - 12, crafted to unlock the full potential of our future leaders and thinkers in the vast universe of coding.

Join us with a click below to unveil the digital curtain and step into a world where code is poetry and every student can become a composer of their own future. Let's code a new era of education together!

These programs aim to be more dynamic and exciting, capturing the essence of coding as both a creative and intellectual pursuit. It also promises progression, appealing to those who want to ensure their students or children are well-equipped for the future.


</p>
      </div>
      {/* Pair 1: First tech-card and description-card for Grades K - 5 */}
      <div className="tech-description-pair">
        <div className="tech-card">
          <h1>Discover Coding!</h1>
          <p>Fun & Games with Code for Grades K - 5</p>
          <img src={High} alt="Coding" />
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
          <img src={PU6} alt="Coding" />
        </div>
        <div className="description-card">
          <p><h4>Unlock the Power of Python!!</h4><br/>

Embark on an epic adventure into the world of Python programming with our action-packed curriculum designed specifically for grades 6-8! At Project Unbound, you wield the power of code as your sword, battling through the thrilling realm of CodeCombat, where learning feels like play, but the skills you gain are real and in-demand. <p/>


<h4>🌟 Become a Code Hero!!!</h4>
By the end of our program, you won’t just be playing games—you’ll be creating them. You'll emerge as a young code hero, armed with the tools to innovate and excel in the digital age. Are you ready to unlock the next level of your journey? Join us and transform your ideas into reality with Python!

Press Here To Learn More About Our Python Programming Adventure!
</p>
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
