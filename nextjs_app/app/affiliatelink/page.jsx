'use client';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Cart from "../components/store/Cart";
import { SideBarHeader, SideBarContent, Sidebar } from '../components/store/Sidebar';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AffiliateLink = () => {
  const user = {
    name: "Harrison Chong",
    dpSrc: "User.png"
  };

  const [cart, setCart] = useState([]);

  const referralCode = "XYZNWDHWDP";
  const totalEarnings = 100.00;

  function copyToClipboard() {
    try {
      navigator.clipboard.writeText(referralCode);
      toast.success('Copied to clipboard!');
    }
    catch(error) {
      toast.error('Failed to copy.');
    }
  }

  function shareReferral() {
    try {
      if (navigator.share) {
        navigator.share({
          title: 'Jalan Journey',
          text: "\nSignup using my referral code to redeem a $10 coupon!\n\nReferral Code: \"" + referralCode + "\"",
          url: 'https://jalanjourney.com/'
        }).then(() => {
          toast.success('Successfully shared!');
        }).catch(err => {
          toast.error('Failed to share.');
          console.log(err);
        });
      } else {
          // Alerts user if API not available 
          toast.error("Browser doesn't support this feature.");
      }
    }
    catch(error) {
      toast.error('Failed to share.');
    }
  }

  return (
    <div className="flex bg-gradient-to-r from-light-violet to-extra-light-violet min-h-screen">
      {/* <StoreNavbar username={"User"}/> */}
      <div className='hidden lg:flex w-2/5 max-w-80 flex-col space-y-2 justify-between border-r border-black bg-extra-light-violet'>
        <SideBarHeader/>
        <SideBarContent />
      </div>
      
      <main className='flex flex-col w-full'>
        <section className="w-full lg:w-4/5 pt-4 flex flex-col">
          {/* Analytics */}
          <section className="max-w-4xl px-8 py-4 flex justify-between">
            <div className='flex items-center'>
              <Sidebar />
              <h2 className='pl-5 lg:pl-0 text-3xl text-dark-green font-bold'>Affiliate Link</h2>
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

          {/* Referrals Programme */}
          <section className="max-w-4xl px-8 py-4">
            <h2 className='text-3xl text-white pb-4'>Referrals Programme</h2>
            <p className='text-sm text-white'>Refer Jalan Journey to another user and redeem a $10 coupon for every X paid referrals.</p>
          </section>

          {/* Referral Number */}
          <section className="max-w-4xl px-8 py-4">
            <h2 className='text-xl text-white pb-4'>Your Referral Number</h2>
            <div className='border-2 border-white rounded-md hover:bg-extra-light-violet/40 px-5 py-2 flex justify-between items-center'>
              <p className='text-md text-white font-bold'>{referralCode}</p>
              <div className='flex space-x-4'>
                <button className='flex space-x-1 items-center cursor-pointer' onClick={() => {copyToClipboard()}}>
                  <Image alt="Copy Icon" src={`/images/AffiliateLink/Copy.png`} width={20} height={20}></Image>
                  <span className='text-xs text-white'>Copy</span>
                </button>
                <button className='flex space-x-1 items-center cursor-pointer'  onClick={() => {shareReferral()}}>
                  <Image alt="Share Icon" src={`/images/AffiliateLink/Copy.png`} width={20} height={20}></Image>
                  <span className='text-xs text-white'>Share</span>
                </button>
              </div>
            </div>
          </section>
        </section>

        <section className="pt-4 flex flex-col">
          {/* Current Referral Earnings */}
          <section className="w-full py-4">
            <h2 className='text-xl text-white pb-4 w-full lg:w-4/5 max-w-4xl px-8'>Current Referral Earnings</h2>
            <div className='bg-violet px-5 py-4'>
              <p className='text-xl text-white w-full lg:w-4/5 max-w-4xl text-center font-bold '>${(Math.round((totalEarnings + Number.EPSILON) * 100) / 100).toFixed(2)}</p>
            </div>
          </section>
        </section>

        <section className="w-full lg:w-4/5 pt-4 flex flex-col">
          {/* Instructions */}
          <section className="max-w-4xl px-8 py-4 mb-6">
            <h2 className='text-xl text-white pb-4'>Instructions</h2>
            <div className='flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-2 sm:flex-nowrap'>
              <Card className="flex space-x-5 bg-transparent border-0 w-full sm:w-1/3">
                <CardHeader className="text-white pt-5 pb-6 px-5 border-2 rounded-md border-white bg-dark-violet/20 justify-start space-y-0 w-full">
                  <CardTitle className="text-md font-bold pb-1">Step 1</CardTitle>
                  <CardDescription className="text-white">Share link or referral number.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex space-x-5 bg-transparent border-0 w-full sm:w-1/3">
                <CardHeader className="text-white pt-5 pb-6 px-5 border-2 rounded-md border-white bg-dark-violet/20 justify-start space-y-0 w-full">
                  <CardTitle className="text-md font-bold pb-1">Step 2</CardTitle>
                  <CardDescription className="text-white">Have your referral sign up complete a paid action.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex space-x-5 bg-transparent border-0 w-full sm:w-1/3">
                <CardHeader className="text-white pt-5 pb-6 px-5 border-2 rounded-md border-white bg-dark-violet/20 justify-start space-y-0 w-full">
                  <CardTitle className="text-md font-bold pb-1">Step 3</CardTitle>
                  <CardDescription className="text-white">Obtain X amount of money.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default AffiliateLink;
