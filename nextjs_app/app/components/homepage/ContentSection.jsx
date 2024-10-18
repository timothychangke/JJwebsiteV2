import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { homepage_content } from "@/public/data/homepage_content";
import { ResponsiveImage } from "../ResponsiveImage";

const ContentSection = () => {
    const info = homepage_content;
    const router = useRouter();
    return (
        <>
            <h2 className='text-3xl text-center text-white font-bold'>{info.title}</h2>
            <div className='md:flex md:space-x-4 space-y-4 md:space-y-0 mt-4 max-w-3xl mx-auto'>
                {info.content.map((item, index) => {
                    return (
                        <div key={index} className="md:w-1/2 lg:w-1/3 bg-beige border-dark-green border-[6px] rounded-lg flex flex-col items-center p-4">
                            <ResponsiveImage mobileSrc={`/images/Homepage/${item.imgSrc.mobile}`} desktopSrc={`/images/Homepage/${item.imgSrc.desktop}`} mobileSize={100} desktopSize={150} />
                            <div className='text-center px-3 pt-2'>
                                <h3 className='text-xl font-bold'>{item.heading}</h3>
                                <p className='text-black pt-2'>{item.description}</p>
                                <Button onClick={() => router.push(item.slug)} className='mt-4 mb-2 font-bold border-violet border-2 rounded-lg bg-transparent text-violet hover:border-dark-violet hover:text-dark-violet hover:bg-transparent uppercase'>Explore</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ContentSection;
