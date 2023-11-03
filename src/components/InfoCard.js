import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/InfoCard.css';


const InfoCard = ({ mainTitle, subTitle, description }) => {
    return (
        <div className="card glowing-card" style={{ width: '350px', height: '350px', margin: '20px', position: 'relative' }}>
            <div className="card-body">
                <h4 className="card-main-title text-center">{mainTitle}</h4> {/* Bigger heading for main title */}
                <h5 className="card-sub-title text-center">{subTitle}</h5> {/* Subtitle below main title */}
                <div className="card-description">{description}</div>
            </div>
            <div style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center' }}>
                <Button variant="primary">Learn More</Button>
            </div>
        </div>
    );
};

export default InfoCard;