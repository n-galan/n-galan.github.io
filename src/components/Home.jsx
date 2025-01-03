import React, { useRef } from "react";
import Carousel from "./Carousel";
import InfoCard from "./InfoCard";
import InstagramEmbed from "./InstagramEmbed"; // Ensure this is the correct path to your component
import instagramPosts from "./InstagramPosts";
import "../styles/Home.css";

// Import all assets from the assets folder
import * as Images from "../assets/img";

const Home = () => {
  const cardsRef = useRef(null);

  const scrollToCards = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const missionStatement = (
    <div className="mission-container">
      <h2>Discover Project Unbound</h2>
      <p>
        Empowering New York’s Youth with Passion and Purpose! At Project Unbound,
        we go beyond teaching skills – we transform lives.
      </p>
      <p>
        Through our dynamic, year-round enrichment programs, we inspire
        creativity, teamwork, and resilience in New York’s youth. Our mission is
        to create a space where kids can move, learn, and grow through three
        incredible pathways:
      </p>
      <ul>
        <li>
        <span className="emoji">🏆</span><strong>Unbound Sports:</strong> From the discipline of boxing to
          the agility of soccer and the strategy of chess, our sports programs
          build physical strength and mental toughness, instilling valuable life
          skills every step of the way.
        </li>
        <li>
        <span className="emoji">⚙️</span><strong> Unbound STEM:</strong> For tomorrow’s innovators, our
          hands-on coding, engineering, and problem-solving activities make science
          and technology accessible, exciting, and fun.
        </li>
        <li>
        <span className="emoji">🎨</span><strong>Coming Soon – Unbound Arts:</strong> Unleash creativity
          through painting, performing, and other artistic expressions. We’re
          creating spaces for imagination and self-expression to thrive.
        </li>
      </ul>
      <p>
        What truly sets us apart? Every one of our programs is powered by{' '}
        <strong style={{ color: '#f39c12' }}>Social Emotional Learning (SEL)</strong>. We’re not just teaching
        skills – we’re helping kids understand themselves, manage their emotions,
        and work effectively in a team. By building confidence, empathy, and
        collaboration, we’re shaping the leaders of tomorrow.
      </p>
      <p className="call-to-action">
        Join the Project Unbound movement and help us ignite the next generation
        of trailblazers. Together, let’s fuel the future with passion, purpose,
        and a whole lot of fun!
      </p>
    </div>
  );

  const imageList = [
    { src: Images.Image4, alt: "Description 2" },
    { src: Images.Symbol, alt: "Description 1" },
    { src: Images.KidFootball, alt: "Description 4" },
    { src: Images.PlayingSoccer, alt: "Description 6" },
    { src: Images.KidsSoccer, alt: "Description 5" },
    { src: Images.girlbasketball, alt: "Description 7" },
    { src: Images.Cboxing, alt: "Description 8" },
    { src: Images.kidBoxing, alt: "Description 3" },
    { src: Images.CboxingTwo, alt: "Description 8" },
    { src: Images.AWS4, alt: "Description 9" },
    { src: Images.AWSgroup, alt: "Description 9" },
    { src: Images.AWS1, alt: "Description 10" },
    { src: Images.AWS3, alt: "Description 10" },
    { src: Images.AWS2, alt: "Description 11" },
    { src: Images.AWSus, alt: "Description 12" },
    { src: Images.AI1, alt: 'Description 13' },
    { src: Images.AI2, alt: 'Description 14' },
    { src: Images.AI3, alt: 'Description 15' },
  ];

  const cardData = [
    {
      mainTitle: "Unbound Sports",
      subTitle: "Empower & Transform!",
      description: (
        <img
          src={Images.PUBoxingImage}
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
          src={Images.Computer}
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
          src={Images.MusicPU}
          alt="Music"
          style={{ maxWidth: "80%", maxHeight: "100%" }}
        />
      ),
      navigateTo: "/music",
    },
  ];

  return (
    <div className="home-page">
      {/* <h1 className="centeredHeading">
        Discover Project Unbound: <br />
        Empowering New York’s Youth with Passion and Purpose!
      </h1> */}
      {missionStatement}
      <Carousel images={imageList} />
      <h2 className="offerHeading" onClick={scrollToCards}>
        What We Offer:
      </h2>
      <div className="arrowContainer" onClick={scrollToCards}>
        <span className="downArrow">&#8595;</span>
        <h2 className="programsHeading">Our Three Umbrellas</h2>
      </div>
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
