import React from 'react';
import '../../styles/Chess.css'; // Ensure the path to your CSS file is correct
import ChessImage from '../../assets/img/chessplayer.png'; // Replace with the path to your chess player image
import chesshand2 from '../../assets/img/chesshand2.png'; 
import chessdrawing from '../../assets/img/chesssketch.png'; 
import kidchess from '../../assets/img/kidchess.png'

const Chess = () => {
  return (
    <div className="chess-page">
      <header className="chess-header">
        <h1>Unbound Chess</h1>
        <p>Chess Fundamentals & A Social Emotional Learning Curriculum</p>
      </header>

      <section className="chess-program-details">
        <div className="chess-program-section">
          <h2>Fundamentals</h2>
          <p>
            Welcoming and intentional chess experience. Learn fundamentals and develop skills
            through a Social Emotional Learning Curriculum. Tools for self-care, self-awareness, and positive identity.
            Commemorative takeaway at the end of the program.
          </p>
        </div>

        <div className="chess-program-section">
          <h2>Cognitive Skills Developed Through Chess Play</h2>
          <p>
            Chess enhances cognitive skills, improves concentration, pattern recognition, and creativity.
            Promotes algebraic and geometric thinking, problem-solving skills, and develops spatial
            reasoning, critical thinking, attention span, and memory capacity.
          </p>
        </div>

        <div className="chess-program-section">
          <h2>Classes Involve The 5 Pillars of Chess & Support Self-Affirmation</h2>
          <p>
            Learn self-awareness, self-management, decision making, relationship skills, and social awareness.
            The 5 pillars of chess: chess piece movements, game play strategies, opening principles,
            endgame and tactical moves. Develop cognitive skills and acquire self-affirming tools for personal growth.
          </p>
        </div>
      </section>

      <div className="image-and-text">
        <img src={ChessImage} alt="Chess Player" className="chess-image" />
        <img src={chesshand2} alt="Chess Hand" className="chesshand2-image" />
        <img src={chessdrawing} alt="Chess Hand" className="chessdrawing-image" />
        <img src={kidchess} alt="Chess Hand" className="kidchess-image" />
      </div>

      <section className="chess-contact-info">
        <h2>Follow Us and Contact Us</h2>
        <p>Email: info@projectunbound.org</p>
        <p>Follow us on social media: @ProjectUnbound</p>
      </section>
    </div>
  );
};

export default Chess;
