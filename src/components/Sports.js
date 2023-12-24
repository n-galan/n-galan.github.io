import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sports.css';
import SoccerImage from '../img/Soccer.png';
import BoxingImage from '../img/PU Boxing.png';
import BasketballImage from '../img/BB PU.png';
import Chess from '../img/Chess PU.png';

const PUSports = () => {
  return (
    <div className="sports-container mt-4">
      <div className="sport-intro">
        <h2>Welcome to Our Sports Programs</h2>
        <p>
          Unleash the Champion Within! 🏆 with Project Unbound, our sports programs in boxing, soccer, basketball, and chess are more than just games—they're a launchpad for life skills. Build resilience in the ring, teamwork on the field, strategy on the court, and critical thinking over the chessboard. Ready to play, learn, and conquer? Jump into the game!
        </p>
      </div>

      {/* Pair 1: Boxing */}
      <div className="sports-description-pair">
        <div className="sports-card">
          <h1>Boxing</h1>
          <p>Empower & Transform!</p>
          <img src={BoxingImage} alt="Boxing" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        <div className="sport-description-card">
          <p>Empower through Movement! 🥊 <br></br>

          <br></br> At Project Unbound, we believe boxing is more than just punches and jabs. It's a journey to inner strength, discipline, and resilience.<br></br>

          <br></br>We've tailored our boxing program not just for physical fitness but as an essential tool for social and emotional learning. When students step into the ring, they're not only learning how to defend themselves but also discovering how to process emotions, face challenges head-on, and develop a growth mindset. <br></br>
          
          <br></br>By integrating boxing into schools and communities, we're championing a holistic approach to well-being, teaching individuals not just to fight but to thrive. Let's Unbound Potential together! </p>
         
          <Link to="/boxing" className="sport-info-button">
            Click Here To Learn More About Our Boxing Program
          </Link>
        </div>
      </div>

      {/* Pair 2: Soccer */}
      <div className="sports-description-pair">
        <div className="sports-card">
          <h1>Soccer</h1>
          <p>Kickstart your soccer journey!</p>
          <img src={SoccerImage} alt="Soccer" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        <div className="sport-description-card">
          <p>Experience the Power of Teamwork with Our Soccer Program! ⚽ <br></br>

          <br></br>At Project Unbound, we're all about soccer and the incredible life lessons it offers. Our Soccer Program isn't just about honing soccer skills; it's an invitation to enhance teamwork, leadership, and personal growth. <br></br>

<br></br>When schools partner with us, they're joining a community that values collaboration, communication, and determination. Our expert coaches are dedicated to developing both soccer prowess and character. <br></br>

<br></br>Our program creates an inclusive environment where students build lasting friendships, gain self-confidence, and become better individuals, both on and off the field.<br></br>

<br></br>Choose Project Unbound for a winning soccer experience that goes beyond the game. Let's kickstart a partnership today!</p>
          <Link to="/Soccer" className="sport-info-button">
            Click Here To Learn More About Our Soccer Program
          </Link>
        </div>
      </div>

      {/* Pair 3: Basketball */}
      <div className="sports-description-pair">
        <div className="sports-card">
          <h1>Basketball</h1>
          <p>Unlock your court dominance</p>
          <img src={BasketballImage} alt="Basketball" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        <div className="sport-description-card">
          {/* Description for Basketball */}
          <p>Dribble, Score, and Soar with Our Basketball Program! 🏀<br></br>

          <br></br>At Project Unbound, we're all about basketball excellence and personal growth. Our Victory Quest Basketball Program is your ticket not just to improving your game but also to unlocking your full potential.<br></br>

          <br></br>When schools partner with us, they're choosing more than just basketball training; they're selecting a path to leadership, teamwork, and self-discovery. Our dedicated coaches are committed to developing not only your basketball skills but also your individual potential. <br></br>

          <br></br>Join us for the excitement of the game, where you'll forge lasting connections, boost your self-confidence, and emerge as a well-rounded individual. Opt for Project Unbound to embark on a victory quest toward personal growth and athletic achievement. Let's aim for success together!</p>
          <Link to="/Basketball" className="sport-info-button">
            Click Here To Discover More About Our Basketball Program
          </Link>
        </div>
      </div>

      {/* Chess */}
      <div className="sports-description-pair">
        <div className="sports-card">
          <h1>Chess</h1>
          <p>Strategize and outthink your opponent.</p>
          <img src={Chess} alt="Chess" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        <div className="sport-description-card">
          {/* Description for Chess */}
          <p>Outwit, Outplay, Outlast with Our Mastermind Chess Program!  ♟️ <br></br>

          <br></br>At Project Unbound, chess is more than just a game; it's a strategic journey that fosters social and emotional learning. Our Mastermind Chess Program empowers students to outwit challenges, outplay opponents, and outlast obstacles. <br></br>

          <br></br>When schools partner with us, they're not just teaching chess; they're nurturing resilient, strategic thinkers. Our expert coaches guide students to master the game while developing patience, resilience, and adaptability. <br></br>

          <br></br>Join us in the exciting world of chess, where students build friendships, boost self-confidence, and gain deeper insights into themselves and others. Choose Project Unbound for a chess program that empowers personal growth through strategic thinking. Let's make strategic moves together!</p> <br></br>
          <Link to="/Chess" className="sport-info-button">
            Click Here To Discover More About Our Chess Program
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PUSports;
