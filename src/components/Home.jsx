import React, { useRef } from "react";
import Carousel from "./Carousel";
import InfoCard from "./InfoCard";
import InstagramEmbed from "./InstagramEmbed"; // Ensure this is the correct path to your component
import instagramPosts from "./InstagramPosts";
import "../styles/Home.css";


// Assets
import AI1 from "../assets/img/AI1.webp"
import AI2 from '../assets/img/AI2.webp'
import AI3 from '../assets/img/AI3.webp'
import Symbol from "../assets/img/PU.png";
import Image4 from "../assets/img/hands.png";
import kidboxing from "../assets/img/KidBoxing.png";
import KidFootball from "../assets/img/KidFootball.png";
import PlayingSoccer from "../assets/img/PlayingSoccer.png";
import KidsSoccer from "../assets/img/KidsSoccer.png";
import girlbasketball from "../assets/img/girlbasketball.png";
import Cboxing from "../assets/img/CBoxing.png";
import CboxingTwo from "../assets/img/CboxingTwo.png";
import AWSgroup from "../assets/img/AWSGroup.webp";
import AWS1 from "../assets/img/AWS1.webp";
import AWS2 from "../assets/img/AWS2.webp";
import AWS3 from "../assets/img/AWS3.webp";
import AWS4 from "../assets/img/AWS4.webp";
import AWSus from "../assets/img/AWSus.webp";
import PUBoxingImage from "../assets/img/PU Boxing.png";
import MusicPU from "../assets/img/Musix PU.png";
import Computer from "../assets/img/PU Computer.png";

const Home = () => {
  const cardsRef = useRef(null);

  const scrollToCards = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const missionStatement =
    "Ignite Passion with Project Unbound: Empowering New York's Youth! Dive into the heart of New York City with Project Unbound, where we're revolutionizing education and empowerment for our youth. Through dynamic, year-round enrichment programs – from the discipline of Boxing and the agility of Soccer to the strategy of Chess and the innovation of Technology – we're unlocking unparalleled opportunities. At every corner of our city, in schools and community hubs, we're turning young enthusiasts into future trailblazers. Our mission? To offer transformative experiences that bolster both physical prowess and mental resilience. With Project Unbound, it's not just about nurturing talents; it's about shaping the tech-savvy leaders of tomorrow. Join the movement. Fuel the future. Be part of Project Unbound's transformative journey.";

  const programDescription =
    "At Project Unbound, we champion the holistic well-being of New York's youth and young adults, emphasizing both physical and mental vitality. Recognizing the undeniable synergy between body and mind, our tailor-made programs are meticulously crafted to bolster mental resilience and physical prowess. Dive into a transformative experience, where health isn't just a goal—it's a vibrant journey we embark upon together. Join us in reshaping the future of our city's young souls, one empowering session at a time.";

  const imageList = [
    { src: Image4, alt: "Description 2" },
    { src: Symbol, alt: "Description 1" },
    { src: KidFootball, alt: "Description 4" },
    { src: PlayingSoccer, alt: "Description 6" },
    { src: KidsSoccer, alt: "Description 5" },
    { src: girlbasketball, alt: "Description 7" },
    { src: Cboxing, alt: "Description 8" },
    { src: kidboxing, alt: "Description 3" },
    { src: CboxingTwo, alt: "Description 8" },
    { src: AWS4, alt: "Description 9" },
    { src: AWSgroup, alt: "Description 9" },
    { src: AWS1, alt: "Description 10" },
    { src: AWS3, alt: "Description 10" },
    { src: AWS2, alt: "Description 11" },
    { src: AWSus, alt: "Description 12" },
    {src: AI1, alt: 'Description 13'},
    {src: AI2, alt: 'Description 14'},
    {src: AI3, alt: 'Description 15'},
  ];

  const cardData = [
    {
      mainTitle: "Unbound Sports",
      subTitle: "Empower & Transform!",
      description: (
        <img
          src={PUBoxingImage}
          alt="Boxing"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      ),
      navigateTo: "/sports",
    },
    {
      mainTitle: "Unbound STEM",
      subTitle: "Craft Solutions, Typing One Line at a Time!",
      description: (
        <img
          src={Computer}
          alt="Coding"
          style={{ maxWidth: "80%", maxHeight: "100%" }}
        />
      ),
      navigateTo: "/tech",
    },
    {
      mainTitle: "Unbound ARTS",
      subTitle:
        "Dive into the world of arts, where music and creativity come alive!🎨🎶",
      description: (
        <img
          src={MusicPU}
          alt="Music"
          style={{ maxWidth: "80%", maxHeight: "100%" }}
        />
      ),
      navigateTo: "/music",
    },
  ];

  return (
    <div className="home-page">
      <h1 className="centeredHeading">Our Mission:</h1>
      <p className="missionStatement">{missionStatement}</p>
      <Carousel images={imageList} />
      <h2 className="offerHeading" onClick={scrollToCards}>
        What We Offer:
      </h2>
      <div className="arrowContainer" onClick={scrollToCards}>
        <span className="downArrow">&#8595;</span>
        <h2 className="programsHeading">Our Three Umbrellas</h2>
      </div>
      <p className="programDescription">{programDescription}</p>
      <div
        className="card-container"
        ref={cardsRef}
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {cardData.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
      <h2 className="instagram-section-heading">Check out our Instagram!</h2>
      <div className="instagram-feed">
        {instagramPosts.map((post) => (
          <InstagramEmbed key={post.id} embedHtml={post.html} />
        ))}
      </div>
    </div>
  );
};

export default Home;
