

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
            className="inline-block bg-gray-200 rounded-full px-1 text-sm font-semibold text-gray-700 mr-2 mb-2 transition-transform duration-300 hover:scale-110"
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

export default GameCard