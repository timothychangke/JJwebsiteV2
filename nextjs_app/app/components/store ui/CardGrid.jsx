'use client';

import GameCard from "./GamesCard";

const CardGrid = () => {
    const cardData = [
      {
        title: 'Runway',
        subText: 'Learn to balance your budget and your environmental impact',
        categories: ['Fast Fashion', 'Budgeting', 'Decision-Making'],
        gameType: 'MINI-GAME',
        imgSrc: '/images/Group 1.png',
      },
      {
        title: 'Recycle Me',
        subText: 'Learn to recycle in a competitive “Overcooked” style game',
        categories: ['Recycling Literacy', 'Materials Identification'],
        gameType: 'MINI-GAME',
        imgSrc: '/images/Group 2.png',
      },
      {
        title: 'Supermarket Scramble',
        subText:
          'Learn to budget, empathise and prioritise in a real-world scenario',
        categories: ['Financial Literacy', 'Social Inequality', 'Budgeting'],
        gameType: 'MINI-GAME',
        imgSrc: '/images/Group 3.png',
      },
      {
        title: 'Environment and Sustainability World',
        subText:
          'Learn how your daily actions impact our world and explore sustainable living practices!',
        categories: ['Fast Fashion', 'Recycling Literacy', 'Food Waste'],
        gameType: 'MINI-GAME',
        imgSrc: '/images/Group 4.png',
      },
      {
        title: 'Social Inequality World',
        subText:
          'Learn about social inequality through the lens of someone from a low income background',
        categories: [
          'Decision-Making',
          'Opportunity Cost',
          'Conflict Resolution',
        ],
        gameType: 'MINI-GAME',
        imgSrc: '/images/Group 4.png',
      },
      {
        title: 'Balance The Bistro',
        subText:
          'Learn to be aware of the biases and issues that lead to food waste',
        categories: ['Food Waste', 'Educated Judgement', 'Contextual Clueing'],
        gameType: 'MINI-GAME',
        imgSrc: '/images/Group 4.png',
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-40 pt-4 pb-20 mt-0">
        {cardData.map((card, index) => (
          <GameCard key={index} {...card} />
        ))}
      </div>
    );
  };

  export default CardGrid