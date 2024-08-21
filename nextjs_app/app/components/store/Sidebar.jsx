'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const navData = [
    {
      title: 'Store',
      route: 'store',
      iconSrc: 'Store.png',
    },
    {
      title: 'Programmes',
      route: 'programmes',
      iconSrc: 'Programmes.png',
    },
    {
      title: 'Analytics',
      route: 'analytics',
      iconSrc: 'Analytics.png',
    },
    {
      title: 'My Purchases',
      route: 'mypurchases',
      iconSrc: 'Purchases.png',
    },
    {
      title: 'Affiliate Link',
      route: 'affiliatelink',
      iconSrc: 'Affiliate.png',
    },
  ]

  const navFooterData = [
    {
      title: 'Tutorial',
      route: 'tutorial',
      iconSrc: 'Tutorial.png',
    },
    {
      title: 'Ask Us A Question',
      route: 'ask',
      iconSrc: 'Question.png',
    },
    {
      title: 'Settings',
      route: 'settings',
      iconSrc: 'Settings.png',
    },
    {
      title: 'Log Out',
      route: 'logout',
      iconSrc: 'Logout.png',
    }
  ]

  const [sidebar, setSidebar] = useState(false);

  function goTo() {

  }

  return (
    <section className="z-10 fixed left-0 top-0 bottom-0 lg:static w-full xs:w-2/3 sm:w-2/5 md:w-1/3 lg:w-1/5">
      <div className={sidebar ? 'relative w-px lg:w-full lg:h-full' : 'relative w-full h-full'}>
        <Button variant='ghost' onClick={() => setSidebar(!sidebar)} className='lg:hidden hover:bg-transparent flex flex-col items-center space-y-2 absolute left-full top-7'>
          {sidebar ? (
            <>
              <span className='h-px w-8 bg-black'></span>
              <span className='h-px w-8 bg-black'></span>
              <span className='h-px w-8 bg-black'></span>
            </>
          ) : (
            <>
              <span className='h-px w-10 bg-black rotate-45 translate-y-1 -translate-x-1'></span>
              <span className='h-px w-10 bg-black -rotate-45 -translate-y-1 -translate-x-1'></span>
            </>
          )}
        </Button>
        <div className={(sidebar ? "hidden lg:flex lg:h-full lg:w-full" : "h-full w-full flex") + " flex-col justify-between border-r border-black bg-extra-light-violet"}>
          <div>
            <div className="flex space-x-2 items-center p-4">
              <Image src="/images/Homepage/Hero_Logo.png" alt="Company Logo" className="" width={50} height={50} />
              <p className="text-violet font-bold text-lg">Jalan Journey</p>
            </div>
            <div className="mt-6">
              {navData.map((item, index) => {
                return (
                  <Link href={item.route} className="flex items-center space-x-2 w-full px-4 py-1 mt-1 hover:bg-light-violet" key={index}>
                    <Image src={`/images/Store/${item.iconSrc}`} alt={item.title + "icon"} className="" width={25} height={25} />
                    <p className="text-sm">{item.title}</p>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="pb-8">
            {navFooterData.map((item, index) => {
              return (
                <Link href={item.route} className="flex items-center space-x-2 w-full px-4 py-1 mt-1 hover:bg-light-violet" key={index} onClick={goTo(item.route)}>
                  <Image src={`/images/Store/${item.iconSrc}`} alt={item.title + "icon"} className="" width={25} height={25} />
                  <p className="text-sm">{item.title}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
