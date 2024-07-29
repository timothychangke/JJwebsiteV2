'use client';
import { useState } from 'react';
import Image from 'next/image';
import Sidebar from '../components/store/Sidebar';
import { games_info } from "../../public/data/games_info.json";
import { store_offerings } from "../../public/data/store_offerings.json";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { GameItem } from "../components/homepage/Catalogue.jsx";
import { Button } from '@/components/ui/button';

export default function Store() {
  return (
    <div className="flex">
      {/* <StoreNavbar username={"User"}/> */}
      <Sidebar />
        
      <main className="w-2/3 lg:w-4/5 bg-gradient-to-r from-light-violet to-extra-light-violet pt-4">
        {/* Store */}
        <section className="px-8 py-4 flex justify-between">
          <h2 className='text-3xl text-dark-green font-bold'>Store</h2>
          <div className="flex max-w-80 space-x-2">
            <div className="flex items-center">
              <p className="font-bold text-sm text-dark-green text-right leading-tight">Harrison Chong</p>
            </div>
            <div className="rounded-full w-10 overflow-hidden flex items-center">
              <Image alt="User Icon" className='' src={"/images/Hero_Logo.png"} width={80} height={80}></Image>
            </div>
            <Image alt="Shopping Cart" className='' src={"/images/Hero_Logo.png"} width={100} height={80}></Image>
          </div>
        </section>

        {/* Featured Offerings */}
        <section className="px-8 py-4">
          <h2 className='text-3xl text-white'>Featured Offerings</h2>
          <Carousel className="w-full bg-gray-200 relative mt-6 mb-4">
            <CarouselContent className="space-x-3">
              {store_offerings.map((game, gindex) => {
                return (
                  <CarouselItem className="sm:basis-1/2 md:basis-1/3 font-bold text-white text-center my-3 py-20 bg-gray-400" key={gindex}>{game}</CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100 left-3" />
            <CarouselNext className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100 right-3" />
          </Carousel>
        </section>

        {/* Our Offerings */}
        <section className="px-8 py-4">
          <h2 className='text-3xl text-white'>Our Offerings</h2>
          <div className='w-full flex items-start flex-wrap -mt-4'>
            {games_info[0].data.map((game, gindex) => {
              return (
                <div key={gindex} className="w-1/3 mb-4 pr-4 mt-10 flex flex-col space-y-8">
                  <GameItem
                    index={gindex}
                    image={game.image}
                    title={game.title}
                    description={game.description}
                    values={game.values}
                    button={game.button}>
                  </GameItem>
                  <div className='flex justify-center'>
                    <Button className='w-40 text-lg font-light text-center border-white border-2 rounded-lg bg-transparent text-white hover:border-white hover:text-white hover:bg-transparent'><p>Add to Cart</p></Button>
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
