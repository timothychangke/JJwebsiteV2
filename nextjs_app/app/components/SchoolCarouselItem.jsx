import React from 'react';
import { CarouselItem } from "@/components/ui/carousel";

export const SchoolCarouselItem = (props) => {
    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className='h-48 bg-gray-500 border-dark-green border-t-4 border-x-4 rounded-t-lg'></div>
            <div className='bg-beige border-dark-green border-b-4 border-x-4 rounded-b-lg p-4'>
                <h3 className='text-lg font-bold'>{props.title}</h3>
                <p className='text-sm text-gray-500 italic'>
                    {props.description}
                </p>
                <p className='text-black mt-2'>
                    {props.otherinfo}
                </p>
            </div>
        </CarouselItem>
    )
}