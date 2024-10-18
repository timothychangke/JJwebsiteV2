'use client';
import Image from 'next/image';
import { useState } from 'react';
import Cart from "../components/store/Cart";
import { SideBarHeader, SideBarContent, Sidebar } from '../components/store/Sidebar';
import { Card, CardHeader } from '@/components/ui/card';

export default function Analytics() {
  const user = {
    name: "Harrison Chong",
    dpSrc: "User.png"
  };

  const [cart, setCart] = useState([]);

  return (
    <div className="flex bg-gradient-to-r from-light-violet to-extra-light-violet min-h-screen">
      {/* <StoreNavbar username={"User"}/> */}
      <div className='hidden lg:flex w-2/5 max-w-80 flex-col space-y-2 justify-between border-r border-black bg-extra-light-violet'>
        <SideBarHeader/>
        <SideBarContent />
      </div>
      
      <main className="w-full lg:w-4/5 pt-4 flex flex-col">
        {/* Analytics */}
        <section className="max-w-4xl px-8 py-4 flex justify-between">
          <div className='flex items-center'>
            <Sidebar />
            <h2 className='pl-5 lg:pl-0 text-3xl text-dark-green font-bold'>Analytics</h2>
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

        {/* Dashboard */}
        <section className="max-w-4xl px-8 py-4">
          <h2 className='text-3xl text-white pb-5'>Dashboard</h2>
          <Card className="flex space-x-5 bg-transparent border-0">
            <CardHeader className="bg-dark-green border-2 border-white text-white py-1 px-8">Session run : 14</CardHeader>
            <CardHeader className="bg-dark-green border-2 border-white text-white py-1 px-8">Session run : 14</CardHeader>
            <CardHeader className="bg-dark-green border-2 border-white text-white py-1 px-8">Session run : 14</CardHeader>
          </Card>
        </section>
      </main>
    </div>
  );
}
