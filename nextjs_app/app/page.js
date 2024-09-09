'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import HeroSection from "./components/homepage/HeroSection";
import EngagementSection from "./components/homepage/EngagementSection";
import CatalogueSection from "./components/homepage/CatalogueSection";
import ContentSection from './components/homepage/ContentSection';

export default function Home() {
  const router = useRouter();

  function createAccount(){
    router.push("/signup")
  }

  return (
    <main className="h-5/6 bg-slate-200 font-light">
      {/* Hero */}
      <section className='p-4 relative'>
        <HeroSection></HeroSection>
      </section>

      {/* Content that caters to everyone */}
      <section className='bg-gradient-to-b from-black to-[#306054] px-8 pt-24 relative z-30'>
        <Image alt="Jalan Journey logo" className='-mt-36 mx-auto mb-12' src={"/images/Homepage/Hero_Logo.png"} width={140} height={140}></Image>
        <Image alt="Left tree" className='w-2/6 absolute -top-16 md:-top-1/4 left-0' src={"/images/Homepage/Hero_LeftTree.png"} width={500} height={500}></Image>
        <Image alt="Right tree" className='w-2/6 absolute -top-16 md:-top-1/4 right-0' src={"/images/Homepage/Hero_RightTree.png"} width={500} height={500}></Image>
        
        <ContentSection />
      </section>

      {/* Explore Our Catalogue */}
      <section className='bg-gradient-to-b from-[#306054] via-[#a2c17c] to-black relative pb-12'>
        <div className="bg-cover bg-top h-48 absolute top-0 left-0 right-0"
            style={{ backgroundImage: `url(/images/Homepage/Catalogue_Top.png)` }}>
        </div>
        <Image alt="Left tree" className='absolute bottom-0 left-0' src={"/images/Homepage/Catalogue_LeftTree.png"} width={140} height={300}></Image>
        <Image alt="Right tree" className='absolute bottom-0 right-0' src={"/images/Homepage/Catalogue_RightTree.png"} width={140} height={300}></Image>
        
        <CatalogueSection />

        <div className="bg-repeat-x bg-bottom bg-contain h-16 absolute bottom-0 left-0 right-0 z-10"
            style={{ backgroundImage: `url(/images/Homepage/Engage_Grass.png)` }}>
          <Image alt="" className='mx-auto -mt-16' src={"/images/Homepage/Engage_Logo.png"} width={150} height={150}></Image>
        </div>
      </section>

      {/* Engage Participants */}
      <section className='w-full bg-brown pt-0 pb-48 relative'>
        <div className='absolute -top-10 w-full left-1/2 -translate-x-2/4 lg:w-3/4 max-w-6xl'>
          <Image alt="" className='w-full' src={"/images/Homepage/Engage_Top.png"} width={500} height={500}></Image>
          <Image alt="" className='w-full' src={"/images/Homepage/Engage_Middle.png"} width={500} height={500}></Image>
        </div>
        <Image alt="" className='absolute bottom-0 left-0 right-0 w-full' src={"/images/Homepage/Engage_Bottom.png"} width={1500} height={1500}></Image>
        <Image alt="" className='absolute bottom-0 right-1/4' src={"/images/Homepage/Engage_Flower.png"} width={140} height={300}></Image>
       
        <EngagementSection />
      </section>

      {/* Join us in inspiring the Change Makers of tomorrow */}
      <section className='w-full bg-stone pt-28 pb-40 relative'>
        <div className="bg-repeat bg-center bg-contain h-16 absolute top-0 left-0 right-0"
            style={{ backgroundImage: `url(/images/Homepage/JoinUs_Top.png)` }}>
        </div>
        <div className='max-w-3xl sm:flex m-auto relative z-20'>
          <div className='w-3/4 mx-auto sm:max-w-80 text-center sm:text-right mt-3'>
            <h5 className='text-4xl text-white mb-8 md:font-bold' style={{ textShadow: `3px 3px #1B6261` }}>Join us in<br/>inspiring the Change Makers<br/>of tomorrow.</h5>
            <Button className='text-3xl p-8 sm:py-0 sm:text-sm rounded-md bg-dark-green border-2 border-white text-white mb-10 sm:mb-0' onClick={() => createAccount()}>Create an account</Button>
          </div>
          <div className='flex flex-wrap text-white text-center justify-center sm:justify-end'>
            <div className='w-5/12 rounded-2xl border-2 border-white px-4 py-5 m-3'>
              <p className='text-4xl font-bold'>3500+</p>
              <p>Students</p>
            </div>
            <div className='w-5/12 rounded-2xl border-2 border-white px-4 py-5 m-3'>
              <p className='text-4xl font-bold'>35+</p>
              <p>Schools</p>
            </div>
            <div className='w-5/12 rounded-2xl border-2 border-white px-4 py-5 m-3'>
              <p className='text-4xl font-bold'>7+</p>
              <p>Charities</p>
            </div>
            <div className='w-5/12 rounded-2xl border-2 border-white px-4 py-5 m-3'>
              <p className='text-4xl font-bold'>4+</p>
              <p>Countries</p>
            </div>
          </div>
        </div>
        <Image alt="" className='absolute bottom-0 hidden sm:block right-3/4 2xl:right-auto 2xl:left-1/4' src={"/images/Homepage/JoinUs_Flower.png"} width={200} height={200}></Image>
      </section>
    </main>
  );
}
