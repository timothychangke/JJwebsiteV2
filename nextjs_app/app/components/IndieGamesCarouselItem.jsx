import React from 'react';
import { CarouselItem } from "@/components/ui/carousel";

export const IndieGamesCarouselItem = (props) => {
    return (
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className='bg-beige border-dark-green border-4 rounded-lg p-4'>
                <div className='h-16 w-32 bg-gray-500 mx-auto'></div>
                <div className='text-center mt-3'>
                    <h3 className='text-xl font-bold'>{props.top[0]}</h3>
                    <p className='text-black'>
                        {props.top[1]}
                    </p>
                    <div className='w-3/4 h-px bg-slate-400 mx-auto my-4'></div>
                    <p className='text-black text-sm font-bold'>
                        {props.top[2]}
                    </p>
                    <p className='text-black text-sm font-bold'>
                        {props.top[3]}
                    </p>
                    <p className='text-black text-sm font-bold'>
                        {props.top[4]}
                    </p>
                </div>
            </div>
            <div className='mt-4 bg-beige border-dark-green border-4 rounded-lg p-4'>
                <div className='h-16 w-32 bg-gray-500 mx-auto'></div>
                <div className='text-center mt-3'>
                    <h3 className='text-xl font-bold'>{props.bottom[0]}</h3>
                    <p className='text-black'>
                        {props.bottom[1]}
                    </p>
                    <div className='w-3/4 h-px bg-slate-400 mx-auto my-4'></div>
                    <p className='text-black text-sm font-bold'>
                        {props.bottom[2]}
                    </p>
                    <p className='text-black text-sm font-bold'>
                        {props.bottom[3]}
                    </p>
                    <p className='text-black text-sm font-bold'>
                        {props.bottom[4]}
                    </p>
                </div>
            </div>
        </CarouselItem>
    )
}