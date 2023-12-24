import React from 'react';
import '../styles/Music.css';
import music from '../img/Musix PU.png';
import { Link } from 'react-router-dom';
// import GuitarImage from '../img/Guitar.png';

const Music = () => {
  return (
    <div className="music-container mt-4">
      {/* Introductory Text */}
      <div className="music-intro">
        <h2>Welcome to Our Music Programs</h2>
        <p>Unlock the Rhythms of Well-being with Our Transformative Music Programs! 🎶

Embark on a harmonious quest where music isn’t just about melodies and chords—it’s a gateway to wellness and mental serenity. Our signature Piano Program is already resonating with students, providing a sanctuary of sound that soothes the mind and nurtures the soul.

Anticipate the arrival of our Guitar Program, where every string echoes the power of music to heal, inspire, and uplift. Experience the therapeutic vibrations that foster mental balance, enhance focus, and spark creativity within.

Embrace the cadence of a curriculum designed to resonate with inner peace and cognitive harmony. Click the buttons below and let each note guide you towards a symphony of mental well-being.

Join the movement of mindful musicianship. Let’s tune into tranquility and compose a future where education and mental health harmonize in perfect pitch! 🌟</p>
      </div>
        
      {/* Pair 1: Piano */}
      <div className="music-description-pair">
        <div className="music-card">
          <h1>Piano</h1>
          <p>Touch the keys, feel the music.</p>
          <img src={music} alt="Piano" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        <div className="music-description-card">
          {/* Description for Piano */}
          <p>Play, Learn, Thrive: Piano for Youth

Elevate your school's curriculum with our piano program! Tailored for young minds, our lessons do more than teach music—they build confidence, enhance academic skills, and offer a creative outlet for stress. Give your students the key to success and well-being. Let's make music together!</p>
          <Link to="/Piano" className="music-info-button">
            Click Here To Learn More About Our Piano (Keyboard) Program 
          </Link>
        </div>
      </div>

      {/* Pair 2: Guitar */}
      <div className="music-description-pair">
        <div className="music-card">
          <img src={music} alt="Guitar" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          <h1>Guitar</h1>
          <p>Strum your way to the rhythm.</p>
        </div>
        <div className="music-description-card">
          {/* Description for Guitar */}
          <p>Join our guitar program and master the chords...</p>
          <Link to="/Guitar" className="music-info-button">
            Click Here To Learn More About Our Guitar Program
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Music;
