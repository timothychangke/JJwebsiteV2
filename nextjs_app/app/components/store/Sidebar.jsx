'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetOverlay,
} from '@/components/ui/sheet';

const SideBarContent = () => {
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
  ];

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
    },
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between">
      <div className="">
        {navData.map((item, index) => {
          return (
            <Link
              href={item.route}
              className="flex items-center space-x-2 w-full px-7 py-1 mt-1 hover:bg-light-violet"
              key={index}
            >
              <Image
                src={`/images/Store/${item.iconSrc}`}
                alt={item.title + 'icon'}
                className=""
                width={25}
                height={25}
              />
              <p className="text-sm">{item.title}</p>
            </Link>
          );
        })}
      </div>
      <div className="pb-8">
        {navFooterData.map((item, index) => {
          return (
            <Link
              href={item.route}
              className="flex items-center space-x-2 w-full px-7 py-1 mt-1 hover:bg-light-violet"
              key={index}
            >
              <Image
                src={`/images/Store/${item.iconSrc}`}
                alt={item.title + 'icon'}
                className=""
                width={25}
                height={25}
              />
              <p className="text-sm">{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const SideBarHeader = () => {
  return (
    <a href="/">
      <div className="flex space-x-2 items-center p-6 pb-2">
        <Image
          src="/images/Homepage/Hero_Logo.png"
          alt="Company Logo"
          className=""
          width={50}
          height={50}
        />
        <p className="text-violet font-bold text-lg">Jalan Journey</p>
      </div>
    </a>
  );
};

function Sidebar() {
  return (
    <Sheet>
      <SheetOverlay className="lg:hidden" />
      <SheetTrigger className="lg:hidden hover:bg-transparent flex items-center">
        <div className="flex flex-col items-center space-y-2">
          <span className="h-0.5 rounded-lg w-8 bg-black"></span>
          <span className="h-0.5 rounded-lg w-8 bg-black"></span>
          <span className="h-0.5 rounded-lg w-8 bg-black"></span>
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="lg:hidden gap-3 p-0 h-full flex flex-col border-r border-black bg-extra-light-violet"
      >
        <SheetHeader>
          <SideBarHeader />
        </SheetHeader>
        <SideBarContent />
      </SheetContent>
    </Sheet>
  );
}

export { SideBarHeader, SideBarContent, Sidebar };
