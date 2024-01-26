import React from 'react';
import '../../styles/Soccer.css'; // Make sure the path to your CSS file is correct
import PlayerImage from '../../assets/img/kidsoccer.png'; // Replace with the path to your soccer player image
import PlayerImage2 from '../../assets/img/kid2soccer.png'
import groupsoccer from '../../assets/img/groupsoccer.png'
import PlayingSoccer from '../../assets/img/PlayingSoccer.png'; // Newly added image
import kidssoccer from '../../assets/img/KidsSoccer.png'; // Newly added image


const Soccer = () => {
  return (
    <div className="soccer-page">
      <header className="soccer-header">
        <h1>Unbound Soccer</h1>
        <p>A Comprehensive Youth Soccer Program with Social Emotional Learning</p>
      </header>

      <section className="soccer-program-details">
        <div className="soccer-program-section">
          <h2>Physical Training and Skill Development</h2>
          <p>
            Unbound Soccer offers a comprehensive youth soccer program focused on physical training and
            skill development. Through soccer, participants will not only improve their athletic abilities but also
            acquire important tools for self-care, self-awareness, and self-affirmation.
          </p>
        </div>

        <div className="soccer-program-section">
          <h2>Mindful Growth and Emotional Development</h2>
          <p>
            The Unbound Soccer program incorporates a Social Emotional Learning Curriculum, allowing students to
            develop new skills while navigating their emotions and personal growth. By combining physical and
            mindful workouts, we aim to bring out the best version of each participant.
          </p>
        </div>

        <div className="soccer-program-section">
          <h2>Pillars of Soccer</h2>
          <p>
            The program emphasizes four pillars of soccer: awareness, power, creativity, and risk assessment.
            These pillars support the development of self-affirming tools such as self-awareness, self-management,
            decision making, and relationship skills. Participants will also learn techniques, game awareness,
            leadership, endurance, and balance and coordination.
          </p>
        </div>

        <div className="soccer-program-section">
          <h2>Tangible Takeaway for Continued Growth</h2>
          <p>
            At the end of the program, Unbound Soccer provides a takeaway for all participants, ensuring that they have
            tangible resources to continue their growth and development beyond the program.
          </p>
        </div>
      </section>


      <div className="soccer-program-section-and-image">
        {/* <div className="soccer-program-section">  </div> */}
        <img src={PlayingSoccer} alt="Kids Playing Soccer" className="playing-soccer-image" />
        <img src={kidssoccer} alt="Kids Playing Soccer" className="playing-soccer-image" />
        {/* <div className="soccer-program-section">  </div> */}
      </div>

      <div className="image-and-text">
        <img src={PlayerImage} alt="Soccer Player" className="player-image" />
        <img src={PlayerImage2} alt="Soccer Player 2" className='player2-image'></img>
        <img src={groupsoccer} alt="Soccer Player 2" className='groupsoccer-image'></img>
      </div>

      <section className="soccer-contact-info">
        <h2>Follow Us and Contact Us</h2>
        <p>Email: info@projectunbound.org</p>
        <p>Follow us on Instagram: @Project_Unbound</p>
      </section>
    </div>
  );
};

export default Soccer;
