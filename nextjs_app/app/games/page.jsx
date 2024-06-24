"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import TempNavbar from '../components/TempNavbar';
import HeroSection from '../components/HeroSection';
import GamesCard from '../components/GamesCard';
import styles from '../styles/Games.module.css';



const Page = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const gamesInfo = [
    {
      title: "Runway",
      description: "Learn to balance your budget and your environmental impact",
      imageSrc: "/images/runway-logo.png",
      tags: ["Fast Fashion", "Budgeting", "Decision-Making"],
      linkRef: "/recycleme",
      buttonText: "Mini-Game"
    },
    {
      title: "RecycleMe",
      description: "Learn to recycle in a competitive “Overcooked” style game",
      imageSrc: "/images/recycleme-logo.png",
      tags: ["Recycling Literacy", "Materials Identification"],
      linkRef: "/recycleme",
      buttonText: "Mini-Game"
    },
    {
      title: "Supermarket Scramble",
      description: "Learn to budget, empathize and prioritize in a real-world scenario",
      imageSrc: "/images/supermarketscramble-logo.png",
      tags: ["Financial Literacy", "Social Inequality", "Budgeting"],
      linkRef: "/recycleme",
      buttonText: "Mini-Game"
    },
    {
      title: "Balance the Bistro",
      description: "Learn to balance your meals and the biases and issues that lead to food waste",
      imageSrc: "/images/balancethebistro-logo.png",
      tags: ["Food Waste", "Educated Judgement", "Contextual Clues"],
      linkRef: "/recycleme",
      buttonText: "Mini-Game"
    },
    // {
    //   title: "Environment & Sustainability World",
    //   description: "Learn how your everyday actions impact our world and learn sustainable living practices",
    //   imageSrc: "/images/placeholder.png",
    //   tags: ["Fast Fashion", "Recycling Literacy", "Food Waste"],
    //   linkRef: "/recycleme",
    //   buttonText: "Whole Module"
    // },
    // {
    //   title: "Social Inequality World",
    //   description: "Learn about social inequality through the lens of someone from a low income background",
    //   imageSrc: "/images/placeholder.png",
    //   tags: ["Decision-Making", "Opportunity Cost", "Conflict Resolution"],
    //   linkRef: "/recycleme",
    //   buttonText: "Whole Module"
    // }
  ];

  const itemsPerView = 3; // Number of cards visible at one time
  const itemWidth = 100 / itemsPerView;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === gamesInfo.length - itemsPerView ? prevIndex : prevIndex + 1
    );
  };

  return (
    <div>
      <TempNavbar />
      <HeroSection />
      {/* stakeholders section */}
      <div className={styles.container}>
        <h1>Explore Our Catalogue</h1>
        <div className={styles.carousel}>
          {currentIndex > 0 && (
            <img
              src="/images/green-left-arrow.png"
              alt="Previous"
              className={styles.carouselButtonLeft}
              onClick={handlePrevClick}
            />
          )}
          <div className={styles.carouselContent} style={{ transform: `translateX(-${currentIndex * itemWidth}%)` }}>
            {gamesInfo.map((game, index) => (
              <div className={styles.carouselItem} key={index}>
                <GamesCard
                  title={game.title}
                  description={game.description}
                  imageSrc={game.imageSrc}
                  tags={game.tags}
                  linkRef={game.linkRef}
                  buttonText={game.buttonText}
                />
              </div>
            ))}
          </div>
          {currentIndex < gamesInfo.length - itemsPerView && (
            <img
              src="../images/green-right-arrow.png"
              alt="Next"
              className={styles.carouselButtonRight}
              onClick={handleNextClick}
            />
          )}
        </div>
      </div>
      {/* tab toggle */}
      {/* fact boxes */}
      {/* end banner */}
    </div>
  );
};

export default Page;
