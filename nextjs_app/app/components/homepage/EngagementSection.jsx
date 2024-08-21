import React from 'react';
import Image from 'next/image';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { engagement_info } from "@/public/data/engagement_info";

const EngagementSection = () => {
    const info = engagement_info;

    function borderStyle(index) {
      let style = "";
      if(index == 0) style += "rounded-md md:rounded-r-none md:border-r-0 "
      else if(index == info.engagement.length-1) style += "rounded-md md:rounded-l-none "
      else style += "rounded-md md:rounded-l-none md:rounded-r-none md:border-r-0 "
      return style;
    }

    return (
      <>
        <Tabs defaultValue={info.engagement[0].slug} className="w-full flex items-center flex-col p-4 z-10 relative">
          <TabsList className="h-auto w-full lg:w-3/4 xl:w-[900px] flex flex-wrap items-center bg-transparent flex-col xs:flex-row">
            {info.engagement.map((item, index) => {
              return (
                <TabsTrigger key={index} value={item.slug} className={borderStyle(index) + "m-2 md:mx-0 block py-2 min-w-32 text-grey bg-transparent border-2 border-grey data-[state=active]:text-white data-[state=active]:border-white data-[state=active]:bg-violet data-[state=active]:shadow-none"}>
                  {item.title.map((text, index) => {
                    if(index > 0) {
                      return (
                        <>
                          <br/>{text}
                        </>
                      );
                    }
                    else return text;
                  })}
                </TabsTrigger>
              )
            })}
          </TabsList>

          {info.engagement.map((item, index) => {
            return (
              <TabsContent key={index} value={item.slug} className="w-full md:w-3/4 xl:w-[900px] mt-8">
                <div className='w-full bg-beige rounded-xl p-3 flex flex-col-reverse sm:flex-row sm:space-x-6 md:flex-col-reverse md:space-x-0 lg:flex-row lg:space-x-6'>
                  <div className='w-full sm:w-1/4 md:w-full lg:w-1/4 bg-cover bg-center rounded-xl h-52 sm:h-auto md:h-52 lg:h-auto' style={{ backgroundImage: `url(/images/Homepage/${item.imgSrc})` }}>
                  </div>
                  <div className='w-full sm:w-3/4 md:w-full lg:w-3/4 pt-3 pb-2 pl-2 pr-4 sm:pl-0 sm:pr-8 sm:pt-2 md:pl-4 md:pr-6 md:pt-4 lg:pl-0 lg:pr-8 lg:pt-2'>
                    <h5 className='text-xl md:text-2xl text-dark-green font-bold pb-1'>{item.heading}</h5>
                    <p className='text-justify'>{item.body}</p>
                  </div>
                </div>
              </TabsContent>
            )
          })}
        </Tabs>

        {/* Proven engagement */}
        <div className='w-full pt-8 pb-1 px-4 z-10 relative'>
          {info.proof.map((item, index) => {
            return (
              <div key={index} className='relative bg-[#8F8C79]/80 rounded-xl p-6 md:px-16 lg:px-32 text-center w-full sm:w-4/5 md:w-4/6 xl:w-[800px] mx-auto mb-8'>
                <h5 className='text-light-green font-bold text-3xl pb-4'>{item.heading}</h5>
                <p className='leading-snug'>{item.body}</p>
                {item.imgSrc.left && <Image alt="" className='absolute -bottom-2 -left-10 hidden md:block' src={`/images/Homepage/${item.imgSrc.left}`} width={100} height={100}></Image>}
                {item.imgSrc.right && <Image alt="" className='absolute top-full -right-2 -mt-6' src={`/images/Homepage/${item.imgSrc.right}`} width={100} height={100}></Image>}
              </div>
            )
          })}
        </div>
      </>
    )
}

export default EngagementSection;
