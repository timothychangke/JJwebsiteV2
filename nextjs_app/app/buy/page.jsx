'use client';
import CardGrid from "../components/store ui/CardGrid";
import OfferingsCarousel from "../components/store ui/OfferingsCarousel";

const StorePage = () => {
  
  return (
    <div
      className="min-h-screen bg-gradient-diagonal-purple"
      style={{
        backgroundImage: 'linear-gradient(-45deg, #ead6f3, #b770d6, #ead6f3)',
      }}
    >
      <OfferingsCarousel />
      <CardGrid />
    </div>
  );
};

export default StorePage;
