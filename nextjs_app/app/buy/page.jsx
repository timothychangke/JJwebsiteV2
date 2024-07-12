'use client';

import { useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GameCard = ({ title, subText, categories, gameType, imgSrc }) => (
    <Card className="bg-amber-50 px-12 pt-12 shadow-xl border-green-800 border-2 flex flex-col h-full relative pb-12 h-128">
    <CardHeader className="text-center">
      <img
        src={imgSrc}
        alt="mini-games image"
        className="mx-auto w-24 h-24 rounded-full"
      />
      <CardTitle className="mx-auto h-12">{title}</CardTitle>
      <p className="text-md text-gray-500 mx-auto px-3 py-8 ">{subText}</p>
    </CardHeader>
    <CardContent className="flex-grow">
      <div>
        {categories.map((category, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-0 text-sm font-semibold text-gray-700 mr-2 mb-2 transition-transform duration-300 hover:scale-110"
          >
            {category}
          </span>
        ))}
      </div>
    </CardContent>
    <div
      className="absolute bottom-0 left-0 right-0 border border-green-800 rounded p-2 bg-green-200 text-center border-2 h-20 flex items-center justify-center mx-12 mb-4 transform translate-y-1/2"
    >
      <span className="text-black font-semibold text-xl">{gameType}</span>
    </div>
  </Card>
);

const TwoRowCardGrid = () => {
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

const carouselItems = [
  { title: 'Offering 1' },
  { title: 'Offering 2' },
  { title: 'Offering 3' },
  { title: 'Offering 4' },
  { title: 'Offering 5' },
  { title: 'Offering 6' },
];

const StorePage = () => {
  const carouselNextRef = useRef(null);
  const carouselPrevRef = useRef(null);
  const handleTriggerNext = () => {
    if (carouselNextRef.current) {
      carouselNextRef.current.click();
    }
  };
  const handleTriggerPrev = () => {
    if (carouselPrevRef.current) {
      carouselPrevRef.current.click();
    }
  };
  return (
    <div
      className="min-h-screen bg-gradient-diagonal-purple"
      style={{
        backgroundImage: 'linear-gradient(-45deg, #ead6f3, #b770d6, #ead6f3)',
      }}
    >
      <div className=" p-8">
        <h2 className="text-6xl font-bold text-green-900">Store</h2>
        <p className="text-3xl mt-2 font-semibold max-w-md text-white">
          Featured Offerings
        </p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full mt-5 bg-green-100 relative h-64"
      >
        <CarouselContent className="h-64 p-3">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className=" basis-1/3 h-full">
              <div className="h-full">
                <Card className="h-full">
                  <CardContent className="flex aspect-auto items-end justify-start p-6 h-full bg-slate-400">
                    <span className="text-2xl font-semibold text-white">
                      {item.title}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          ref={carouselPrevRef}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent border-none hover:bg-transparent"
        ></CarouselPrevious>
        <CarouselNext
          ref={carouselNextRef}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none hover:bg-transparent"
        ></CarouselNext>
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent border-none"
          onClick={handleTriggerPrev}
        >
          <img
            src="/images/vector.png"
            alt="Previous"
            className="w-6 h-6 rotate-180"
          />
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none"
          onClick={handleTriggerNext}
        >
          <img src="/images/vector.png" alt="Next" className="w-6 h-6" />
        </button>
      </Carousel>
      <div className=" p-8">
        <p className="text-3xl mt-8 mb-0 font-semibold max-w-md text-white">
          Our Offerings
        </p>
      </div>
      <TwoRowCardGrid />
    </div>
  );
};

export default StorePage;
