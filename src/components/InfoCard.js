import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // import useNavigate instead of useHistory
import '../styles/InfoCard.css';

const InfoCard = ({ mainTitle, subTitle, description, navigateTo }) => {
    // useNavigate is used in place of useHistory
    const navigate = useNavigate();

    const handleClick = () => {
        if (navigateTo) {
            navigate(navigateTo); // Navigate to the provided path
        }
    };

    return (
        <div className="card glowing-card" style={{ width: '350px', height: '350px', margin: '20px', position: 'relative' }}>
            <div className="card-body">
                <h4 className="card-main-title text-center">{mainTitle}</h4>
                <h5 className="card-sub-title text-center">{subTitle}</h5>
                <div className="card-description">{description}</div>
            </div>
            <div style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center' }}>
                {/* The Button onClick is now updated to use handleClick */}
                <Button variant="primary" onClick={handleClick}>Learn More</Button>
            </div>
        </div>
    );
};

export default InfoCard;
