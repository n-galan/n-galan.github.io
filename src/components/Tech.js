import React from 'react';
import '../styles/Tech.css';
import PUcomputer from '../img/PU Computer.png';
import PU6 from '../img/HPC.png'
import High from '../img/Computerpu.png'
import { Link } from 'react-router-dom';


function Tech() {
  return (
    <div className="tech-container">


      {/* Introductory Text */}
      <div className="tech-intro">
        <h2>Welcome to Our Coding Programs</h2>
        <p>Embark on a digital adventure with Project Unbound Coding Programs! 🌟<br />Our coding programs are expertly composed symphonies of logic, creativity, and problem-solving that resonate with the next generation of tech maestros.

          👾 For the curious young minds of grades K - 5, we offer a vibrant playground of code where learning resembles an exciting game filled with discovery and triumph.

          🚀 As for the bright innovators of grades 6 - 8, our curriculum is designed to sharpen their digital prowess, transforming them from tech enthusiasts to young prodigies, ready to take on the world of programming with gusto and confidence.

          🔜 Anticipation is in the air! We're fine-tuning an immersive program for grades 9 - 12, crafted to unlock the full potential of our future leaders and thinkers in the vast universe of coding.

          Join us with a click below to unveil the digital curtain and step into a world where code is poetry and every student can become a composer of their own future. Let's code a new era of education together!

          These programs aim to be more dynamic and exciting, capturing the essence of coding as both a creative and intellectual pursuit. It also promises progression, appealing to those who want to ensure their students or children are well-equipped for the future.


        </p>
      </div>
      {/* Pair 1: First tech-card and description-card for Grades K - 5 */}
      {/* <div className="tech-description-pair">
        <div className="tech-card">
          <h1>Discover Coding!</h1>
          <p>Fun & Games with Code for Grades K - 5</p>
          <img src={High} alt="Coding" />
        </div>
        <div className="description-card">
          <p>Dive into a universe where coding meets storytelling and fun reigns supreme! Our K-5 coding curriculum blends interactive narratives with engaging activities, fostering creative thinking and problem-solving in every lesson. As kids craft their own games using Scratch, they'll be so immersed in creativity they won't even notice they're mastering new skills. Plus, our approach champions mental well-being, providing a colorful playground that encourages expression and growth, proving that the art of programming is a canvas for innovation and a healthy mind.</p>
          <Link to="/coding-k5" className="info-button">
            Press Here To Learn More About This Coding Program
          </Link>        </div>
      </div> */}


      {/* Pair 2: Second tech-card and description-card for Grades 6 - 8 */}
      <div className="tech-description-pair">
        <div className="tech-card">
          <h1>Code Your World!</h1>
          <p>Challenging Projects for Grades 6 - 8</p>
          <img src={PU6} alt="Coding" />
        </div>
        <div className="description-card">
          <p><h4>Unlock the Power of Python!!</h4><br />

            Embark on an epic adventure into the world of Python programming with our action-packed curriculum designed specifically for grades 6-8! At Project Unbound, you wield the power of code as your sword, battling through the thrilling realm of CodeCombat, where learning feels like play, but the skills you gain are real and in-demand. <p />


            <h4>🌟 Become a Code Hero!!!</h4>
            By the end of our program, you won’t just be playing games—you’ll be creating them. You'll emerge as a young code hero, armed with the tools to innovate and excel in the digital age. Are you ready to unlock the next level of your journey? Join us and transform your ideas into reality with Python!

            Press Here To Learn More About Our Python Programming Adventure!
          </p>
          <Link to="/coding-68" className="info-button">
            Press Here To Learn More About This Coding Program
          </Link>        </div>
      </div>

      {/* Pair 3: Third tech-card and description-card for Grades 9 - 12 */}
      <div className="tech-description-pair">
        <div className="tech-card">
          <h1>Engineering</h1>
          <p>Spark Young Minds: Our Engineering Program for Tomorrow's Innovators!🔧🌟</p>
          <img src={PUcomputer} alt="Coding" />
        </div>
        <div className="description-card">
          <p>Get Ready to Engineer the Future with Us! 🌟🔧 <br></br>

At Project Unbound, we're turning engineering into an exciting adventure for young minds. Our Engineering Program is not just about learning; it's about unleashing creativity and having a blast while doing it! <br></br>

<br></br>When schools team up with us, they're opening the door to a world of hands-on fun, innovative thinking, and problem-solving wizardry. Our instructors are not just teachers; they're enthusiastic guides, here to inspire young innovators to dream big and think outside the box. <br></br>

<br></br>Join us on this thrilling journey where students build cool stuff, make new friends, and develop the skills needed to shape the future. Our program is all about teamwork, boosting self-confidence, and nurturing a lifelong love for engineering. <br></br>

<br></br>Choose Project Unbound for an engineering program that transforms learning into a joyful adventure. Let's engineer a future full of excitement and endless possibilities together! 🔧🚀🎉</p>
          <Link to="/engineering" className="info-button">
            Press Here To Learn More About This Coding Program
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tech;
