'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { games_info } from "@/public/data/games_info";
import { DialogDescription } from '@radix-ui/react-dialog';
import { ResponsiveImage } from '../ResponsiveImage';
import { FormLabel } from '@/components/ui/form';
import { storeItemsSchema } from '@/schema';

export const GamePopup = (props) => {
  let { index, cart, setCart, cartOpen, setCartOpen } = props;
  const game = games_info[index];

  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(storeItemsSchema),
    defaultValues: {
      numOfStudents: 30,
      numOfConnections: 10,
      hours: 2,
    },
  });

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

  function buyNow(game) {
    addToCart(game);
    setOpen(false);
    setCartOpen(true);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className='text-center text-sm py-1.5 px-6 font-bold border-dark-green border-2 rounded-lg bg-light-green text-dark-green hover:border-dark-green hover:text-dark-green hover:bg-normal-green uppercase'>
        Explore
      </DialogTrigger>

      <DialogContent className="bg-dull-violet border-0 text-white max-w-4xl px-9 pb-9 max-h-screen overflow-y-auto">
        <DialogHeader className="mt-3">
          <DialogTitle className="text-2xl">{game.title}</DialogTitle>
        </DialogHeader>

        <section className='flex gap-8 pb-4'>
          <section className='w-3/5'>
            <div className='flex gap-4 justify-between pb-9'>
              <div>
                <DialogDescription className="text-base pb-5">{game.description}</DialogDescription>
                <DialogDescription className="text-sm font-semibold">Learning Outcomes</DialogDescription>
                <ul className='list-disc ml-4'>
                  {game.values.map((value, index) => {
                    return <li key={index} className="text-base leading-snug">{value}</li>
                  })}
                </ul>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='rounded-2xl border-2 border-dark-green w-[6.5rem] h-[6.5rem] bg-white flex items-center justify-center'>
                  {game.imgSrc && <ResponsiveImage alt={`${game.title} icon`} mobileSrc={`/images/Games/${game.imgSrc}`} desktopSrc={`/images/Games/${game.imgSrc}`} mobileSize={80} desktopSize={80}></ResponsiveImage>}
                </div>
                <Button onClick={() => router.push("games/"+game.link)} className='text-sm font-bold border-dark-green border-2 rounded-lg bg-light-green text-dark-green hover:border-dark-green hover:text-dark-green hover:bg-normal-green uppercase'>{game.button}</Button>
              </div>
            </div>

            <div className='flex gap-2 justify-between'>
              <div className='w-2/5 flex flex-col gap-4'>
                <div className='flex gap-3 items-center'>
                  <Image alt="Learning Time Icon" className='' src="/images/Store/LearningTime.png" width={30} height={30}></Image>
                  <div>
                    <DialogDescription className="text-xs">Learning Time</DialogDescription>
                    <DialogDescription className="text-sm font-semibold">{game.learningTime}</DialogDescription>
                  </div>
                </div>
                <div className='flex gap-3 items-center'>
                  <Image alt="Game Mode Icon" className='' src="/images/Store/GameMode.png" width={30} height={30}></Image>
                  <div>
                    <DialogDescription className="text-xs">Game Mode</DialogDescription>
                    <DialogDescription className="text-sm font-semibold">{game.gameMode}</DialogDescription>
                  </div>
                </div>
                <div className='flex gap-3 items-center'>
                  <Image alt="Age Range Icon" className='' src="/images/Store/AgeRange.png" width={30} height={30}></Image>
                  <div>
                    <DialogDescription className="text-xs">Age Range</DialogDescription>
                    <DialogDescription className="text-sm font-semibold">{game.ageRange}</DialogDescription>
                  </div>
                </div>
              </div>
              <div className='w-3/5 grid grid-cols-2 gap-4'>
                <div className=''>
                  <DialogDescription className="text-xs">Authored By</DialogDescription>
                  <ul className="">
                    {game.authors?.map((value, index) => {
                      return <li key={index} className="text-sm font-semibold leading-tight">{value}</li>
                    })}
                  </ul>
                </div>
                <div className=''>
                  <DialogDescription className="text-xs">Created By</DialogDescription>
                  <ul className="">
                    {game.creator?.map((value, index) => {
                      return <li key={index} className="text-sm font-semibold leading-tight">{value}</li>
                    })}
                  </ul>
                </div>
                <div className=''>
                  <DialogDescription className="text-xs">Advised By</DialogDescription>
                  <ul className="">
                    {game.advisors?.map((value, index) => {
                      return <li key={index} className="text-sm font-semibold leading-tight">{value}</li>
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className='w-2/5'>
            {game.videoSrc &&
              <div className='w-full flex justify-center items-center mb-4'>
                <video width="100%" controls >
                  <source src={`/videos/${game.videoSrc}`} type="video/mp4"/>
                </video>
              </div>
            }
            <div className='border-2 border-white rounded-lg px-4 pt-3 pb-2.5'>
              <Form {...form}>
                <form
                  className="gap-2 w-full justify-center flex flex-col">
                    <FormField
                      control={form.control}
                      name="numOfStudents"
                      render={({ field }) => (
                        <FormItem className="flex gap-5 items-center justify-between space-y-0">
                          <FormLabel className="text-sm">Number of Students</FormLabel>
                          <FormControl>
                            <Input {...field} type="number" className="w-20 text-black py-0.5 px-2 m-0 h-auto" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="numOfConnections"
                      render={({ field }) => (
                        <FormItem className="flex gap-5 items-center justify-between space-y-0">
                          <FormLabel className="text-sm">Number of Connections</FormLabel>
                          <FormControl>
                            <Input {...field} type="number" className="w-20 text-black py-0.5 px-2 m-0 h-auto" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="hours"
                      render={({ field }) => (
                        <FormItem className="flex gap-5 items-center justify-between space-y-0">
                          <FormLabel className="text-sm">Hours</FormLabel>
                          <FormControl>
                            <Input {...field} type="number" className="w-20 text-black py-0.5 px-2 m-0 h-auto" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className='flex justify-around mt-1'>
                      <Button onClick={() => addToCart(game)} type="button" className='font-bold rounded-lg bg-dull-violet border border-white hover:border-white hover:bg-white/5 uppercase'>Add to Cart</Button>
                      <Button onClick={() => buyNow(game)} type="button" className='font-bold rounded-lg bg-dark-green border border-white hover:border-white hover:bg-extra-dark-green uppercase'>Buy Now</Button>
                    </div>
                </form>
              </Form>
            </div>
          </section>
        </section>

        <section>
          <DialogDescription className="text-base">{game.bodyText}</DialogDescription>
        </section>
      </DialogContent>
    </Dialog>
  );
}
