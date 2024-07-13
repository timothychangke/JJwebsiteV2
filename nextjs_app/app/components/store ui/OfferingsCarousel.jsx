'use client';

import { useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from '@/components/ui/carousel';

import { Card, CardContent } from '@/components/ui/card';

const carouselItems = [
  { title: 'Offering 1' },
  { title: 'Offering 2' },
  { title: 'Offering 3' },
  { title: 'Offering 4' },
  { title: 'Offering 5' },
  { title: 'Offering 6' },
];

const OfferingsCarousel = () => {
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
    <>
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
    </>
  );
};

export default OfferingsCarousel;
