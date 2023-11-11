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
          {/* Description for Boxing */}
          <p>Empower through Movement! <br/> 🥊 At Project Unbound, we believe boxing is more than just punches and jabs—it's a journey to inner strength, discipline, and resilience. We've tailored our boxing program not just for physical fitness but as an essential tool for social and emotional learning. When students step into the ring, they're not only learning how to defend themselves but also discovering how to process emotions, face challenges head-on, and develop a growth mindset. By integrating boxing into schools and communities, we're championing a holistic approach to well-being, teaching individuals not just to fight but to thrive. Let's Unbound Potential together! </p>
          <Link to="/boxing" className="sport-info-button btn btn-primary">
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
          {/* Description for Soccer */}
          <p>Join our soccer program to enhance teamwork, strategy, and physical fitness.
          Joining our Soccer Stars Program and kickstart a journey of fitness, teamwork, and fun. Our dynamic drills and exciting gameplay will not only refine athletic skills but also foster a sense of camaraderie and discipline. Perfect for all levels—let's bend it like the champions and score big on and off the field. Lace up those cleats; it's game time!
          </p>
          <button className="sport-info-button btn-primary">
            Click Here Learn More About Our Soccer Program
          </button>
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
          <p>"Dribble, shoot, score! Elevate your game with our Slam Dunk Basketball Program. From perfecting layups to mastering defense strategies, our sessions are designed to build agility, strength, and sportsmanship. This is where young talent meets the thrill of the game. Get ready to hoop it up and be a game-changer both on the court and in life. Let's ball!</p>
          <button className="sport-info-button btn-primary">
            Click Here To Discover More About Our Basketball Program
          </button>
        </div>
      </div>


        {/* Chess */}

      <div className="sports-description-pair">
        <div className="sports-card">
          <h1>Chess</h1>
          <p>Strategize and outthink your opponent.</p>
          <img src={Chess} alt="Basketball" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        <div className="sport-description-card">
          {/* Description for Basketball */}
          <p>Outwit, outplay, outlast with our Mastermind Chess Program. Challenge your mind and unleash strategic thinking as we dive into the world of chess. Our curriculum is crafted to foster critical thinking, patience, and foresight—key moves for success in chess and life. It's not just a game; it's a journey to intellectual triumph. Join us on the board where kings and queens are made. Make your move towards greatness today</p>
          <button className="sport-info-button btn-primary">
            Click Here To Discover More About Our Basketball Program
          </button>
        </div>
      </div>
    </div>
  );
};

export default PUSports;
