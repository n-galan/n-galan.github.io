import React, { useRef } from 'react';
import Carousel from './Carousel';
import Symbol from '../assets/img/PU.png';
import Image4 from '../assets/img/hands.jpg';
import '../styles/Home.css';
// import '../styles/InfoCards.css';
import InfoCard from './InfoCard';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import PUBoxingImage from '../assets/img/PU Boxing.png';
import PUChess from '../assets/img/Chess PU.png';
import BBPU from '../assets/img/BB PU.png';
import MusicPU from '../assets/img/Musix PU.png';
import Computer from '../assets/img/PU Computer.png';
import Soccer from '../assets/img/Soccer.png';






const Home = () => {
    const missionStatement = "Ignite Passion with Project Unbound: Empowering New York's Youth! Dive into the heart of New York City with Project Unbound, where we're revolutionizing education and empowerment for our youth. Through dynamic, year-round enrichment programs – from the discipline of Boxing and the agility of Soccer to the strategy of Chess and the innovation of Technology – we're unlocking unparalleled opportunities. At every corner of our city, in schools and community hubs, we're turning young enthusiasts into future trailblazers. Our mission? To offer transformative experiences that bolster both physical prowess and mental resilience. With Project Unbound, it's not just about nurturing talents; it's about shaping the tech-savvy leaders of tomorrow. Join the movement. Fuel the future. Be part of Project Unbound's transformative journey.";
    const programDescription = "At Project Unbound, we champion the holistic well-being of New York's youth and young adults, emphasizing both physical and mental vitality. Recognizing the undeniable synergy between body and mind, our tailor-made programs are meticulously crafted to bolster mental resilience and physical prowess. Dive into a transformative experience, where health isn't just a goal—it's a vibrant journey we embark upon together. Join us in reshaping the future of our city's young souls, one empowering session at a time.";

    const imageList = [
        { src: Symbol, alt: 'Description 1' },
        { src: Image4, alt: 'Description 4' }
    ];
    
    const cardData = [
        { mainTitle: "Boxing", subTitle: "Empower & Transform!", description: <img src={PUBoxingImage} alt="Boxing" style={{maxWidth: '100%', maxHeight: '100%'}} />, navigateTo: '/boxing' },
        { mainTitle: "BasketBall", subTitle: "Unlock your court dominance", description: <img src={BBPU} alt="BasketBall" style={{maxWidth: '110%', maxHeight: '100%'}} />, navigateTo: '/basketball' },
        { mainTitle: "Soccer", subTitle: "Mastering Soccer One Kick at a Time!", description: <img src={Soccer} alt="Soccer" style={{maxWidth: '100%', maxHeight: '100%'}} />, navigateTo: '/soccer' },
        { mainTitle: "Chess", subTitle: "Strategize and outthink your opponent.", description: <img src={PUChess} alt="Chess" style={{maxWidth: '75%', maxHeight: '90%'}} />, navigateTo: '/chess'  },
        { mainTitle: "STEM", subTitle: "Craft Solutions, Typing One Line at a Time!",description: <img src={Computer} alt="Coding" style={{maxWidth: '80%', maxHeight: '100%'}} />, navigateTo: '/coding' },
        { mainTitle: "ARTS", subTitle: "Dive into the world of arts, where music and creativity come alive!🎨🎶", description: <img src={MusicPU} alt="Music" style={{maxWidth: '80%', maxHeight: '100%'}} />, navigateTo: '/music' }
    ];
    
    
    

    const cardsRef = useRef(null);

    const scrollToCards = () => {
        if (cardsRef.current) {
            cardsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='home-page'>
            <h1 className="centeredHeading">Our Mission:</h1>
            <p className='missionStatement'>{missionStatement}</p>
            <Carousel images={imageList} />
            <h2 className="offerHeading" onClick={scrollToCards}>What We Offer:</h2>
            <div className="arrowContainer" onClick={scrollToCards}>
                <span className="downArrow">&#8595;</span>
                <h2 className="programsHeading">Our Programs</h2>
            </div>
            <p className="programDescription">{programDescription}</p>
            <div className="card-container" ref={cardsRef} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {cardData.map((card, index) => (
                    <InfoCard 
                        key={index} 
                        mainTitle={card.mainTitle} 
                        subTitle={card.subTitle} 
                        description={card.description}
                        navigateTo={card.navigateTo} // Pass the navigateTo prop to InfoCard
                    />
                ))}
            </div>
        </div>
    );
};


export default Home;