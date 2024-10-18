'use client';
import Image from 'next/image';
import { useState } from 'react';
import Cart from "../components/store/Cart";
import { SideBarHeader, SideBarContent, Sidebar } from '../components/store/Sidebar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { games_info } from "@/public/data/games_info";

export default function MyPurchases() {
  const user = {
    name: "Harrison Chong",
    dpSrc: "User.png"
  };
  const purchases = [
    {
      gameId: 0,
      connections: 30,
    },
    {
      gameId: 1,
      connections: 130,
    },
    {
      gameId: 2,
      connections: 15,
    },
    {
      gameId: 3,
      connections: 93,
    }
  ];

  const [cart, setCart] = useState([]);

  return (
    <div className="flex bg-gradient-to-r from-light-violet to-extra-light-violet min-h-screen">
      {/* <StoreNavbar username={"User"}/> */}
      <div className='hidden lg:flex w-2/5 max-w-80 flex-col space-y-2 justify-between border-r border-black bg-extra-light-violet'>
        <SideBarHeader/>
        <SideBarContent />
      </div>
      
      <main className="w-full lg:w-4/5 pt-4 flex flex-col">
        {/* My Purchases */}
        <section className="max-w-4xl px-8 py-4 flex justify-between">
          <div className='flex items-center'>
            <Sidebar />
            <h2 className='pl-5 lg:pl-0 text-3xl text-dark-green font-bold'>My Purchases</h2>
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

        {/* Table */}
        <section className="max-w-4xl px-8 py-4 flex justify-between">
          <div className='border border-violet rounded-md w-full'>
            <Table>
              <TableHeader className="bg-violet">
                <TableRow className="border-none">
                  <TableHead className="text-white">
                    S/N
                  </TableHead>
                  <TableHead className="text-white">
                    Game Name
                  </TableHead>
                  <TableHead className="text-white text-center">
                    Connections Left
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-extra-light-violet">
                {purchases.map((item, index) => {
                  return (
                    <TableRow key={index} className="border-stone font-semibold">
                      <TableCell className="py-2 items-center">
                        {(index>8 ? index+1 : "0"+(index+1))}
                      </TableCell>
                      <TableCell className="flex items-center space-x-2 py-2">
                        {games_info[item.gameId].imgSrc && (
                          <div className="bg-white rounded-md p-1">
                            <Image src={`/images/Games/${games_info[item.gameId].imgSrc}`} alt={games_info[item.gameId].title + " icon"} width={25} height={25} />
                          </div>
                        )}
                        <span>{games_info[item.gameId].title}</span>
                      </TableCell>
                      <TableCell className="py-2 items-center text-center">
                        {item.connections}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </section>
      </main>
    </div>
  );
}
