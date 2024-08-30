'use client';
import Image from 'next/image';
import { useState } from 'react';
import { SideBarHeader, SideBarContent, Sidebar } from '../components/store/Sidebar';
import Cart from "../components/store/Cart";
import AddSession from "../components/store/AddSession";
import { CardDescription } from '@/components/ui/card';

export default function Programmes() {
  const user = {
    name: "Harrison Chong",
    dpSrc: "User.png"
  };

  const [cart, setCart] = useState([]);

  return (
    <div className="flex bg-gradient-to-r from-light-violet to-extra-light-violet min-h-screen items-stretch">
      {/* <StoreNavbar username={"User"}/> */}
      <div className='hidden lg:flex w-2/5 max-w-80 flex-col space-y-2 justify-between border-r border-black bg-extra-light-violet'>
        <SideBarHeader/>
        <SideBarContent />
      </div>
      
      <main className="w-full lg:w-4/5 pt-4 flex flex-col">
        {/* Programmes */}
        <section className="max-w-4xl px-8 py-4 flex justify-between">
          <div className='flex'>
            <Sidebar />
            <h2 className='pl-8 lg:pl-0 text-3xl text-dark-green font-bold'>Programmes</h2>
          </div>
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

        {/* My Sessions */}
        <section className="max-w-4xl px-8 py-4 flex justify-between">
          <h2 className='text-3xl text-white'>My Sessions</h2>
          <AddSession></AddSession>
        </section>

        <section className="max-w-4xl px-8 pb-4 grow flex flex-col">
          <CardDescription className='mb-5 text-dark-grey font-semibold'>Upcoming :</CardDescription>
          
          {
            <div className='w-full grow flex justify-center items-center text-center'>
              <p className="max-w-56 text-white -mt-10">You do not have any upcoming sessions</p>
            </div>
          }
        </section>
      </main>
    </div>
  );
}
