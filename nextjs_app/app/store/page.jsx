'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { games_info } from "@/public/data/games_info";
import { store_offerings } from "@/public/data/store_offerings";
import Sidebar from '../components/store/Sidebar';
import Cart from "../components/store/Cart";
import GameCard from "../components/homepage/GameCard";
import { Card, CardContent, CardDescription } from '@/components/ui/card';

export default function Store() {
  const user = {
    name: "Harrison Chong",
    dpSrc: "User.png"
  };
  const program = {
    name: "JJ High School CCE Week 5",
    // date: Date.now(),
    date: "02/04/25",
    students: 30,
    hours: 2,
  };

  const [cart, setCart] = useState([]);

  function addToCart(game) {
    const obj = {
      "name": game.title,
      "imgSrc": game.image,
      "connections": game.connections,
      "price": game.price,
    };
    let isInCart = false;
    cart.forEach((itemInCart) => {
      if (itemInCart.name === obj.name) isInCart = true;
    })
    if(!isInCart) setCart(cart => [...cart, obj]);
  }

  return (
    <div className="flex bg-gradient-to-r from-light-violet to-extra-light-violet min-h-screen">
      {/* <StoreNavbar username={"User"}/> */}
      <Sidebar />
      
      <main className="w-full lg:w-4/5 pt-4">
        {/* Store */}
        <section className="max-w-4xl mx-auto px-8 py-4 flex justify-between">
          <h2 className='pl-8 lg:pl-0 text-3xl text-dark-green font-bold'>Store</h2>
          <div className="flex max-w-80 space-x-5 items-center">
            <div className="flex items-center">
              <p className="font-bold text-sm text-dark-green text-right leading-tight">{user.name}</p>
            </div>
            <div className="rounded-full w-10 overflow-hidden flex items-center">
              <Image alt="User Icon" className='' src={`/images/Store/${user.dpSrc}`} width={80} height={80}></Image>
            </div>
            <Cart cart={cart} />
          </div>
        </section>

        {/* Create Your Program */}
        <section className="max-w-4xl mx-auto px-8 py-4">
          <h2 className='text-3xl text-white mb-5'>Create Your Program</h2>
          <div className="flex items-stretch space-x-10 bg-violet p-5 rounded-md border border-white">
            <Card className="flex flex-col w-full bg-transparent border-none shadow-none space-y-2">
              <CardContent className="flex justify-between w-full p-0">
                <CardDescription className="text-white">Name:</CardDescription>
                <CardDescription className="text-white font-bold">{user.name}</CardDescription>
              </CardContent>
              <CardContent className="flex justify-between w-full p-0">
                <CardDescription className="text-white">Program Name:</CardDescription>
                <CardDescription className="text-white font-bold">{program.name}</CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col w-full bg-transparent border-none shadow-none space-y-2">
              <CardContent className="flex justify-between w-full p-0">
                <CardDescription className="text-white">Date:</CardDescription>
                <CardDescription className="text-white font-bold">{program.date}</CardDescription>
              </CardContent>
              <CardContent className="flex justify-between w-full p-0">
                <CardDescription className="text-white">Number of Students:</CardDescription>
                <CardDescription className="text-white font-bold">{program.students}</CardDescription>
              </CardContent>
              <CardContent className="flex justify-between w-full p-0">
                <CardDescription className="text-white">Class Time (Hours):</CardDescription>
                <CardDescription className="text-white font-bold">{program.hours}</CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="flex w-full justify-center p-0 space-x-3 mt-5">
            <Button className="bg-dark-violet border border-white hover:border-white hover:bg-extra-dark-violet">Modify your Program</Button>
            <Button className="bg-dark-green border border-white hover:border-white hover:bg-extra-dark-green">Confirm your Order</Button>
          </div>
          {/* <Carousel className="w-full bg-gray-200 relative mt-6 mb-4">
            <CarouselContent className="space-x-3">
              {store_offerings.map((game, gindex) => {
                return (
                  <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 font-bold text-white text-center my-3 py-20 bg-gray-400" key={gindex}>{game}</CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-dark-green text-slate-100 hover:bg-extra-dark-green hover:text-slate-100 left-3" />
            <CarouselNext className="bg-dark-green text-slate-100 hover:bg-extra-dark-green hover:text-slate-100 right-3" />
          </Carousel> */}
        </section>

        {/* Our Offerings */}
        <section className="max-w-4xl mx-auto px-8 py-4">
          <h2 className='text-3xl text-white'>Our Offerings</h2>
          <div className='w-full flex items-start flex-wrap -mt-4'>
            {games_info[0].data.map((game, gindex) => {
              return (
                <div key={gindex} className="w-full sm:w-1/2 lg:w-1/3 lg:max-w-xs mb-4 pr-4 mt-10 flex flex-col space-y-8">
                  <GameCard
                    index={gindex}
                    image={game.image}
                    title={game.title}
                    description={game.description}
                    values={game.values}
                    button={game.button}>
                  </GameCard>
                  <div className='flex justify-center'>
                    <Button onClick={() => addToCart(game)} className='w-40 text-lg font-light text-center border-white border-2 rounded-lg bg-transparent text-white hover:border-white hover:text-white hover:bg-violet/20'><p>Add to Cart</p></Button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
