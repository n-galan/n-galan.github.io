import React from 'react';
import '../styles/PUSports.css';
import Soccer from '../img/Soccer.png';
import PUBoxingImage from '../img/PU Boxing.png';
import BBPU from '../img/BB PU.png';
import backImage from '../img/Boxing (1).png';

const PUSports = () => {
  const [isBoxingFlipped, setIsBoxingFlipped] = React.useState(false);

  const handleBoxingClick = () => {
    setIsBoxingFlipped(!isBoxingFlipped);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-start flex-wrap">

          {/* Boxing Card */}
          <div className="sports-card" onClick={handleBoxingClick}>
            <div className={`flip-card ${isBoxingFlipped ? 'flipped' : ''}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>Boxing</h1>
                  <p>Empower & Transform!</p>
                  <img src={PUBoxingImage} alt="Sport 1" style={{maxWidth: '100%', maxHeight: '100%'}} />
                </div>
                <div className="flip-card-back">
                  <img src={backImage} alt="Back of card" style={{maxWidth: '100%', maxHeight: '100%'}} />
                </div>
              </div>
            </div>
          </div>

          {/* Soccer Card */}
          <div className="sports-card">
            <img src={Soccer} alt="Sport 3" style={{maxWidth: '100%', maxHeight: '100%'}} />
            <h5>Soccer</h5>
            <p>Description for the third sport</p>
          </div>

          {/* Basketball Card */}
          <div className="sports-card">
            <img src={BBPU} alt="Sport 2" style={{maxWidth: '100%', maxHeight: '100%'}} />
            <h5>Basketball</h5>
            <p>Unlock your court dominance</p>
          </div>

        </div>

        {/* Right Column */}
        <div className="col-md-6">
          {/* Description Box */}
          <div className="description">
            <p>
              Empower through Movement! 🥊 At Project Unbound, we believe boxing is more than just punches and jabs—it's a journey to inner strength, discipline, and resilience. We've tailored our boxing program not just for physical fitness but as an essential tool for social and emotional learning. When students step into the ring, they're not only learning how to defend themselves but also discovering how to process emotions, face challenges head-on, and develop a growth mindset. By integrating boxing into schools and communities, we're championing a holistic approach to well-being, teaching individuals not just to fight but to thrive. Let's Unbound Potential together!
            </p>

            <button className="info-button btn-primary">
              Press Here To Learn More About Our Boxing Program
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PUSports;
