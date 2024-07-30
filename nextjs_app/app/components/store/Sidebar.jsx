'use client';
import Image from 'next/image';

export default function Sidebar() {
  const navData = [
    {
      title: 'Store',
      route: 'example',
      iconSrc: '/images/Group 1.png',
    },
    {
      title: 'Programmes',
      route: 'example',
      iconSrc: '/images/Group 1.png',
    },
    {
      title: 'Analytics',
      route: 'example',
      iconSrc: '/images/Group 1.png',
    },
    {
      title: 'My Purchases',
      route: 'example',
      iconSrc: '/images/Group 1.png',
    },
    {
      title: 'Affiliate Link',
      route: 'example',
      iconSrc: '/images/Group 1.png',
    },
  ]

  const navFooterData = [
    {
      title: 'Tutorial',
      route: 'example',
      iconSrc: '/images/Group 1.png',
    },
    {
      title: 'Ask Us A Question',
      route: 'example',
      iconSrc: '/images/Group 1.png',
    },
    {
      title: 'Settings',
      route: 'example',
      iconSrc: '/images/Group 1.png',
    },
    {
      title: 'Log Out',
      route: 'example',
      iconSrc: '/images/Group 1.png',
    },
    {
      title: 'Affiliate Link',
      route: 'example',
      iconSrc: '/images/Group 1.png',
    },
  ]

  return (
    <section className="w-1/3 lg:w-1/5 border-r border-black bg-extra-light-violet flex flex-col justify-between">
      <div>
        <div className="flex space-x-2 items-center p-4">
          <Image src="/images/Homepage/Hero_Logo.png" alt="Company Logo" className="" width={50} height={50} />
          <p className="text-violet font-bold text-lg">Jalan Journey</p>
        </div>
        <div className="mt-6">
          {navData.map((item, index) => {
            return (
              <button className="flex items-center space-x-2 w-full px-4 py-1 mt-1 hover:bg-light-violet" key={index}>
                <Image src={item.iconSrc} alt={item.title + "icon"} className="" width={25} height={25} />
                <p className="text-sm">{item.title}</p>
              </button>
            )
          })}
        </div>
      </div>
      <div className="pb-8">
        {navFooterData.map((item, index) => {
          return (
            <button className="flex items-center space-x-2 w-full px-4 py-1 mt-1 hover:bg-light-violet" key={index}>
              <Image src={item.iconSrc} alt={item.title + "icon"} className="" width={25} height={25} />
              <p className="text-sm">{item.title}</p>
            </button>
          )
        })}
      </div>
    </section>
  );
}
