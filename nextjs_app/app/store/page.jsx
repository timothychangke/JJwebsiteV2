'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { games_info } from "@/public/data/games_info";
import { SideBarHeader, SideBarContent, Sidebar } from '../components/store/Sidebar';
import GameCard from "../components/homepage/GameCard";
import Cart from "../components/store/Cart";

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
  const [cartOpen, setCartOpen] = useState(false);

  function addToCart(game) {
    const obj = {
      "name": game.title,
      "imgSrc": game.imgSrc,
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
      <div className='hidden lg:flex w-2/5 max-w-80 flex-col space-y-2 justify-between border-r border-black bg-extra-light-violet'>
        <SideBarHeader/>
        <SideBarContent />
      </div>
      
      <main className="w-full lg:w-4/5 pt-4 flex flex-col">
        {/* Store */}
        <section className="max-w-4xl px-8 py-4 flex justify-between">
          <div className='flex items-center'>
            <Sidebar />
            <h2 className='pl-5 lg:pl-0 text-3xl text-dark-green font-bold'>Store</h2>
          </div>
          <div className="flex max-w-80 space-x-5 items-center">
            <div className="flex items-center">
              <p className="font-bold text-sm text-dark-green text-right leading-tight">{user.name}</p>
            </div>
            <div className="rounded-full w-10 overflow-hidden flex items-center">
              <Image alt="User Icon" className='' src={`/images/Store/${user.dpSrc}`} width={80} height={80}></Image>
            </div>
            <Cart cart={cart} setCart={setCart} cartOpen={cartOpen} setCartOpen={setCartOpen} />
          </div>
        </section>

        {/* Create Your Program */}
        <section className="max-w-4xl px-8 py-4">
          <h2 className='text-3xl text-white mb-5'>Create Your Program</h2>
          <div className="space-y-2 sm:space-y-0 sm:flex sm:space-x-10 items-stretch bg-violet p-5 rounded-md border border-white">
            <Card className="flex flex-col w-full bg-transparent border-0 shadow-none space-y-2">
              <CardContent className="flex justify-between w-full p-0">
                <CardDescription className="text-white">Name:</CardDescription>
                <CardDescription className="text-white font-bold text-right">{user.name}</CardDescription>
              </CardContent>
              <CardContent className="flex justify-between w-full p-0">
                <CardDescription className="text-white">Program Name:</CardDescription>
                <CardDescription className="text-white font-bold text-right">{program.name}</CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col w-full bg-transparent border-0 shadow-none space-y-2">
              <CardContent className="flex justify-between w-full p-0">
                <CardDescription className="text-white">Date:</CardDescription>
                <CardDescription className="text-white font-bold text-right">{program.date}</CardDescription>
              </CardContent>
              <CardContent className="flex justify-between w-full p-0">
                <CardDescription className="text-white">Number of Students:</CardDescription>
                <CardDescription className="text-white font-bold text-right">{program.students}</CardDescription>
              </CardContent>
              <CardContent className="flex justify-between w-full p-0">
                <CardDescription className="text-white">Class Time (Hours):</CardDescription>
                <CardDescription className="text-white font-bold text-right">{program.hours}</CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="flex w-full justify-center p-0 space-x-3 mt-5">
            <Button className="bg-dark-violet border border-white hover:border-white hover:bg-extra-dark-violet">Modify your Program</Button>
            <Button onClick={() => setCartOpen(true)} className="bg-dark-green border border-white hover:border-white hover:bg-extra-dark-green">Confirm your Order</Button>
          </div>
        </section>

        {/* Our Offerings */}
        <section className="max-w-4xl px-8 py-4">
          <h2 className='text-3xl text-white'>Our Offerings</h2>
          <div className='w-full flex items-start flex-wrap -mt-2 mb-8'>
            {games_info.map((game, gindex) => {
              return (
                <div key={gindex} className="w-full sm:w-1/2 lg:w-1/3 lg:max-w-xs pr-4 mt-8 flex flex-col space-y-7">
                  <GameCard
                    index={gindex}
                    imgSrc={game.imgSrc}
                    title={game.title}
                    description={game.description}
                    values={game.values}
                    dialog={true}
                    cart={cart}
                    setCart={setCart}
                    cartOpen={cartOpen}
                    setCartOpen={setCartOpen}>
                  </GameCard>
                  <div className='flex justify-center'>
                    <Button onClick={() => addToCart(game)} className='w-30 text-lg font-light text-center border-white border-2 rounded-lg bg-transparent text-white hover:border-white hover:text-white hover:bg-violet/20'>Add to Cart</Button>
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
