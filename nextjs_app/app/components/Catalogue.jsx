import React from 'react';
import { Button } from '@/components/ui/button';
import { CarouselNext, CarouselPrevious, CarouselItem } from "@/components/ui/carousel";
import { ResponsiveImage } from "./ResponsiveImage";

export const CatalogueTrigger = (props) => {
    return (
        <TabsTrigger value={props.value} className="block text-white font-light data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:font-bold">
            <p className='text-lg'>{props.title}</p>
            <div className='h-px bg-white mx-auto'></div>
        </TabsTrigger>
    )
}

export const CataloguePrevious = () => {
    return <CarouselPrevious className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100" />
}
export const CatalogueNext = () => {
    return <CarouselNext className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100" />
}

export const CatalogueItem = (props) => {
    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 mb-5" key={props.key}>
            <div className="relative bg-beige border-dark-green border-4 rounded-lg px-4 pt-4 pb-28 h-full flex flex-col items-center">
                {props.image ? (
                    <ResponsiveImage mobileSrc={props.image} desktopSrc={props.image} mobileSize={100} desktopSize={150}></ResponsiveImage>
                ) : (<></>)}
                <div className='text-center leading-snug flex flex-col justify-between h-full'>
                    <div className='grow justify-center items-center flex'>
                        <h3 className='text-3xl font-bold'>{props.title}</h3>
                    </div>
                    <p className='text-black mt-3'>{props.description}</p>
                    <div className='absolute left-0 -bottom-5 right-0'>
                        <div className='text-black mb-3 font-bold h-16 flex flex-col justify-center'>
                            {props.values.map((value) => {
                                return (<p>{value}</p>);
                            })}
                        </div>
                        <Button className='font-bold border-dark-green border-2 rounded-lg bg-light-green text-dark-green hover:border-dark-green hover:text-dark-green hover:bg-light-green uppercase'>{props.button}</Button>
                    </div>
                </div>
            </div>
        </CarouselItem>
    )
}